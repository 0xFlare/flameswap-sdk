import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  ETHEREUM = 1,
  BINANCE_SMART_CHAIN = 2,
  HARMONY = 3
}

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  HARMONY_MAINNET = 1666600000,
  HARMONY_TESTNET = 1666700000
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000000',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000000',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.KOVAN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BSC_MAINNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.BSC_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.HARMONY_TESTNET]: '0xB396cfCdF104f97010C8c3Bb3FDb6fAe97dB68dB',
  [ChainId.HARMONY_MAINNET]: '0x0000000000000000000000000000000000000000'
}

export const INIT_CODE_HASH = '0xfc919184b165a2da7610a9b4a4ccbae0cb77ca796a496088613bc3dc471f7053'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
