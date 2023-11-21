<script>
  export let data;
  console.log(data.props);
  let singePost = data.props.data;
</script>

<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
    <article
      class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue"
    >
      <header class="mb-4 lg:mb-6 not-format">
        <address class="flex items-center mb-6 not-italic">
          <div class="inline-flex items-center mr-3 text-sm text-gray-900">
            <div>
              <p class="text-xl font-bold text-gray-900">Admin</p>
              <p class="text-base text-gray-500">
                <time datetime={singePost.published} title={singePost.published}
                  >{singePost.published}</time
                >
              </p>
            </div>
          </div>
        </address>
        <h1
          class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl"
        >
          {singePost.title}
        </h1>
      </header>

      {@html singePost.content}
      <figure class="my-5">
        <img src={singePost.image} alt="" />
        <figcaption>Digital art by Anonymous</figcaption>
      </figure>
    </article>
  </div>
</main>
