<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <div>
        <div class="image-canvas">
          <div id="base" class="structure-image mb-4">
            <img :src="imageData[`image_${locale}`] && `${API_BASE_URL}/uploads/${imageData[`image_${locale}`].hash}${imageData[`image_${locale}`].ext}`" :alt="$t('Structure')" style="margin-top: 60px" />
            <div class="overlay">
              <a v-for="item in data" :key="item.id">
                <span
                  class="indicator"
                  :style="{'top': item.Ycoordinate + 'px','left': item.Xcoordinate + 'px','width': item.width ? item.width + 'px' : '20px','height': item.height ? item.height + 'px' : '20px'}"
                >
                  <!-- <b-button :to="'/employees/' + index" :id="index">{{ item[`position_${locale}`] }}</b-button> -->
                  <!-- <b-tooltip :target="index.toString()">
                    <div>{{ item[`position_${locale}`] }}</div>
                    <div>{{ item[`name_${locale}`] }}</div>
                  </b-tooltip>-->
                  <div v-for="(employee, i) in item.employees" :key="i">
                    <router-link :to="`employ-detail/${employee.id}`">
                      <b-card
                        no-body
                        class="overflow-hidden mb-3 card"
                        style="position: relative; min-width: 450px; left: 50%; transform: translate(-50%, -100%); z-index: 99999;"
                      >
                        <b-row no-gutters>
                          <b-col md="5" style="height: 160px">
                            <div
                              class="img-100"
                              v-bind:style="{'background-image': employee.photo ? `url(${API_BASE_URL}/uploads/${employee.photo.hash}${employee.photo.ext})` : `url(${noimage})`}"
                            ></div>
                          </b-col>
                          <b-col md="7">
                            <b-card-body :title="employee[`name_${locale}`]">
                              <b-card-text>
                                <h5 class="position">{{ employee[`position_${locale}`] }}</h5>
                                <div>
                                  <a :href="`tel:${employee.tel_number}`">{{ employee.tel_number }}</a>
                                </div>
                                <div>
                                  <a :href="`mailto:${employee.email}`">{{ employee.email }}</a>
                                </div>
                                <div v-if="employee[`cv_${locale}`]">
                                  <a
                                    :href="employee[`cv_${locale}`] && `${API_BASE_URL}/uploads/${employee[`cv_${locale}`].hash}${employee[`cv_${locale}`].ext}`"
                                    target="_blank"
                                  >{{ $t('CurriculumVitae') }}</a>
                                </div>
                              </b-card-text>
                            </b-card-body>
                          </b-col>
                        </b-row>
                      </b-card>
                    </router-link>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <b-row></b-row>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import {
  API_BASE_URL,
  STRUCTURE_URL,
  STRUCTURE_IMAGE_URL,
} from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Structure',
  data() {
    return {
      imageData: '',
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(STRUCTURE_IMAGE_URL)
      .then(response => {
        this.imageData = response.data[0];
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    this.$http
      .get(STRUCTURE_URL)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {},
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>
.indicator {
  position: relative;
  z-index: 9999;
}
.indicator > div > a > .card {
  opacity: 0;
  display: none;
  transition: 0.3s ease all;
  z-index: 9999;
}
.indicator:hover > div > a > .card {
  opacity: 1;
  display: block;
  transition: 0.3s ease all;
}
.position {
  font-size: 16px;
  text-align: left;
}
.structure-image > img {
  width: 100%;
}
.img-100 {
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.image-canvas {
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  min-height: 600px;
  top: 0;
  left: 0;
  margin-top: 60px;
}

.overlay > a > span {
  position: absolute;
  z-index: 10;
  /* background-color: rgba(255,0,0,.3) */
  border: solid 1px rgba(0, 0, 0, 0.1);
}

/* .overlay span a{
  background-color: transparent;
  border: none;
  width: 110px;
  height: 60px;
  color: transparent;
} */

/* .overlay span a:active, .overlay span a:focus{
  background-color: transparent!important;
  box-shadow: none!important;
  color: transparent!important;
  border: none!important;
} */

#base {
  width: 1120px;
  height: auto;
  position: relative;
}
</style>