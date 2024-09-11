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
/**
 * 
 * @export
 * @interface CreateMpcSetupCallbackResponse
 */
export interface CreateMpcSetupCallbackResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateMpcSetupCallbackResponse
     */
    type: CreateMpcSetupCallbackResponseTypeEnum;
}


/**
 * @export
 */
export const CreateMpcSetupCallbackResponseTypeEnum = {
    createMpcSetup: 'create_mpc_setup'
} as const;
export type CreateMpcSetupCallbackResponseTypeEnum = typeof CreateMpcSetupCallbackResponseTypeEnum[keyof typeof CreateMpcSetupCallbackResponseTypeEnum];


/**
 * Check if a given object implements the CreateMpcSetupCallbackResponse interface.
 */
export function instanceOfCreateMpcSetupCallbackResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CreateMpcSetupCallbackResponseFromJSON(json: any): CreateMpcSetupCallbackResponse {
    return CreateMpcSetupCallbackResponseFromJSONTyped(json, false);
}

export function CreateMpcSetupCallbackResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMpcSetupCallbackResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function CreateMpcSetupCallbackResponseToJSON(value?: CreateMpcSetupCallbackResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

