<template>
  <div class="newsArchive">
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <div class="years-container">
        <div
          v-for="year in years"
          :key="year"
          :class="year == activeYear && 'active'"
          @click="setYear(year)"
        >
          {{ year }}
          <div class="triangle"></div>
        </div>
      </div>
      <div class="months-container mt-3">
        <div
          v-for="month in months"
          :key="month"
          :class="month == activeMonth && 'active'"
          @click="setMonth(month)"
        >
          {{ month }}
          <div class="triangle"></div>
        </div>
      </div>

      <div class="mt-4">
        <!-- <h5 class="section-title">{{ $t('Events') }}</h5> -->
        <div v-for="item in events" :key="item.id" class="mb-4">
          <router-link :to="`/media/events/${item.id}`">
            <b-row
              v-if="item.date_start.split(' ')[0].split('-')[0] == activeYear && parseInt(item.date_start.split(' ')[0].split('-')[1]) == activeMonth"
            >
              <b-col md="2" class="date-label">
                <span class="date">{{item.date_start.split(' ')[0]}}</span>
              </b-col>
              <b-col md="10">
                <div class="title">{{ item[`title_${locale}`] }}</div>
                <div
                  class="text-short"
                >{{ item[`article_${locale}`] && item[`article_${locale}`].substring(0, 200).concat('...') }}</div>
              </b-col>
            </b-row>
          </router-link>
        </div>

        <div v-for="item in pressReleases" :key="item.id" class="mb-4">
          <router-link :to="`/media/press-releases/${item.id}`">
            <b-row
              v-if="item.date.split(' ')[0].split('-')[0] == activeYear && parseInt(item.date.split(' ')[0].split('-')[1]) == activeMonth"
            >
              <b-col md="2" class="date-label">
                <span class="date">{{item.date.split(' ')[0]}}</span>
              </b-col>
              <b-col md="10">
                <div class="title">{{ item[`title_${locale}`] }}</div>
                <div
                  class="text-short"
                >{{ item[`article_${locale}`] && item[`article_${locale}`].substring(0, 200).concat('...') }}</div>
              </b-col>
            </b-row>
          </router-link>
        </div>
      </div>
      <!-- <div class="mt-4">
        <div v-for="item in pressReleases" :key="item.id">
          <router-link
            :to="`/media/press-releases/${item.id}`"
            v-if="item.date.split(' ')[0].split('-')[0] == activeYear && parseInt(item.date.split(' ')[0].split('-')[1]) == activeMonth"
          >{{ item[`title_${locale}`] }}</router-link>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import {
  API_BASE_URL,
  NEWSLETTERS_URL,
  EVENTS_URL,
  RELEASES_URL,
  NEWSARCHIVE_URL,
  PRESSRELEASES_URL,
  ANNOUNCEMENTS_URL,
} from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'NewsArchive',
  data() {
    return {
      activeMonth: 0,
      activeYear: 0,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      events: null,
      news: null,
      releases: null,
      pressReleases: null,
      announcements: null,
      data: [],
      loading: true,
      errored: false,
      API_BASE_URL,
      count: 0,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
    sortedItems: function() {
      return this.data.sort(
        (a, b) => new Date(a.date || a.date) - new Date(b.date || b.date)
      );
    },
    years: function() {
      const j = this.data;
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      return this.sortedItems
        .map(item => item.date && item.date.split(' ')[0].split('-')[0])
        .filter(onlyUnique);
    },
  },
  mounted() {
    (this.activeMonth = parseInt(new Date().getMonth()) + 1),
      (this.activeYear = new Date().getFullYear()),
      this.$http
        .get(EVENTS_URL + '?_sort=date_start:DESC&_limit=1000')
        .then(response => {
          this.events = response.data;
          this.data.push(...this.events);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));

    this.$http
      .get(PRESSRELEASES_URL + '?_sort=date:DESC&_limit=1000')
      .then(response => {
        this.pressReleases = response.data;
        this.data.push(...this.pressReleases);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    console.log(this.data);
  },
  methods: {
    setMonth(month) {
      this.activeMonth = month;
      return this.activeMonth;
    },
    setYear(year) {
      this.activeYear = year;
      return this.activeYear;
    },
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.cards {
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.title {
  color: #141e3a;
  font-weight: bold;
  margin-bottom: 10px;
}

.card {
  border-radius: 0;
}

.card-title {
  margin: 15px 10px;
}

.card-img-container {
  max-height: 200px;
  overflow: hidden;
}

.card-body {
  max-height: 80px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.btn-container {
  padding: 0.5rem 0 1.25rem 1.25rem;
}

.btn-read-more {
  font-weight: 500;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: transparent;
  background: transparent;
  color: inherit;
  border: none;
  box-shadow: none;
  height: 30px;
  padding: 4px 6px;
  color: #004996;
}

.btn-read-more:active,
.btn-read-more:visited {
  color: #004996 !important;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

.btn-read-more:hover {
  color: #4080ff;
}

.months-container,
.years-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #141e3a;
  font-weight: bold;
  padding: 10px 20px;
  background: #0082bf;
  user-select: none;
  box-shadow: 1px 1px 3px -1px rgba(0, 0, 0, 0.3);
}
.months-container > div,
.years-container > div {
  position: relative;
  cursor: pointer;
  color: #141e3a;
}
.triangle {
  border-color: transparent transparent #141e3a transparent;
  top: 100%;
}
.months-container > div:hover > .triangle,
.years-container > div:hover > .triangle,
.months-container > div.active > .triangle,
.years-container > div.active > .triangle {
  opacity: 1;
}

.date-label {
  position: relative;
}
.date {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #0082bf;
  color: #141e3a;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 20px;
}

.text-short {
  color: #333;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>