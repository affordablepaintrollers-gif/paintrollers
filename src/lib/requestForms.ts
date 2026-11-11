import { supabase } from '@/lib/supabase';

export type SampleRequestInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  shippingAddress: string;
  sizes: string[];
};

export type QuoteRequestInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  sizes: string[];
  palletCount: number;
  message: string;
};

export function readText(data: FormData, key: string): string {
  return String(data.get(key) ?? '').trim();
}

export function readSizes(data: FormData): string[] {
  return data.getAll('sizes').map(String);
}

export async function submitSampleRequest(input: SampleRequestInput): Promise<void> {
  const { error } = await supabase.from('sample_requests').insert({
    name: input.name,
    company: input.company,
    email: input.email,
    phone: input.phone,
    shipping_address: input.shippingAddress,
    sizes: input.sizes,
  });
  if (error) throw error;
}

export async function submitQuoteRequest(input: QuoteRequestInput): Promise<void> {
  const { error } = await supabase.from('quote_requests').insert({
    name: input.name,
    company: input.company,
    email: input.email,
    phone: input.phone,
    sizes: input.sizes,
    pallet_count: input.palletCount,
    message: input.message,
  });
  if (error) throw error;
}
