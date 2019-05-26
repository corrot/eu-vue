<template>
  <div>
    <b-container>
      <div :v-if="locale">
        <div class="image-canvas">
          
          <div id="base">
            <img style="width: 100%" :src="structure" alt="Structure">
          </div>   

          <div class="overlay">
            <span v-for="(item, index) in tree" :key="index">
              <b-button :to="'/employees/' + index" :id="index">{{ item.title }}</b-button>
              <b-tooltip :target="index.toString()">{{ item.name }}</b-tooltip>
            </span>
          </div>
     
        </div>

        <!-- <div v-for="(item, index) in tree" :key="index" class="mb-2">
          <b-button :to="'/employees/' + index" :id="index">{{ item.title }}</b-button>
          <b-tooltip :target="index.toString()">{{ item.name }}</b-tooltip>
        </div> -->
      </div>
    </b-container>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import structure from './structure.jpg';
import tree from './structure-tree.js';

export default {
  name: 'Structure',
  data() {
    return {
      structure,
      tree,
    };
  },
  computed: {
    locale: () => {
      console.log(i18n.locale);
      return i18n.locale;
    },
  },
  mounted() {
    
  }
};
</script>

<style lang="postcss" scoped>
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

.overlay span:nth-child(1){
  top: 220px;
  left: 460px;
}

.overlay span:nth-child(2){
  top: 312px;
  left: 200px;
}

.overlay span:nth-child(3){
  top: 325px;
  left: 600px;
}

.overlay span:nth-child(4){
  top: 425px;
  left: 360px;
}

.overlay span:nth-child(4) a,
.overlay span:nth-child(6) a,
.overlay span:nth-child(7) a{
  font-size: 0;
}

.overlay span:nth-child(5){
  top: 425px;
  left: 205px;
}

.overlay span:nth-child(6){
  top: 425px;
  left: 695px;
}

.overlay span:nth-child(7){
  top: 425px;
  left: 535px;
}

.overlay span:nth-child(8){
  top: 425px;
  left: 835px;
}

.overlay span:nth-child(9){
  top: 520px;
  left: 105px;
}

#base {
  width: 1120px;
  height: auto;
}

</style>