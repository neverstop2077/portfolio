<template>
  <div class="container mx-auto mt-4rem">
    <div class="flex flex-col justify-center items-center">
      <div class="avatar">
        <img src="~/assets/images/avatar.jpeg" alt="avatar of woodie">
      </div>
      <h1 class="heading-text">Woodie Vo</h1>
      <h2 class="text-sm text-gray-500 mb-3">Software Engineer</h2>
      <div class="social">
        <BlocLink :isInternal="false" :linkTo="this.fbLink" target="_blank">
          <BlocButton buttonClass="social-tags">
            <i class="text-2xl fa-brands fa-square-facebook"></i>
          </BlocButton>
        </BlocLink>
        <BlocLink :isInternal="false" :linkTo="this.linkedLink" target="_blank">
          <BlocButton buttonClass="social-tags">
            <i class="text-2xl fa-brands fa-linkedin"></i>
          </BlocButton>
        </BlocLink>
        <BlocLink :isInternal="false" :linkTo="this.upworkLink" target="_blank">
          <BlocButton buttonClass="social-tags">
            <i class="text-2xl fa-brands fa-upwork"></i>
          </BlocButton>
        </BlocLink>
      </div>
      <BlocLink :isInternal="false" :linkTo="this.cvLink" linkFile="woodie_cv.pdf">
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
  fbLink = 'https://www.facebook.com/vo.duy.7505/';
  linkedLink = 'https://www.linkedin.com/in/woodie0602/';
  upworkLink = 'https://www.upwork.com/freelancers/duyv11';
  cvLink = '/assets/documents/CV.pdf';
}
</script>

<style>
  .avatar {
    @apply max-w-280px rounded-full overflow-hidden;
  }

  .heading-text {
    font-family: 'Playfair Display', sans-serif;
    @apply text-3xl tracking-wide my-4;
  }

  .social {
    @apply flex flex-row gap-x-4;

    &-tags {
      @apply w-40px h-40px mt-2 mb-8 flex items-center justify-center;
    }
  }
</style>
