import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = ( event ) => {

}

export const actions: Actions = {
    addProduct: async ({ request, cookies }) => {
        const sessionId = cookies.get('fastapiusersauth');
        const data = Object.fromEntries(await request.formData());
        console.log(data);
        try {
            const response = await fetch('http://localhost:9999/api/category/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `fastapiusersauth=${sessionId};`
                },
            });
            // console.log(response);
            if (response.ok) {

                console.log('Catogory added successfully');
                throw redirect(308, '/'); // Redirect to some success page or product listing
            } else {
                console.log(response);
                console.error('Failed to add catogory');
                throw new Error('Failed to add catogory');
            }
        } catch (error) {
            console.error('Error occurred while adding catogory:', error);
        }
        throw redirect(307, '/adminPage'); // Fallback redirect
    }
};
