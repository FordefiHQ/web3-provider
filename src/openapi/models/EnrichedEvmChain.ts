/* tslint:disable */
/* eslint-disable */
/**
 * Fordefi API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockchainExplorer } from './BlockchainExplorer';
import {
    BlockchainExplorerFromJSON,
    BlockchainExplorerFromJSONTyped,
    BlockchainExplorerToJSON,
} from './BlockchainExplorer';
import type { ChainSource } from './ChainSource';
import {
    ChainSourceFromJSON,
    ChainSourceFromJSONTyped,
    ChainSourceToJSON,
} from './ChainSource';
import type { EvmChainName } from './EvmChainName';
import {
    EvmChainNameFromJSON,
    EvmChainNameFromJSONTyped,
    EvmChainNameToJSON,
} from './EvmChainName';
import type { GasType } from './GasType';
import {
    GasTypeFromJSON,
    GasTypeFromJSONTyped,
    GasTypeToJSON,
} from './GasType';

/**
 * 
 * @export
 * @interface EnrichedEvmChain
 */
export interface EnrichedEvmChain {
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmChain
     */
    chainType: EnrichedEvmChainChainTypeEnum;
    /**
     * 
     * @type {EvmChainName}
     * @memberof EnrichedEvmChain
     */
    namedChainId?: EvmChainName;
    /**
     * 
     * @type {number}
     * @memberof EnrichedEvmChain
     */
    chainId: number;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmChain
     */
    uniqueId: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmChain
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmChain
     */
    nativeCurrencySymbol: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmChain
     */
    nativeCurrencyName: string;
    /**
     * 
     * @type {BlockchainExplorer}
     * @memberof EnrichedEvmChain
     */
    blockchainExplorer?: BlockchainExplorer;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmChain
     */
    logoUrl: string;
    /**
     * 
     * @type {GasType}
     * @memberof EnrichedEvmChain
     */
    gasType: GasType;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedEvmChain
     */
    supportsSecureNode?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmChain
     */
    rpcUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedEvmChain
     */
    isTestnet: boolean;
    /**
     * 
     * @type {ChainSource}
     * @memberof EnrichedEvmChain
     */
    source: ChainSource;
}


/**
 * @export
 */
export const EnrichedEvmChainChainTypeEnum = {
    evm: 'evm'
} as const;
export type EnrichedEvmChainChainTypeEnum = typeof EnrichedEvmChainChainTypeEnum[keyof typeof EnrichedEvmChainChainTypeEnum];

/**
 * @export
 */
export const EnrichedEvmChainChainIdEnum = {
    NUMBER_1: 1,
    NUMBER_5: 5,
    NUMBER_10: 10,
    NUMBER_16: 16,
    NUMBER_56: 56,
    NUMBER_100: 100,
    NUMBER_137: 137,
    NUMBER_169: 169,
    NUMBER_250: 250,
    NUMBER_324: 324,
    NUMBER_1030: 1030,
    NUMBER_1100: 1100,
    NUMBER_1101: 1101,
    NUMBER_1329: 1329,
    NUMBER_1729: 1729,
    NUMBER_2222: 2222,
    NUMBER_4200: 4200,
    NUMBER_5000: 5000,
    NUMBER_7000: 7000,
    NUMBER_7700: 7700,
    NUMBER_8453: 8453,
    NUMBER_17000: 17000,
    NUMBER_80001: 80001,
    NUMBER_42161: 42161,
    NUMBER_43114: 43114,
    NUMBER_59144: 59144,
    NUMBER_81457: 81457,
    NUMBER_421614: 421614,
    NUMBER_534352: 534352,
    NUMBER_660279: 660279,
    NUMBER_810180: 810180,
    NUMBER_11155111: 11155111
} as const;
export type EnrichedEvmChainChainIdEnum = typeof EnrichedEvmChainChainIdEnum[keyof typeof EnrichedEvmChainChainIdEnum];

/**
 * @export
 */
