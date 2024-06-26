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
import type { AdminQuorumProposal } from './AdminQuorumProposal';
import {
    AdminQuorumProposalFromJSON,
    AdminQuorumProposalFromJSONTyped,
    AdminQuorumProposalToJSON,
} from './AdminQuorumProposal';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface SetAdminQuorumResponse
 */
export interface SetAdminQuorumResponse {
    /**
     * 
     * @type {number}
     * @memberof SetAdminQuorumResponse
     */
    currentQuorumSize: number;
    /**
     * 
     * @type {number}
     * @memberof SetAdminQuorumResponse
     */
    maxAllowedQuorumSize: number;
    /**
     * 
     * @type {number}
     * @memberof SetAdminQuorumResponse
     */
    minAllowedQuorumSize: number;
    /**
     * 
     * @type {UserRef}
     * @memberof SetAdminQuorumResponse
     */
    modifiedBy?: UserRef;
    /**
     * 
     * @type {Date}
     * @memberof SetAdminQuorumResponse
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {AdminQuorumProposal}
     * @memberof SetAdminQuorumResponse
     */
    proposedChange?: AdminQuorumProposal;
}

/**
 * Check if a given object implements the SetAdminQuorumResponse interface.
 */
export function instanceOfSetAdminQuorumResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currentQuorumSize" in value;
    isInstance = isInstance && "maxAllowedQuorumSize" in value;
    isInstance = isInstance && "minAllowedQuorumSize" in value;

    return isInstance;
}

export function SetAdminQuorumResponseFromJSON(json: any): SetAdminQuorumResponse {
    return SetAdminQuorumResponseFromJSONTyped(json, false);
}

export function SetAdminQuorumResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetAdminQuorumResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentQuorumSize': json['current_quorum_size'],
        'maxAllowedQuorumSize': json['max_allowed_quorum_size'],
        'minAllowedQuorumSize': json['min_allowed_quorum_size'],
        'modifiedBy': !exists(json, 'modified_by') ? undefined : UserRefFromJSON(json['modified_by']),
        'modifiedAt': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'proposedChange': !exists(json, 'proposed_change') ? undefined : AdminQuorumProposalFromJSON(json['proposed_change']),
    };
}

export function SetAdminQuorumResponseToJSON(value?: SetAdminQuorumResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_quorum_size': value.currentQuorumSize,
        'max_allowed_quorum_size': value.maxAllowedQuorumSize,
        'min_allowed_quorum_size': value.minAllowedQuorumSize,
        'modified_by': UserRefToJSON(value.modifiedBy),
        'modified_at': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'proposed_change': AdminQuorumProposalToJSON(value.proposedChange),
    };
}

