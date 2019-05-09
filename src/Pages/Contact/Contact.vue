<template>
  <b-container>
    <b-row>
      <b-col>
        <iframe
          style="width:100%; height: 100%; border:0"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCJdk1n9TmA1d7y1WEfYNfxixiYRlJ6fvI&q=154+Davit+Aghmashenebeli+Ave,+T'bilisi"
          allowfullscreen
        ></iframe>
      </b-col>
      <b-col>
        <b-card class="mt-3">
          <p>Georgian Competition Agency</p>
          <p>154, Agmashenebeli av. Tbilisi, 0106</p>
          <p>Phone: (032) 2 440 770 (Ext 21-74)</p>
          <p>E-mail: info-gca@competition.ge</p>
        </b-card>
        <div class="mt-3">
          <b-form-group
            label-cols-sm="3"
            label="Full Name:"
            label-align-sm="right"
            label-for="nested-street"
          >
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Email:"
            label-align-sm="right"
            label-for="nested-city"
          >
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Tel:"
            label-align-sm="right"
            label-for="nested-state"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Message:"
            label-align-sm="right"
            label-for="nested-country"
          >
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary" class="right">Submit</b-button>
        </div>
      </b-col>
    </b-row>
    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      msg: 'Contact Page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>

