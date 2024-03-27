<template>
  <div class="progress" :class="progressClass">
    <div class="flex justify-between mb-2">
      <div class="progress-title">{{ title }}</div>
      <div class="progress-percent">{{ percent }}%</div>
    </div>
    <div class="relative">
      <div
        class="progress-bar"
        :class="color"
        :style="{ width: `${percent}%` }"
      ></div>
      <div class="progress-base-bar"></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class ProgressBar extends Vue {
  @Prop({ required: true, type: Number }) percent;
  @Prop({ required: false, type: String }) title;
  @Prop({ required: true, type: String }) color;
  @Prop({ required: false, type: String }) progressClass;
}
</script>

<style>
.progress {
  @apply relative flex flex-col;
  &-title,
  &-percent {
    @apply text-normal text-zinc-600 dark:text-zinc-400;
  }
  &-bar {
    @apply h-6px rounded-lg absolute z-10;
  }
  &-base-bar {
    @apply w-full h-6px bg-zinc-200 rounded-lg relative;
  }
}
</style>
