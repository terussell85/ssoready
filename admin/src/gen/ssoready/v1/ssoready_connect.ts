// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file ssoready/v1/ssoready.proto (package ssoready.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AdminCreateSAMLConnectionRequest, AdminCreateSAMLConnectionResponse, AdminGetSAMLConnectionRequest, AdminGetSAMLConnectionResponse, AdminListSAMLConnectionsRequest, AdminListSAMLConnectionsResponse, AdminParseSAMLMetadataRequest, AdminParseSAMLMetadataResponse, AdminRedeemOneTimeTokenRequest, AdminRedeemOneTimeTokenResponse, AdminUpdateSAMLConnectionRequest, AdminUpdateSAMLConnectionResponse, APIKey, AppGetSCIMGroupRequest, AppGetSCIMUserRequest, AppListSCIMGroupsRequest, AppListSCIMGroupsResponse, AppListSCIMUsersRequest, AppListSCIMUsersResponse, CreateAdminSetupURLRequest, CreateAdminSetupURLResponse, CreateAPIKeyRequest, CreateEnvironmentRequest, CreateOrganizationRequest, CreateSAMLConnectionRequest, CreateSAMLOAuthClientRequest, CreateSCIMDirectoryRequest, DeleteAPIKeyRequest, DeleteSAMLOAuthClientRequest, Environment, GetAPIKeyRequest, GetAppOrganizationRequest, GetAppOrganizationResponse, GetEnvironmentRequest, GetOnboardingStateRequest, GetOnboardingStateResponse, GetOrganizationRequest, GetSAMLConnectionRequest, GetSAMLFlowRequest, GetSAMLOAuthClientRequest, GetSAMLRedirectURLRequest, GetSAMLRedirectURLResponse, GetSCIMDirectoryRequest, GetSCIMGroupRequest, GetSCIMGroupResponse, GetSCIMUserRequest, GetSCIMUserResponse, ListAPIKeysRequest, ListAPIKeysResponse, ListAppUsersRequest, ListAppUsersResponse, ListEnvironmentsRequest, ListEnvironmentsResponse, ListOrganizationsRequest, ListOrganizationsResponse, ListSAMLConnectionsRequest, ListSAMLConnectionsResponse, ListSAMLFlowsRequest, ListSAMLFlowsResponse, ListSAMLOAuthClientsRequest, ListSAMLOAuthClientsResponse, ListSCIMDirectoriesRequest, ListSCIMDirectoriesResponse, ListSCIMGroupsRequest, ListSCIMGroupsResponse, ListSCIMUsersRequest, ListSCIMUsersResponse, OnboardingGetSAMLRedirectURLRequest, OnboardingRedeemSAMLAccessCodeRequest, Organization, ParseSAMLMetadataRequest, ParseSAMLMetadataResponse, RedeemSAMLAccessCodeRequest, RedeemSAMLAccessCodeResponse, RotateSCIMDirectoryBearerTokenRequest, RotateSCIMDirectoryBearerTokenResponse, SAMLConnection, SAMLFlow, SAMLOAuthClient, SCIMDirectory, SCIMGroup, SCIMUser, SignInRequest, SignInResponse, SignOutRequest, SignOutResponse, UpdateEnvironmentRequest, UpdateOnboardingStateRequest, UpdateOrganizationRequest, UpdateSAMLConnectionRequest, UpdateSCIMDirectoryRequest, VerifyEmailRequest, WhoamiRequest, WhoamiResponse } from "./ssoready_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service ssoready.v1.SSOReadyService
 */
