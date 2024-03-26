<template>
  <button class="btn" :class="buttonClass">
    <slot />
  </button>
</template>

<script>
import {Component, Prop, Vue} from "nuxt-property-decorator";

  @Component
  export default class Button extends Vue {
    @Prop({required: false, type: String}) buttonClass;
  }
</script>

<style>
  .btn {
    @apply font-light py-2.5 px-2 border-0 rounded-lg bg-white text-sm transition-all;

    &:hover {
      background: linear-gradient(97deg, #fa5252, #dd2476);
      @apply text-white;
    }

    &.active {
      background: linear-gradient(97deg, #fa5252, #dd2476);
      @apply text-white;
    }
  }
</style>
