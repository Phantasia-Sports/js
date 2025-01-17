## Checklist

- [x] Structure
  - [x] Builds and Deployments
  - [x] Connection, Account, Transaction, Errors
- [x] Programs (serialize/deserialize accounts, rpc transactions, simple actions)
  - [x] Metadata
    - [x] Accounts
      - [x] Metadata
      - [x] Master Edition
      - [x] Edition
      - [x] Edition Marker
    - [ ] Instructions
      - [x] CreateMetadataAccount
      - [x] UpdateMetadataAccount
      - [x] UpdatePrimarySaleHappenedViaToken
      - [x] SignMetadata
      - [x] CreateMasterEdition
      - [x] MintNewEditionFromMasterEditionViaToken
      - [ ] MintNewEditionFromMasterEditionViaVaultProxy
    - [ ] Actions
      - [X] Create
      - [X] Update
      - [X] Sign
      - [ ] Send
      - [X] Mint Master Edition
      - [X] Mint Limited Edition from Master
      - [ ] Burn
  - [ ] Metaplex
    - [ ] Accounts
      - [x] Bid Redemption Ticket
      - [x] Auction Manager (V2)
      - [ ] Safety Deposit Validation Ticket
      - [x] Payout Ticket
      - [ ] Token Tracker
      - [x] Prize Tracking Ticket
      - [ ] Auction Cache
      - [ ] Store Indexer
      - [x] Store
      - [x] Whitelisted Creator
      - [x] Safety Deposit Config
      - [ ] Original Authority Lookup
    - [ ] Instructions
      - [x] RedeemBid
      - [x] RedeemFullRightsTransferBid
      - [x] RedeemPrintingV2Bid
      - [x] StartAuction
      - [ ] EndAuction
      - [x] ClaimBid
      - [ ] EmptyPaymentAccount
      - [x] SetStore
      - [x] SetWhitelistedCreator
      - [ ] RedeemUnusedWinningConfigItemsAsAuctioneer
      - [ ] DecommissionAuctionManager
      - [ ] RedeemPrintingV2Bid
      - [ ] WithdrawMasterEdition
      - [x] InitAuctionManagerV2
      - [ ] ValidateSafetyDepositBoxV2
      - [ ] RedeemParticipationBidV3
      - [ ] SetStoreIndex
      - [ ] SetAuctionCache
    - [ ] Actions
  - [ ] Auction
    - [x] Accounts
      - [x] Auction
      - [x] Auction Extended
      - [x] Bidder Pot
      - [x] Bidder Meta
    - [ ] Instructions
      - [x] CancelBid
      - [x] CreateAuction
      - [x] CreateAuctionV2
      - [x] SetAuthority
      - [x] PlaceBid
    - [ ] Actions (no standalone actions)
      - [x] Cancel Bid
      - [x] Place Bid
      - [x] Redeem Full Rights Transfer Bid
      - [x] Redeem Printing V2 Bid
      - [x] Instant Sale
  - [ ] Vault
    - [ ] Accounts
      - [x] Safety Deposit Box
      - [x] Vault
      - [x] External Price
    - [x] Instructions
      - [x] InitVault
      - [x] AddTokenToInactiveVault
      - [x] ActivateVault
      - [x] CombineVault
      - [x] RedeemShares
      - [x] WithdrawTokenFromSafetyDepositBox
      - [x] MintFractionalShares
      - [x] WithdrawSharesFromTreasury
      - [x] AddSharesToTreasury
      - [x] UpdateExternalPriceAccount
      - [x] SetAuthority
    - [ ] Actions
      - [x] CreateVault
      - [x] CloseVault
      - [x] CreateExternalPriceAccount
      - [ ] AddTokensToVault
      - [ ] SetVaultAndAuctionAuthorities
      - [ ] UnwindVault
  - [ ] Candy Machine
    - [ ] [Accounts](https://github.com/metaplex-foundation/metaplex-program-library/issues/28)
      - [ ] Candy Machine
    - [ ] [Instructions](https://github.com/metaplex-foundation/metaplex-program-library/issues/28)
      - [ ] Mint
      - [ ] Update
      - [ ] Initialize
      - [ ] Initialize Config
      - [ ] Add Config Lines
    - [ ] [Actions](https://github.com/metaplex-foundation/js/issues/110)
  - [ ] Fair Launch
    - [ ] Accounts
      - [ ] Fair Launch
      - [ ] Ticket
      - [ ] Ticket Seq Lookup
      - [ ] Lottery Bitmap
    - [ ] Instructions
      - [ ] Initialize
      - [ ] Update
      - [ ] Create Lottery Bitmap
      - [ ] Update Lottery Bitmap
      - [ ] Start Phase Three
      - [ ] Restart Phase Two
      - [ ] Purchase Ticket
      - [ ] Adjust Ticket
      - [ ] Punch Ticket
      - [ ] Create Ticket Seq
      - [ ] Withdraw Funds
      - [ ] Receive Refund
      - [ ] Set Token Metadata
      - [ ] Set Participation NFT
      - [ ] Update Participation NFT
      - [ ] Mint Participation NFT
      - [ ] Mint Tokens
    - [ ] Actions
  - [ ] Packs TBD
  - [ ] Airdrop TBD
  - [ ] Fusion TBD
- [ ] Providers
  - [ ] CoinGecko
  - [ ] Arweave
- [ ] Global (common use cases)
  - [ ] Actions
