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
 * @interface SuiObjectRef
 */
export interface SuiObjectRef {
    /**
     * 
     * @type {string}
     * @memberof SuiObjectRef
     */
    digest: string;
    /**
     * 
     * @type {string}
     * @memberof SuiObjectRef
     */
    objectId: string;
    /**
     * 
     * @type {string}
     * @memberof SuiObjectRef
     */
    version: string;
}

export function SuiObjectRefFromJSON(json: any): SuiObjectRef {
    return SuiObjectRefFromJSONTyped(json, false);
}

function SuiObjectRefFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SuiObjectRef {
    if (json == null) {
        return json;
    }
    return {
        
        'digest': json['digest'],
        'objectId': json['object_id'],
        'version': json['version'],
    };
}

export function SuiObjectRefToJSON(json: any): SuiObjectRef {
    return SuiObjectRefToJSONTyped(json, false);
}

function SuiObjectRefToJSONTyped(value?: SuiObjectRef | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'digest': value['digest'],
        'object_id': value['objectId'],
        'version': value['version'],
    };
}

