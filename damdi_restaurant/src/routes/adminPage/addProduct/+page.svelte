<script lang="ts">
  import { enhance } from "$app/forms";
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);
  let wow = data.props;
  let categories = data.props.categories;
  console.log(data);
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
          Add a Product
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form use:enhance class="space-y-6" action="?/addProduct" method="POST">
          <!-- You can continue with similar input fields for description, price, etc. -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Product Name</label
            >
            <div class="mt-2">
              <input
                id="name"
                name="name"
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
              >Description</label
            >
            <div class="mt-2">
              <input
                id="name"
                name="description"
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
              >Price</label
            >
            <div class="mt-2">
              <input
                id="name"
                name="price"
                type="number"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Quantity</label
            >
            <div class="mt-2">
              <input
                id="name"
                name="quantity"
                type="number"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="category_id"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Category</label
            >
            <div class="mt-2">
              <select
                id="category_id"
                name="category_id"
                required
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select a Category</option>
                {#each categories as category}
                  <option value={category.id}>{category.name}</option>
                {/each}
              </select>
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
                name="productImage"
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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
{:else}
  <h1>You are not allowed here!</h1>
{/if}
