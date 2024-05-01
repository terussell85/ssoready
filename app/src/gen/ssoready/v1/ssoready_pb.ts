// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file ssoready/v1/ssoready.proto (package ssoready.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message ssoready.v1.AppUser
 */
export class AppUser extends Message<AppUser> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * @generated from field: string email = 3;
   */
  email = "";

  constructor(data?: PartialMessage<AppUser>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.AppUser";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppUser {
    return new AppUser().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppUser {
    return new AppUser().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppUser {
    return new AppUser().fromJsonString(jsonString, options);
  }

  static equals(a: AppUser | PlainMessage<AppUser> | undefined, b: AppUser | PlainMessage<AppUser> | undefined): boolean {
    return proto3.util.equals(AppUser, a, b);
  }
}

/**
 * @generated from message ssoready.v1.Environment
 */
export class Environment extends Message<Environment> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string redirect_url = 2;
   */
  redirectUrl = "";

  /**
   * @generated from field: string display_name = 3;
   */
  displayName = "";

  constructor(data?: PartialMessage<Environment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.Environment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "redirect_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Environment {
    return new Environment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJsonString(jsonString, options);
  }

  static equals(a: Environment | PlainMessage<Environment> | undefined, b: Environment | PlainMessage<Environment> | undefined): boolean {
    return proto3.util.equals(Environment, a, b);
  }
}

/**
 * @generated from message ssoready.v1.Organization
 */
export class Organization extends Message<Organization> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string environment_id = 2;
   */
  environmentId = "";

  /**
   * @generated from field: string external_id = 3;
   */
  externalId = "";

  /**
   * @generated from field: repeated string domains = 4;
   */
  domains: string[] = [];

  constructor(data?: PartialMessage<Organization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.Organization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "external_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "domains", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization {
    return new Organization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJsonString(jsonString, options);
  }

  static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean {
    return proto3.util.equals(Organization, a, b);
  }
}

/**
 * @generated from message ssoready.v1.SAMLConnection
 */