export const EnrichedEvmChainUniqueIdEnum = {
    _1: 'evm_1',
    _5: 'evm_5',
    _10: 'evm_10',
    _16: 'evm_16',
    _56: 'evm_56',
    _100: 'evm_100',
    _137: 'evm_137',
    _169: 'evm_169',
    _250: 'evm_250',
    _324: 'evm_324',
    _1030: 'evm_1030',
    _1100: 'evm_1100',
    _1101: 'evm_1101',
    _1329: 'evm_1329',
    _1729: 'evm_1729',
    _2222: 'evm_2222',
    _4200: 'evm_4200',
    _5000: 'evm_5000',
    _7000: 'evm_7000',
    _7700: 'evm_7700',
    _8453: 'evm_8453',
    _17000: 'evm_17000',
    _80001: 'evm_80001',
    _42161: 'evm_42161',
    _43114: 'evm_43114',
    _59144: 'evm_59144',
    _81457: 'evm_81457',
    _421614: 'evm_421614',
    _534352: 'evm_534352',
    _660279: 'evm_660279',
    _810180: 'evm_810180',
    _11155111: 'evm_11155111',
    ethereumMainnet: 'evm_ethereum_mainnet',
    ethereumGoerli: 'evm_ethereum_goerli',
    optimismMainnet: 'evm_optimism_mainnet',
    flareTestnet: 'evm_flare_testnet',
    bscMainnet: 'evm_bsc_mainnet',
    gnosisMainnet: 'evm_gnosis_mainnet',
    polygonMainnet: 'evm_polygon_mainnet',
    mantaPacificMainnet: 'evm_manta_pacific_mainnet',
    fantomMainnet: 'evm_fantom_mainnet',
    zksyncEraMainnet: 'evm_zksync_era_mainnet',
    confluxMainnet: 'evm_conflux_mainnet',
    dymensionMainnet: 'evm_dymension_mainnet',
    polygonZkevmMainnet: 'evm_polygon_zkevm_mainnet',
    seiMainnet: 'evm_sei_mainnet',
    reyaMainnet: 'evm_reya_mainnet',
    kavaMainnet: 'evm_kava_mainnet',
    merlinMainnet: 'evm_merlin_mainnet',
    mantleMainnet: 'evm_mantle_mainnet',
    zetaMainnet: 'evm_zeta_mainnet',
    cantoMainnet: 'evm_canto_mainnet',
    baseMainnet: 'evm_base_mainnet',
    ethereumHolesky: 'evm_ethereum_holesky',
    polygonMumbai: 'evm_polygon_mumbai',
    arbitrumMainnet: 'evm_arbitrum_mainnet',
    avalancheChain: 'evm_avalanche_chain',
    lineaMainnet: 'evm_linea_mainnet',
    blastMainnet: 'evm_blast_mainnet',
    arbitrumSepolia: 'evm_arbitrum_sepolia',
    scrollMainnet: 'evm_scroll_mainnet',
    xaiMainnet: 'evm_xai_mainnet',
    zklinkNovaMainnet: 'evm_zklink_nova_mainnet',
    ethereumSepolia: 'evm_ethereum_sepolia'
} as const;
export type EnrichedEvmChainUniqueIdEnum = typeof EnrichedEvmChainUniqueIdEnum[keyof typeof EnrichedEvmChainUniqueIdEnum];


/**
 * Check if a given object implements the EnrichedEvmChain interface.
 */
export function instanceOfEnrichedEvmChain(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "chainId" in value;
    isInstance = isInstance && "uniqueId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "nativeCurrencySymbol" in value;
    isInstance = isInstance && "nativeCurrencyName" in value;
    isInstance = isInstance && "logoUrl" in value;
    isInstance = isInstance && "gasType" in value;
    isInstance = isInstance && "isTestnet" in value;
    isInstance = isInstance && "source" in value;

    return isInstance;
}

export function EnrichedEvmChainFromJSON(json: any): EnrichedEvmChain {
    return EnrichedEvmChainFromJSONTyped(json, false);
}

export function EnrichedEvmChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedEvmChain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'namedChainId': !exists(json, 'named_chain_id') ? undefined : EvmChainNameFromJSON(json['named_chain_id']),
        'chainId': json['chain_id'],
        'uniqueId': json['unique_id'],
        'name': json['name'],
        'nativeCurrencySymbol': json['native_currency_symbol'],
        'nativeCurrencyName': json['native_currency_name'],
        'blockchainExplorer': !exists(json, 'blockchain_explorer') ? undefined : BlockchainExplorerFromJSON(json['blockchain_explorer']),
        'logoUrl': json['logo_url'],
        'gasType': GasTypeFromJSON(json['gas_type']),
        'supportsSecureNode': !exists(json, 'supports_secure_node') ? undefined : json['supports_secure_node'],
        'rpcUrl': !exists(json, 'rpc_url') ? undefined : json['rpc_url'],
        'isTestnet': json['is_testnet'],
        'source': ChainSourceFromJSON(json['source']),
    };
}

export function EnrichedEvmChainToJSON(value?: EnrichedEvmChain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'named_chain_id': EvmChainNameToJSON(value.namedChainId),
        'chain_id': value.chainId,
        'unique_id': value.uniqueId,
        'name': value.name,
        'native_currency_symbol': value.nativeCurrencySymbol,
        'native_currency_name': value.nativeCurrencyName,
        'blockchain_explorer': BlockchainExplorerToJSON(value.blockchainExplorer),
        'logo_url': value.logoUrl,
        'gas_type': GasTypeToJSON(value.gasType),
        'supports_secure_node': value.supportsSecureNode,
        'rpc_url': value.rpcUrl,
        'is_testnet': value.isTestnet,
        'source': ChainSourceToJSON(value.source),
    };
}

