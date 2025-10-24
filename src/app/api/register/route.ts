import { NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;

const REGISTER_CUSTOMER_MUTATION = gql`
  mutation RegisterCustomer(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String
  ) {
    registerCustomer(
      input: {
        username: $username
        email: $email
        password: $password
        firstName: $firstName
        clientMutationId: "nextjs"
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


const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(
      input: {
        clientMutationId: "login"
        username: $username
        password: $password
      }
    ) {
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
    const { firstName, email, password } = await req.json();

    if (!email || !password || !firstName) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const username = email.trim().toLowerCase();

    const client = new GraphQLClient(endpoint);


    const { registerCustomer } = await client.request(
      REGISTER_CUSTOMER_MUTATION,
      { username, email, password, firstName }
    );

    if (!registerCustomer?.customer) {
      return NextResponse.json(
        { ok: false, error: "Registration failed. Try again later." },
        { status: 400 }
      );
    }


    const { login } = await client.request(LOGIN_MUTATION, { username, password });

    const res = NextResponse.json({
      ok: true,
      message: "Account created successfully",
      user: {
        id: login.user.id,
        username: login.user.username,
        email: login.user.email,
        firstName,
      },
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
    console.error("Registration error:", error);


    const errorMessage =
      error?.response?.errors?.[0]?.message ||
      (error.message?.includes("existing user")
        ? "An account with this email already exists."
        : error.message?.includes("weak password")
        ? "Password too weak. Try a stronger one."
        : "Registration failed. Please try again.");

    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
