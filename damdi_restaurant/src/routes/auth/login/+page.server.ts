import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = () => {

}

export const actions: Actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        console.log('userData', data);

        try {
            const response = await fetch('http://localhost:9999/api/auth/jwt/login', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Login successful');

                const cookieHeader = response.headers.get('set-cookie');
                const matches = cookieHeader?.match(/fastapiusersauth=([^;]+)/);
                
                let cookieValue = '';
                if (matches && matches.length > 1) {
                    cookieValue = matches[1];
                }
                cookies.set('fastapiusersauth', cookieValue, {
                    httpOnly: false,
                    maxAge: 3600,
                    path: '/',
                    sameSite: 'none',
                    secure: true
                });
                // Redirect to root path while setting the cookie
                throw redirect(308, '/');

            } else {
                console.log(response);
                console.error('Login failed');
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Error occurred while logging in:', error);
            throw error;
        }

        // Redirect to home page after failure as a fallback.
        return redirect(307, '/');
    }
};
