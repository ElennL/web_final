/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch }) {
    const res = await fetch('http://localhost:9999/api/product/', {
        method: 'GET'
    });
    const data = await res.json();
    const category_res = await fetch('http://localhost:9999/api/category/', {
        method: 'GET'
    });
    const category_data = await category_res.json();

    return {
        props: {
            data: data,
            category_res: category_data
        }
        
    };
}