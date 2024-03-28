<template>
  <div class="main-container">
    <div class="card">
      <div class="card-header">
        <h1 class="headline-1">{{ getSection('hero.heading') }}</h1>
      </div>
      <div class="card-content">
        <div class="mt-8">
          <div class="resume-container">
            <div
              v-for="(resume, resumeIndex) in getSection('hero.resume')"
              :key="resume.id"
              class="resume-col"
            >
              <div class="resume-header">
                <i :class="resume.icon"></i>
                <h2 class="resume-title">{{ resume.title }}</h2>
              </div>
              <div class="resume-list">
                <div
                  v-for="(item, itemIndex) in resume.items"
                  :key="item.id"
                  class="tag resume-tag !items-start"
                  :class="
                    (resumeIndex + itemIndex) % 2 === 0
                      ? 'tag-pink'
                      : 'tag-blue'
                  "
                >
                  <p class="tag-timeline">{{ item.timeline }}</p>
                  <h3 class="tag-title !mb-0 !font-normal !text-1.125rem">
                    {{ item.title }}
                  </h3>
                  <p class="tag-content">{{ item.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="section-wrapper px-2 sm:px-4 md:px-6 lg:px-8 !items-stretch !lg:flex-row !justify-between gap-8"
        >
          <div class="flex flex-row flex-1 lg:max-w-3/5">
            <div class="w-full">
              <h2 class="card-content-section-heading !mb-6 !font-medium">
                {{ getSection('main.skills.heading') }}
              </h2>
              <div class="">
                <ProgressBar
                  v-for="item in getSection('main.skills.list')"
                  :key="item.id"
                  progressClass="mb-8"
                  :percent="item.percent"
                  :title="item.title"
                  :color="item.color"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 lg:max-w-2/5">
            <h2 class="card-content-section-heading !mb-6 !font-medium">
              {{ getSection('main.knowledge.heading') }}
            </h2>
            <div class="flex flex-row flex-wrap gap-x-3 gap-y-5">
              <div
                class="static-tag"
                v-for="item in getSection('main.knowledge.list')"
                :key="item.id"
              >
                <div class="static-tag-content">{{ item.title }}</div>
              </div>
            </div>
          </div>
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
    hero: {
      heading: 'Resume',
      resume: [
        {
          id: 1,
          title: 'Education',
          icon: 'fa-solid fa-book resume-icon',
          items: [
            {
              id: 1,
              timeline: '2018-2023',
              title: 'Bachelor IT - University',
              location: 'Can Tho, Viet Nam',
            },
          ],
        },
        {
          id: 2,
          title: 'Experience',
          icon: 'fa-solid fa-flask resume-icon ',
          items: [
            {
              id: 1,
              timeline: '2018-present',
              title: 'Web Dev',
              location: 'NFQ Vietnam',
            },
          ],
        },
        {
          id: 3,
          title: 'Projects',
          icon: 'fa-solid fa-briefcase resume-icon ',
          items: [
            {
              id: 1,
              timeline: '2024-present',
              title: 'Emma Career',
              location: 'NFQ Vietnam',
            },
            {
              id: 2,
              timeline: '2023-2024',
              title: 'Scale Commerce',
              location: 'NFQ Vietnam',
            },
          ],
        },
      ],
    },
    main: {
      skills: {
        heading: 'Working Skills',
        list: [
          {
            id: 1,
            title: 'HTML/CSS',
            percent: 85,
            color: 'bg-red-400',
          },
          {
            id: 2,
            title: 'Javascript',
            percent: 77,
            color: 'bg-cyan-400',
          },
          {
            id: 3,
            title: 'VueJS',
            percent: 70,
            color: 'bg-indigo-400',
          },
          {
            id: 4,
            title: 'Git',
            percent: 80,
            color: 'bg-pink-400',
          },
        ],
      },
      knowledge: {
        heading: 'Knowledge',
        list: [
          {
            id: 1,
            title: 'Web development',
          },
          {
            id: 2,
            title: 'Flexibility',
          },
          {
            id: 3,
            title: 'Time management',
          },
          {
            id: 4,
            title: 'Communication',
          },
          {
            id: 5,
            title: 'Presentation',
          },
        ],
      },
    },
  };
}
</script>

<style lang="scss">
.resume {
  &-container {
    @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12;
  }
  &-header {
    @apply flex items-center gap-x-2 mb-6;
  }
  &-title {
    @apply font-medium inline text-2xl xl:text-1.625rem text-black dark:text-white;
  }
  &-icon {
    @apply text-3xl text-red-400;
  }
  &-list {
    @apply flex flex-col gap-y-2;
  }
  &-tag {
    &.tag {
      @apply flex flex-col gap-y-1;
    }
  }
}
</style>
