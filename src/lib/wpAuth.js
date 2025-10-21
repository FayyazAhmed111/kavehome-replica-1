const baseUrl = process.env.NEXT_PUBLIC_WP_BASE_URL;
const username = process.env.WP_USER;
const appPassword = process.env.WP_APP_PASS;

// Reusable authenticated fetch wrapper
export async function wpFetch(endpoint, options = {}) {
  const headers = {
    'Authorization': 'Basic ' + Buffer.from(`${username}:${appPassword}`).toString('base64'),
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const res = await fetch(`${baseUrl}/wp-json${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`WP Fetch failed: ${res.status} – ${text}`);
  }

  return res.json();
}
