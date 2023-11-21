<script lang="ts">
  import { enhance } from "$app/forms";
  /** @type {import('./$types').PageData} */
  export let data;
  let wow = data.props;
  // console.log("admin page:", wow);
</script>

{#if wow.data.isLoggedIn && wow.data.user.is_superuser}
  <div class="container px-6 py-8 mx-auto">
    <h1
      class="mt-28 flex justify-center font-bold text-2xl text-gray-900 md:text-5xl lg:text-6xl"
    >
      Welcome to the admin page, {wow.data.user.name}!
    </h1>

    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Add a Blog
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form use:enhance class="space-y-6" action="?/addBlog" method="POST">
          <!-- You can continue with similar input fields for description, price, etc. -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Blog title</label
            >
            <div class="mt-2">
              <input
                name="blogTitle"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Content</label
            >
            <div class="mt-2">
              <input
                name="blogContent"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Image</label
            >
            <div class="mt-2">
              <input
                id="name"
                name="blogImage"
                type="file"
                accept=".jpg, .jpeg, .png"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
{:else}
  <h1>You are not allowed here!</h1>
{/if}
