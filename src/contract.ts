import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  BookingResold as BookingResoldEvent,
  EnrollmentLog as EnrollmentLogEvent,
  Initialized as InitializedEvent,
  InventoryItemCreated as InventoryItemCreatedEvent,
  MarketItemCreated as MarketItemCreatedEvent,
  MarketItemPayemt as MarketItemPayemtEvent,
  MetadataUpdate as MetadataUpdateEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PrimaryRevenueDistributed as PrimaryRevenueDistributedEvent,
  SecondaryRevenueDistributed as SecondaryRevenueDistributedEvent,
  Transfer as TransferEvent,
  Upgraded as UpgradedEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  BookingResold,
  EnrollmentLog,
  Initialized,
  InventoryItemCreated,
  MarketItemCreated,
  MarketItemPayemt,
  MetadataUpdate,
  OwnershipTransferred,
  PrimaryRevenueDistributed,
  SecondaryRevenueDistributed,
  Transfer,
  Upgraded
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBatchMetadataUpdate(
  event: BatchMetadataUpdateEvent
): void {
  let entity = new BatchMetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fromTokenId = event.params._fromTokenId
  entity._toTokenId = event.params._toTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBookingResold(event: BookingResoldEvent): void {
  let entity = new BookingResold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.owner = event.params.owner
  entity.bidding = event.params.bidding
  entity.splittable = event.params.splittable
  entity.startingPrice = event.params.startingPrice
  entity.sold = event.params.sold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnrollmentLog(event: EnrollmentLogEvent): void {
  let entity = new EnrollmentLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hotelId = event.params.hotelId
  entity.ownerWallet = event.params.ownerWallet
  entity.crudStatus = event.params.crudStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInventoryItemCreated(
  event: InventoryItemCreatedEvent
): void {
  let entity = new InventoryItemCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propertyId = event.params.propertyId
  entity.hotelId = event.params.hotelId
  entity.price = event.params.price
  entity.currency = event.params.currency
  entity.isOccupied = event.params.isOccupied
  entity.inventoryType = event.params.inventoryType
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketItemCreated(event: MarketItemCreatedEvent): void {
  let entity = new MarketItemCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.owner = event.params.owner
  entity.resell = event.params.resell
  entity._reservationDays = event.params._reservationDays
  entity._marketType = event.params._marketType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketItemPayemt(event: MarketItemPayemtEvent): void {
  let entity = new MarketItemPayemt(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.owner = event.params.owner
  entity.price = event.params.price
  entity.currency = event.params.currency

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetadataUpdate(event: MetadataUpdateEvent): void {
  let entity = new MetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrimaryRevenueDistributed(
  event: PrimaryRevenueDistributedEvent
): void {
  let entity = new PrimaryRevenueDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.platformFee = event.params.platformFee
  entity.hotelFee = event.params.hotelFee
  entity.totalPaid = event.params.totalPaid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSecondaryRevenueDistributed(
  event: SecondaryRevenueDistributedEvent
): void {
  let entity = new SecondaryRevenueDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformAddress = event.params.platformAddress
  entity.tokenId = event.params.tokenId
  entity.platformFee = event.params.platformFee
  entity.hotelFee = event.params.hotelFee
  entity.sellerFee = event.params.sellerFee
  entity.totalPaid = event.params.totalPaid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
