import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nvfzarmegyakzzmodcln.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Znphcm1lZ3lha3p6bW9kY2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NTk4MTUsImV4cCI6MjA5NzIzNTgxNX0.cG0sdYNCWSgVP6LYrhfsxrKnwlLwO3C48L7ihWrbqIg'
export const supabase = createClient(supabaseUrl, supabaseKey)
