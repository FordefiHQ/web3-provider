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


/**
 * 
 * @export
 */
export const ExportType = {
    csv: 'csv',
    zip: 'zip'
} as const;
export type ExportType = typeof ExportType[keyof typeof ExportType];


export function instanceOfExportType(value: any): boolean {
    for (const key in ExportType) {
        if (Object.prototype.hasOwnProperty.call(ExportType, key)) {
            if (ExportType[key as keyof typeof ExportType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ExportTypeFromJSON(json: any): ExportType {
    return ExportTypeFromJSONTyped(json, false);
}

export function ExportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportType {
    return json as ExportType;
}

export function ExportTypeToJSON(value?: ExportType | null): any {
    return value as any;
}

export function ExportTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): ExportType {
    return value as ExportType;
}

