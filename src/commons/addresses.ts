/* eslint-disable prefer-const */
import { dataSource, log } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export function getFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xd34971bab6e5e356fd250715f5de0492bb070452'
  if (network == 'xdai') return '0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01'
  if (network == 'matic') return '0x0F10f5a1006F50eDeCd086cCD5704ade25709Ab2'
  if (network == 'avalanche') return '0x9A734E90D89f0c346E27c404D350Ff56DEAD55f1'
  if (network == 'fuse') return '0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01'
  if (network == 'bsc') return '0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01'
  if (network == 'iotex') return '0x71F83A462C6d2674c731C0a67a0A6Ddf6562DC2d'
  if (network == 'fantom') return '0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01'
  log.warning('no factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getNativeCurrencyWrapperAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  if (network == 'xdai') return '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d'
  if (network == 'matic') return '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
  if (network == 'avalanche') return '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
  if (network == 'fuse') return '0x0be9e53fd7edac9f859882afdda116645287c629'
  if (network == 'bsc') return '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  if (network == 'iotex') return '0xa00744882684c3e4747faefd68d283ea44099d03'
  if (network == 'fantom') return '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'
  log.warning('no native currency wrapper address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getLiquidityTrackingTokenAddresses(): string[] {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') {
    return [
      '0xa1d65e8fb6e87b60feccbc582f7f97804b725521', // DXD
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
      '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
      '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
      '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
      '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
      '0x0ae055097c6d159879521c384f1d2123d1f195e6', // STAKE
      '0xa117000000f279d81a1d3cc75430faa017fa5a2e', // ANT
      '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44', // PAN
      '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
      '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
      '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
      '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
      '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
      '0x960b236a07cf122663c4303350609a66a7b288c0', // ANTyar
      '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', // SNX
      '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', // YFI
      '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', // yCurv
      '0xd533a949740bb3306d119cc777fa900ba034cd52' // CRV
    ]
  }
  if (network == 'xdai') {
    return [
      '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', // WXDAI
      '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9', // HNY
      '0x3a97704a1b25f08aa230ae53b352e2e72ef52843', // AGVE
      '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83', // USDC on xDai
      '0x4ecaba5870353805a9f068101a40e0f32ed605c6', // Tether on xDai
      '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1', // Wrapped Ether on xDai
      '0x38fb649ad3d6ba1113be5f57b927053e97fc5bf7' // xCOMB
    ]
  }
  if (network == 'matic') {
    return [
      '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
      '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
      '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
      '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // WETH
      '0x5c4b7ccbf908e64f32e12c6650ec0c96d717f03f', // BNB
      '0xb85517b87bf64942adf3a0b9e4c71e4bc5caa4e5', // FTM
      '0x0000000000004946c0e9f43f4dee607b0ef1fa1c', // CHI
      '0x98d0274895a6187e095859d80b6a1248a7fefb98', // XMN
      '0x43308565c0204c8076a291f0726f914c3133ce34', // TET
      '0xcd9c7397b0ef2e9b2a9440d61b0e1e3351a38a28', // XLT
      '0xd422089785ada2762343b209b43bc48dd7ad4ae9', // CZR
      '0x0000000000004946c0e9f43f4dee607b0ef1fa1c', // CHI
      '0x99c73cf56cbbf02ddf035f43be6e90e29927c9B9', // bDAI
      '0x669999c2353358e0b84d523f3318acbc106d14e5', // bETH
      '0x6cc7f33259bfdc104554308dde856be206cc6ff4', // bBTC
      '0xb371248dd0f9e4061ccf8850e9223ca48aa7ca4b', // HNY
      '0x37d1ebc3af809b8fadb45dce7077efc629b2b5bb', // pCOMB
      '0x1e42edbe5376e717c1b22904c59e406426e8173f', // SURF
      '0x4de7fea447b837d7e77848a4b6c0662a64a84e14' // WAVE
    ]
  }
  if (network == 'avalanche') {
    return [
      '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // WAVAX
      '0xc7198437980c041c805a1edcba50c1ce5db95118', // USDT.e
      '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', // USDC.e
      '0xd586e7f844cea2f87f50152665bcbc2c279d8d70', // DAI.e
      '0x50b7545627a5162f82a992c33b87adc75187b218', // WBTC
      '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH.e
      '0xcf153fc756d062bc6c8f0712c4e8c348ca9be214' // XMN
    ]
  }
  if (network == 'fuse') {
    return [
      '0x0be9e53fd7edac9f859882afdda116645287c629', // WFUSE
      '0xfadbbf8ce7d5b7041bE672561bba99f79c532e10', // USDT
      '0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5', // USDC
      '0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba', // DAI
      '0x33284f95ccb7b948d9d352e1439561cf83d8d00d', // WBTC
      '0xa722c13135930332eb3d749b2f0906559d2c5b99', // WETH
      '0xcf153fc756d062bc6c8f0712c4e8c348ca9be214' // XMN
    ]
  }
  if (network == 'bsc') {
    return [
      '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // WBNB
      '0x55d398326f99059ff775485246999027b3197955', // USDT
      '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC
      '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // DAI
      '0x50b7545627a5162f82a992c33b87adc75187b218', // BTCB
      '0x2170ed0880ac9a755fd29b2688956bd959f933f8', // ETH
      '0x1ee241a736d2ca587b09333989ded271a3ebe213' // XMN
    ]
  }
  if (network == 'iotex') {
    return [
      '0xa00744882684c3e4747faefd68d283ea44099d03', // WIOTX
      '0x6fbcdc1169b5130c59e72e51ed68a84841c98cd1', // USDT
      '0x3b2bf2b523f54c4e454f08aa286d03115aff326c', // USDC
      '0x62a9d987cbf4c45a550deed5b57b200d7a319632', // DAI
      '0xc7b93720f73b037394ce00f954f849ed484a3dea', // WBTC
      '0x0258866edaf84d6081df17660357ab20a07d0c80', // WETH
      '0x5d9a3948a688aa40b5f2e1ab58b80872fff038a7' // XMN
    ]
  }
  if (network == 'fantom') {
    return [
      '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // WFTM
      '0x049d68029688eabf473097a2fc38ef61633a3c7a', // USDT
      '0x04068da6c83afcfa0e13ba15a6696662335d5b75', // USDC
      '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', // DAI
      '0x321162Cd933E2Be498Cd2267a90534A804051b11', // BTC
      '0x74b23882a30290451A17c44f4F05243b6b58C76d', // ETH
      '0xcf153fc756d062bc6c8f0712c4e8c348ca9be214', // XMN
      '0x2814541f73d718cb66636c755ff33dfbf63715c4', // TET
      '0x16d8adf3d5b93aa3a9ef2daa9521ced713838387', // XLT
      '0xa3d098f1d5035b9e259971a8f4c0dcf5a56c8762', // CZR
      '0x2a13935a9729e618c5af17dd639590860c87e207' // HYPERFANTOM
    ]
  }
  log.warning('no liquidity tracking token address for unsupported network {}', [network])
  return []
}

