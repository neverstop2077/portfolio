<template>
  <button @click="buttonClick" class="btn" :class="buttonClass">
    <slot />
  </button>
</template>

<script>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ required: false, type: String }) buttonClass;
  @Emit('button-click')
  buttonClick() {}
}
</script>

<style>
.btn {
  @apply font-normal text-dark-600 dark:text-light-500 dark:bg-transparent py-2.5 px-2 border-0 rounded-lg bg-white text-sm transition-all;

  &:hover {
    background: linear-gradient(97deg, #fa5252, #dd2476);
    @apply text-light-700;
  }

  &.active {
    background: linear-gradient(97deg, #fa5252, #dd2476);
    @apply text-light-700;
  }
}
</style>
