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
        <b-card class="mt-3 text-center" style="border: none;">
          <p>Georgian Competition Agency</p>
          <p>154, Agmashenebeli av. Tbilisi, 0106</p>
          <p>Phone: (032) 2 440 770 (Ext 21-74)</p>
          <p>E-mail: info-gca@competition.ge</p>
        </b-card>
        <div class="mt-3 input-container">
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
        </div>
        <div class="text-center">
          <b-button type="submit" class="btn-submit-message">Submit</b-button>
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
      text: ''
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

iframe {
  margin: 15px 0;
}

.input-container {
  padding-right: 15%;
}

.btn-submit-message {
  border: none;
  border-bottom: 4px solid #0a0a2d;
  background: none;
  color: #000;
  border-radius: 0;
  letter-spacing: 1px;
  width: 110px;
  height: 40px;
  /* float: right; */
  font-size: 17px;
}

.btn-submit-message:hover {
  background: #e3eaf1;
}
</style>

