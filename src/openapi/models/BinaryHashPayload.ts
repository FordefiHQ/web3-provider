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
 * @interface BinaryHashPayload
 */
export interface BinaryHashPayload {
    /**
     * 
     * @type {string}
     * @memberof BinaryHashPayload
     */
    format: BinaryHashPayloadFormatEnum;
    /**
     * 
     * @type {string}
     * @memberof BinaryHashPayload
     */
    hashBinary: string;
}


/**
 * 
 */
const BinaryHashPayloadFormatEnum = {
    hashBinary: 'hash_binary'
} as const;
type BinaryHashPayloadFormatEnum = typeof BinaryHashPayloadFormatEnum[keyof typeof BinaryHashPayloadFormatEnum];

export function BinaryHashPayloadToJSON(json: any): BinaryHashPayload {
    return BinaryHashPayloadToJSONTyped(json, false);
}

function BinaryHashPayloadToJSONTyped(value?: BinaryHashPayload | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'format': value['format'],
        'hash_binary': value['hashBinary'],
    };
}