export class SAMLConnection extends Message<SAMLConnection> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string organization_id = 2;
   */
  organizationId = "";

  /**
   * @generated from field: string idp_redirect_url = 3;
   */
  idpRedirectUrl = "";

  /**
   * @generated from field: bytes idp_x509_certificate = 4;
   */
  idpX509Certificate = new Uint8Array(0);

  /**
   * @generated from field: string idp_entity_id = 5;
   */
  idpEntityId = "";

  constructor(data?: PartialMessage<SAMLConnection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.SAMLConnection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "organization_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "idp_redirect_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "idp_x509_certificate", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "idp_entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SAMLConnection {
    return new SAMLConnection().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SAMLConnection {
    return new SAMLConnection().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SAMLConnection {
    return new SAMLConnection().fromJsonString(jsonString, options);
  }

  static equals(a: SAMLConnection | PlainMessage<SAMLConnection> | undefined, b: SAMLConnection | PlainMessage<SAMLConnection> | undefined): boolean {
    return proto3.util.equals(SAMLConnection, a, b);
  }
}

/**
 * @generated from message ssoready.v1.RedeemSAMLAccessTokenRequest
 */
export class RedeemSAMLAccessTokenRequest extends Message<RedeemSAMLAccessTokenRequest> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  constructor(data?: PartialMessage<RedeemSAMLAccessTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.RedeemSAMLAccessTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedeemSAMLAccessTokenRequest {
    return new RedeemSAMLAccessTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedeemSAMLAccessTokenRequest {
    return new RedeemSAMLAccessTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedeemSAMLAccessTokenRequest {
    return new RedeemSAMLAccessTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RedeemSAMLAccessTokenRequest | PlainMessage<RedeemSAMLAccessTokenRequest> | undefined, b: RedeemSAMLAccessTokenRequest | PlainMessage<RedeemSAMLAccessTokenRequest> | undefined): boolean {
    return proto3.util.equals(RedeemSAMLAccessTokenRequest, a, b);
  }
}

/**
 * @generated from message ssoready.v1.RedeemSAMLAccessTokenResponse
 */
export class RedeemSAMLAccessTokenResponse extends Message<RedeemSAMLAccessTokenResponse> {
  /**
   * @generated from field: string subject_idp_id = 1;
   */
  subjectIdpId = "";

  /**
   * @generated from field: map<string, string> subject_idp_attributes = 2;
   */
  subjectIdpAttributes: { [key: string]: string } = {};

  /**
   * @generated from field: string organization_id = 3;
   */
  organizationId = "";

  /**
   * @generated from field: string organization_external_id = 5;
   */
  organizationExternalId = "";

  /**
   * @generated from field: string environment_id = 4;
   */
  environmentId = "";

  constructor(data?: PartialMessage<RedeemSAMLAccessTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.RedeemSAMLAccessTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subject_idp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subject_idp_attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "organization_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "organization_external_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedeemSAMLAccessTokenResponse {
    return new RedeemSAMLAccessTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedeemSAMLAccessTokenResponse {
    return new RedeemSAMLAccessTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedeemSAMLAccessTokenResponse {
    return new RedeemSAMLAccessTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RedeemSAMLAccessTokenResponse | PlainMessage<RedeemSAMLAccessTokenResponse> | undefined, b: RedeemSAMLAccessTokenResponse | PlainMessage<RedeemSAMLAccessTokenResponse> | undefined): boolean {
    return proto3.util.equals(RedeemSAMLAccessTokenResponse, a, b);
  }
}

/**
 * @generated from message ssoready.v1.SignInRequest
 */
export class SignInRequest extends Message<SignInRequest> {
  /**
   * @generated from field: string google_credential = 1;
   */
  googleCredential = "";

  constructor(data?: PartialMessage<SignInRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.SignInRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "google_credential", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInRequest {
    return new SignInRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SignInRequest | PlainMessage<SignInRequest> | undefined, b: SignInRequest | PlainMessage<SignInRequest> | undefined): boolean {
    return proto3.util.equals(SignInRequest, a, b);
  }
}

/**
 * @generated from message ssoready.v1.SignInResponse
 */
export class SignInResponse extends Message<SignInResponse> {
  /**
   * @generated from field: string session_token = 1;
   */
  sessionToken = "";

  constructor(data?: PartialMessage<SignInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.SignInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "session_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInResponse {
    return new SignInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SignInResponse | PlainMessage<SignInResponse> | undefined, b: SignInResponse | PlainMessage<SignInResponse> | undefined): boolean {
    return proto3.util.equals(SignInResponse, a, b);
  }
}

/**
 * @generated from message ssoready.v1.WhoamiRequest
 */
export class WhoamiRequest extends Message<WhoamiRequest> {
  constructor(data?: PartialMessage<WhoamiRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.WhoamiRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WhoamiRequest {
    return new WhoamiRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WhoamiRequest {
    return new WhoamiRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WhoamiRequest {
    return new WhoamiRequest().fromJsonString(jsonString, options);
  }

  static equals(a: WhoamiRequest | PlainMessage<WhoamiRequest> | undefined, b: WhoamiRequest | PlainMessage<WhoamiRequest> | undefined): boolean {
    return proto3.util.equals(WhoamiRequest, a, b);
  }
}

/**
 * @generated from message ssoready.v1.WhoamiResponse
 */
export class WhoamiResponse extends Message<WhoamiResponse> {
  /**
   * @generated from field: string app_user_id = 1;
   */
  appUserId = "";

  /**
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * @generated from field: string email = 3;
   */
  email = "";

  constructor(data?: PartialMessage<WhoamiResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.WhoamiResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "app_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WhoamiResponse {
    return new WhoamiResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WhoamiResponse {
    return new WhoamiResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WhoamiResponse {
    return new WhoamiResponse().fromJsonString(jsonString, options);
  }

  static equals(a: WhoamiResponse | PlainMessage<WhoamiResponse> | undefined, b: WhoamiResponse | PlainMessage<WhoamiResponse> | undefined): boolean {
    return proto3.util.equals(WhoamiResponse, a, b);
  }
}

/**
 * @generated from message ssoready.v1.ListEnvironmentsRequest
 */
export class ListEnvironmentsRequest extends Message<ListEnvironmentsRequest> {
  /**
   * @generated from field: string page_token = 1;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListEnvironmentsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.ListEnvironmentsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEnvironmentsRequest {
    return new ListEnvironmentsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEnvironmentsRequest {
    return new ListEnvironmentsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEnvironmentsRequest {
    return new ListEnvironmentsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListEnvironmentsRequest | PlainMessage<ListEnvironmentsRequest> | undefined, b: ListEnvironmentsRequest | PlainMessage<ListEnvironmentsRequest> | undefined): boolean {
    return proto3.util.equals(ListEnvironmentsRequest, a, b);
  }
}

/**
 * @generated from message ssoready.v1.ListEnvironmentsResponse
 */
export class ListEnvironmentsResponse extends Message<ListEnvironmentsResponse> {
  /**
   * @generated from field: repeated ssoready.v1.Environment environments = 1;
   */
  environments: Environment[] = [];

  /**
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListEnvironmentsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.ListEnvironmentsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environments", kind: "message", T: Environment, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEnvironmentsResponse {
    return new ListEnvironmentsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEnvironmentsResponse {
    return new ListEnvironmentsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEnvironmentsResponse {
    return new ListEnvironmentsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListEnvironmentsResponse | PlainMessage<ListEnvironmentsResponse> | undefined, b: ListEnvironmentsResponse | PlainMessage<ListEnvironmentsResponse> | undefined): boolean {
    return proto3.util.equals(ListEnvironmentsResponse, a, b);
  }
}

/**
 * @generated from message ssoready.v1.GetEnvironmentRequest
 */
export class GetEnvironmentRequest extends Message<GetEnvironmentRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetEnvironmentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.GetEnvironmentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEnvironmentRequest {
    return new GetEnvironmentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEnvironmentRequest {
    return new GetEnvironmentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEnvironmentRequest {
    return new GetEnvironmentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetEnvironmentRequest | PlainMessage<GetEnvironmentRequest> | undefined, b: GetEnvironmentRequest | PlainMessage<GetEnvironmentRequest> | undefined): boolean {
    return proto3.util.equals(GetEnvironmentRequest, a, b);
  }
}

/**
 * @generated from message ssoready.v1.ListOrganizationsRequest
 */
export class ListOrganizationsRequest extends Message<ListOrganizationsRequest> {
  /**
   * @generated from field: string environment_id = 1;
   */
  environmentId = "";

  /**
   * @generated from field: string page_token = 2;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListOrganizationsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.ListOrganizationsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganizationsRequest {
    return new ListOrganizationsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganizationsRequest {
    return new ListOrganizationsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganizationsRequest {
    return new ListOrganizationsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListOrganizationsRequest | PlainMessage<ListOrganizationsRequest> | undefined, b: ListOrganizationsRequest | PlainMessage<ListOrganizationsRequest> | undefined): boolean {
    return proto3.util.equals(ListOrganizationsRequest, a, b);
  }
}

/**
 * @generated from message ssoready.v1.ListOrganizationsResponse
 */
export class ListOrganizationsResponse extends Message<ListOrganizationsResponse> {
  /**
   * @generated from field: repeated ssoready.v1.Organization organizations = 1;
   */
  organizations: Organization[] = [];

  /**
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListOrganizationsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.ListOrganizationsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "organizations", kind: "message", T: Organization, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganizationsResponse {
    return new ListOrganizationsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganizationsResponse {
    return new ListOrganizationsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganizationsResponse {
    return new ListOrganizationsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListOrganizationsResponse | PlainMessage<ListOrganizationsResponse> | undefined, b: ListOrganizationsResponse | PlainMessage<ListOrganizationsResponse> | undefined): boolean {
    return proto3.util.equals(ListOrganizationsResponse, a, b);
  }
}

/**
 * @generated from message ssoready.v1.ListSAMLConnectionsRequest
 */
export class ListSAMLConnectionsRequest extends Message<ListSAMLConnectionsRequest> {
  /**
   * @generated from field: string organization_id = 1;
   */
  organizationId = "";

  /**
   * @generated from field: string page_token = 2;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListSAMLConnectionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.ListSAMLConnectionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "organization_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSAMLConnectionsRequest {
    return new ListSAMLConnectionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSAMLConnectionsRequest {
    return new ListSAMLConnectionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSAMLConnectionsRequest {
    return new ListSAMLConnectionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSAMLConnectionsRequest | PlainMessage<ListSAMLConnectionsRequest> | undefined, b: ListSAMLConnectionsRequest | PlainMessage<ListSAMLConnectionsRequest> | undefined): boolean {
    return proto3.util.equals(ListSAMLConnectionsRequest, a, b);
  }
}

/**
 * @generated from message ssoready.v1.ListSAMLConnectionsResponse
 */
export class ListSAMLConnectionsResponse extends Message<ListSAMLConnectionsResponse> {
  /**
   * @generated from field: repeated ssoready.v1.SAMLConnection saml_connections = 1;
   */
  samlConnections: SAMLConnection[] = [];

  /**
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListSAMLConnectionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ssoready.v1.ListSAMLConnectionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "saml_connections", kind: "message", T: SAMLConnection, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSAMLConnectionsResponse {
    return new ListSAMLConnectionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSAMLConnectionsResponse {
    return new ListSAMLConnectionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSAMLConnectionsResponse {
    return new ListSAMLConnectionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSAMLConnectionsResponse | PlainMessage<ListSAMLConnectionsResponse> | undefined, b: ListSAMLConnectionsResponse | PlainMessage<ListSAMLConnectionsResponse> | undefined): boolean {
    return proto3.util.equals(ListSAMLConnectionsResponse, a, b);
  }
}

