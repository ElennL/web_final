import { redirect } from '@sveltejs/kit';

export const actions = {
    // ...other actions
    createOrder: async ({ request, cookies }) => {
        const sessionId = cookies.get('fastapiusersauth');
        console.log("sesstion cookie", sessionId);
        const formData = Object.fromEntries(await request.formData());
        const data = {
            name_of_recepient: formData.name_of_recipient,
            comment: formData.comment,
            phone_of_recepient: formData.number,
            additional_num: formData.additional
        };
        console.log('Order data', data);
        const sendData = {
            number: formData.number,
            additional: formData.additional
        };

        try {
            // const response = await fetch(`http://localhost:9999/api/sdek/order?name_of_recepient=${data.name_of_recepient}&comment=${data.comment}`, {
            const response = await fetch('http://localhost:9999/api/sdek/order', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `fastapiusersauth=${sessionId};`,
                },
            });

            if (response.ok) {
                console.log('Order creation successful');
                // Handle success scenario, such as redirecting to a confirmation page
                // return redirect(302, '/order/success');
            } else {
                console.log(response);
                console.error('Order creation failed');
                // Handle failure scenario, such as returning error message to the user
                // You can throw an error or return a response object to the client
                // throw new Error('Order creation failed');
            }
        } catch (error) {
            console.error('Error occurred while creating order:', error);
            // Handle the error scenario
            // You can throw an error or return a response object to the client
            // throw error;
        }

        // For now, redirect to the order page (or handle differently based on success/failure)
        throw redirect(302, '/');
    }
    // ...other actions
};
