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
import type { ImportKeysStatus } from './ImportKeysStatus';
import {
    ImportKeysStatusFromJSON,
    ImportKeysStatusFromJSONTyped,
    ImportKeysStatusToJSON,
} from './ImportKeysStatus';

/**
 * 
 * @export
 * @interface GetImportKeysStatusResponse
 */
export interface GetImportKeysStatusResponse {
    /**
     * 
     * @type {ImportKeysStatus}
     * @memberof GetImportKeysStatusResponse
     */
    state: ImportKeysStatus;
    /**
     * 
     * @type {boolean}
     * @memberof GetImportKeysStatusResponse
     */
    importedEcdsa: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetImportKeysStatusResponse
     */
    importedEddsa: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetImportKeysStatusResponse
     */
    importedEcdsaStark: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetImportKeysStatusResponse
     */
    importedSchnorrSecp256k1: boolean;
}

/**
 * Check if a given object implements the GetImportKeysStatusResponse interface.
 */
export function instanceOfGetImportKeysStatusResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "importedEcdsa" in value;
    isInstance = isInstance && "importedEddsa" in value;
    isInstance = isInstance && "importedEcdsaStark" in value;
    isInstance = isInstance && "importedSchnorrSecp256k1" in value;

    return isInstance;
}

export function GetImportKeysStatusResponseFromJSON(json: any): GetImportKeysStatusResponse {
    return GetImportKeysStatusResponseFromJSONTyped(json, false);
}

export function GetImportKeysStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetImportKeysStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': ImportKeysStatusFromJSON(json['state']),
        'importedEcdsa': json['imported_ecdsa'],
        'importedEddsa': json['imported_eddsa'],
        'importedEcdsaStark': json['imported_ecdsa_stark'],
        'importedSchnorrSecp256k1': json['imported_schnorr_secp256k1'],
    };
}

export function GetImportKeysStatusResponseToJSON(value?: GetImportKeysStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': ImportKeysStatusToJSON(value.state),
        'imported_ecdsa': value.importedEcdsa,
        'imported_eddsa': value.importedEddsa,
        'imported_ecdsa_stark': value.importedEcdsaStark,
        'imported_schnorr_secp256k1': value.importedSchnorrSecp256k1,
    };
}

