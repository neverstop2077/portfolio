<template>
  <div class="container mx-auto">
    <header class="header">
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
        <!--Desktop Menu-->
        <div class="hidden lg:block">
          <BlocLink v-for="tab in tabs" :key="tab.id" :linkTo="tab.route">
            <BlocButton
              class="mr-3"
              :class="$route.path === tab.route ? 'active' : ''"
            >
              <i :class="tab.iconClass"></i>
              {{ tab.title }}
            </BlocButton>
          </BlocLink>
        </div>
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
        <BlocButton
          @button-click="mobileMenuOpen = !mobileMenuOpen"
          buttonClass="burger-button active"
        >
          <i class="fa-solid fa-bars"></i>
        </BlocButton>
        <!--Mobile Menu-->
        <div class="mobile-menu" :class="mobileMenuOpen ? 'active' : ''">
          <BlocLink v-for="tab in tabs" :key="tab.id" :linkTo="tab.route">
            <span
              :class="$route.path === tab.route ? 'active' : ''"
              class="mobile-menu-item"
            >
              <i :class="tab.iconClass"></i>
              {{ tab.title }}
            </span>
          </BlocLink>
        </div>
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
  mobileMenuOpen = false;

  onColorModeChange = () => {
    this.$colorMode.preference =
      this.$colorMode.value === DARK_MODE ? LIGHT_MODE : DARK_MODE;
  };
}
</script>

<style lang="scss">
$burger-button-active-color: linear-gradient(180deg, #1b74e4, #1b74e4);

.header {
  @apply pt-4 flex flex-row justify-between items-center mx-3rem relative;
}
.logo {
  @apply max-w-140px;
}
.color-mode-btn,
.burger-button {
  @apply w-45px h-45px ml-4;
  border-radius: 50% !important;
}
.burger-button {
  @apply block lg:hidden transition-all duration-300;
  &:hover {
    background: $burger-button-active-color !important;
  }
}
.mobile-menu {
  @apply mx-[-2rem] sm:mx-0 py-0 px-6 box-border bg-white dark:bg-black rounded-xl transform scale-y-0 origin-top shadow-sm dark:shadow-gray-800 absolute z-10 left-0 right-0 top-full flex flex-col gap-y-4 lg:hidden transition-all duration-600 overflow-hidden;
  &.active {
    @apply py-4 transform scale-y-100;
  }
  &-item {
    @apply text-sm text-zinc-600 dark:text-zinc-400 hover:text-rose-500;

    &.active {
      @apply text-rose-500;
    }
  }
}
</style>
