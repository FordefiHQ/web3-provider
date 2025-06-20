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
 * @interface CreateExchangeExternalWithdrawRequestExplicitAmount
 */
export interface CreateExchangeExternalWithdrawRequestExplicitAmount {
    /**
     * 
     * @type {string}
     * @memberof CreateExchangeExternalWithdrawRequestExplicitAmount
     */
    type: CreateExchangeExternalWithdrawRequestExplicitAmountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateExchangeExternalWithdrawRequestExplicitAmount
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateExchangeExternalWithdrawRequestExplicitAmount
     */
    isNetAmount?: boolean;
}


/**
 * 
 */
const CreateExchangeExternalWithdrawRequestExplicitAmountTypeEnum = {
    value: 'value'
} as const;
type CreateExchangeExternalWithdrawRequestExplicitAmountTypeEnum = typeof CreateExchangeExternalWithdrawRequestExplicitAmountTypeEnum[keyof typeof CreateExchangeExternalWithdrawRequestExplicitAmountTypeEnum];

export function CreateExchangeExternalWithdrawRequestExplicitAmountToJSON(json: any): CreateExchangeExternalWithdrawRequestExplicitAmount {
    return CreateExchangeExternalWithdrawRequestExplicitAmountToJSONTyped(json, false);
}

function CreateExchangeExternalWithdrawRequestExplicitAmountToJSONTyped(value?: CreateExchangeExternalWithdrawRequestExplicitAmount | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'value': value['value'],
        'is_net_amount': value['isNetAmount'],
    };
}
