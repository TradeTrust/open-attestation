import { SchemaId } from "./document";

export interface WrapDocumentOption {
  externalSchemaId?: string;
  version?: SchemaId;
}
export interface WrapDocumentOptionV2 {
  externalSchemaId?: string;
  version?: SchemaId.v2;
}
export interface WrapDocumentOptionV3 {
  externalSchemaId?: string;
  version: SchemaId.v3;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WrapDocumentOptionV4 {
  // If any, add options to wrap utility
}