export const SSOReadyService = {
  typeName: "ssoready.v1.SSOReadyService",
  methods: {
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLRedirectURL
     */
    getSAMLRedirectURL: {
      name: "GetSAMLRedirectURL",
      I: GetSAMLRedirectURLRequest,
      O: GetSAMLRedirectURLResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.RedeemSAMLAccessCode
     */
    redeemSAMLAccessCode: {
      name: "RedeemSAMLAccessCode",
      I: RedeemSAMLAccessCodeRequest,
      O: RedeemSAMLAccessCodeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListSCIMUsers
     */
    listSCIMUsers: {
      name: "ListSCIMUsers",
      I: ListSCIMUsersRequest,
      O: ListSCIMUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetSCIMUser
     */
    getSCIMUser: {
      name: "GetSCIMUser",
      I: GetSCIMUserRequest,
      O: GetSCIMUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListSCIMGroups
     */
    listSCIMGroups: {
      name: "ListSCIMGroups",
      I: ListSCIMGroupsRequest,
      O: ListSCIMGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetSCIMGroup
     */
    getSCIMGroup: {
      name: "GetSCIMGroup",
      I: GetSCIMGroupRequest,
      O: GetSCIMGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.VerifyEmail
     */
    verifyEmail: {
      name: "VerifyEmail",
      I: VerifyEmailRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.SignIn
     */
    signIn: {
      name: "SignIn",
      I: SignInRequest,
      O: SignInResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.SignOut
     */
    signOut: {
      name: "SignOut",
      I: SignOutRequest,
      O: SignOutResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.Whoami
     */
    whoami: {
      name: "Whoami",
      I: WhoamiRequest,
      O: WhoamiResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetOnboardingState
     */
    getOnboardingState: {
      name: "GetOnboardingState",
      I: GetOnboardingStateRequest,
      O: GetOnboardingStateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.UpdateOnboardingState
     */
    updateOnboardingState: {
      name: "UpdateOnboardingState",
      I: UpdateOnboardingStateRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.OnboardingGetSAMLRedirectURL
     */
    onboardingGetSAMLRedirectURL: {
      name: "OnboardingGetSAMLRedirectURL",
      I: OnboardingGetSAMLRedirectURLRequest,
      O: GetSAMLRedirectURLResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.OnboardingRedeemSAMLAccessCode
     */
    onboardingRedeemSAMLAccessCode: {
      name: "OnboardingRedeemSAMLAccessCode",
      I: OnboardingRedeemSAMLAccessCodeRequest,
      O: RedeemSAMLAccessCodeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetAppOrganization
     */
    getAppOrganization: {
      name: "GetAppOrganization",
      I: GetAppOrganizationRequest,
      O: GetAppOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListAppUsers
     */
    listAppUsers: {
      name: "ListAppUsers",
      I: ListAppUsersRequest,
      O: ListAppUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListEnvironments
     */
    listEnvironments: {
      name: "ListEnvironments",
      I: ListEnvironmentsRequest,
      O: ListEnvironmentsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetEnvironment
     */
    getEnvironment: {
      name: "GetEnvironment",
      I: GetEnvironmentRequest,
      O: Environment,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.CreateEnvironment
     */
    createEnvironment: {
      name: "CreateEnvironment",
      I: CreateEnvironmentRequest,
      O: Environment,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.UpdateEnvironment
     */
    updateEnvironment: {
      name: "UpdateEnvironment",
      I: UpdateEnvironmentRequest,
      O: Environment,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListAPIKeys
     */
    listAPIKeys: {
      name: "ListAPIKeys",
      I: ListAPIKeysRequest,
      O: ListAPIKeysResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetAPIKey
     */
    getAPIKey: {
      name: "GetAPIKey",
      I: GetAPIKeyRequest,
      O: APIKey,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.CreateAPIKey
     */
    createAPIKey: {
      name: "CreateAPIKey",
      I: CreateAPIKeyRequest,
      O: APIKey,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.DeleteAPIKey
     */
    deleteAPIKey: {
      name: "DeleteAPIKey",
      I: DeleteAPIKeyRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLOAuthClients
     */
    listSAMLOAuthClients: {
      name: "ListSAMLOAuthClients",
      I: ListSAMLOAuthClientsRequest,
      O: ListSAMLOAuthClientsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLOAuthClient
     */
    getSAMLOAuthClient: {
      name: "GetSAMLOAuthClient",
      I: GetSAMLOAuthClientRequest,
      O: SAMLOAuthClient,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.CreateSAMLOAuthClient
     */
    createSAMLOAuthClient: {
      name: "CreateSAMLOAuthClient",
      I: CreateSAMLOAuthClientRequest,
      O: SAMLOAuthClient,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.DeleteSAMLOAuthClient
     */
    deleteSAMLOAuthClient: {
      name: "DeleteSAMLOAuthClient",
      I: DeleteSAMLOAuthClientRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListOrganizations
     */
    listOrganizations: {
      name: "ListOrganizations",
      I: ListOrganizationsRequest,
      O: ListOrganizationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetOrganization
     */
    getOrganization: {
      name: "GetOrganization",
      I: GetOrganizationRequest,
      O: Organization,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.CreateOrganization
     */
    createOrganization: {
      name: "CreateOrganization",
      I: CreateOrganizationRequest,
      O: Organization,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.UpdateOrganization
     */
    updateOrganization: {
      name: "UpdateOrganization",
      I: UpdateOrganizationRequest,
      O: Organization,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.CreateAdminSetupURL
     */
    createAdminSetupURL: {
      name: "CreateAdminSetupURL",
      I: CreateAdminSetupURLRequest,
      O: CreateAdminSetupURLResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLConnections
     */
    listSAMLConnections: {
      name: "ListSAMLConnections",
      I: ListSAMLConnectionsRequest,
      O: ListSAMLConnectionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLConnection
     */
    getSAMLConnection: {
      name: "GetSAMLConnection",
      I: GetSAMLConnectionRequest,
      O: SAMLConnection,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.CreateSAMLConnection
     */
    createSAMLConnection: {
      name: "CreateSAMLConnection",
      I: CreateSAMLConnectionRequest,
      O: SAMLConnection,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.UpdateSAMLConnection
     */
    updateSAMLConnection: {
      name: "UpdateSAMLConnection",
      I: UpdateSAMLConnectionRequest,
      O: SAMLConnection,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLFlows
     */
    listSAMLFlows: {
      name: "ListSAMLFlows",
      I: ListSAMLFlowsRequest,
      O: ListSAMLFlowsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLFlow
     */
    getSAMLFlow: {
      name: "GetSAMLFlow",
      I: GetSAMLFlowRequest,
      O: SAMLFlow,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ParseSAMLMetadata
     */
    parseSAMLMetadata: {
      name: "ParseSAMLMetadata",
      I: ParseSAMLMetadataRequest,
      O: ParseSAMLMetadataResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.ListSCIMDirectories
     */
    listSCIMDirectories: {
      name: "ListSCIMDirectories",
      I: ListSCIMDirectoriesRequest,
      O: ListSCIMDirectoriesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.GetSCIMDirectory
     */
    getSCIMDirectory: {
      name: "GetSCIMDirectory",
      I: GetSCIMDirectoryRequest,
      O: SCIMDirectory,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.CreateSCIMDirectory
     */
    createSCIMDirectory: {
      name: "CreateSCIMDirectory",
      I: CreateSCIMDirectoryRequest,
      O: SCIMDirectory,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.UpdateSCIMDirectory
     */
    updateSCIMDirectory: {
      name: "UpdateSCIMDirectory",
      I: UpdateSCIMDirectoryRequest,
      O: SCIMDirectory,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.RotateSCIMDirectoryBearerToken
     */
    rotateSCIMDirectoryBearerToken: {
      name: "RotateSCIMDirectoryBearerToken",
      I: RotateSCIMDirectoryBearerTokenRequest,
      O: RotateSCIMDirectoryBearerTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AppListSCIMUsers
     */
    appListSCIMUsers: {
      name: "AppListSCIMUsers",
      I: AppListSCIMUsersRequest,
      O: AppListSCIMUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AppGetSCIMUser
     */
    appGetSCIMUser: {
      name: "AppGetSCIMUser",
      I: AppGetSCIMUserRequest,
      O: SCIMUser,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AppListSCIMGroups
     */
    appListSCIMGroups: {
      name: "AppListSCIMGroups",
      I: AppListSCIMGroupsRequest,
      O: AppListSCIMGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AppGetSCIMGroup
     */
    appGetSCIMGroup: {
      name: "AppGetSCIMGroup",
      I: AppGetSCIMGroupRequest,
      O: SCIMGroup,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AdminRedeemOneTimeToken
     */
    adminRedeemOneTimeToken: {
      name: "AdminRedeemOneTimeToken",
      I: AdminRedeemOneTimeTokenRequest,
      O: AdminRedeemOneTimeTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AdminListSAMLConnections
     */
    adminListSAMLConnections: {
      name: "AdminListSAMLConnections",
      I: AdminListSAMLConnectionsRequest,
      O: AdminListSAMLConnectionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AdminGetSAMLConnection
     */
    adminGetSAMLConnection: {
      name: "AdminGetSAMLConnection",
      I: AdminGetSAMLConnectionRequest,
      O: AdminGetSAMLConnectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AdminCreateSAMLConnection
     */
    adminCreateSAMLConnection: {
      name: "AdminCreateSAMLConnection",
      I: AdminCreateSAMLConnectionRequest,
      O: AdminCreateSAMLConnectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AdminUpdateSAMLConnection
     */
    adminUpdateSAMLConnection: {
      name: "AdminUpdateSAMLConnection",
      I: AdminUpdateSAMLConnectionRequest,
      O: AdminUpdateSAMLConnectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ssoready.v1.SSOReadyService.AdminParseSAMLMetadata
     */
    adminParseSAMLMetadata: {
      name: "AdminParseSAMLMetadata",
      I: AdminParseSAMLMetadataRequest,
      O: AdminParseSAMLMetadataResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
