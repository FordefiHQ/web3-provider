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
import type { LogMessageArgument } from './LogMessageArgument';
import {
    LogMessageArgumentFromJSON,
    LogMessageArgumentFromJSONTyped,
    LogMessageArgumentToJSON,
    LogMessageArgumentToJSONTyped,
} from './LogMessageArgument';
import type { LogLevel } from './LogLevel';
import {
    LogLevelFromJSON,
    LogLevelFromJSONTyped,
    LogLevelToJSON,
    LogLevelToJSONTyped,
} from './LogLevel';

/**
 * 
 * @export
 * @interface LogMessage
 */
export interface LogMessage {
    /**
     * 
     * @type {LogLevel}
     * @memberof LogMessage
     */
    level: LogLevel;
    /**
     * 
     * @type {string}
     * @memberof LogMessage
     */
    message: string;
    /**
     * 
     * @type {Array<LogMessageArgument>}
     * @memberof LogMessage
     */
    arguments?: Array<LogMessageArgument>;
}



/**
 * Check if a given object implements the LogMessage interface.
 */
export function instanceOfLogMessage(value: object): value is LogMessage {
    if (!('level' in value) || value['level'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function LogMessageFromJSON(json: any): LogMessage {
    return LogMessageFromJSONTyped(json, false);
}

export function LogMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'level': LogLevelFromJSON(json['level']),
        'message': json['message'],
        'arguments': json['arguments'] == null ? undefined : ((json['arguments'] as Array<any>).map(LogMessageArgumentFromJSON)),
    };
}

export function LogMessageToJSON(json: any): LogMessage {
    return LogMessageToJSONTyped(json, false);
}

export function LogMessageToJSONTyped(value?: LogMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'level': LogLevelToJSON(value['level']),
        'message': value['message'],
        'arguments': value['arguments'] == null ? undefined : ((value['arguments'] as Array<any>).map(LogMessageArgumentToJSON)),
    };
}

