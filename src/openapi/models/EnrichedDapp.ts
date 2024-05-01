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
import type { EnrichedChain } from './EnrichedChain';
import {
    EnrichedChainFromJSON,
    EnrichedChainFromJSONTyped,
    EnrichedChainToJSON,
} from './EnrichedChain';

/**
 * 
 * @export
 * @interface EnrichedDapp
 */
export interface EnrichedDapp {
    /**
     * 
     * @type {string}
     * @memberof EnrichedDapp
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedDapp
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedDapp
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedDapp
     */
    logoUrl?: string;
    /**
     * 
     * @type {EnrichedChain}
     * @memberof EnrichedDapp
     */
    chain: EnrichedChain;
}

/**
 * Check if a given object implements the EnrichedDapp interface.
 */
export function instanceOfEnrichedDapp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function EnrichedDappFromJSON(json: any): EnrichedDapp {
    return EnrichedDappFromJSONTyped(json, false);
}

export function EnrichedDappFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedDapp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'logoUrl': !exists(json, 'logo_url') ? undefined : json['logo_url'],
        'chain': EnrichedChainFromJSON(json['chain']),
    };
}

export function EnrichedDappToJSON(value?: EnrichedDapp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'url': value.url,
        'logo_url': value.logoUrl,
        'chain': EnrichedChainToJSON(value.chain),
    };
}

