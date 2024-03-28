<template>
  <div class="main-container pb-4rem">
    <div class="card">
      <div class="card-header">
        <h1 class="headline-1">{{ getSection('hero.heading') }}</h1>
      </div>
      <div class="card-content">
        <div class="mt-8 flex flex-col xl:flex-row xl:items-start gap-x-8">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-x-6 gap-y-4"
          >
            <div
              v-for="info in getSection('hero.info')"
              :key="info.key"
              class="tag tag-pink"
            >
              <i :class="info.icon"></i>
              <div>
                <h3 class="tag-title">{{ info.title }}</h3>
                <p v-for="item in info.list" :key="item.id" class="tag-content">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="section-wrapper !xl:mt-0 !items-stretch py-6 px-12 flex-1"
          >
            <h2
              class="card-content-section-heading !mb-6 !text-zinc-600 !dark:text-zinc-400"
            >
              I'm Always Open To Discuss Product
              <span class="font-bold block mt-3 text-black dark:text-white"
                >design work or partnership.
              </span>
            </h2>
            <BlocForm
              :action="`mailto:${myMail}`"
              method="POST"
              formClass="mt-5"
            >
              <BlocInput
                v-for="input in getSection('hero.form')"
                :key="input.id"
                autoComplete="off"
                :label="input.label"
                :id="input.inputId"
                :isRequired="input.required"
                :type="input.type"
                :value="input.value"
              />
              <BlocButton buttonClass="submit-button" type="submit"
                >Submit
              </BlocButton>
            </BlocForm>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <p class="card-footer-content">
          {{ $footer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import BasePage from '~/mixins/BasePage';

const MY_MAIL = 'quocduy060220@gmail.com';

@Component
export default class AboutPage extends mixins(BasePage) {
  section = {
    hero: {
      heading: 'Contact',
      info: [
        {
          id: 1,
          title: 'Phone :',
          icon: 'fa-solid text-4xl text-pink-400 fa-phone-volume',
          list: [
            {
              id: 1,
              text: '+846 905 006',
            },
          ],
        },
        {
          id: 2,
          title: 'Email :',
          icon: 'fa-solid text-4xl text-cyan-400 fa-envelope',
          list: [
            {
              id: 1,
              text: 'quocduy060220gmail.com',
            },
            {
              id: 2,
              text: 'duy.vo@nfq.com',
            },
          ],
        },
        {
          id: 3,
          title: 'Address :',
          icon: 'fa-solid text-4xl text-green-400 fa-location-dot',
          list: [
            {
              id: 1,
              text: 'Can Tho, Viet Nam',
            },
          ],
        },
      ],
      form: [
        {
          id: 1,
          inputId: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          id: 2,
          inputId: 'email',
          label: 'Email',
          type: 'email',
          required: true,
        },
        {
          id: 3,
          inputId: 'message',
          label: 'Message',
          type: 'textarea',
          required: true,
        },
      ],
    },
    footer: '© 2024 All Rights Reserved by Woodie Vo.',
  };
  myMail = MY_MAIL;
}
</script>

<style lang="scss">
.submit-button {
  @apply bg-transparent px-8 py-3 text-base font-medium border-1 border-gray-500;
}
</style>
