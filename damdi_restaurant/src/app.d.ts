// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			user: {
				id: number;
				email: string;
				is_active: boolean;
				is_superuser: boolean;
				is_verified: boolean;
				name: string;
			};
		}
	}
}

export {};
