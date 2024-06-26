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
import type { DeleteAddressBookGroupPrerequisiteType } from './DeleteAddressBookGroupPrerequisiteType';
import {
    DeleteAddressBookGroupPrerequisiteTypeFromJSON,
    DeleteAddressBookGroupPrerequisiteTypeFromJSONTyped,
    DeleteAddressBookGroupPrerequisiteTypeToJSON,
} from './DeleteAddressBookGroupPrerequisiteType';
import type { DeletePrerequisiteSeverity } from './DeletePrerequisiteSeverity';
import {
    DeletePrerequisiteSeverityFromJSON,
    DeletePrerequisiteSeverityFromJSONTyped,
    DeletePrerequisiteSeverityToJSON,
} from './DeletePrerequisiteSeverity';

/**
 * 
 * @export
 * @interface DeleteAddressBookGroupPrerequisite
 */
export interface DeleteAddressBookGroupPrerequisite {
    /**
     * 
     * @type {DeleteAddressBookGroupPrerequisiteType}
     * @memberof DeleteAddressBookGroupPrerequisite
     */
    type: DeleteAddressBookGroupPrerequisiteType;
    /**
     * 
     * @type {DeletePrerequisiteSeverity}
     * @memberof DeleteAddressBookGroupPrerequisite
     */
    severity: DeletePrerequisiteSeverity;
}

/**
 * Check if a given object implements the DeleteAddressBookGroupPrerequisite interface.
 */
export function instanceOfDeleteAddressBookGroupPrerequisite(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "severity" in value;

    return isInstance;
}

export function DeleteAddressBookGroupPrerequisiteFromJSON(json: any): DeleteAddressBookGroupPrerequisite {
    return DeleteAddressBookGroupPrerequisiteFromJSONTyped(json, false);
}

export function DeleteAddressBookGroupPrerequisiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteAddressBookGroupPrerequisite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': DeleteAddressBookGroupPrerequisiteTypeFromJSON(json['type']),
        'severity': DeletePrerequisiteSeverityFromJSON(json['severity']),
    };
}

export function DeleteAddressBookGroupPrerequisiteToJSON(value?: DeleteAddressBookGroupPrerequisite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': DeleteAddressBookGroupPrerequisiteTypeToJSON(value.type),
        'severity': DeletePrerequisiteSeverityToJSON(value.severity),
    };
}

