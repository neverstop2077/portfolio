<template>
  <form
    :class="formClass"
    :action="action"
    :method="method"
    @submit.prevent="onSubmitForm"
  >
    <slot></slot>
  </form>
</template>

<script>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Form extends Vue {
  @Prop({ required: false, type: String, default: '' }) action;
  @Prop({ required: false, type: String, default: '' }) method;
  @Prop({ required: false, type: String, default: '' }) formClass;
  @Emit('on-submit-form')
  onSubmitForm() {
    console.log('submit');
  }
}
</script>

<style></style>
