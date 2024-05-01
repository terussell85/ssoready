import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@connectrpc/connect-query";
import {
  getEnvironment,
  listOrganizations,
} from "@/gen/ssoready/v1/ssoready-SSOReadyService_connectquery";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export function ViewEnvironmentPage() {
  const { environmentId } = useParams();
  const { data: environment } = useQuery(getEnvironment, {
    id: environmentId,
  });
  const { data: listOrgsRes } = useQuery(listOrganizations, {
    environmentId,
  });

  return (
    <>
      <Card>
        <CardHeader>{environment?.displayName}</CardHeader>
        <CardContent>
          <div className="font-semibold">Environment Details</div>
          <div className="flex justify-between">
            <div>ID</div>
            <div>{environment?.id}</div>
          </div>
          <div className="flex justify-between">
            <div>Redirect URL</div>
            <div>{environment?.redirectUrl}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Organizations</CardTitle>
          <CardDescription>
            Organizations within this environment.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableHead>Organization ID</TableHead>
              <TableHead>External ID</TableHead>
              <TableHead>Domains</TableHead>
            </TableHeader>
            <TableBody>
              {listOrgsRes?.organizations?.map((org) => (
                <TableRow>
                  <TableCell>
                    <Link
                      to={`/environments/${environmentId}/organizations/${org?.id}`}
                    >
                      {org.id}
                    </Link>
                  </TableCell>
                  <TableCell>{org.externalId}</TableCell>
                  <TableCell>
                    {org.domains.map((domain, i) => (
                      <Badge key={i}>{domain}</Badge>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
