import { supabase } from '../../supabase/supabase.js';

export async function load() {
    const {data, error} = await supabase.from('blog').select().order('created_at', {ascending: false})
    if(error) {
        return error;
    }
	return {
        data
	};
}