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
              v-for="(item, index) in list.list"
              class="tag tab-tag-item"
              :class="index % 2 === 0 ? 'tag-pink' : 'tag-blue'"
              @click="
                () => {
                  showModal(item);
                }
              "
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
          <h2 class="p-modal-title">{{ modalData.project }}</h2>
          <div class="p-modal-summary">
            <div
              v-for="summary in modalData.summary"
              :key="summary.id"
              class="p-modal-summary-item"
            >
              <span class="p-modal-summary-item-header">
                <i class="p-modal-summary-item-icon" :class="summary.icon"></i>
                {{ summary.text }}
              </span>
              <span>:</span>
              <span class="p-modal-summary-item-content">{{
                summary.information
              }}</span>
            </div>
          </div>
        </div>
        <div class="p-modal-content">
          <p
            v-for="description in modalData.description"
            :key="description.id"
            class="p-modal-content-text"
          >
            {{ description.text }}
          </p>
          <img
            class="p-modal-content-image"
            :src="modalData.image"
            :alt="modalData.project"
          />
        </div>
      </modal>

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

const MODAL_SUMMARY_FIELD_1 = 'Project';
const MODAL_SUMMARY_FIELD_2 = 'Client';
const MODAL_SUMMARY_FIELD_3 = 'Tech';
const MODAL_SUMMARY_FIELD_4 = 'Preview';

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
              description: [
                {
                  id: 1,
                  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
                },
                {
                  id: 2,
                  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
                },
              ],
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
              description: [
                {
                  id: 1,
                  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
                },
                {
                  id: 2,
                  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
                },
              ],
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
  };
  activeTab = 'all';
  activeItem = {};
  modalSample = {
    header: [
      {
        id: 1,
        icon: 'fa-regular fa-file',
        text: MODAL_SUMMARY_FIELD_1,
      },
      {
        id: 2,
        icon: 'fa-regular fa-user',
        text: MODAL_SUMMARY_FIELD_2,
      },
      {
        id: 3,
        icon: 'fa-solid fa-code',
        text: MODAL_SUMMARY_FIELD_3,
      },
      {
        id: 4,
        icon: 'fa-solid fa-magnifying-glass',
        text: MODAL_SUMMARY_FIELD_4,
      },
    ],
  };
  modalData = {};
  showModal(item) {
    this.handleGenerateModalData(item);
    this.$modal.show('p-modal');
  }

  handleGenerateModalData(item) {
    this.activeItem = item;
    const mappedModalData = this.modalSample?.header.map((i) => {
      let data;
      if (i.text === MODAL_SUMMARY_FIELD_1) {
        data = this.activeItem?.project;
      } else if (i.text === MODAL_SUMMARY_FIELD_2) {
        data = this.activeItem?.client;
      } else if (i.text === MODAL_SUMMARY_FIELD_3) {
        data = this.activeItem?.tech;
      } else if (i.text === MODAL_SUMMARY_FIELD_4) {
        data = this.activeItem?.preview;
      }
      return { ...i, information: data };
    });
    this.modalData = {
      summary: mappedModalData,
      project: this.activeItem?.project,
      description: this.activeItem?.description,
      image: this.activeItem?.image,
    };
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
      @apply text-1.125rem flex items-start gap-x-1 text-dark dark:text-white;
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
