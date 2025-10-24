import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;

const UPDATE_CUSTOMER_MUTATION = gql`
  mutation UpdateCustomer(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    updateCustomer(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        clientMutationId: "update"
      }
    ) {
      customer {
        id
        username
        email
        firstName
        lastName
      }
    }
  }
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;

    const cookieStore = await cookies();
    const token = cookieStore.get("wp_auth_token")?.value;

    if (!token) {
      return NextResponse.json({ ok: false, error: "Not authenticated" }, { status: 401 });
    }

    const client = new GraphQLClient(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { updateCustomer } = await client.request(UPDATE_CUSTOMER_MUTATION, {
      firstName,
      lastName,
      email,
      password,
    });

    return NextResponse.json({
      ok: true,
      message: "Profile updated successfully",
      user: updateCustomer.customer,
    });
  } catch (error: any) {
    console.error("Update customer error:", error);
    const message =
      error?.response?.errors?.[0]?.message || error?.message || "Update failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
