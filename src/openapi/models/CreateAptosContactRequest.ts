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
import type { AptosChainUniqueId } from './AptosChainUniqueId';
import {
    AptosChainUniqueIdFromJSON,
    AptosChainUniqueIdFromJSONTyped,
    AptosChainUniqueIdToJSON,
} from './AptosChainUniqueId';

/**
 * 
 * @export
 * @interface CreateAptosContactRequest
 */
export interface CreateAptosContactRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAptosContactRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAptosContactRequest
     */
    type: CreateAptosContactRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateAptosContactRequest
     */
    address: string;
    /**
     * 
     * @type {Array<AptosChainUniqueId>}
     * @memberof CreateAptosContactRequest
     */
    chains: Array<AptosChainUniqueId>;
}


/**
 * @export
 */
export const CreateAptosContactRequestTypeEnum = {
    aptos: 'aptos'
} as const;
export type CreateAptosContactRequestTypeEnum = typeof CreateAptosContactRequestTypeEnum[keyof typeof CreateAptosContactRequestTypeEnum];


/**
 * Check if a given object implements the CreateAptosContactRequest interface.
 */
export function instanceOfCreateAptosContactRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "chains" in value;

    return isInstance;
}

export function CreateAptosContactRequestFromJSON(json: any): CreateAptosContactRequest {
    return CreateAptosContactRequestFromJSONTyped(json, false);
}

export function CreateAptosContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAptosContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(AptosChainUniqueIdFromJSON)),
    };
}

export function CreateAptosContactRequestToJSON(value?: CreateAptosContactRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'address': value.address,
        'chains': ((value.chains as Array<any>).map(AptosChainUniqueIdToJSON)),
    };
}
