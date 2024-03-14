console.log('vue-boolzapp');

import { whatsapp } from "./contacts";

const { createApp } = Vue;

createApp({

  data(){
    return {

      whatsapp,

    }
  },

  methods: {

  },

  mounted(){

  },

}).mount('#app')