
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://auvyphnigyyatozxqylw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1dnlwaG5pZ3l5YXRvenhxeWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MDYxMTQsImV4cCI6MjA1NjM4MjExNH0.cEhA-fWKzW_7MIXR2Ysj8tDmI6w9nxcdKjgkJuJEPPA"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase