package apiservice

import (
	"context"

	"connectrpc.com/connect"
	ssoreadyv1 "github.com/ssoready/ssoready/internal/gen/ssoready/v1"
)

func (s *Service) RedeemSAMLAccessToken(ctx context.Context, req *connect.Request[ssoreadyv1.RedeemSAMLAccessTokenRequest]) (*connect.Response[ssoreadyv1.RedeemSAMLAccessTokenResponse], error) {
	res, err := s.Store.RedeemSAMLAccessToken(ctx, req.Msg)
	if err != nil {
		return nil, err
	}

	return connect.NewResponse(res), nil
}