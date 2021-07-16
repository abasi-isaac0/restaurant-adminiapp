import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'   
import '@fortawesome/fontawesome-free/js/all.js'
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC2HOsH3rJfALceQOOmRmgyOUHlcZN9ByY",
  authDomain: "hotel-project-cafb0.firebaseapp.com",
  databaseURL: "https://hotel-project-cafb0-default-rtdb.firebaseio.com",
  projectId: "hotel-project-cafb0",
  storageBucket: "hotel-project-cafb0.appspot.com",
  messagingSenderId: "689409981929",
  appId: "1:689409981929:web:6d8c8d86a0412344829f78",
  measurementId: "G-926K0VE7SZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
