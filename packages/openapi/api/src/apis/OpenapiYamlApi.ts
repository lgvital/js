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

import * as runtime from '../runtime'

export interface OpenapiYamlRetrieveRequest {
  format?: OpenapiYamlRetrieveFormatEnum
  lang?: OpenapiYamlRetrieveLangEnum
}

/**
 *
 */
export class OpenapiYamlApi extends runtime.BaseAPI {
  /**
   * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
   */
  async openapiYamlRetrieveRaw(
    requestParameters: OpenapiYamlRetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<{ [key: string]: any }>> {
    const queryParameters: any = {}

    if (requestParameters.format !== undefined) {
      queryParameters['format'] = requestParameters.format
    }

    if (requestParameters.lang !== undefined) {
      queryParameters['lang'] = requestParameters.lang
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/openapi.yaml`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
   */
  async openapiYamlRetrieve(
    requestParameters: OpenapiYamlRetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<{ [key: string]: any }> {
    const response = await this.openapiYamlRetrieveRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }
}

/**
 * @export
 * @enum {string}
 */
export enum OpenapiYamlRetrieveFormatEnum {
  Json = 'json',
  Yaml = 'yaml',
}
/**
 * @export
 * @enum {string}
 */
export enum OpenapiYamlRetrieveLangEnum {
  Af = 'af',
  Ar = 'ar',
  ArDz = 'ar-dz',
  Ast = 'ast',
  Az = 'az',
  Be = 'be',
  Bg = 'bg',
  Bn = 'bn',
  Br = 'br',
  Bs = 'bs',
  Ca = 'ca',
  Cs = 'cs',
  Cy = 'cy',
  Da = 'da',
  De = 'de',
  Dsb = 'dsb',
  El = 'el',
  En = 'en',
  EnAu = 'en-au',
  EnGb = 'en-gb',
  Eo = 'eo',
  Es = 'es',
  EsAr = 'es-ar',
  EsCo = 'es-co',
  EsMx = 'es-mx',
  EsNi = 'es-ni',
  EsVe = 'es-ve',
  Et = 'et',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Fy = 'fy',
  Ga = 'ga',
  Gd = 'gd',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hsb = 'hsb',
  Hu = 'hu',
  Hy = 'hy',
  Ia = 'ia',
  Id = 'id',
  Ig = 'ig',
  Io = 'io',
  Is = 'is',
  It = 'it',
  Ja = 'ja',
  Ka = 'ka',
  Kab = 'kab',
  Kk = 'kk',
  Km = 'km',
  Kn = 'kn',
  Ko = 'ko',
  Ky = 'ky',
  Lb = 'lb',
  Lt = 'lt',
  Lv = 'lv',
  Mk = 'mk',
  Ml = 'ml',
  Mn = 'mn',
  Mr = 'mr',
  My = 'my',
  Nb = 'nb',
  Ne = 'ne',
  Nl = 'nl',
  Nn = 'nn',
  Os = 'os',
  Pa = 'pa',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt-br',
  Ro = 'ro',
  Ru = 'ru',
  Sk = 'sk',
  Sl = 'sl',
  Sq = 'sq',
  Sr = 'sr',
  SrLatn = 'sr-latn',
  Sv = 'sv',
  Sw = 'sw',
  Ta = 'ta',
  Te = 'te',
  Tg = 'tg',
  Th = 'th',
  Tk = 'tk',
  Tr = 'tr',
  Tt = 'tt',
  Udm = 'udm',
  Uk = 'uk',
  Ur = 'ur',
  Uz = 'uz',
  Vi = 'vi',
  ZhHans = 'zh-hans',
  ZhHant = 'zh-hant',
}
