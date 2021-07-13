import * as CryptoJS from "crypto-js"

class Block {
  public index: number
  public data: string
  public hash: string
  public previousHash: string
  public timestamp: number

  static calculateHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index
    this.hash = hash
    this.previousHash = previousHash
    this.data = data
    this.timestamp = timestamp
  }
}

const genesis: Block = new Block(0, "2020202", "", "hello", 123456)
let blockchain: [Block] = [genesis]

const getBlockchain = (): Block[] => blockchain
const getLatestBlock = (): Block => blockchain[blockchain.length - 1]
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock()
  const newIndex: number = previousBlock.index + 1
  const newTimeStamp: number = getNewTimeStamp()
  const newHash: string = Block.calculateHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  )
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStamp
  )
  return newBlock
}

console.log(blockchain)
