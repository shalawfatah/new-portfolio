import { supabase } from '../../supabase/supabase.js';

export async function load() {
    const {data, error} = await supabase.from('projects').select()
    if(error) {
        return error;
    }
	return {
        data
	};
}