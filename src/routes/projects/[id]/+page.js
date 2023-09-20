import { supabase } from '../../../supabase/supabase.js'

export async function load({params}) {
    const id = params.id
    const {data, error} = await supabase.from('projects').select().eq('id', id).single();
    if(error) {
        return error;
    }
    return {
        data
    }

}