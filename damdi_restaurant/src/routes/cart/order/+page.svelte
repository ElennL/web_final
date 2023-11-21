<script lang="ts">
  import { enhance } from "$app/forms";

  export let data;
  let wow = data.props.data;
</script>

<div class="container px-6 py-8 mx-auto">
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Create Sdek Order
      </h2>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          use:enhance
          class="space-y-6"
          action="?/createOrder"
          method="POST"
        >
          <div>
            <label
              for="name_of_recipient"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Recipient's Name
            </label>
            <div class="mt-2">
              <input
                id="name_of_recipient"
                name="name_of_recipient"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="comment"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Comment
            </label>
            <div class="mt-2">
              <input
                type="text"
                id="comment"
                name="comment"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="number"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Number
            </label>
            <div class="mt-2">
              <input
                id="number"
                name="number"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="additional"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Additional Info
            </label>
            <div class="mt-2">
              <input
                id="additional"
                name="additional"
                type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
