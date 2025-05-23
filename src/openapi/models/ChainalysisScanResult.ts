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
import type { ChainalysisAlert } from './ChainalysisAlert';
import {
    ChainalysisAlertFromJSON,
    ChainalysisAlertFromJSONTyped,
    ChainalysisAlertToJSON,
    ChainalysisAlertToJSONTyped,
} from './ChainalysisAlert';

/**
 * 
 * @export
 * @interface ChainalysisScanResult
 */
export interface ChainalysisScanResult {
    /**
     * 
     * @type {string}
     * @memberof ChainalysisScanResult
     */
    type: ChainalysisScanResultTypeEnum;
    /**
     * 
     * @type {Array<ChainalysisAlert>}
     * @memberof ChainalysisScanResult
     */
    alerts: Array<ChainalysisAlert>;
    /**
     * 
     * @type {string}
     * @memberof ChainalysisScanResult
     */
    externalId: string;
}


/**
 * @export
 */
export const ChainalysisScanResultTypeEnum = {
    chainalysis: 'chainalysis'
} as const;
export type ChainalysisScanResultTypeEnum = typeof ChainalysisScanResultTypeEnum[keyof typeof ChainalysisScanResultTypeEnum];


/**
 * Check if a given object implements the ChainalysisScanResult interface.
 */
export function instanceOfChainalysisScanResult(value: object): value is ChainalysisScanResult {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('alerts' in value) || value['alerts'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function ChainalysisScanResultFromJSON(json: any): ChainalysisScanResult {
    return ChainalysisScanResultFromJSONTyped(json, false);
}

export function ChainalysisScanResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainalysisScanResult {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'alerts': ((json['alerts'] as Array<any>).map(ChainalysisAlertFromJSON)),
        'externalId': json['external_id'],
    };
}

export function ChainalysisScanResultToJSON(json: any): ChainalysisScanResult {
    return ChainalysisScanResultToJSONTyped(json, false);
}

export function ChainalysisScanResultToJSONTyped(value?: ChainalysisScanResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'alerts': ((value['alerts'] as Array<any>).map(ChainalysisAlertToJSON)),
        'external_id': value['externalId'],
    };
}

