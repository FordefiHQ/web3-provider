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
import type { StarknetTypedMessageRequest } from './StarknetTypedMessageRequest';
import {
    StarknetTypedMessageRequestToJSON,
} from './StarknetTypedMessageRequest';
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
 * @interface CreateStarknetMessageRequest
 */
export interface CreateStarknetMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateStarknetMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStarknetMessageRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateStarknetMessageRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateStarknetMessageRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {DappInfo}
     * @memberof CreateStarknetMessageRequest
     */
    dappInfo?: DappInfo;
    /**
     * 
     * @type {string}
     * @memberof CreateStarknetMessageRequest
     */
    type: CreateStarknetMessageRequestTypeEnum;
    /**
     * 
     * @type {StarknetTypedMessageRequest}
     * @memberof CreateStarknetMessageRequest
     */
    details: StarknetTypedMessageRequest;
}


/**
 * 
 */
const CreateStarknetMessageRequestTypeEnum = {
    starknetMessage: 'starknet_message'
} as const;
type CreateStarknetMessageRequestTypeEnum = typeof CreateStarknetMessageRequestTypeEnum[keyof typeof CreateStarknetMessageRequestTypeEnum];

export function CreateStarknetMessageRequestToJSON(json: any): CreateStarknetMessageRequest {
    return CreateStarknetMessageRequestToJSONTyped(json, false);
}

function CreateStarknetMessageRequestToJSONTyped(value?: CreateStarknetMessageRequest | null, _ignoreDiscriminator: boolean = false): any {
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
        'details': StarknetTypedMessageRequestToJSON(value['details']),
    };
}
