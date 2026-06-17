import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nvfzarmegyakzzmodcln.supabase.co'
const supabaseKey = 'sb_publishable_X0OfWFwHhDlAQvV000DWBQ_x1ZoJeee'

export const supabase = createClient(supabaseUrl, supabaseKey)
