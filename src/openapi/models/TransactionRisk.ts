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
import type { TransactionRiskSeverity } from './TransactionRiskSeverity';
import {
    TransactionRiskSeverityFromJSON,
    TransactionRiskSeverityFromJSONTyped,
    TransactionRiskSeverityToJSON,
} from './TransactionRiskSeverity';
import type { TransactionRiskType } from './TransactionRiskType';
import {
    TransactionRiskTypeFromJSON,
    TransactionRiskTypeFromJSONTyped,
    TransactionRiskTypeToJSON,
} from './TransactionRiskType';

/**
 * 
 * @export
 * @interface TransactionRisk
 */
export interface TransactionRisk {
    /**
     * 
     * @type {TransactionRiskType}
     * @memberof TransactionRisk
     */
    type: TransactionRiskType;
    /**
     * 
     * @type {TransactionRiskSeverity}
     * @memberof TransactionRisk
     */
    severity: TransactionRiskSeverity;
    /**
     * 
     * @type {string}
     * @memberof TransactionRisk
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionRisk
     */
    description: string;
}

/**
 * Check if a given object implements the TransactionRisk interface.
 */
export function instanceOfTransactionRisk(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function TransactionRiskFromJSON(json: any): TransactionRisk {
    return TransactionRiskFromJSONTyped(json, false);
}

export function TransactionRiskFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionRisk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': TransactionRiskTypeFromJSON(json['type']),
        'severity': TransactionRiskSeverityFromJSON(json['severity']),
        'title': json['title'],
        'description': json['description'],
    };
}

export function TransactionRiskToJSON(value?: TransactionRisk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': TransactionRiskTypeToJSON(value.type),
        'severity': TransactionRiskSeverityToJSON(value.severity),
        'title': value.title,
        'description': value.description,
    };
}

