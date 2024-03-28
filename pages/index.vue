<template>
  <div class="main-container">
    <div class="flex flex-col justify-center items-center">
      <div class="avatar">
        <img
          :src="require(`~/assets/images/avt2.jpg`)"
          alt="avatar of woodie"
        />
      </div>
      <p class="heading-text">{{ getSection('hero.headingName') }}</p>
      <p class="subheading-text">
        {{ getSection('hero.headingRole') }}
      </p>
      <div class="social">
        <BlocLink
          v-for="socialTag in getSection('hero.socialTags')"
          :key="socialTag.id"
          :isInternal="false"
          :linkTo="socialTag.link"
          target="_blank"
        >
          <BlocButton :buttonClass="socialTag.buttonClass">
            <i :class="socialTag.iconClass"></i>
          </BlocButton>
        </BlocLink>
      </div>
      <BlocLink
        :isInternal="false"
        :linkTo="this.cvLink"
        linkFile="woodie_cv.pdf"
      >
        <BlocButton buttonClass="!text-lg !px-4 !rounded-full active">
          <i class="fa-solid fa-download mr-1"></i>
          Download CV
        </BlocButton>
      </BlocLink>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import BasePage from '~/mixins/BasePage';

const FB_LINK = 'https://www.facebook.com/vo.duy.7505/';
const LINKED_LINK = 'https://www.linkedin.com/in/woodie0602/';
const UPWORK_LINK = 'https://www.upwork.com/freelancers/duyv11';
const CV_LINK = '/assets/documents/CV.pdf';

@Component
export default class HomePage extends mixins(BasePage) {
  section = {
    hero: {
      headingName: 'Woodie Vo',
      headingRole: 'Software Engineer',
      socialTags: [
        {
          id: 1,
          link: FB_LINK,
          iconClass: 'fa-brands social-icon fa-square-facebook ',
          buttonClass:
            'social-tags !text-sky-700 !hover:text-light-500 !dark:text-light-500',
        },
        {
          id: 2,
          link: LINKED_LINK,
          iconClass: 'fa-brands social-icon fa-linkedin',
          buttonClass:
            'social-tags !text-sky-800 !hover:text-light-500 !dark:text-light-500',
        },
        {
          id: 3,
          link: UPWORK_LINK,
          iconClass: 'fa-brands social-icon fa-upwork',
          buttonClass:
            'social-tags !text-lime-500 !hover:text-light-500 !dark:text-light-500',
        },
      ],
    },
  };

  get cvLink() {
    return CV_LINK;
  }
}
</script>

<style>
.avatar {
  @apply max-w-240px xl:max-w-280px rounded-full overflow-hidden;
}

.heading-text {
  font-family: 'Playfair Display', sans-serif;
  @apply text-2xl xl:text-3xl font-medium tracking-wide my-4 text-dark dark:text-white;
}

.subheading-text {
  @apply text-sm font-medium text-gray-500 mb-3 py-2 dark:px-4 dark:py-2 dark:text-zinc-400 dark:bg-dark-800 dark:rounded-lg;
}
</style>
