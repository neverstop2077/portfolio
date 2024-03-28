<template>
  <form :class="formClass" :action="action" :method="method">
    <slot></slot>
  </form>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Form extends Vue {
  @Prop({ required: false, type: String, default: '' }) action;
  @Prop({ required: false, type: String, default: '' }) method;
  @Prop({ required: false, type: String, default: '' }) formClass;
}
</script>

<style></style>
