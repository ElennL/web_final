import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = () => {

}

export const actions: Actions = {
    logout: async ({ cookies }) => {
        console.log('Logging out');
        cookies.set('fastapiusersauth', '', {
            httpOnly: false,
            maxAge: 0,  // Instantly expire the cookie
            path: '/',
            sameSite: 'none',
            secure: true
        });
        throw redirect(307, '/');  // Redirect to home after logout
    }
};
