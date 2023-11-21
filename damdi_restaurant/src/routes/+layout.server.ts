

let userState = {
    isLoggedIn: false,
    user: {}
};
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const res = await fetch('http://localhost:9999/users/me', {
        method: 'GET'
    });
    
    if (res.ok) {
        const data = await res.json();
        userState = {
            isLoggedIn: true,
            user: data
        };

    } else {
        userState = {
            isLoggedIn: false,
            user: {}
        };
        console.error('Failed to fetch user data');
    }



    return {
        props: {
            data: userState
        }
    };
}
