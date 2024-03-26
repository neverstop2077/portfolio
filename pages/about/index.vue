<template>
  <div class="container mx-auto mt-4rem pb-4rem">
    <div class="card">
      <div class="card-header">
        <h1 class="headline-1">About Me</h1>
      </div>
      <div class="card-content">
        <div class="flex flex-row columns-2 items-center">
          <div class="card-content-item card-content-left">
            <img
              src="~/assets/images/summary-image.jpg"
              alt="woodie's image"
              class="summary-image"
            />
          </div>
          <div class="card-content-item card-content-right">
            <div class="card-content-section">
              <h2 class="card-content-section-heading">Who Am I?</h2>
              <p class="card-content-section-paragraph">
                I'm a front-end developer based in Vietnam, where I specialize
                in crafting beautiful and user-friendly websites. I love
                simplifying complex issues to create straightforward solutions.
                My passion lies in building engaging online experiences that
                truly resonate with users.
              </p>
              <p class="card-content-section-paragraph">
                My goal is to bring your ideas to life in the most creative way
                possible. Having collaborated with numerous renowned brands,
                I've helped them shine online with visually stunning and
                intuitive designs. Let's collaborate to ensure your website
                stands out in the digital landscape!
              </p>
            </div>
            <div class="card-content-section">
              <h2 class="card-content-section-heading">Personal Info</h2>
              <div class="grid grid-cols-2">
                <div
                  v-for="badge in informationBadges"
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
          <h2 class="card-content-section-heading">What I Do!</h2>
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div
              v-for="(tag, index) in whatIDoTags"
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
        <div
          class="mt-8 pt-12 pb-16 py-4 flex flex-col items-center bg-sky-50 dark:bg-dark-900 rounded-xl"
        >
          <h2 class="card-content-section-heading !mb-6">Clients</h2>
          <carousel :autoplay="true" :per-page="1" :pagination-enabled="false">
            <slide v-for="client in clients" :key="client.id">
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
          © 2024 All Rights Reserved by Woodie Vo.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AboutPage extends Vue {
  informationBadges = [
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
  ];
  whatIDoTags = [
    {
      id: 1,
      tagIcon: 'tag-signature fa-solid fa-code text-pink-400',
      tagTitle: 'Web Development',
      tagContent:
        'I build websites with HTML, CSS, and JavaScript to make them work smoothly.',
    },
    {
      id: 2,
      tagIcon: 'tag-signature fa-solid fa-eye text-cyan-400',
      tagTitle: 'Design Eyes',
      tagContent:
        'I make websites look great by choosing nice colors and arranging things neatly.',
    },
    {
      id: 3,
      tagIcon: 'tag-signature fa-solid fa-hourglass-half text-orange-400',
      tagTitle: 'Management',
      tagContent:
        'I keep things organized and make sure projects finish on time.',
    },
    {
      id: 4,
      tagIcon: 'tag-signature fa-solid fa-comments text-red-400',
      tagTitle: 'Communicate',
      tagContent:
        'I talk with clients and teammates to understand what they want.',
    },
    {
      id: 5,
      tagIcon: 'tag-signature fa-solid fa-wrench text-green-400',
      tagTitle: 'Improve Ui/Ux',
      tagContent: 'I make websites easy to use and fun to look at.',
    },
    {
      id: 6,
      tagIcon: 'tag-signature fa-solid fa-people-group text-purple-400',
      tagTitle: 'Team player',
      tagContent: 'I work well with others and help my team succeed.',
    },
  ];
  clients = [
    {
      id: 1,
      src: require('~/assets/images/emma.png'),
      alt: 'emma sleep logo',
    },
    {
      id: 2,
      src: require('~/assets/images/nfq-logo.png'),
      alt: 'nfq logo',
    },
    {
      id: 3,
      src: require('~/assets/images/scalecommerce.png'),
      alt: 'scale commerce logo',
    },
  ];
}
</script>

<style lang="scss">
.card {
  @apply bg-white dark:bg-neutral-900 mx-8 px-8 pt-16 pb-6 rounded-xl;

  &-header {
    @apply mb-40px mx-4;
  }

  &-footer {
    @apply mt-8 flex mx-auto;

    &-content {
      @apply mx-auto text-zinc-800 dark:text-zinc-400;
    }
  }

  &-content {
    @apply;

    &-item {
      @apply px-4;
    }
    &-left {
      @apply;
    }

    &-right {
      @apply;
    }

    &-section {
      @apply py-3;

      &-heading {
        @apply text-2xl mb-3 text-dark-900 dark:text-white;
      }

      &-paragraph {
        @apply text-normal text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3;
      }
    }
  }
}

.summary-image {
  @apply max-w-270px max-h-400px rounded-3xl;
}

.badge {
  @apply flex flex-row items-center gap-x-10px py-3;

  &-signature {
    @apply min-w-44px min-h-44px shadow-md;
  }

  &-icon {
    @apply min-w-20px text-xl;
  }

  &-title {
    @apply text-xs text-zinc-500 dark:text-zine-300 mb-1;
  }

  &-content {
    @apply text-dark dark:text-white;
  }
}

.tag {
  @apply flex flex-row items-start px-7 py-5 mb-3 rounded-xl gap-x-5 border-0 dark:border-0.3px dark:border-zinc-600;

  &.tag-pink {
    @apply bg-rose-50 dark:bg-transparent;
  }

  &.tag-blue {
    @apply bg-blue-50 dark:bg-transparent;
  }

  &-signature {
    @apply: text-4xl;
  }

  &-title {
    @apply text-xl font-medium mb-3 dark:text-white;
  }

  &-content {
    @apply text-normal text-zinc-500 dark:text-zinc-400 leading-loose;
  }
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
