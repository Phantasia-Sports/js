import { Keypair, SendOptions } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
import { Transaction } from '@metaplex-foundation/mpl-core';

interface ISendTransactionParams {
  connection: Connection;
  wallet: Wallet;
  txs: Transaction[];
  signers?: Keypair[];
  options?: SendOptions;
}

export const sendTransaction = async ({
  connection,
  wallet,
  txs,
  signers = [],
  options,
}: ISendTransactionParams): Promise<string> => {
  let tx = Transaction.fromCombined(txs, { feePayer: wallet.publicKey });
  tx.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

  if (signers.length) {
    tx.partialSign(...signers);
  }
  tx = await wallet.signTransaction(tx);

  const MAX_RETRIES = 2;
  for (let i = 0; i <= 2; i++) {
    try {
      return await connection.sendRawTransaction(tx.serialize(), options);
    } catch (err) {
      if (i === MAX_RETRIES) {
        throw new Error('Max Retries Hit');
      }
      console.error(err);
    }
  }
};