export function getUsdcNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0x98f29f527c8e0ecc67a3c2d5567833bee01f2a12'
  if (network == 'xdai') return '0x5d62095ca295812b8b5410431d207f0e69efed52'
  if (network == 'matic') return '0x287bc00455dd50dbe2188926f853835297387ab2'
  if (network == 'avalanche') return '0x918b9d221d74121aa8b2cf1d9a0f3f87d498361a'
  if (network == 'fuse') return '0xcaaa54ad5a544dbf2f6cc3242dbe0e1540c9bfbd'
  if (network == 'bsc') return '0xe368ff5b3e650dda04aa198f4631dc972ee284d7'
  if (network == 'iotex') return '0x8dec9d78426dd331d2a01a445a8f175348ed7e95'
  if (network == 'fantom') return '0x0d0be88f41c7a439ec597fc9f3c71f74e1d163cc'
  log.warning('no usdc native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getDaiNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0x7515be43d16f871588adc135d58a9c30a71eb34f'
  if (network == 'xdai') return '0x7855096ecea0830b3b7add55748f3a9dab5a8f13'
  if (network == 'matic') return '0x6bf612ef8aff217d5f13a830fe1b47999016a1f3'
  if (network == 'avalanche') return '0x776058f296b3328118d7e53b34a4865348aabbda'
  if (network == 'fuse') return '0xa2fe3958e53aae2a8483c9976c51b5144a4de870'
  if (network == 'bsc') return '0xd62a0c33c46d0876035c3df3ae18e628bff0bd04'
  if (network == 'iotex') return '0x03e09a715233bb3bf6962b17d409872a462fe35d'
  if (network == 'fantom') return '0x8e46391942baccfcbdeb40319591cced7e4f004d'
  log.warning('no dai native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getUsdtNativeCurrencyWrapperPair(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0x83dd8227c5ef121f2ae99c6f1df0aa9e914448ce'
  if (network == 'xdai') return '0x5fd2e5a4fb734c3dd72a123b4b976e7ebbd016ce'
  if (network == 'matic') return '0xe55e632972e77bd070bda29f1fd62e6ca84277dc'
  if (network == 'avalanche') return '0x1a82aecba8e740fb733743594da4c7ecebc27470'
  if (network == 'fuse') return '0x8a06fb8548b7211ca8ae4b14142570e4e0C9a3cf'
  if (network == 'bsc') return '0x8ec997c18d55a82945562a589d17fdbf114ba383'
  if (network == 'iotex') return '0xb9af9eed2959deea9b87ac28455bfb6fb0133329'
  if (network == 'fantom') return '0x20ed8734e903b8908ee1eb89d89d1c8076f457d7'
  log.warning('no usdt native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}
