<script lang="ts">
  import type { PageData } from "./$types";
  import ProductCard from "$lib/components/ProductCard.svelte";

  export let data: PageData;

  let selectedCategoryId: number | null = null;

  function selectCategory(categoryId: number | null): void {
    selectedCategoryId = categoryId;
  }

  function imageNameWithoutExtension(image: string): string {
    return image.replace(/\.[^/.]+$/, "");
  }

  $: filteredProducts =
    selectedCategoryId !== null
      ? data.props.data.filter(
          (product: { category_id: number }) =>
            product.category_id === selectedCategoryId
        )
      : data.props.data;

  let category_data = data.props.category_res;
</script>

<section class="bg-white">
  <div class="container px-6 py-8 mx-auto">
    <div class="lg:flex lg:-mx-2">
      <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
        <button
          class="block w-full text-left font-semibold text-gray-700 capitalize hover:underline"
          on:click={() => selectCategory(null)}
        >
          All
        </button>
        {#each category_data as item}
          <button
            class="block font-semibold text-gray-700 capitalize hover:underline text-left"
            on:click={() => selectCategory(item.id)}
          >
            <span class="ml-2">
              {item.name}
            </span>
            <div class="flex">
              <svg
                fill="none"
                height="26"
                viewBox="0 0 24 24"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="m15 20c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.3-2.3h-8.6c-1.3 0-2.6-.5-3.5-1.5-1-.9-1.5-2.2-1.5-3.5s.5-2.6 1.5-3.5c.9-1 2.2-1.5 3.5-1.5h1c.6 0 1 .4 1 1s-.4 1-1 1h-1c-.8 0-1.6.3-2.1.9-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.1c.5.6 1.3.9 2.1.9h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.1.1.2.2.2.3s.1.2.1.4c0 .1 0 .3-.1.4 0 .1-.1.2-.2.3l-4 4c-.2.2-.4.3-.7.3z"
                  fill="rgb(0,0,0)"
                /></svg
              >
              <p class="mb-2 mt-1 text-sm font-medium text-gray-500">
                {item.description}
              </p>
            </div>
          </button>
        {/each}
      </div>

      <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5">
        <div
          class="flex items-center justify-between text-sm tracking-widest uppercase"
        >
          <p class="text-gray-500">Items</p>
          <div class="flex items-center">
            <p class="text-gray-500">Sort</p>
            <select
              class="font-medium text-gray-700 bg-transparent focus:outline-none"
            >
              <option value="#">Recommended</option>
              <option value="#">Size</option>
              <option value="#">Price</option>
            </select>
          </div>
        </div>

        <div
          class="grid grid-flow-row gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {#each filteredProducts as item}
            <!-- Update this line -->
            <ProductCard
              productImageName={imageNameWithoutExtension(item.image)}
              productImage={item.image}
              productPrice={item.price}
              productTitle={item.name}
              productDescription={item.description}
              productId={item.id}
            />
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
