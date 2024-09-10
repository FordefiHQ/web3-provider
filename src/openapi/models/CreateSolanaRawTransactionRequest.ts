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
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
} from './PushMode';
import type { SolanaChainUniqueId } from './SolanaChainUniqueId';
import {
    SolanaChainUniqueIdFromJSON,
    SolanaChainUniqueIdFromJSONTyped,
    SolanaChainUniqueIdToJSON,
} from './SolanaChainUniqueId';
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
 * @interface CreateSolanaRawTransactionRequest
 */
export interface CreateSolanaRawTransactionRequest {
    /**
     * 
     * @type {SolanaMessageVersion}
     * @memberof CreateSolanaRawTransactionRequest
     */
    version: SolanaMessageVersion;
    /**
     * 
     * @type {Array<SolanaCompiledInstructionRequest>}
     * @memberof CreateSolanaRawTransactionRequest
     */
    instructions: Array<SolanaCompiledInstructionRequest>;
    /**
     * 
     * @type {Array<SolanaTransactionAccountRequest>}
     * @memberof CreateSolanaRawTransactionRequest
     */
    accounts: Array<SolanaTransactionAccountRequest>;
    /**
     * 
     * @type {Array<SolanaMessageAddressTableLookupRequest>}
     * @memberof CreateSolanaRawTransactionRequest
     */
    addressTableLookups: Array<SolanaMessageAddressTableLookupRequest>;
    /**
     * 
     * @type {Array<SolanaTransactionSignaturesRequest>}
     * @memberof CreateSolanaRawTransactionRequest
     */
    signatures?: Array<SolanaTransactionSignaturesRequest>;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaRawTransactionRequest
     */
    recentBlockhash?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaRawTransactionRequest
     */
    type: CreateSolanaRawTransactionRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSolanaRawTransactionRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateSolanaRawTransactionRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSolanaRawTransactionRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {SolanaChainUniqueId}
     * @memberof CreateSolanaRawTransactionRequest
     */
    chain: SolanaChainUniqueId;
}


/**
 * @export
 */
export const CreateSolanaRawTransactionRequestTypeEnum = {
    solanaRawTransaction: 'solana_raw_transaction'
} as const;
export type CreateSolanaRawTransactionRequestTypeEnum = typeof CreateSolanaRawTransactionRequestTypeEnum[keyof typeof CreateSolanaRawTransactionRequestTypeEnum];


/**
 * Check if a given object implements the CreateSolanaRawTransactionRequest interface.
 */
export function instanceOfCreateSolanaRawTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "instructions" in value;
    isInstance = isInstance && "accounts" in value;
    isInstance = isInstance && "addressTableLookups" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function CreateSolanaRawTransactionRequestFromJSON(json: any): CreateSolanaRawTransactionRequest {
    return CreateSolanaRawTransactionRequestFromJSONTyped(json, false);
}

export function CreateSolanaRawTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSolanaRawTransactionRequest {
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
        'type': json['type'],
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
        'skipPrediction': !exists(json, 'skip_prediction') ? undefined : json['skip_prediction'],
        'chain': SolanaChainUniqueIdFromJSON(json['chain']),
    };
}

export function CreateSolanaRawTransactionRequestToJSON(value?: CreateSolanaRawTransactionRequest | null): any {
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
        'type': value.type,
        'fail_on_prediction_failure': value.failOnPredictionFailure,
        'push_mode': PushModeToJSON(value.pushMode),
        'skip_prediction': value.skipPrediction,
        'chain': SolanaChainUniqueIdToJSON(value.chain),
    };
}

