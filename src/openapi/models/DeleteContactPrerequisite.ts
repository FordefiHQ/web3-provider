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

import { mapValues } from '../runtime';
import type { DeleteContactPrerequisiteType } from './DeleteContactPrerequisiteType';
import {
    DeleteContactPrerequisiteTypeFromJSON,
    DeleteContactPrerequisiteTypeFromJSONTyped,
    DeleteContactPrerequisiteTypeToJSON,
    DeleteContactPrerequisiteTypeToJSONTyped,
} from './DeleteContactPrerequisiteType';
import type { DeletePrerequisiteSeverity } from './DeletePrerequisiteSeverity';
import {
    DeletePrerequisiteSeverityFromJSON,
    DeletePrerequisiteSeverityFromJSONTyped,
    DeletePrerequisiteSeverityToJSON,
    DeletePrerequisiteSeverityToJSONTyped,
} from './DeletePrerequisiteSeverity';

/**
 * 
 * @export
 * @interface DeleteContactPrerequisite
 */
export interface DeleteContactPrerequisite {
    /**
     * 
     * @type {DeleteContactPrerequisiteType}
     * @memberof DeleteContactPrerequisite
     */
    type: DeleteContactPrerequisiteType;
    /**
     * 
     * @type {DeletePrerequisiteSeverity}
     * @memberof DeleteContactPrerequisite
     */
    severity: DeletePrerequisiteSeverity;
}



/**
 * Check if a given object implements the DeleteContactPrerequisite interface.
 */
export function instanceOfDeleteContactPrerequisite(value: object): value is DeleteContactPrerequisite {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('severity' in value) || value['severity'] === undefined) return false;
    return true;
}

export function DeleteContactPrerequisiteFromJSON(json: any): DeleteContactPrerequisite {
    return DeleteContactPrerequisiteFromJSONTyped(json, false);
}

export function DeleteContactPrerequisiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteContactPrerequisite {
    if (json == null) {
        return json;
    }
    return {
        
        'type': DeleteContactPrerequisiteTypeFromJSON(json['type']),
        'severity': DeletePrerequisiteSeverityFromJSON(json['severity']),
    };
}

export function DeleteContactPrerequisiteToJSON(json: any): DeleteContactPrerequisite {
    return DeleteContactPrerequisiteToJSONTyped(json, false);
}

export function DeleteContactPrerequisiteToJSONTyped(value?: DeleteContactPrerequisite | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': DeleteContactPrerequisiteTypeToJSON(value['type']),
        'severity': DeletePrerequisiteSeverityToJSON(value['severity']),
    };
}

