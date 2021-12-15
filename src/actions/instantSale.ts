import { PublicKey, TransactionSignature } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
import { Auction, AuctionExtended } from '@metaplex-foundation/mpl-auction';
import {
  AuctionManager,
} from '@metaplex-foundation/mpl-metaplex';
import { placeBid } from './placeBid';
import { Vault } from '@metaplex-foundation/mpl-token-vault';
import { redeemPrintingV2Bid } from './redeemPrintingV2Bid';

interface IInstantSaleParams {
  connection: Connection;
  wallet: Wallet;
  auction: PublicKey;
  store: PublicKey;
}

interface IInstantSaleResponse {
  txIds: TransactionSignature[];
}

export async function hasAlreadyBid({
  connection,
  wallet,
  auction,
}: {
  connection: Connection,
  wallet: Wallet,
  auction: PublicKey,
}): Promise<boolean> {
  let auctionAccount = await getAuctionAccount(connection, auction);
  let bidderPot = await getBidderPotToken(connection, auctionAccount, wallet.publicKey);
  return !!bidderPot;
}

export async function hasAlreadyRedeemed({
  connection,
  wallet,
  auction,
}: {
  connection: Connection,
  wallet: Wallet,
  auction: PublicKey,
}): Promise<boolean> {
  return false;
}

export const instantSale = async ({
  connection,
  wallet,
  store,
  auction,
}: IInstantSaleParams): Promise<IInstantSaleResponse> => {
  const txIds = [];
  const auctionManagerPDA = await AuctionManager.getPDA(auction);
  const manager = await AuctionManager.load(connection, auctionManagerPDA);
  const vault = await Vault.load(connection, manager.data.vault);
  const auctionExtendedPDA = await AuctionExtended.getPDA(vault.pubkey);
  const {
    data: { instantSalePrice },
  } = await AuctionExtended.load(connection, auctionExtendedPDA);
  let auctionAccount = await getAuctionAccount(connection, auction);
  let bidderPot = await getBidderPotToken(connection, auctionAccount, wallet.publicKey);

  if (!bidderPot) {
    const { txId: placeBidTxId } = await placeBid({
      connection,
      wallet,
      amount: instantSalePrice,
      auction,
    });
    txIds.push(placeBidTxId);

    await connection.confirmTransaction(placeBidTxId, 'finalized');
  }

  const { txId } = await redeemPrintingV2Bid({ connection, wallet, store, auction });
  txIds.push(txId);

  return { txIds: txIds };
};

function getAuctionAccount(connection: Connection, auctionId: PublicKey): Promise<Auction> {
  return Auction.load(connection, auctionId);
}

async function getBidderPotToken(connection: Connection, auction: Auction, bidder: PublicKey): Promise<PublicKey> {
  const bidderPots = await auction.getBidderPots(connection);
  const bidderData = bidderPots.find(pot => pot.data.bidderAct === bidder.toString());
  if (!bidderData) return null;
  const bidderPotToken = bidderData.data.bidderPot;
  if (!bidderPotToken) return null;
  return new PublicKey(bidderPotToken);
}
