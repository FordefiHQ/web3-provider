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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BlockchainExplorer
 */
export interface BlockchainExplorer {
    /**
     * 
     * @type {string}
     * @memberof BlockchainExplorer
     */
    transactionUrl: string;
    /**
     * 
     * @type {string}
     * @memberof BlockchainExplorer
     */
    addressUrl: string;
    /**
     * 
     * @type {string}
     * @memberof BlockchainExplorer
     */
    rootUrl: string;
    /**
     * 
     * @type {string}
     * @memberof BlockchainExplorer
     */
    transactionFormatUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof BlockchainExplorer
     */
    addressFormatUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof BlockchainExplorer
     */
    assetFormatUrl?: string;
}

/**
 * Check if a given object implements the BlockchainExplorer interface.
 */
export function instanceOfBlockchainExplorer(value: object): value is BlockchainExplorer {
    if (!('transactionUrl' in value) || value['transactionUrl'] === undefined) return false;
    if (!('addressUrl' in value) || value['addressUrl'] === undefined) return false;
    if (!('rootUrl' in value) || value['rootUrl'] === undefined) return false;
    return true;
}

export function BlockchainExplorerFromJSON(json: any): BlockchainExplorer {
    return BlockchainExplorerFromJSONTyped(json, false);
}

export function BlockchainExplorerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainExplorer {
    if (json == null) {
        return json;
    }
    return {
        
        'transactionUrl': json['transaction_url'],
        'addressUrl': json['address_url'],
        'rootUrl': json['root_url'],
        'transactionFormatUrl': json['transaction_format_url'] == null ? undefined : json['transaction_format_url'],
        'addressFormatUrl': json['address_format_url'] == null ? undefined : json['address_format_url'],
        'assetFormatUrl': json['asset_format_url'] == null ? undefined : json['asset_format_url'],
    };
}

export function BlockchainExplorerToJSON(json: any): BlockchainExplorer {
    return BlockchainExplorerToJSONTyped(json, false);
}

export function BlockchainExplorerToJSONTyped(value?: BlockchainExplorer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transaction_url': value['transactionUrl'],
        'address_url': value['addressUrl'],
        'root_url': value['rootUrl'],
        'transaction_format_url': value['transactionFormatUrl'],
        'address_format_url': value['addressFormatUrl'],
        'asset_format_url': value['assetFormatUrl'],
    };
}

