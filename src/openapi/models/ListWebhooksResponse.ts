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
import type { Webhook } from './Webhook';
import {
    WebhookFromJSON,
    WebhookFromJSONTyped,
    WebhookToJSON,
    WebhookToJSONTyped,
} from './Webhook';

/**
 * 
 * @export
 * @interface ListWebhooksResponse
 */
export interface ListWebhooksResponse {
    /**
     * 
     * @type {Array<Webhook>}
     * @memberof ListWebhooksResponse
     */
    webhooks: Array<Webhook>;
}

/**
 * Check if a given object implements the ListWebhooksResponse interface.
 */
export function instanceOfListWebhooksResponse(value: object): value is ListWebhooksResponse {
    if (!('webhooks' in value) || value['webhooks'] === undefined) return false;
    return true;
}

export function ListWebhooksResponseFromJSON(json: any): ListWebhooksResponse {
    return ListWebhooksResponseFromJSONTyped(json, false);
}

export function ListWebhooksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListWebhooksResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'webhooks': ((json['webhooks'] as Array<any>).map(WebhookFromJSON)),
    };
}

export function ListWebhooksResponseToJSON(json: any): ListWebhooksResponse {
    return ListWebhooksResponseToJSONTyped(json, false);
}

export function ListWebhooksResponseToJSONTyped(value?: ListWebhooksResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'webhooks': ((value['webhooks'] as Array<any>).map(WebhookToJSON)),
    };
}

