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

import {
    CosmosMessageBase64Data,
    instanceOfCosmosMessageBase64Data,
    CosmosMessageBase64DataFromJSON,
    CosmosMessageBase64DataFromJSONTyped,
    CosmosMessageBase64DataToJSON,
} from './CosmosMessageBase64Data';
import {
    CosmosMessageStrData,
    instanceOfCosmosMessageStrData,
    CosmosMessageStrDataFromJSON,
    CosmosMessageStrDataFromJSONTyped,
    CosmosMessageStrDataToJSON,
} from './CosmosMessageStrData';

/**
 * @type CosmosMessageData
 * 
 * @export
 */
export type CosmosMessageData = { type: 'base64' } & CosmosMessageBase64Data | { type: 'string' } & CosmosMessageStrData;

export function CosmosMessageDataFromJSON(json: any): CosmosMessageData {
    return CosmosMessageDataFromJSONTyped(json, false);
}

export function CosmosMessageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosMessageData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'base64':
            return {...CosmosMessageBase64DataFromJSONTyped(json, true), type: 'base64'};
        case 'string':
            return {...CosmosMessageStrDataFromJSONTyped(json, true), type: 'string'};
        default:
            throw new Error(`No variant of CosmosMessageData exists with 'type=${json['type']}'`);
    }
}

export function CosmosMessageDataToJSON(value?: CosmosMessageData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'base64':
            return CosmosMessageBase64DataToJSON(value);
        case 'string':
            return CosmosMessageStrDataToJSON(value);
        default:
            throw new Error(`No variant of CosmosMessageData exists with 'type=${value['type']}'`);
    }

}

