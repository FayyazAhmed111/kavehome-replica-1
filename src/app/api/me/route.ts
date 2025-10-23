import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;

const VIEWER_QUERY = gql`
  query Viewer {
    viewer {
      id
      username
      email
      firstName
      lastName
    }
  }
`;

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("wp_auth_token")?.value;

    if (!token) {
      return NextResponse.json({ loggedIn: false, user: null }, { status: 200 });
    }

    const client = new GraphQLClient(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { viewer } = await client.request(VIEWER_QUERY);

    return NextResponse.json({ loggedIn: !!viewer, user: viewer ?? null });
  } catch (error: any) {
    console.error("Viewer fetch error:", error);
    return NextResponse.json({ loggedIn: false, user: null });
  }
}
