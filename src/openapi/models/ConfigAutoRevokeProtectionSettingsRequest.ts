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
import type { AlertProviderType } from './AlertProviderType';
import {
    AlertProviderTypeFromJSON,
    AlertProviderTypeFromJSONTyped,
    AlertProviderTypeToJSON,
} from './AlertProviderType';

/**
 * 
 * @export
 * @interface ConfigAutoRevokeProtectionSettingsRequest
 */
export interface ConfigAutoRevokeProtectionSettingsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ConfigAutoRevokeProtectionSettingsRequest
     */
    isActive: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigAutoRevokeProtectionSettingsRequest
     */
    shouldSendToApiSigner: boolean;
    /**
     * 
     * @type {Array<AlertProviderType>}
     * @memberof ConfigAutoRevokeProtectionSettingsRequest
     */
    alertProviders: Array<AlertProviderType>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConfigAutoRevokeProtectionSettingsRequest
     */
    signersIds: Array<string>;
}

/**
 * Check if a given object implements the ConfigAutoRevokeProtectionSettingsRequest interface.
 */
export function instanceOfConfigAutoRevokeProtectionSettingsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isActive" in value;
    isInstance = isInstance && "shouldSendToApiSigner" in value;
    isInstance = isInstance && "alertProviders" in value;
    isInstance = isInstance && "signersIds" in value;

    return isInstance;
}

export function ConfigAutoRevokeProtectionSettingsRequestFromJSON(json: any): ConfigAutoRevokeProtectionSettingsRequest {
    return ConfigAutoRevokeProtectionSettingsRequestFromJSONTyped(json, false);
}

export function ConfigAutoRevokeProtectionSettingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigAutoRevokeProtectionSettingsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isActive': json['is_active'],
        'shouldSendToApiSigner': json['should_send_to_api_signer'],
        'alertProviders': ((json['alert_providers'] as Array<any>).map(AlertProviderTypeFromJSON)),
        'signersIds': json['signers_ids'],
    };
}

export function ConfigAutoRevokeProtectionSettingsRequestToJSON(value?: ConfigAutoRevokeProtectionSettingsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_active': value.isActive,
        'should_send_to_api_signer': value.shouldSendToApiSigner,
        'alert_providers': ((value.alertProviders as Array<any>).map(AlertProviderTypeToJSON)),
        'signers_ids': value.signersIds,
    };
}

