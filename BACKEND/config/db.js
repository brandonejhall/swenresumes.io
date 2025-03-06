import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config();

const supabase = createClient(process.env.DATABASE_URL,
process.env.DATABASE_KEY,
{ db: { schema: 'swenresumes_auth' } });

export default supabase;
