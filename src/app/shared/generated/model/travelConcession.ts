/**
 * onecx-consessions internal service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TravelOffering } from './travelOffering';


export interface TravelConcession { 
    modificationCount?: number;
    creationDate?: string;
    creationUser?: string;
    modificationDate?: string;
    modificationUser?: string;
    id?: string;
    state?: string;
    customerRelationToPrincipal?: string;
    principalRole?: string;
    offering?: TravelOffering;
}
