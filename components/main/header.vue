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
      <div class="flex flex-row items-center">
        <BlocLink v-for="tab in tabs" :key="tab.id" :linkTo="tab.route">
          <BlocButton
            class="mr-1"
            :class="$route.path === tab.route ? 'active' : ''"
          >
            <i :class="tab.iconClass"></i>
            {{ tab.title }}
          </BlocButton>
        </BlocLink>
        <BlocButton
          buttonClass="color-mode-btn"
          @button-click="onColorModeChange"
        >
          <i
            v-if="this.$colorMode.value === 'light'"
            class="fa-solid fa-sun"
          ></i>
          <i v-else class="fa-solid fa-moon"></i>
        </BlocButton>
      </div>
    </header>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';

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

  onColorModeChange = () => {
    this.$colorMode.preference =
      this.$colorMode.value === DARK_MODE ? LIGHT_MODE : DARK_MODE;
  };
}
</script>

<style lang="scss">
.header {
  @apply pt-4;
}
.logo {
  @apply max-w-140px;
}
.color-mode-btn {
  @apply w-45px h-45px ml-4;
  border-radius: 50% !important;
}
</style>
