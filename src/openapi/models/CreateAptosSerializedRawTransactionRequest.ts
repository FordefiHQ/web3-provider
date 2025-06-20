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

import type { AptosGasConfigRequest } from './AptosGasConfigRequest';
import {
    AptosGasConfigRequestToJSON,
} from './AptosGasConfigRequest';
import type { AptosChainUniqueId } from './AptosChainUniqueId';
import {
    AptosChainUniqueIdToJSON,
} from './AptosChainUniqueId';
import type { PushMode } from './PushMode';
import {
    PushModeToJSON,
} from './PushMode';

/**
 * 
 * @export
 * @interface CreateAptosSerializedRawTransactionRequest
 */
export interface CreateAptosSerializedRawTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAptosSerializedRawTransactionRequest
     */
    type: CreateAptosSerializedRawTransactionRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateAptosSerializedRawTransactionRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {AptosGasConfigRequest}
     * @memberof CreateAptosSerializedRawTransactionRequest
     */
    gasConfig?: AptosGasConfigRequest;
    /**
     * 
     * @type {AptosChainUniqueId}
     * @memberof CreateAptosSerializedRawTransactionRequest
     */
    chain: AptosChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof CreateAptosSerializedRawTransactionRequest
     */
    serializedTransactionPayload: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateAptosSerializedRawTransactionRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateAptosSerializedRawTransactionRequest
     */
    pushMode?: PushMode;
}


/**
 * 
 */
const CreateAptosSerializedRawTransactionRequestTypeEnum = {
    aptosSerializedEntryPointPayload: 'aptos_serialized_entry_point_payload'
} as const;
type CreateAptosSerializedRawTransactionRequestTypeEnum = typeof CreateAptosSerializedRawTransactionRequestTypeEnum[keyof typeof CreateAptosSerializedRawTransactionRequestTypeEnum];

export function CreateAptosSerializedRawTransactionRequestToJSON(json: any): CreateAptosSerializedRawTransactionRequest {
    return CreateAptosSerializedRawTransactionRequestToJSONTyped(json, false);
}

function CreateAptosSerializedRawTransactionRequestToJSONTyped(value?: CreateAptosSerializedRawTransactionRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'fail_on_prediction_failure': value['failOnPredictionFailure'],
        'gas_config': AptosGasConfigRequestToJSON(value['gasConfig']),
        'chain': AptosChainUniqueIdToJSON(value['chain']),
        'serialized_transaction_payload': value['serializedTransactionPayload'],
        'skip_prediction': value['skipPrediction'],
        'push_mode': PushModeToJSON(value['pushMode']),
    };
}
