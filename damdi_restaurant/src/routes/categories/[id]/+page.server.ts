/** @type {import('./$types').PageServerLoad} */
import { page } from '$app/stores';

export async function load({ fetch, params, cookies }) {
    const sessionId = cookies.get('fastapiusersauth');
    console.log("sesstion cookie", sessionId);
    const res = await fetch(`http://localhost:9999/api/product/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `fastapiusersauth=${sessionId};`
        },
    });
    console.log(res);
    const data = await res.json();

    return {
        props: {
            data: data
        }
        
    };
}

