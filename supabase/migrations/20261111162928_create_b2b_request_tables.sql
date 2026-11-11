/*
# Create sample pack and pallet quote request tables

Plain-English summary: adds two intake tables so the website's sample pack form and pallet quote form can save submissions. Visitors are not signed in, so the forms write as the public visitor role.

1. New Tables
- `sample_requests`: name, company, email, phone, shipping address, requested sizes, created time.
- `quote_requests`: name, company, email, phone, product sizes, pallet count, message, created time.

2. Security
- Row level security enabled on both tables.
- Visitors can INSERT only. There is no SELECT, UPDATE or DELETE grant, so submissions cannot be read or changed from the website.
- Length checks on every text column limit oversized input.

3. Notes
- Submissions are reviewed by the team through the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS sample_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  company text NOT NULL CHECK (char_length(company) BETWEEN 1 AND 200),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 1 AND 50),
  shipping_address text NOT NULL CHECK (char_length(shipping_address) BETWEEN 1 AND 1000),
  sizes text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  company text NOT NULL CHECK (char_length(company) BETWEEN 1 AND 200),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 1 AND 50),
  sizes text[] NOT NULL DEFAULT '{}',
  pallet_count integer NOT NULL DEFAULT 1 CHECK (pallet_count BETWEEN 1 AND 1000),
  message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE sample_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON sample_requests TO anon, authenticated;
GRANT INSERT ON quote_requests TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_sample_requests" ON sample_requests;
CREATE POLICY "public_insert_sample_requests" ON sample_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "public_insert_quote_requests" ON quote_requests;
CREATE POLICY "public_insert_quote_requests" ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
