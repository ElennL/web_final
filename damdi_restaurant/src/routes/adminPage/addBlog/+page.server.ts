import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';
import fs from 'fs/promises'
import path from 'path'

export const load: PageServerLoad = ( event ) => {

}

export const actions: Actions = {
    addBlog: async ({ request, cookies }) => {
        const sessionId = cookies.get('fastapiusersauth');
        console.log("sesstion cookie", sessionId);
        const rawData = Object.fromEntries(await request.formData());
        const randomUUID = crypto.randomUUID();
        const filePath = path.join(
            process.cwd(),
            'static',
            'blogImages',
            `${randomUUID}.${(rawData.blogImage as Blob).type.split('/')[1]}`
        )
        await fs.writeFile(filePath, Buffer.from(await (rawData.blogImage as Blob).arrayBuffer()))

        // Transform required fields to integers

        const blogData = {
            title: rawData.blogTitle,
            content: rawData.blogContent,
            image: `/blogImages/${randomUUID}.${(rawData.blogImage as Blob).type.split('/')[1]}`,
        };
        // console.log(blogData);
        try {
            const response = await fetch('http://localhost:9999/api/blog/', {
                method: 'POST',
                body: JSON.stringify(blogData),
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `fastapiusersauth=${sessionId};`
                },
            });
            console.log(response);
            if (response.ok) {

                console.log('Blog added successfully');
                throw redirect(308, '/'); // Redirect to some success page or product listing
            } else {
                // console.log(response);
                console.error('Failed to add blog');
                throw new Error('Failed to add blog');
            }
        } catch (error) {
            console.error('Error occurred while adding blog:', error);
        }
        throw redirect(307, '/adminPage'); // Fallback redirect
    }
};
