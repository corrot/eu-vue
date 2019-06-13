<template>
  <b-container>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <div :v-if="locale">
        <div class="image-canvas">
          <div id="base" class="structure-image mb-4">
            <img :src="structureImage" :alt="$t('Structure')" />
          </div>
          <div class="overlay">
            <a v-for="(item, index) in data" v-if="item.show" :key="index" :href="`#${item.id}`">
              <span  :style="{'top': item.top + 'px', 'left': item.left + 'px', 'width': item.width + 'px', 'height': item.height + 'px'}">
                <!-- <b-button :to="'/employees/' + index" :id="index">{{ item[`position_${locale}`] }}</b-button> -->
                <b-tooltip :target="index.toString()">
                  <div>{{ item[`position_${locale}`] }}</div>
                  <div>{{ item[`name_${locale}`] }}</div>
                </b-tooltip>
              </span>
            </a>
          </div>
        </div>
        <!-- <div v-for="(item, index) in tree" :key="index" class="mb-2">
          <b-button :to="'/employees/' + index" :id="index">{{ item.title }}</b-button>
          <b-tooltip :target="index.toString()">{{ item.name }}</b-tooltip>
        </div> -->
      </div>
      <b-row>
        <b-col :id="emp.id" cols="6" v-for="emp in data" :key="emp.id">
          <b-card no-body class="overflow-hidden mb-3">
            <b-row no-gutters>
              <b-col md="4" style="height: 160px">
                <!-- <b-card-img style="max-width: 100%" :src="emp.photo && `${API_BASE_URL}/uploads/${emp.photo.hash}${emp.photo.ext}`"/> -->
                <div class="img-100" v-bind:style="{'background-image': emp.photo ? `url(${API_BASE_URL}/uploads/${emp.photo.hash}${emp.photo.ext})` : `url(${noimage})`}"></div>
              </b-col>
              <b-col md="8">
                <b-card-body :title="emp[`name_${locale}`]">
                  <b-card-text>
                    <h5 class="position">{{ emp[`position_${locale}`] }}</h5>
                    <div>
                      <a :href="`tel:${emp.tel_number}`">{{ emp.tel_number }}</a>
                    </div>
                    <div>
                      <a :href="`mailto:${emp.email}`">{{ emp.email }}</a>
                    </div>
                    <div v-if="emp[`cv_${locale}`]">
                      <a :href="emp[`cv_${locale}`] && `${API_BASE_URL}/uploads/${emp[`cv_${locale}`].hash}${emp[`cv_${locale}`].ext}`" target="_blank">{{ $t('CurriculumVitae') }}</a>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>

  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { API_BASE_URL, EMPLOYEES_URL, STRUCTURE_IMAGE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import noimage from '../../../assets/noimage.jpg';

export default {
  name: 'Structure',
  data() {
    return {
      currentPage: 1,
      structureImage: 0,
      news: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      noimage
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(EMPLOYEES_URL)
      .then(response => {
        console.log(response);
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    this.$http
      .get(STRUCTURE_IMAGE_URL)
      .then(response => {
        const image = response.data[0].image[0];
        this.structureImage = API_BASE_URL + '/uploads/' + image.hash + image.ext;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    expandArticle(){
    }
  },
  components: { LoadingSpinner, ServerError }
};
</script>

<style lang="postcss" scoped>
.position{
  font-size: 16px;
}
.structure-image > img{
  width: 100%;
}
.img-100{
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.image-canvas{
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay{
  width: 100%;
  height: 100%;
}

.overlay span{
  position: absolute;
  z-index: 10;
  /* background-color: rgba(255,0,0,.3) */
  border: solid 1px rgba(0,0,0,.1)
}

.overlay span a{
  background-color: transparent;
  border: none;
  width: 110px;
  height: 60px;
  color: transparent;
}

.overlay span a:active, .overlay span a:focus{
  background-color: transparent!important;
  box-shadow: none!important;
  color: transparent!important;
  border: none!important;
}

#base {
  width: 1120px;
  height: auto;
}

</style>