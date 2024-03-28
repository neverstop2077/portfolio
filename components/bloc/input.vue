<template>
  <div class="bloc-input" :class="isClicked ? 'already-focus' : ''">
    <label class="bloc-input-label" :for="id"
      >{{ label }}
      <span class="bloc-input-label-required">{{ isRequired ? '*' : '' }}</span>
    </label>
    <textarea
      v-if="type === 'textarea'"
      class="bloc-input-core"
      v-model="inputValue"
      :name="id"
      :id="id"
      :type="type"
      :required="isRequired"
      :placeholder="placeholder"
      :autocomplete="autoComplete"
      @click="isClicked = true"
      @input="onInputChange"
    ></textarea>
    <input
      v-else
      class="bloc-input-core"
      v-model="inputValue"
      :name="id"
      :id="id"
      :type="type"
      :required="isRequired"
      :placeholder="placeholder"
      :autocomplete="autoComplete"
      @click="isClicked = true"
      @input="onInputChange"
    />
  </div>
</template>

<script>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ required: false, type: String, default: 'text' }) type;
  @Prop({ required: false, type: String, default: '' }) label;
  @Prop({ required: false, type: String, default: '' }) id;
  @Prop({ required: false, type: String, default: '' }) autoComplete;
  @Prop({ required: false, type: Boolean, default: false }) isRequired;
  @Prop({ required: false, type: String, default: '' }) placeholder;
  isClicked = false;
  inputValue = '';
  @Emit('on-input-change')
  onInputChange() {
    return {
      id: this.id,
      val: this.inputValue,
    };
  }
}
</script>

<style lang="scss">
.bloc-input {
  @apply relative w-full mb-8;

  &.already-focus {
    & .bloc-input {
      &-core {
        @apply py-2 border-rose-500;
      }

      &-label {
        @apply text-rose-500;
      }
    }
  }

  &-label {
    @apply block text-base font-medium mb-1 text-black dark:text-white;
  }

  &-core {
    @apply block w-full border-0 border-b-1 border-gray-300 bg-transparent pl-0 py-1 transition-all duration-100;

    &:focus,
    &:focus-visible {
      @apply bg-transparent outline-solid-none shadow-none border-transparent;
    }
  }
}
</style>
