<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form
  use:enhance
  class="space-y-6"
  action="?/logout"
  method="POST"
  enctype="multipart/form-data"
>
  <div>
    <button
      type="submit"
      class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >Log out</button
    >
  </div>
</form>
