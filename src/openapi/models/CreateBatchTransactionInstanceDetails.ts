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
import type { SolanaMessageAddressTableLookupRequest } from './SolanaMessageAddressTableLookupRequest';
import {
    SolanaMessageAddressTableLookupRequestFromJSON,
    SolanaMessageAddressTableLookupRequestFromJSONTyped,
    SolanaMessageAddressTableLookupRequestToJSON,
    SolanaMessageAddressTableLookupRequestToJSONTyped,
} from './SolanaMessageAddressTableLookupRequest';
import type { SolanaMessageVersion } from './SolanaMessageVersion';
import {
    SolanaMessageVersionFromJSON,
    SolanaMessageVersionFromJSONTyped,
    SolanaMessageVersionToJSON,
    SolanaMessageVersionToJSONTyped,
} from './SolanaMessageVersion';
import type { SolanaTransactionSignaturesRequest } from './SolanaTransactionSignaturesRequest';
import {
    SolanaTransactionSignaturesRequestFromJSON,
    SolanaTransactionSignaturesRequestFromJSONTyped,
    SolanaTransactionSignaturesRequestToJSON,
    SolanaTransactionSignaturesRequestToJSONTyped,
} from './SolanaTransactionSignaturesRequest';
import type { SolanaCompiledInstructionRequest } from './SolanaCompiledInstructionRequest';
import {
    SolanaCompiledInstructionRequestFromJSON,
    SolanaCompiledInstructionRequestFromJSONTyped,
    SolanaCompiledInstructionRequestToJSON,
    SolanaCompiledInstructionRequestToJSONTyped,
} from './SolanaCompiledInstructionRequest';
import type { SolanaTransactionAccountRequest } from './SolanaTransactionAccountRequest';
import {
    SolanaTransactionAccountRequestFromJSON,
    SolanaTransactionAccountRequestFromJSONTyped,
    SolanaTransactionAccountRequestToJSON,
    SolanaTransactionAccountRequestToJSONTyped,
} from './SolanaTransactionAccountRequest';

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
export function instanceOfCreateBatchTransactionInstanceDetails(value: object): value is CreateBatchTransactionInstanceDetails {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('instructions' in value) || value['instructions'] === undefined) return false;
    if (!('accounts' in value) || value['accounts'] === undefined) return false;
    if (!('addressTableLookups' in value) || value['addressTableLookups'] === undefined) return false;
    return true;
}

export function CreateBatchTransactionInstanceDetailsFromJSON(json: any): CreateBatchTransactionInstanceDetails {
    return CreateBatchTransactionInstanceDetailsFromJSONTyped(json, false);
}

export function CreateBatchTransactionInstanceDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBatchTransactionInstanceDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'version': SolanaMessageVersionFromJSON(json['version']),
        'instructions': ((json['instructions'] as Array<any>).map(SolanaCompiledInstructionRequestFromJSON)),
        'accounts': ((json['accounts'] as Array<any>).map(SolanaTransactionAccountRequestFromJSON)),
        'addressTableLookups': ((json['address_table_lookups'] as Array<any>).map(SolanaMessageAddressTableLookupRequestFromJSON)),
        'signatures': json['signatures'] == null ? undefined : ((json['signatures'] as Array<any>).map(SolanaTransactionSignaturesRequestFromJSON)),
        'recentBlockhash': json['recent_blockhash'] == null ? undefined : json['recent_blockhash'],
    };
}

export function CreateBatchTransactionInstanceDetailsToJSON(json: any): CreateBatchTransactionInstanceDetails {
    return CreateBatchTransactionInstanceDetailsToJSONTyped(json, false);
}

export function CreateBatchTransactionInstanceDetailsToJSONTyped(value?: CreateBatchTransactionInstanceDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': SolanaMessageVersionToJSON(value['version']),
        'instructions': ((value['instructions'] as Array<any>).map(SolanaCompiledInstructionRequestToJSON)),
        'accounts': ((value['accounts'] as Array<any>).map(SolanaTransactionAccountRequestToJSON)),
        'address_table_lookups': ((value['addressTableLookups'] as Array<any>).map(SolanaMessageAddressTableLookupRequestToJSON)),
        'signatures': value['signatures'] == null ? undefined : ((value['signatures'] as Array<any>).map(SolanaTransactionSignaturesRequestToJSON)),
        'recent_blockhash': value['recentBlockhash'],
    };
}

