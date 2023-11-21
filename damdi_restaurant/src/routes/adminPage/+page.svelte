<script lang="ts">
  import { enhance } from "$app/forms";
  import { error } from "@sveltejs/kit";
  /** @type {import('./$types').PageData} */
  export let data;
  let wow = data.props;
  // console.log("admin page:", wow);
</script>

<div class="flex justify-center flex-col container px-6 py-8 mx-auto gap-5">
  {#if wow.data.isLoggedIn && wow.data.user.is_superuser}
    {#if error && error}
      <div class="text-red-500">{error}</div>
    {/if}
    <h1
      class="mt-20 flex justify-center font-bold text-xl text-gray-900 md:text-xl lg:text-2xl"
    >
      Welcome to the admin page, {wow.data.user.name}!
    </h1>
    <div class="flex justify-center">
      <a
        class=" w-60 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        href="adminPage/addProduct">Add product</a
      >
    </div>
    <div class="flex justify-center">
      <a
        class=" w-60 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        href="adminPage/addBlog">Add Blog</a
      >
    </div>
    <div class="flex justify-center">
      <a
        class=" w-60 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        href="adminPage/createCategory">Create Category</a
      >
    </div>
  {:else}
    <h1
      class="mt-28 flex justify-center font-bold text-2xl text-gray-900 md:text-5xl lg:text-6xl"
    >
      You are not allowed here!
    </h1>
  {/if}
</div>
