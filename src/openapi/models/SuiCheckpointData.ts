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

/**
 * 
 * @export
 * @interface SuiCheckpointData
 */
export interface SuiCheckpointData {
    /**
     * 
     * @type {number}
     * @memberof SuiCheckpointData
     */
    sequenceNumber: number;
    /**
     * 
     * @type {string}
     * @memberof SuiCheckpointData
     */
    digest: string;
    /**
     * 
     * @type {Date}
     * @memberof SuiCheckpointData
     */
    minedAt: Date;
}

export function SuiCheckpointDataFromJSON(json: any): SuiCheckpointData {
    return SuiCheckpointDataFromJSONTyped(json, false);
}

function SuiCheckpointDataFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SuiCheckpointData {
    if (json == null) {
        return json;
    }
    return {
        
        'sequenceNumber': json['sequence_number'],
        'digest': json['digest'],
        'minedAt': (new Date(json['mined_at'])),
    };
}

