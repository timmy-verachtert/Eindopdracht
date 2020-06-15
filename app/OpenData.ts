export interface FieldAliases {
    OBJECTID: string;
    NAAM: string;
    TYPE: string;
    STRAATNAAM: string;
    DISTRICT: string;
    POSTCODE: string;
    CLUSTER: string;
    BEHEERDER: string;
    Shape_Length: string;
    Shape_Area: string;
    NAAMLABEL: string;
    STRAATNAAMLABEL: string;
    ALTERNATIEVE_NAMEN: string;
    GISID: string;
}

export interface SpatialReference {
    wkid: number;
    latestWkid: number;
}

export interface Field {
    name: string;
    type: string;
    alias: string;
    length?: number;
}

export interface Attributes {
    OBJECTID: number;
    NAAM: string;
    TYPE: string;
    STRAATNAAM: string;
    DISTRICT: string;
    POSTCODE: string;
    CLUSTER: string;
    BEHEERDER: string;
    Shape_Length: number;
    Shape_Area: number;
    NAAMLABEL: string;
    STRAATNAAMLABEL: string;
    ALTERNATIEVE_NAMEN: string;
    GISID: string;
}

export interface Geometry {
    rings: number[][][];
}

export interface Feature {
    attributes: Attributes;
    geometry: Geometry;
}

export interface RootObject {
    displayFieldName: string;
    fieldAliases: FieldAliases;
    geometryType: string;
    spatialReference: SpatialReference;
    fields: Field[];
    features: Feature[];
}
