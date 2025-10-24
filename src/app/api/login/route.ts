import { NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { clientMutationId: "login", username: $username, password: $password }) {
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

    const res = NextResponse.json({
      ok: true,
      user: login.user,
    });


    res.cookies.set("wp_auth_token", login.authToken, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      path: "/", 
    });

    res.cookies.set("wp_refresh_token", login.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ ok: false, error: error?.message || "Login failed" }, { status: 500 });
  }
}
