<template>
  <div class="container mx-auto">
    <header class="header flex flex-row justify-between items-center mx-3rem">
      <div class="logo">
        <img class="logo-image" src="~/assets/images/logo.png"  alt="woodie logo">
      </div>
      <div>
        <BlocButton class="mr-1" :class="$route.path === '/' ? 'active' : ''">
          <i class="mr-1 fa-solid fa-house"></i>
          Home
        </BlocButton>
        <BlocButton class="mr-1" :class="$route.path === '/about' ? 'active' : ''">
          <i class="mr-1 fa-solid fa-user"></i>
          About
        </BlocButton>
        <BlocButton class="mr-1" :class="$route.path === '/resume' ? 'active' : ''">
          <i class="mr-1 fa-solid fa-file"></i>
          Resume
        </BlocButton>
        <BlocButton class="mr-1" :class="$route.path === '/works' ? 'active' : ''">
          <i class="mr-1 fa-solid fa-briefcase"></i>
          Works
        </BlocButton>
        <BlocButton class="mr-1" :class="$route.path === '/contact' ? 'active' : ''">
          <i class="mr-1 fa-solid fa-address-book"></i>
          Contact
        </BlocButton>
      </div>
    </header>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
  .header {
    @apply pt-4
  }
  .logo {
    @apply max-w-140px;
  }
</style>
