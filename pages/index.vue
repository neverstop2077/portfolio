<template>
  <div class="container mx-auto mt-4rem">
    <div class="flex flex-col justify-center items-center">
      <div class="avatar">
        <img
          :src="require(`~/assets/images/avt2.jpg`)"
          alt="avatar of woodie"
        />
      </div>
      <h1 class="heading-text">{{ this.headingName }}</h1>
      <h2
        class="text-sm text-gray-500 mb-3 py-2 dark:px-4 dark:py-2 dark:text-zinc-400 dark:bg-dark-800 dark:rounded-lg"
      >
        {{ this.headingRole }}
      </h2>
      <div class="social">
        <BlocLink
          v-for="socialTag in socialTags"
          :key="socialTag.id"
          :isInternal="false"
          :linkTo="socialTag.link"
          target="_blank"
        >
          <BlocButton buttonClass="social-tags">
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
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HomePage extends Vue {
  headingName = 'Woodie Vo';
  headingRole = 'Software Engineer';
  fbLink = 'https://www.facebook.com/vo.duy.7505/';
  linkedLink = 'https://www.linkedin.com/in/woodie0602/';
  upworkLink = 'https://www.upwork.com/freelancers/duyv11';
  cvLink = '/assets/documents/CV.pdf';
  socialTags = [
    {
      id: 1,
      link: this.fbLink,
      iconClass: 'fa-brands fa-square-facebook',
    },
    {
      id: 2,
      link: this.linkedLink,
      iconClass: 'fa-brands fa-linkedin',
    },
    {
      id: 3,
      link: this.upworkLink,
      iconClass: 'fa-brands fa-upwork',
    },
  ];
}
</script>

<style>
.avatar {
  @apply max-w-280px rounded-full overflow-hidden;
}

.heading-text {
  font-family: 'Playfair Display', sans-serif;
  @apply text-3xl tracking-wide my-4 text-dark dark:text-white;
}

.social {
  @apply flex flex-row gap-x-4;

  &-tags {
    @apply text-2xl w-40px h-40px mt-2 mb-8 flex items-center justify-center;
  }
}
</style>
