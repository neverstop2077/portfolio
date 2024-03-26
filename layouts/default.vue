<template>
  <div class="app">
    <MainHeader />
    <nuxt />
    <script src="https://kit.fontawesome.com/c2f9136626.js" crossorigin="anonymous"></script>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class DefaultLayout extends Vue {}
</script>
