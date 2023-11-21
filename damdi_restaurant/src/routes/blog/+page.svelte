<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let wow = data.props;
  console.log("BLOG DATA", wow.data);
</script>

<section class="bg-white">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900"
      >
        Our Blog
      </h2>
      <p class="font-light text-gray-500 sm:text-xl">
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </p>
    </div>
    <div class="grid gap-8 lg:grid-cols-2">
      {#each wow.data as item}
        <article
          class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
        >
          <div class="flex justify-between items-center mb-5 text-gray-500">
            <span
              class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"
            >
              Post
            </span>
            <span class="text-sm">{item.published}</span>
          </div>
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            <a href="blog/{item.id}">{item.title}</a>
          </h2>
          <p class="mb-5 font-light text-gray-500">
            {@html item.content}
          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4" />
            <a
              href="/blog/{item.id}"
              class="inline-flex items-center font-medium text-primary-600 hover:underline"
            >
              Read more
              <svg
                class="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              >
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
