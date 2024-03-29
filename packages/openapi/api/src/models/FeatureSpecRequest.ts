/* tslint:disable */
/* eslint-disable */
/**
 * Iron Plans API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
import {
  AggregationEnum,
  AggregationEnumFromJSON,
  AggregationEnumFromJSONTyped,
  AggregationEnumToJSON,
  RecordPeriodEnum,
  RecordPeriodEnumFromJSON,
  RecordPeriodEnumFromJSONTyped,
  RecordPeriodEnumToJSON,
} from './'

/**
 *
 * @export
 * @interface FeatureSpecRequest
 */
export interface FeatureSpecRequest {
  /**
   *
   * @type {string}
   * @memberof FeatureSpecRequest
   */
  name: string
  /**
   *
   * @type {RecordPeriodEnum}
   * @memberof FeatureSpecRequest
   */
  recordPeriod?: RecordPeriodEnum
  /**
   *
   * @type {AggregationEnum}
   * @memberof FeatureSpecRequest
   */
  aggregation?: AggregationEnum
  /**
   *
   * @type {number}
   * @memberof FeatureSpecRequest
   */
  maxLimit?: number | null
  /**
   * Amount in cents
   * @type {number}
   * @memberof FeatureSpecRequest
   */
  unitPrice?: number | null
  /**
   *
   * @type {string}
   * @memberof FeatureSpecRequest
   */
  providerId?: string
}

export function FeatureSpecRequestFromJSON(json: any): FeatureSpecRequest {
  return FeatureSpecRequestFromJSONTyped(json, false)
}

export function FeatureSpecRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FeatureSpecRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    recordPeriod: !exists(json, 'record_period')
      ? undefined
      : RecordPeriodEnumFromJSON(json['record_period']),
    aggregation: !exists(json, 'aggregation')
      ? undefined
      : AggregationEnumFromJSON(json['aggregation']),
    maxLimit: !exists(json, 'max_limit') ? undefined : json['max_limit'],
    unitPrice: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    providerId: !exists(json, 'provider_id') ? undefined : json['provider_id'],
  }
}

export function FeatureSpecRequestToJSON(
  value?: FeatureSpecRequest | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    record_period: RecordPeriodEnumToJSON(value.recordPeriod),
    aggregation: AggregationEnumToJSON(value.aggregation),
    max_limit: value.maxLimit,
    unit_price: value.unitPrice,
    provider_id: value.providerId,
  }
}
