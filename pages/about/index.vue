<template>
  <div class="main-container">
    <div class="card">
      <div class="card-header">
        <h1 class="headline-1">{{ getSection('hero.heading') }}</h1>
      </div>
      <div class="card-content">
        <div
          class="flex flex-col lg:flex-row columns-2 items-center mx-[-1rem]"
        >
          <div class="card-content-item card-content-left">
            <img
              :src="getSection('hero.image')"
              :alt="getSection('hero.imageAlt')"
              class="summary-image"
            />
          </div>
          <div class="card-content-item card-content-right">
            <div class="card-content-section">
              <h2 class="card-content-section-heading">
                {{ getSection('hero.summary.heading') }}
              </h2>
              <p
                class="card-content-section-paragraph"
                v-for="content in getSection('hero.summary.content')"
                :key="content.id"
              >
                {{ content.description }}
              </p>
            </div>
            <div class="card-content-section">
              <h2 class="card-content-section-heading">
                {{ getSection('hero.information.heading') }}
              </h2>
              <div class="grid grid-cols-1 lg:grid-cols-2">
                <div
                  v-for="badge in getSection('hero.information.badges')"
                  :key="badge.id"
                  class="badge"
                >
                  <BlocButton :buttonClass="badge.iconColor">
                    <i :class="badge.iconClass"></i>
                  </BlocButton>
                  <div class="flex flex-col">
                    <span class="badge-title">{{ badge.title }}</span>
                    <span class="badge-content">{{ badge.content }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <h2
            class="card-content-section-heading !text-4xl !lg:text-2xl !xl:text-4xl"
          >
            {{ getSection('main.showCase.heading') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              v-for="(tag, index) in getSection('main.showCase.tags')"
              class="tag"
              :class="index % 2 ? 'tag-blue' : 'tag-pink'"
              :key="tag.id"
            >
              <i :class="tag.tagIcon"></i>
              <div class="">
                <h3 class="tag-title">{{ tag.tagTitle }}</h3>
                <p class="tag-content">
                  {{ tag.tagContent }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-wrapper">
          <h2 class="card-content-section-heading">
            {{ getSection('end.clients.heading') }}
          </h2>
          <carousel
            :autoplay="true"
            :per-page="1"
            :loop="true"
            :pagination-enabled="false"
          >
            <slide
              v-for="client in getSection('end.clients.content')"
              :key="client.id"
            >
              <div class="carousel-item">
                <img
                  class="carousel-image"
                  :src="client.src"
                  :alt="client.alt"
                />
              </div>
            </slide>
          </carousel>
        </div>
      </div>
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

@Component
export default class AboutPage extends mixins(BasePage) {
  section = {
    head: {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "I'm Woodie, a software developer. Please reach out to me if any needed.",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About me - Woodie',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "I'm Woodie, a software developer. Please reach out to me if any needed.",
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: require('~/assets/images/woodie-image.webp'),
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: require('~/assets/images/woodie-image.webp'),
        },
      ],
    },
    hero: {
      heading: 'About Me',
      image: require('~/assets/images/summary-image.webp'),
      imageAlt: "woodie's image",
      summary: {
        heading: 'Who Am I?',
        content: [
          {
            id: 1,
            description:
              "I'm a front-end developer based in Vietnam, where I specialize in crafting beautiful and user-friendly websites. I love simplifying complex issues to create straightforward solutions. My passion lies in building engaging online experiences that truly resonate with users.",
          },
          {
            id: 2,
            description:
              "My goal is to bring your ideas to life in the most creative way possible. Having collaborated with numerous renowned brands, I've helped them shine online with visually stunning and intuitive designs. Let's collaborate to ensure your website stands out in the digital landscape!",
          },
        ],
      },
      information: {
        heading: 'Personal Info',
        badges: [
          {
            id: 1,
            iconColor:
              'badge-signature !hover:text-white !text-pink-500 !dark:bg-dark-900',
            iconClass: 'fa-solid fa-mobile-screen-button badge-icon',
            title: 'Phone',
            content: '+84 846 905 006',
          },
          {
            id: 2,
            iconColor:
              'badge-signature !hover:text-white !text-cyan-500 !dark:bg-dark-900',
            iconClass: 'fa-solid fa-inbox badge-icon',
            title: 'Email',
            content: 'quocduy060220@gmail.com',
          },
          {
            id: 3,
            iconColor:
              'badge-signature !hover:text-white !text-green-500 !dark:bg-dark-900',
            iconClass: 'fa-solid fa-location-dot badge-icon',
            title: 'Location',
            content: 'Viet Nam',
          },
          {
            id: 4,
            iconColor:
              'badge-signature !hover:text-white !text-orange-500 !dark:bg-dark-900',
            iconClass: 'fa-solid fa-calendar-days badge-icon',
            title: 'Birthday',
            content: 'Feb 06, 2000',
          },
        ],
      },
    },
    main: {
      showCase: {
        heading: 'What I Do!',
        tags: [
          {
            id: 1,
            tagIcon: 'tag-signature text-4xl fa-solid fa-code text-pink-400',
            tagTitle: 'Web Development',
            tagContent:
              'I build websites with HTML, CSS, and JavaScript to make them work smoothly.',
          },
          {
            id: 2,
            tagIcon: 'tag-signature text-4xl fa-solid fa-eye text-cyan-400',
            tagTitle: 'Design Eyes',
            tagContent:
              'I make websites look great by choosing nice colors and arranging things neatly.',
          },
          {
            id: 3,
            tagIcon:
              'tag-signature text-4xl fa-solid fa-hourglass-half text-orange-400',
            tagTitle: 'Management',
            tagContent:
              'I keep things organized and make sure projects finish on time.',
          },
          {
            id: 4,
            tagIcon: 'tag-signature text-4xl fa-solid fa-comments text-red-400',
            tagTitle: 'Communicate',
            tagContent:
              'I talk with clients and teammates to understand what they want.',
          },
          {
            id: 5,
            tagIcon: 'tag-signature text-4xl fa-solid fa-wrench text-green-400',
            tagTitle: 'Improve Ui/Ux',
            tagContent: 'I make websites easy to use and fun to look at.',
          },
          {
            id: 6,
            tagIcon:
              'tag-signature text-4xl fa-solid fa-people-group text-purple-400',
            tagTitle: 'Team player',
            tagContent: 'I work well with others and help my team succeed.',
          },
        ],
      },
    },
    end: {
      clients: {
        heading: 'Clients',
        content: [
          {
            id: 1,
            src: require('~/assets/images/emma.webp'),
            alt: 'emma sleep logo',
          },
          {
            id: 2,
            src: require('~/assets/images/nfq-logo.webp'),
            alt: 'nfq logo',
          },
          {
            id: 3,
            src: require('~/assets/images/scalecommerce.webp'),
            alt: 'scale commerce logo',
          },
        ],
      },
    },
  };
}
</script>

<style lang="scss">
.summary-image {
  @apply max-w-280px sm:max-w-320px lg:max-w-350px rounded-3xl mb-8 lg:mb-0;
}

.carousel {
  &-item {
    @apply flex items-center justify-center w-full max-h-100px;
  }

  &-image {
    @apply max-h-70px;
  }
}
</style>
