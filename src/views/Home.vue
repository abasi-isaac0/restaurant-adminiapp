<template>
  <div>
   <div class="">
      <div class="grid">
        <div class="grid1">

        </div>
        <div class="grid2">
         
          <div class="container-fluid"> 
             <div class="title">
               <h2>Login</h2>
             </div>
              <form @submit.prevent="login">
                <div class="">
                  <!-- <label for=""><b>Username</b></label>
                  <input type="text" placeholder="Enter Username"  required>
                    -->
                   <label for=""><b>Email</b></label>
                   <input type="text" placeholder="Enter Email" v-model="email" required>

                  <label for=""><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" v-model="password" required>

                  
                    <button type="submit" class="btn-primary">Login</button>
                  
                  
                </div>

                
              </form>
          </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from "firebase";
Vue.use(VueAxios, axios, firebase)
export default {
  data() {
    return {
        email:'',
        password:'',
    }
  },
  methods: {
  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Successfully logged in');
        this.$router.push('/orders');
      })
      .catch(error => {
        alert(error.message);
      });
  },
  //  logout() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       alert('Successfully logged out');
  //       this.$router.push('/');
  //     })
  //     .catch(error => {
  //       alert(error.message);
  //       this.$router.push('/');
  //     });
  // },

},
}
</script>


<style scoped>
/* .main{
  background-color: rgb(212, 215, 219);
  height: 93.6vh;
} */
.grid{
  /* margin-top:100px; */
  /* margin-top:100px; */
  padding:110px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.grid1{
  background: url('../assets/images/15.jpg') center center/cover;
  height: 70vh;
  border-radius: 10pc 0px 0 20px;
}
.grid2{
  background-color: rgb(221, 212, 212);
  border-radius: 0px 20px 10pc 0;
}
.title{
  padding-top: 10rem;
  padding-bottom: 20px ;
  text-align: left;
  margin-left: 10rem;
}
label{
display: block;
margin-left: 10rem;
}
button{
  font-weight: bold;
  width: 40%;
  display: block;
  margin-left: 10rem;
}
input{  
  margin-left: 10rem;
  margin-bottom: 1rem;
  border: none;
  width: 40%;
  border-bottom: 2px solid black ;
  background-color: none;
  display: block;
  } 
select{
  margin-bottom: 1rem;
  }

  form{
    justify-content: center;
  }

@media(max-width:567px){
  
        .grid{
        display: grid;
        grid-template-columns: 1fr;
        padding: 0;
        margin-top: -4rem;
        height: 80vh;
    }
         .grid1{
        display: none;
        
    }
    .title{
      color: gold;
    }
    .grid2{
       border-radius: none;
      
        background: url('../assets/images/15.jpg') center center/cover;
        height: 50vh;
        /* color: gold; */
        /* margin-top: auto; */
        /* background: linear-gradient(to right, rgba(8,29,41,0.7),rgba(8,29,41,0.7)),url('../assets/images/16.jpg') center center/cover; */
    }
    label{
        color: white;
    }
    .title{
      color: white;
    }
    .grid2 h1{
        font-size: 50px;
        margin-bottom: 1rem;
        color: white;
    }
    .main{
      background-color: none;
    }
    .title{
  padding-top: 1rem;
  padding-bottom: 20px ;
  text-align: left;
  margin-left: 0;
}
label{
display: block;
margin-left: 0;
}
button{
  font-weight: bold;
  width: 100%;
  display: block;
  margin-left: 0;
}
input{  
  margin-left: 0;
  margin-bottom: 1rem;
  border: none;
  width: 100%;
  border-bottom: 2px solid black ;
  background-color: none;
  display: block;
  } 
    }


    @media(min-width:568px) and (max-width:768px){
        .grid2{
            padding: 2rem 20px;
        }
        .title{
  padding-top: 5rem;
  padding-bottom: 20px ;
  text-align: left;
  margin-left: 0;
}
label{
display: block;
margin-left: 0;
}
button{
  font-weight: bold;
  width: 100%;
  display: block;
  margin-left: 0;
}
input{  
  margin-left: 0;
  margin-bottom: 1rem;
  border: none;
  width: 100%;
  border-bottom: 2px solid black ;
  background-color: none;
  display: block;
  } 
      
    }


@media(min-width:769px) and (max-width:1200px){
  .title{
  padding-top: 5rem;
  padding-bottom: 20px ;
  text-align: left;
  margin-left: 0;
}
label{
display: block;
margin-left: 0;
}
button{
  font-weight: bold;
  width: 100%;
  display: block;
  margin-left: 0;
}
input{  
  margin-left: 0;
  margin-bottom: 1rem;
  border: none;
  width: 100%;
  border-bottom: 2px solid black ;
  background-color: none;
  display: block;
  } 
}

</style>
