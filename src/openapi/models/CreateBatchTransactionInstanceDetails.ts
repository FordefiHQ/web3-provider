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
import type { SolanaCompiledInstructionRequest } from './SolanaCompiledInstructionRequest';
import {
    SolanaCompiledInstructionRequestFromJSON,
    SolanaCompiledInstructionRequestFromJSONTyped,
    SolanaCompiledInstructionRequestToJSON,
} from './SolanaCompiledInstructionRequest';
import type { SolanaMessageAddressTableLookupRequest } from './SolanaMessageAddressTableLookupRequest';
import {
    SolanaMessageAddressTableLookupRequestFromJSON,
    SolanaMessageAddressTableLookupRequestFromJSONTyped,
    SolanaMessageAddressTableLookupRequestToJSON,
} from './SolanaMessageAddressTableLookupRequest';
import type { SolanaMessageVersion } from './SolanaMessageVersion';
import {
    SolanaMessageVersionFromJSON,
    SolanaMessageVersionFromJSONTyped,
    SolanaMessageVersionToJSON,
} from './SolanaMessageVersion';
import type { SolanaTransactionAccountRequest } from './SolanaTransactionAccountRequest';
import {
    SolanaTransactionAccountRequestFromJSON,
    SolanaTransactionAccountRequestFromJSONTyped,
    SolanaTransactionAccountRequestToJSON,
} from './SolanaTransactionAccountRequest';
import type { SolanaTransactionSignaturesRequest } from './SolanaTransactionSignaturesRequest';
import {
    SolanaTransactionSignaturesRequestFromJSON,
    SolanaTransactionSignaturesRequestFromJSONTyped,
    SolanaTransactionSignaturesRequestToJSON,
} from './SolanaTransactionSignaturesRequest';

/**
 * 
 * @export
 * @interface CreateBatchTransactionInstanceDetails
 */
export interface CreateBatchTransactionInstanceDetails {
    /**
     * 
     * @type {SolanaMessageVersion}
     * @memberof CreateBatchTransactionInstanceDetails
     */
    version: SolanaMessageVersion;
    /**
     * 
     * @type {Array<SolanaCompiledInstructionRequest>}
     * @memberof CreateBatchTransactionInstanceDetails
     */
    instructions: Array<SolanaCompiledInstructionRequest>;
    /**
     * 
     * @type {Array<SolanaTransactionAccountRequest>}
     * @memberof CreateBatchTransactionInstanceDetails
     */
    accounts: Array<SolanaTransactionAccountRequest>;
    /**
     * 
     * @type {Array<SolanaMessageAddressTableLookupRequest>}
     * @memberof CreateBatchTransactionInstanceDetails
     */
    addressTableLookups: Array<SolanaMessageAddressTableLookupRequest>;
    /**
     * 
     * @type {Array<SolanaTransactionSignaturesRequest>}
     * @memberof CreateBatchTransactionInstanceDetails
     */
    signatures?: Array<SolanaTransactionSignaturesRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchTransactionInstanceDetails
     */
    recentBlockhash?: string;
}

/**
 * Check if a given object implements the CreateBatchTransactionInstanceDetails interface.
 */
export function instanceOfCreateBatchTransactionInstanceDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "instructions" in value;
    isInstance = isInstance && "accounts" in value;
    isInstance = isInstance && "addressTableLookups" in value;

    return isInstance;
}

export function CreateBatchTransactionInstanceDetailsFromJSON(json: any): CreateBatchTransactionInstanceDetails {
    return CreateBatchTransactionInstanceDetailsFromJSONTyped(json, false);
}

export function CreateBatchTransactionInstanceDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBatchTransactionInstanceDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': SolanaMessageVersionFromJSON(json['version']),
        'instructions': ((json['instructions'] as Array<any>).map(SolanaCompiledInstructionRequestFromJSON)),
        'accounts': ((json['accounts'] as Array<any>).map(SolanaTransactionAccountRequestFromJSON)),
        'addressTableLookups': ((json['address_table_lookups'] as Array<any>).map(SolanaMessageAddressTableLookupRequestFromJSON)),
        'signatures': !exists(json, 'signatures') ? undefined : ((json['signatures'] as Array<any>).map(SolanaTransactionSignaturesRequestFromJSON)),
        'recentBlockhash': !exists(json, 'recent_blockhash') ? undefined : json['recent_blockhash'],
    };
}

export function CreateBatchTransactionInstanceDetailsToJSON(value?: CreateBatchTransactionInstanceDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': SolanaMessageVersionToJSON(value.version),
        'instructions': ((value.instructions as Array<any>).map(SolanaCompiledInstructionRequestToJSON)),
        'accounts': ((value.accounts as Array<any>).map(SolanaTransactionAccountRequestToJSON)),
        'address_table_lookups': ((value.addressTableLookups as Array<any>).map(SolanaMessageAddressTableLookupRequestToJSON)),
        'signatures': value.signatures === undefined ? undefined : ((value.signatures as Array<any>).map(SolanaTransactionSignaturesRequestToJSON)),
        'recent_blockhash': value.recentBlockhash,
    };
}

