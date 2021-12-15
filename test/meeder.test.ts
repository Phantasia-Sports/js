import {Connection, clusterApiUrl, PublicKey, Transaction, Keypair} from "@solana/web3.js";
import {instantSale} from "../src/actions";

test('test', async () => {
  // const keypair = Keypair.fromSecretKey(Uint8Array.from([]));
  // const wallet = {
  //   publicKey: keypair.publicKey,
  //   signTransaction: (tx: Transaction): Promise<Transaction> => {
  //     tx.partialSign(keypair);
  //     return Promise.resolve(tx);
  //   },
  //   signAllTransactions: (txs: Transaction[]): Promise<Transaction[]> => {
  //     throw new Error('Not implemented!');
  //   },
  // };
  //
  // const connection = new Connection(clusterApiUrl("devnet"));
  // const auction = new PublicKey('ELSvbW8RePcND7CpJK1ka4xYHSy25KBzqKFxz4M2aZhY');
  // const store = new PublicKey('6FTWhvwQnXLpTEoEJ5meJhoQzUSpRrtrcRFrCNBatJci');
  // await instantSale({
  //   connection,
  //   wallet,
  //   store,
  //   auction,
  // });
});
