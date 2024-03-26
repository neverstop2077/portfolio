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
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
              </p>
              <p class="card-content-section-paragraph">
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
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
      iconColor: 'badge-signature !hover:text-white !text-pink-500',
      iconClass: 'fa-solid fa-mobile-screen-button badge-icon',
      title: 'Phone',
      content: '+84 846 905 006',
    },
    {
      id: 2,
      iconColor: 'badge-signature !hover:text-white !text-cyan-500',
      iconClass: 'fa-solid fa-inbox badge-icon',
      title: 'Email',
      content: 'quocduy060220@gmail.com',
    },
    {
      id: 3,
      iconColor: 'badge-signature !hover:text-white !text-green-500',
      iconClass: 'fa-solid fa-location-dot badge-icon',
      title: 'Location',
      content: 'Viet Nam',
    },
    {
      id: 4,
      iconColor: 'badge-signature !hover:text-white !text-orange-500',
      iconClass: 'fa-solid fa-calendar-days badge-icon',
      title: 'Birthday',
      content: 'Feb 06, 2000',
    },
  ];
  whatIDoTags = [
    {
      id: 1,
      tagIcon: 'tag-signature fa-solid fa-ruler-combined',
      tagTitle: 'Ui/Ux Design',
      tagContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam euismod tincidunt volutpat.',
    },
    {
      id: 2,
      tagIcon: 'tag-signature fa-solid fa-ruler-combined',
      tagTitle: 'Ui/Ux Design',
      tagContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam euismod tincidunt volutpat.',
    },
    {
      id: 3,
      tagIcon: 'tag-signature fa-solid fa-ruler-combined',
      tagTitle: 'Ui/Ux Design',
      tagContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam euismod tincidunt volutpat.',
    },
    {
      id: 4,
      tagIcon: 'tag-signature fa-solid fa-ruler-combined',
      tagTitle: 'Ui/Ux Design',
      tagContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam euismod tincidunt volutpat.',
    },
    {
      id: 5,
      tagIcon: 'tag-signature fa-solid fa-ruler-combined',
      tagTitle: 'Ui/Ux Design',
      tagContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam euismod tincidunt volutpat.',
    },
    {
      id: 6,
      tagIcon: 'tag-signature fa-solid fa-ruler-combined',
      tagTitle: 'Ui/Ux Design',
      tagContent:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam euismod tincidunt volutpat.',
    },
  ];
}
</script>

<style lang="scss">
.card {
  @apply bg-white mx-8 px-8 py-16 rounded-xl;

  &-header {
    @apply mb-40px mx-4;
  }

  &-footer {
    @apply mt-8 flex mx-auto;

    &-content {
      @apply mx-auto;
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
        @apply text-2xl mb-3 text-dark-900;
      }

      &-paragraph {
        @apply text-normal text-zinc-600 leading-relaxed mb-3;
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
    @apply text-xs text-zinc-500 mb-1;
  }

  &-content {
    @apply;
  }
}

.tag {
  @apply flex flex-row items-start p-5 mb-3 rounded-xl gap-x-5;

  &.tag-pink {
    @apply bg-rose-50;
  }

  &.tag-blue {
    @apply bg-blue-50;
  }

  &-signature {
    @apply: text-4xl;
  }

  &-title {
    @apply text-xl font-medium mb-3;
  }

  &-content {
    @apply text-normal text-zinc-500 leading-loose;
  }
}
</style>
