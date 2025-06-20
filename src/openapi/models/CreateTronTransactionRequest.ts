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

import type { DappInfo } from './DappInfo';
import {
    DappInfoToJSON,
} from './DappInfo';
import type { SignMode } from './SignMode';
import {
    SignModeToJSON,
} from './SignMode';
import type { SignerType } from './SignerType';
import {
    SignerTypeToJSON,
} from './SignerType';
import type { CreateTronTransactionRequestDetails } from './CreateTronTransactionRequestDetails';
import {
    CreateTronTransactionRequestDetailsToJSON,
} from './CreateTronTransactionRequestDetails';

/**
 * 
 * @export
 * @interface CreateTronTransactionRequest
 */
export interface CreateTronTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTronTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTronTransactionRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateTronTransactionRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateTronTransactionRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {DappInfo}
     * @memberof CreateTronTransactionRequest
     */
    dappInfo?: DappInfo;
    /**
     * 
     * @type {string}
     * @memberof CreateTronTransactionRequest
     */
    type: CreateTronTransactionRequestTypeEnum;
    /**
     * 
     * @type {CreateTronTransactionRequestDetails}
     * @memberof CreateTronTransactionRequest
     */
    details: CreateTronTransactionRequestDetails;
}


/**
 * 
 */
const CreateTronTransactionRequestTypeEnum = {
    tronTransaction: 'tron_transaction'
} as const;
type CreateTronTransactionRequestTypeEnum = typeof CreateTronTransactionRequestTypeEnum[keyof typeof CreateTronTransactionRequestTypeEnum];

export function CreateTronTransactionRequestToJSON(json: any): CreateTronTransactionRequest {
    return CreateTronTransactionRequestToJSONTyped(json, false);
}

function CreateTronTransactionRequestToJSONTyped(value?: CreateTronTransactionRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vault_id': value['vaultId'],
        'note': value['note'],
        'signer_type': SignerTypeToJSON(value['signerType']),
        'sign_mode': SignModeToJSON(value['signMode']),
        'dapp_info': DappInfoToJSON(value['dappInfo']),
        'type': value['type'],
        'details': CreateTronTransactionRequestDetailsToJSON(value['details']),
    };
}
