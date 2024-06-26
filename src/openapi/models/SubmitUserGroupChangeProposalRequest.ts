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
 * @interface SubmitUserGroupChangeProposalRequest
 */
export interface SubmitUserGroupChangeProposalRequest {
    /**
     * 
     * @type {string}
     * @memberof SubmitUserGroupChangeProposalRequest
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubmitUserGroupChangeProposalRequest
     */
    userIds?: Array<string>;
}

/**
 * Check if a given object implements the SubmitUserGroupChangeProposalRequest interface.
 */
export function instanceOfSubmitUserGroupChangeProposalRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SubmitUserGroupChangeProposalRequestFromJSON(json: any): SubmitUserGroupChangeProposalRequest {
    return SubmitUserGroupChangeProposalRequestFromJSONTyped(json, false);
}

export function SubmitUserGroupChangeProposalRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubmitUserGroupChangeProposalRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'userIds': !exists(json, 'user_ids') ? undefined : json['user_ids'],
    };
}

export function SubmitUserGroupChangeProposalRequestToJSON(value?: SubmitUserGroupChangeProposalRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'user_ids': value.userIds,
    };
}

