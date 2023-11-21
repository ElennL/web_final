<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  let wow = data.props;
  console.log(wow);
  let emptyUserState = {
    isLoggedIn: false,
    user: {},
  };
  let showAddressDialog = false;

  // Function to handle dialog visibility
  const toggleAddressDialog = () => {
    showAddressDialog = !showAddressDialog;
  };

  // Function to handle form submission (placeholder)
  const submitAddress = () => {
    // Here you would handle the submission of the address data
    // For example, sending it to a server or storing it in state
    console.log("Submitting address...");
    toggleAddressDialog(); // Close the dialog after submission
  };
</script>

<main class="bg-gray-100">
  {#if !wow.data.isLoggedIn}
    <!-- Your not allowed here section -->
  {:else}
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-wrap -mx-4">
        <!-- Sidebar -->
        <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
          <div class="p-6 bg-white rounded-lg shadow">
            <h2 class="text-xl font-bold mb-6">Account</h2>
            <nav>
              <ul class="space-y-4">
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900"
                    >Overview</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900"
                    >Profile</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900"
                    >Addresses</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900"
                    >Orders</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900"
                    >Log out</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full lg:w-3/4 px-4">
          <div class="mb-6 p-6 bg-white rounded-lg shadow">
            <div class="mb-6">
              <h1 class="text-2xl font-bold mb-2">
                Hello {wow.data.user.name}
              </h1>
              <p class="text-gray-700 mb-4">
                Signed in as: {wow.data.user.email}
              </p>
            </div>
            <div class="mb-6">
              <h3 class="text-lg font-bold mb-2">Profile</h3>
              <div
                class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
              >
                <div
                  class="bg-blue-600 h-2.5 rounded-full"
                  style="width: 75%;"
                />
              </div>
              <p class="text-right text-sm mt-2">75% Completed</p>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-2">Addresses</h3>
              <p>0 Saved</p>
              <button
                type="button"
                on:click={toggleAddressDialog}
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add address
              </button>
            </div>
          </div>
          <!-- Additional sections can go here -->
        </div>
      </div>
    </div>
  {/if}
</main>
