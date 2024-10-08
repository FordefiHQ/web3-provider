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
import type { SuiChainUniqueId } from './SuiChainUniqueId';
import {
    SuiChainUniqueIdFromJSON,
    SuiChainUniqueIdFromJSONTyped,
    SuiChainUniqueIdToJSON,
} from './SuiChainUniqueId';

/**
 * 
 * @export
 * @interface EnrichedSuiChain
 */
export interface EnrichedSuiChain {
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiChain
     */
    chainType: EnrichedSuiChainChainTypeEnum;
    /**
     * 
     * @type {SuiChainUniqueId}
     * @memberof EnrichedSuiChain
     */
    uniqueId: SuiChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiChain
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiChain
     */
    nativeCurrencySymbol: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiChain
     */
    nativeCurrencyName: string;
    /**
     * 
     * @type {BlockchainExplorer}
     * @memberof EnrichedSuiChain
     */
    blockchainExplorer?: BlockchainExplorer;
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiChain
     */
    logoUrl: string;
}


/**
 * @export
 */
export const EnrichedSuiChainChainTypeEnum = {
    sui: 'sui'
} as const;
export type EnrichedSuiChainChainTypeEnum = typeof EnrichedSuiChainChainTypeEnum[keyof typeof EnrichedSuiChainChainTypeEnum];


/**
 * Check if a given object implements the EnrichedSuiChain interface.
 */
export function instanceOfEnrichedSuiChain(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "uniqueId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "nativeCurrencySymbol" in value;
    isInstance = isInstance && "nativeCurrencyName" in value;
    isInstance = isInstance && "logoUrl" in value;

    return isInstance;
}

export function EnrichedSuiChainFromJSON(json: any): EnrichedSuiChain {
    return EnrichedSuiChainFromJSONTyped(json, false);
}

export function EnrichedSuiChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedSuiChain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'uniqueId': SuiChainUniqueIdFromJSON(json['unique_id']),
        'name': json['name'],
        'nativeCurrencySymbol': json['native_currency_symbol'],
        'nativeCurrencyName': json['native_currency_name'],
        'blockchainExplorer': !exists(json, 'blockchain_explorer') ? undefined : BlockchainExplorerFromJSON(json['blockchain_explorer']),
        'logoUrl': json['logo_url'],
    };
}

export function EnrichedSuiChainToJSON(value?: EnrichedSuiChain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'unique_id': SuiChainUniqueIdToJSON(value.uniqueId),
        'name': value.name,
        'native_currency_symbol': value.nativeCurrencySymbol,
        'native_currency_name': value.nativeCurrencyName,
        'blockchain_explorer': BlockchainExplorerToJSON(value.blockchainExplorer),
        'logo_url': value.logoUrl,
    };
}

