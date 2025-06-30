import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qnbxhrogljorllufkqio.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuYnhocm9nbGpvcmxsdWZrcWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODg0NjcsImV4cCI6MjA2Njg2NDQ2N30.HxeMfi-50BWa0aEwK3O1vzWGUYS_WhSWm3wkZmWE90A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
