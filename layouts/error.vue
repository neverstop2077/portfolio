<template>
  <div class="error-container">
    <h1 class="error-message" v-if="error.statusCode === 404">
      Page not found :(
    </h1>
    <h1 class="error-message" v-else>An error occurred</h1>
    <BlocLink linkClass="error-link" linkTo="/">
      <i class="fa-solid fa-arrow-left"></i>
      Home Page
    </BlocLink>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

@Component({ props: ['error'] })
export default class Error extends Vue {}
</script>

<style>
.error {
  &-container {
    @apply container mx-auto pt-40 flex flex-col items-center;
  }
  &-message {
    @apply text-3xl font-medium text-zinc-600 dark:text-zinc-300 text-center mb-20;
  }

  &-link {
    @apply text-xl font-normal text-black dark:text-white underline transition-all;

    &:hover {
      @apply text-rose-500;
    }
  }
}
</style>
