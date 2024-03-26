<template>
  <NuxtLink v-if="isInternal" :class="linkClass" :to="linkTo" :target="linkTarget" :download="linkFile">
    <slot />
  </NuxtLink>
  <a v-else :href="linkTo" :class="linkClass" :target="linkTarget" :download="linkFile">
    <slot />
  </a>
</template>

<script>
import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class Link extends Vue {
  @Prop({required: false, type: String}) linkClass;
  @Prop({required: false, type: Boolean, default: true}) isInternal;
  @Prop({required: false, type: String, default: ''}) linkTarget;
  @Prop({required: true, type: String}) linkTo;
  @Prop({required: false, type: String, default: ''}) linkFile;
}
</script>

<style>

</style>
