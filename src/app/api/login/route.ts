import { NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { clientMutationId: "next", username: $username, password: $password }) {
      authToken
      refreshToken
      user {
        id
        username
        email
      }
    }
  }
`;

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const client = new GraphQLClient(endpoint);
    const { login } = await client.request(LOGIN_MUTATION, { username, password });

    if (!login?.authToken) {
      return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true, user: login.user });

    res.cookies.set("wp_auth_token", login.authToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    res.cookies.set("wp_refresh_token", login.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (err: any) {
    console.error("Login error:", err);
    return NextResponse.json({ ok: false, error: err?.message || "Login failed" }, { status: 500 });
  }
}
