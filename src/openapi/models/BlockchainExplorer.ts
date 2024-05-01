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
    transactionFormatUrl: string;
    /**
     * 
     * @type {string}
     * @memberof BlockchainExplorer
     */
    addressFormatUrl: string;
}

/**
 * Check if a given object implements the BlockchainExplorer interface.
 */
export function instanceOfBlockchainExplorer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionUrl" in value;
    isInstance = isInstance && "addressUrl" in value;
    isInstance = isInstance && "rootUrl" in value;
    isInstance = isInstance && "transactionFormatUrl" in value;
    isInstance = isInstance && "addressFormatUrl" in value;

    return isInstance;
}

export function BlockchainExplorerFromJSON(json: any): BlockchainExplorer {
    return BlockchainExplorerFromJSONTyped(json, false);
}

export function BlockchainExplorerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainExplorer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionUrl': json['transaction_url'],
        'addressUrl': json['address_url'],
        'rootUrl': json['root_url'],
        'transactionFormatUrl': json['transaction_format_url'],
        'addressFormatUrl': json['address_format_url'],
    };
}

export function BlockchainExplorerToJSON(value?: BlockchainExplorer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction_url': value.transactionUrl,
        'address_url': value.addressUrl,
        'root_url': value.rootUrl,
        'transaction_format_url': value.transactionFormatUrl,
        'address_format_url': value.addressFormatUrl,
    };
}

