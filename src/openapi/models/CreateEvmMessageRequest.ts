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
import type { CreateEvmMessageRequestDetails } from './CreateEvmMessageRequestDetails';
import {
    CreateEvmMessageRequestDetailsToJSON,
} from './CreateEvmMessageRequestDetails';
import type { SignMode } from './SignMode';
import {
    SignModeToJSON,
} from './SignMode';
import type { SignerType } from './SignerType';
import {
    SignerTypeToJSON,
} from './SignerType';

/**
 * 
 * @export
 * @interface CreateEvmMessageRequest
 */
export interface CreateEvmMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateEvmMessageRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateEvmMessageRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {DappInfo}
     * @memberof CreateEvmMessageRequest
     */
    dappInfo?: DappInfo;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageRequest
     */
    type: CreateEvmMessageRequestTypeEnum;
    /**
     * 
     * @type {CreateEvmMessageRequestDetails}
     * @memberof CreateEvmMessageRequest
     */
    details: CreateEvmMessageRequestDetails;
}


/**
 * @export
 */
export const CreateEvmMessageRequestTypeEnum = {
    evmMessage: 'evm_message'
} as const;
export type CreateEvmMessageRequestTypeEnum = typeof CreateEvmMessageRequestTypeEnum[keyof typeof CreateEvmMessageRequestTypeEnum];

export function CreateEvmMessageRequestToJSON(json: any): CreateEvmMessageRequest {
    return CreateEvmMessageRequestToJSONTyped(json, false);
}

function CreateEvmMessageRequestToJSONTyped(value?: CreateEvmMessageRequest | null, _ignoreDiscriminator: boolean = false): any {
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
        'details': CreateEvmMessageRequestDetailsToJSON(value['details']),
    };
}

