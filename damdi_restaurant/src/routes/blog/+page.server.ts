/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch }) {
    const res = await fetch('http://localhost:9999/api/blog/', {
        method: 'GET'
    });
    const data = await res.json();

    return {
        props: {
            data: data
        }
    };
}
