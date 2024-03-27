<template>
  <div class="main-container pb-4rem">
    <div class="card">
      <div class="card-header">
        <h1 class="headline-1">{{ getSection('hero.heading') }}</h1>
      </div>
      <div class="card-content">
        <div class="tab-container">
          <div class="tab-header" role="tabpanel">
            <a
              v-for="tab in getTabs"
              :key="tab.id"
              class="tab-header-item"
              :class="tab.slug === activeTab ? 'active' : ''"
              role="tab"
              href="#"
              @click="activeTab = tab.slug"
              >{{ tab.title }}
            </a>
          </div>
          <div
            v-for="list in getSection('hero.tabs')"
            :key="list.id"
            class="tab-content"
            :class="list.slug === activeTab ? 'active' : ''"
            role="tablist"
          >
            <div
              v-for="item in list.list"
              class="tag tag-pink tab-tag-item"
              @click="showModal"
            >
              <div class="tag-image-container">
                <img :src="item.image" :alt="item.project" class="tag-image" />
              </div>
              <p class="tag-team">{{ item.position }}</p>
              <h3 class="tag-project">{{ item.project }}</h3>
            </div>
          </div>
        </div>
      </div>

      <modal
        name="p-modal"
        class="p-modal"
        :width="850"
        :height="700"
        style="overflow: auto"
      >
        <div class="p-modal-header">
          <h2 class="p-modal-title">Chul Urina</h2>
          <div class="p-modal-summary">
            <div class="p-modal-summary-item">
              <span class="p-modal-summary-item-header">
                <i class="p-modal-summary-item-icon fa-solid fa-file-lines"></i>
                Project
              </span>
              <span>:</span>
              <span class="p-modal-summary-item-content">Website</span>
            </div>
            <div class="p-modal-summary-item">
              <span class="p-modal-summary-item-header">
                <i class="p-modal-summary-item-icon fa-solid fa-file-lines"></i>
                Project
              </span>
              <span>:</span>
              <span class="p-modal-summary-item-content">Website</span>
            </div>
            <div class="p-modal-summary-item">
              <span class="p-modal-summary-item-header">
                <i class="p-modal-summary-item-icon fa-solid fa-file-lines"></i>
                Project
              </span>
              <span>:</span>
              <span class="p-modal-summary-item-content">Website</span>
            </div>
            <div class="p-modal-summary-item">
              <span class="p-modal-summary-item-header">
                <i class="p-modal-summary-item-icon fa-solid fa-file-lines"></i>
                Project
              </span>
              <span>:</span>
              <span class="p-modal-summary-item-content">Website</span>
            </div>
          </div>
        </div>
        <div class="p-modal-content">
          <p class="p-modal-content-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum conseqr quo
            obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fuga consequatur delectus porro sapiente
            molestias, magni quasi sed, enim corporis omnis doloremque soluta
            inventore dolorum consequuntur quo obcaecati rerum sit non.
          </p>
          <p class="p-modal-content-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum conseqr quo
            obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fuga consequatur delectus porro sapiente
            molestias, magni quasi sed, enim corporis omnis doloremque soluta
            inventore dolorum consequuntur quo obcaecati rerum sit non.
          </p>
          <img
            class="p-modal-content-image"
            src="~/assets/images/work-img-1.jpg"
            alt="asd"
          />
        </div>
      </modal>

      <div class="card-footer">
        <p class="card-footer-content">
          {{ getSection('footer') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import BasePage from '~/mixins/BasePage';

@Component
export default class AboutPage extends mixins(BasePage) {
  section = {
    hero: {
      heading: 'Portfolio',
      tabs: [
        {
          id: 1,
          title: 'All',
          slug: 'all',
          list: [
            {
              id: 1,
              position: 'Front-end dev',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
            {
              id: 2,
              position: 'Front-end dev',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
          ],
        },
        {
          id: 2,
          title: 'Mockup',
          slug: 'mockup',
          list: [
            {
              id: 1,
              position: 'Front-end dev mockup',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
            {
              id: 2,
              position: 'Front-end dev mockup',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
          ],
        },
        {
          id: 3,
          title: 'Graphic design',
          slug: 'graphic-design',
          list: [
            {
              id: 1,
              position: 'Front-end dev Graphic',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
            {
              id: 2,
              position: 'Front-end dev Graphic',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
          ],
        },
        {
          id: 4,
          title: 'Logo',
          slug: 'logo',
          list: [
            {
              id: 1,
              position: 'Front-end dev Logo',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
            {
              id: 2,
              position: 'Front-end dev Logo',
              project: 'Scale Commerce',
              type: 'Website',
              client: 'Scale Commerce',
              tech: 'HTML/CSS, JQuery, Bootstrap',
              preview: 'https://smoxy.eu',
              image: require('~/assets/images/work-img-1.jpg'),
            },
          ],
        },
      ],
    },
    footer: '© 2024 All Rights Reserved by Woodie Vo.',
  };
  activeTab = 'all';
  showModal() {
    this.$modal.show('p-modal');
  }

  get getTabs() {
    const data = [...this.getSection('hero.tabs')];
    const final = data.map(({ id, title, slug }) => ({ id, title, slug }));
    return final;
  }
}
</script>

<style lang="scss">
$active-tab-color: linear-gradient(97deg, #fa5252, #dd2476);

.tab {
  &-container {
  }
  &-header {
    @apply flex items-center justify-end gap-x-5;

    &-item {
      @apply text-normal font-medium text-zinc-700 dark:text-zinc-400 px-3 hover:text-pink-500;

      &.active {
        @apply text-rose-500;
      }
    }
  }

  &-tag-item {
    &.tag {
      @apply flex flex-col items-start cursor-pointer dark:bg-dark-900;
      animation: scale-up 0.3s ease forwards;

      &:hover {
        & .tag-image {
          @apply transform scale-125;
        }
      }
    }
  }

  &-content {
    @apply mt-8 hidden;

    &.active {
      @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6;
    }
  }
}

.p-modal {
  &-header {
    @apply mb-8;
  }
  &-title {
    @apply mb-8 mt-3 text-3xl text-rose-500 font-bold flex justify-center;
  }
  &-summary {
    @apply grid grid-cols-2 gap-x-6 gap-y-6;
    &-item {
      @apply text-1.125rem flex items-center gap-x-1 text-dark dark:text-white;
      &-header {
        @apply flex gap-x-2;
      }
      &-icon {
      }
      &-content {
        @apply font-medium;
      }
    }
  }
  &-content {
    &-text {
      @apply mb-4 leading-relaxed font-light text-normal tracking-wide text-zinc-600 dark:text-zinc-300;
    }
    &-image {
      @apply w-full my-8 rounded-2xl;
    }
  }
  & .vm--modal {
    @apply px-12 py-8 rounded-3xl overflow-auto dark:bg-dark-200;
  }
}
</style>
