import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Client Supabase, oppure null se la build non ha le variabili
 * NEXT_PUBLIC_SUPABASE_* (es. un ambiente di anteprima non configurato).
 * Senza client il sito si compila comunque e il log dei consensi viene
 * saltato.
 */
export const supabase = url && key ? createClient(url, key) : null;
