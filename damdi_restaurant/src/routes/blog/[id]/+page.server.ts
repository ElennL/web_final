/** @type {import('./$types').PageServerLoad} */
import { page } from '$app/stores';

export async function load({ fetch, params }) {
    const res = await fetch(`http://localhost:9999/api/blog/${params.id}`, {
        method: 'GET'
    });
    const data = await res.json();

    return {
        props: {
            data: data
        }
        
    };
}

