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
import type { ApiKey } from './ApiKey';
import {
    ApiKeyFromJSON,
    ApiKeyFromJSONTyped,
    ApiKeyToJSON,
} from './ApiKey';
import type { ExchangeType } from './ExchangeType';
import {
    ExchangeTypeFromJSON,
    ExchangeTypeFromJSONTyped,
    ExchangeTypeToJSON,
} from './ExchangeType';

/**
 * 
 * @export
 * @interface AddExchangeAccountRequest
 */
export interface AddExchangeAccountRequest {
    /**
     * 
     * @type {ExchangeType}
     * @memberof AddExchangeAccountRequest
     */
    exchangeType: ExchangeType;
    /**
     * 
     * @type {string}
     * @memberof AddExchangeAccountRequest
     */
    name: string;
    /**
     * 
     * @type {ApiKey}
     * @memberof AddExchangeAccountRequest
     */
    apiKey: ApiKey;
    /**
     * 
     * @type {string}
     * @memberof AddExchangeAccountRequest
     */
    vaultGroupId?: string;
}

/**
 * Check if a given object implements the AddExchangeAccountRequest interface.
 */
export function instanceOfAddExchangeAccountRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exchangeType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "apiKey" in value;

    return isInstance;
}

export function AddExchangeAccountRequestFromJSON(json: any): AddExchangeAccountRequest {
    return AddExchangeAccountRequestFromJSONTyped(json, false);
}

export function AddExchangeAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddExchangeAccountRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exchangeType': ExchangeTypeFromJSON(json['exchange_type']),
        'name': json['name'],
        'apiKey': ApiKeyFromJSON(json['api_key']),
        'vaultGroupId': !exists(json, 'vault_group_id') ? undefined : json['vault_group_id'],
    };
}

export function AddExchangeAccountRequestToJSON(value?: AddExchangeAccountRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exchange_type': ExchangeTypeToJSON(value.exchangeType),
        'name': value.name,
        'api_key': ApiKeyToJSON(value.apiKey),
        'vault_group_id': value.vaultGroupId,
    };
}

