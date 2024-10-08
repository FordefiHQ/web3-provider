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
import type { SuiChainUniqueId } from './SuiChainUniqueId';
import {
    SuiChainUniqueIdFromJSON,
    SuiChainUniqueIdFromJSONTyped,
    SuiChainUniqueIdToJSON,
} from './SuiChainUniqueId';

/**
 * 
 * @export
 * @interface CreateSuiContactRequest
 */
export interface CreateSuiContactRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSuiContactRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSuiContactRequest
     */
    type: CreateSuiContactRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateSuiContactRequest
     */
    address: string;
    /**
     * 
     * @type {Array<SuiChainUniqueId>}
     * @memberof CreateSuiContactRequest
     */
    chains: Array<SuiChainUniqueId>;
}


/**
 * @export
 */
export const CreateSuiContactRequestTypeEnum = {
    sui: 'sui'
} as const;
export type CreateSuiContactRequestTypeEnum = typeof CreateSuiContactRequestTypeEnum[keyof typeof CreateSuiContactRequestTypeEnum];


/**
 * Check if a given object implements the CreateSuiContactRequest interface.
 */
export function instanceOfCreateSuiContactRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "chains" in value;

    return isInstance;
}

export function CreateSuiContactRequestFromJSON(json: any): CreateSuiContactRequest {
    return CreateSuiContactRequestFromJSONTyped(json, false);
}

export function CreateSuiContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSuiContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(SuiChainUniqueIdFromJSON)),
    };
}

export function CreateSuiContactRequestToJSON(value?: CreateSuiContactRequest | null): any {
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
        'chains': ((value.chains as Array<any>).map(SuiChainUniqueIdToJSON)),
    };
}

