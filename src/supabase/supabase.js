
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bgazwwufdpfjahdmbxhk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnYXp3d3VmZHBmamFoZG1ieGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxNTkyMTksImV4cCI6MTk5NTczNTIxOX0.YNxNgbisSp9ArKSL4zaFAdLw1OD0QMRPzF1gUXBhkDU'
export const supabase = createClient(supabaseUrl, supabaseKey)
