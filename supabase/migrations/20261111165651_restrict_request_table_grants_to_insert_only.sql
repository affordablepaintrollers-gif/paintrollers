/*
# Restrict request tables to insert-only access

1. Modified Tables
- `sample_requests` and `quote_requests`

2. Security Changes
- Removed SELECT, UPDATE, and DELETE privileges from the `anon` and `authenticated` roles on both tables, so visitors can no longer read, change, or delete other customers' submissions through the public API.
- Kept INSERT so the website forms can still save requests.
- Existing insert-only row level security policies are unchanged.

3. Important Notes
- The site has no sign-in, so submissions are read by staff in the Supabase dashboard only.
*/

REVOKE SELECT, UPDATE, DELETE ON sample_requests FROM anon, authenticated;
REVOKE SELECT, UPDATE, DELETE ON quote_requests FROM anon, authenticated;
GRANT INSERT ON sample_requests TO anon, authenticated;
GRANT INSERT ON quote_requests TO anon, authenticated;
