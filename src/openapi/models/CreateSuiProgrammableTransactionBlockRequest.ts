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
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
} from './PushMode';
import type { SuiChainUniqueId } from './SuiChainUniqueId';
import {
    SuiChainUniqueIdFromJSON,
    SuiChainUniqueIdFromJSONTyped,
    SuiChainUniqueIdToJSON,
} from './SuiChainUniqueId';
import type { SuiCommand } from './SuiCommand';
import {
    SuiCommandFromJSON,
    SuiCommandFromJSONTyped,
    SuiCommandToJSON,
} from './SuiCommand';
import type { SuiGasConfig } from './SuiGasConfig';
import {
    SuiGasConfigFromJSON,
    SuiGasConfigFromJSONTyped,
    SuiGasConfigToJSON,
} from './SuiGasConfig';
import type { SuiInput } from './SuiInput';
import {
    SuiInputFromJSON,
    SuiInputFromJSONTyped,
    SuiInputToJSON,
} from './SuiInput';

/**
 * 
 * @export
 * @interface CreateSuiProgrammableTransactionBlockRequest
 */
export interface CreateSuiProgrammableTransactionBlockRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    type: CreateSuiProgrammableTransactionBlockRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {SuiChainUniqueId}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    chain: SuiChainUniqueId;
    /**
     * 
     * @type {SuiGasConfig}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    gasConfig: SuiGasConfig;
    /**
     * 
     * @type {Array<SuiInput>}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    inputs: Array<SuiInput>;
    /**
     * 
     * @type {Array<SuiCommand>}
     * @memberof CreateSuiProgrammableTransactionBlockRequest
     */
    commands: Array<SuiCommand>;
}


/**
 * @export
 */
export const CreateSuiProgrammableTransactionBlockRequestTypeEnum = {
    suiProgrammableTransactionBlock: 'sui_programmable_transaction_block'
} as const;
export type CreateSuiProgrammableTransactionBlockRequestTypeEnum = typeof CreateSuiProgrammableTransactionBlockRequestTypeEnum[keyof typeof CreateSuiProgrammableTransactionBlockRequestTypeEnum];


/**
 * Check if a given object implements the CreateSuiProgrammableTransactionBlockRequest interface.
 */
export function instanceOfCreateSuiProgrammableTransactionBlockRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "gasConfig" in value;
    isInstance = isInstance && "inputs" in value;
    isInstance = isInstance && "commands" in value;

    return isInstance;
}

export function CreateSuiProgrammableTransactionBlockRequestFromJSON(json: any): CreateSuiProgrammableTransactionBlockRequest {
    return CreateSuiProgrammableTransactionBlockRequestFromJSONTyped(json, false);
}

export function CreateSuiProgrammableTransactionBlockRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSuiProgrammableTransactionBlockRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
        'skipPrediction': !exists(json, 'skip_prediction') ? undefined : json['skip_prediction'],
        'chain': SuiChainUniqueIdFromJSON(json['chain']),
        'gasConfig': SuiGasConfigFromJSON(json['gas_config']),
        'inputs': ((json['inputs'] as Array<any>).map(SuiInputFromJSON)),
        'commands': ((json['commands'] as Array<any>).map(SuiCommandFromJSON)),
    };
}

export function CreateSuiProgrammableTransactionBlockRequestToJSON(value?: CreateSuiProgrammableTransactionBlockRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'fail_on_prediction_failure': value.failOnPredictionFailure,
        'push_mode': PushModeToJSON(value.pushMode),
        'skip_prediction': value.skipPrediction,
        'chain': SuiChainUniqueIdToJSON(value.chain),
        'gas_config': SuiGasConfigToJSON(value.gasConfig),
        'inputs': ((value.inputs as Array<any>).map(SuiInputToJSON)),
        'commands': ((value.commands as Array<any>).map(SuiCommandToJSON)),
    };
}
