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
 * @interface SolanaCompiledInstruction
 */
export interface SolanaCompiledInstruction {
    /**
     * 
     * @type {number}
     * @memberof SolanaCompiledInstruction
     */
    programIndex: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaCompiledInstruction
     */
    data: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof SolanaCompiledInstruction
     */
    accountIndexes: Array<number>;
}

/**
 * Check if a given object implements the SolanaCompiledInstruction interface.
 */
export function instanceOfSolanaCompiledInstruction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "programIndex" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "accountIndexes" in value;

    return isInstance;
}

export function SolanaCompiledInstructionFromJSON(json: any): SolanaCompiledInstruction {
    return SolanaCompiledInstructionFromJSONTyped(json, false);
}

export function SolanaCompiledInstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaCompiledInstruction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'programIndex': json['program_index'],
        'data': json['data'],
        'accountIndexes': json['account_indexes'],
    };
}

export function SolanaCompiledInstructionToJSON(value?: SolanaCompiledInstruction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'program_index': value.programIndex,
        'data': value.data,
        'account_indexes': value.accountIndexes,
    };
}

