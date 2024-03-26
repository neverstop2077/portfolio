<template>
  <div class="container mx-auto">
    <header class="header flex flex-row justify-between items-center mx-3rem">
      <div class="logo">
        <BlocLink linkTo="/">
          <img
            class="logo-image"
            src="~/assets/images/logo.png"
            alt="woodie logo"
          />
        </BlocLink>
      </div>
      <div>
        <BlocLink v-for="tab in tabs" :key="tab.id" :linkTo="tab.route">
          <BlocButton
            class="mr-1"
            :class="$route.path === tab.route ? 'active' : ''"
          >
            <i :class="tab.iconClass"></i>
            {{ tab.title }}
          </BlocButton>
        </BlocLink>
      </div>
    </header>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {
  tabs = [
    {
      id: 1,
      route: '/',
      iconClass: 'mr-1 fa-solid fa-house',
      title: 'Home',
    },
    {
      id: 2,
      route: '/about',
      iconClass: 'mr-1 fa-solid fa-user',
      title: 'About',
    },
    {
      id: 3,
      route: '/resume',
      iconClass: 'mr-1 fa-solid fa-file',
      title: 'Resume',
    },
    {
      id: 4,
      route: '/works',
      iconClass: 'mr-1 fa-solid fa-briefcase',
      title: 'Works',
    },
    {
      id: 5,
      route: '/contact',
      iconClass: 'mr-1 fa-solid fa-address-book',
      title: 'Contact',
    },
  ];
}
</script>

<style lang="scss">
.header {
  @apply pt-4;
}
.logo {
  @apply max-w-140px;
}
</style>
