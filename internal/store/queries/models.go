// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.22.0

package queries

import (
	"database/sql/driver"
	"fmt"
	"time"

	"github.com/google/uuid"
)

type SamlFlowStatus string

const (
	SamlFlowStatusInProgress SamlFlowStatus = "in_progress"
	SamlFlowStatusFailed     SamlFlowStatus = "failed"
	SamlFlowStatusSucceeded  SamlFlowStatus = "succeeded"
)

func (e *SamlFlowStatus) Scan(src interface{}) error {
	switch s := src.(type) {
	case []byte:
		*e = SamlFlowStatus(s)
	case string:
		*e = SamlFlowStatus(s)
	default:
		return fmt.Errorf("unsupported scan type for SamlFlowStatus: %T", src)
	}
	return nil
}

type NullSamlFlowStatus struct {
	SamlFlowStatus SamlFlowStatus
	Valid          bool // Valid is true if SamlFlowStatus is not NULL
}

// Scan implements the Scanner interface.
func (ns *NullSamlFlowStatus) Scan(value interface{}) error {
	if value == nil {
		ns.SamlFlowStatus, ns.Valid = "", false
		return nil
	}
	ns.Valid = true
	return ns.SamlFlowStatus.Scan(value)
}

// Value implements the driver Valuer interface.
func (ns NullSamlFlowStatus) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return string(ns.SamlFlowStatus), nil
}

type ApiKey struct {
	ID            uuid.UUID
	SecretValue   string
	EnvironmentID uuid.UUID
}

type AppOrganization struct {
	ID                 uuid.UUID
	GoogleHostedDomain *string
}

type AppSession struct {
	ID         uuid.UUID
	AppUserID  uuid.UUID
	CreateTime time.Time
	ExpireTime time.Time
	Token      string
}

type AppUser struct {
	ID                uuid.UUID
	AppOrganizationID uuid.UUID
	DisplayName       string
	Email             string
}

type EmailVerificationChallenge struct {
	ID          uuid.UUID
	Email       string
	ExpireTime  time.Time
	SecretToken string
}

type Environment struct {
	ID                uuid.UUID
	RedirectUrl       *string
	AppOrganizationID uuid.UUID
	DisplayName       *string
	AuthUrl           *string
}

type OnboardingState struct {
	AppOrganizationID          uuid.UUID
	OnboardingEnvironmentID    uuid.UUID
	OnboardingOrganizationID   uuid.UUID
	OnboardingSamlConnectionID uuid.UUID
	DummyidpAppID              string
}

type Organization struct {
	ID            uuid.UUID
	EnvironmentID uuid.UUID
	ExternalID    *string
}

type OrganizationDomain struct {
	ID             uuid.UUID
	OrganizationID uuid.UUID
	Domain         string
}

type SamlConnection struct {
	ID                 uuid.UUID
	OrganizationID     uuid.UUID
	IdpRedirectUrl     *string
	IdpX509Certificate []byte
	IdpEntityID        *string
	SpEntityID         string
	IsPrimary          bool
	SpAcsUrl           string
}

type SamlFlow struct {
	ID                                   uuid.UUID
	SamlConnectionID                     uuid.UUID
	AccessCode                           *uuid.UUID
	State                                string
	CreateTime                           time.Time
	ExpireTime                           time.Time
	Email                                *string
	SubjectIdpAttributes                 []byte
	UpdateTime                           time.Time
	AuthRedirectUrl                      *string
	GetRedirectTime                      *time.Time
	InitiateRequest                      *string
	InitiateTime                         *time.Time
	Assertion                            *string
	AppRedirectUrl                       *string
	ReceiveAssertionTime                 *time.Time
	RedeemTime                           *time.Time
	RedeemResponse                       []byte
	ErrorBadIssuer                       *string
	ErrorBadAudience                     *string
	ErrorBadSubjectID                    *string
	ErrorEmailOutsideOrganizationDomains *string
	Status                               SamlFlowStatus
	ErrorUnsignedAssertion               bool
}

type SchemaMigration struct {
	Version int64
	Dirty   bool
}
