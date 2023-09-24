import { supabase } from '../supabase/supabase.js';

export async function load() {
    const {data, error} = await supabase.from('projects').select().in('id', ['58043cc1-6401-4c0c-ada7-47bef9a894f3', '252191da-67b4-4dcb-ab50-193f3c75b07f', '89165d4e-22c6-4955-b1a3-3688c8887ffd']).order('created_at', {ascending: false})
    if(error) {
        return error;
    }
	return {
        data
	};
}