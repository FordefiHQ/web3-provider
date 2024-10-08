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
import type { EnrichedSuiAddress } from './EnrichedSuiAddress';
import {
    EnrichedSuiAddressFromJSON,
    EnrichedSuiAddressFromJSONTyped,
    EnrichedSuiAddressToJSON,
} from './EnrichedSuiAddress';

/**
 * 
 * @export
 * @interface SuiProgrammableTransactionBlockDetails
 */
export interface SuiProgrammableTransactionBlockDetails {
    /**
     * 
     * @type {string}
     * @memberof SuiProgrammableTransactionBlockDetails
     */
    type: SuiProgrammableTransactionBlockDetailsTypeEnum;
    /**
     * 
     * @type {EnrichedSuiAddress}
     * @memberof SuiProgrammableTransactionBlockDetails
     */
    sender: EnrichedSuiAddress;
    /**
     * 
     * @type {Array<EnrichedSuiAddress>}
     * @memberof SuiProgrammableTransactionBlockDetails
     */
    recipients: Array<EnrichedSuiAddress>;
}


/**
 * @export
 */
export const SuiProgrammableTransactionBlockDetailsTypeEnum = {
    programmableTransactionBlock: 'programmable_transaction_block'
} as const;
export type SuiProgrammableTransactionBlockDetailsTypeEnum = typeof SuiProgrammableTransactionBlockDetailsTypeEnum[keyof typeof SuiProgrammableTransactionBlockDetailsTypeEnum];


/**
 * Check if a given object implements the SuiProgrammableTransactionBlockDetails interface.
 */
export function instanceOfSuiProgrammableTransactionBlockDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "recipients" in value;

    return isInstance;
}

export function SuiProgrammableTransactionBlockDetailsFromJSON(json: any): SuiProgrammableTransactionBlockDetails {
    return SuiProgrammableTransactionBlockDetailsFromJSONTyped(json, false);
}

export function SuiProgrammableTransactionBlockDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiProgrammableTransactionBlockDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sender': EnrichedSuiAddressFromJSON(json['sender']),
        'recipients': ((json['recipients'] as Array<any>).map(EnrichedSuiAddressFromJSON)),
    };
}

export function SuiProgrammableTransactionBlockDetailsToJSON(value?: SuiProgrammableTransactionBlockDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'sender': EnrichedSuiAddressToJSON(value.sender),
        'recipients': ((value.recipients as Array<any>).map(EnrichedSuiAddressToJSON)),
    };
}

