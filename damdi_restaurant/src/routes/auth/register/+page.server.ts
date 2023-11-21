import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = () => {
    console.log('load');
}

export const actions: Actions = {
    register: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
    };
    console.log('userData', userData);

    try {
        const response = await fetch('http://localhost:9999/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (response.ok) {
            console.log('Registration successful');
            
        } else {
            console.log(response);
            console.error('Registration failed');
            
        }
    } catch (error) {
        console.error('Error occurred while registering:', error);
    }
    
    throw redirect(302, '/auth/login')
    }
};