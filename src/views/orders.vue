<template>
    <div>
        <div>
            <sidebar/>
        </div>
        
        <div class="sign1">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderBole">
                                        <label for="">Bole</label>
                                        <input type="text" v-model="Bole.food">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Bole.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Bole.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderCornportage">
                                        <label for="">Corn portage</label>
                                        <input type="text" v-model="Cornportage.food">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Cornportage.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Cornportage.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderRice">
                                        <label for="">Chinese Rice</label>
                                        <input type="text" v-model="Rice.food">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Rice.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Rice.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderSoap">
                                        <label for="">Fisher man Soap</label>
                                        <input type="text" v-model="Soap.food">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Soap.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Soap.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderGrilledfish">
                                        <label for="">Grilled fish</label>
                                        <input type="text" v-model="Grilledfish.food">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Grilledfish.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Grilledfish.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderFishsoup">
                                        <label for="">Fisher man</label>
                                        <input type="text" v-model="Fishsoup.food">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Fishsoup.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Fishsoup.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>



<script>
import sidebar from '@/components/SideBars.vue'
import navbar from '@/components/NavBar.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    auth: false,
    // layout: "blog",
    components: {
        sidebar
    },
     data() {
        return {
            meal:{
                food:'',
                description: '',
                price: ''
            },
            // drinks:{
            //     drink:'',
            //     description:'',
            //     price:''
            // }
            Bole:{
                food:'',
                description: '',
                price: ''
            },
            Cornportage:{
                food:'',
                description: '',
                price: ''
            },
            Rice:{
                food:'',
                description: '',
                price: ''
            },
            Soap:{
                food:'',
                description: '',
                price: ''
            },
            Grilledfish:{
                food:'',
                description: '',
                price: ''
            },
            Fishsoup:{
                food:'',
                description: '',
                price: ''
            },



        };
    },
    computed: {
        
    },
    methods: {
        orderBole(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderbole.json',this.meal,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.meal={}
        })
      },
      orderCornportage(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderCornportage.json',this.meal,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.meal={}
        })
      },
      orderRice(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderRice.json',this.meal,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.meal={}
        })
      },
      orderSoap(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderSoap.json',this.meal,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.meal={}
        })
      },
      orderGrilledfish(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderGrilledfish.json',this.meal,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.meal={}
        })
      },
      orderFishsoup(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderFishsoup.json',this.meal,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.meal={}
        })
      },
      
        
        
    },
    mounted() {
        
    },
};
</script>
<style scoped>
     @font-face {
    font-family: DMSans;
    src: url("/font/DMSans-Regular.ttf");
    }
    *{
        font-family: 'DM Sans', sans-serif  !important;
        box-sizing: border-box;
    }
    .link:hover{
        text-decoration: none;
    }
    .upgrade{
        background: #DE911D;
        padding: 1rem 1rem;
        margin-top: 1rem;
        border-radius: 10px;
        color: white;
    }
    .grid{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 1rem;
    }
    .grade{
        text-align: right;
    
    }
    .grade button{
        background: #F0B429;
        margin-top: 2.5rem;
        padding: 8px 2rem;
        border-radius: 8px;
        border: none;
        color:white;
    }
    .sign1{
        margin-left: 20%;
        background: #F4FAFD;
        height: 150vh;
        padding-top: 5rem;
        
        
    }
    .sign2{
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .sign2 h1{
        font-size: 40px;
        padding-top: 1rem;
        color: #0272A2;
        font-weight: bold;
    }
    .sign3{
        text-align: right;
    }
    .sign3 img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-top: 4rem;
    }
    th{
        background-color: #0272A2;
        color: white;
        
        border: none;
    }
    /* .borderleft{
        border-bottom-left-radius: 10px  !important;
        border-top-left-radius: 10px  !important;
    }
    .borderright{
        border-bottom-right-radius: 10px  !important;
        border-top-right-radius: 10px  !important;
    } */
    .box-form{
        padding-top: 100px;
        margin-left: 5px;
    }
    .form-border{
      width: 20vw;
      height: 50vh;
      background-color: white;
      box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
        ;

  
  
        /* min-height: 200px; */
        /* width: 50vw; */
        /* margin: 100px auto; */
        background: white;
        border-radius: 5px;

    }
    label{
        display: block;
        margin-left: 15px;
        margin-top: 3px;
        padding:5px;
    }
    form{
        padding-top: 50px;
        margin-left:20px;
    }
    input{
        margin-left:15px;
        padding: 5px;
        border-radius: 5px;
    }
    button{
        color: rgb(78, 185, 228);
        display: block;
        color:white;
        display: block;
        border: none;
        /* border-radius: px; */
        padding: 12px 24px;
        text-align: center;
        text-decoration: none;
        background-color: #008CBA;
        /* display: inline-block; */
        font-size: 16px;
        font-weight: 600;
    }
    tr{ 
        background: white;
        margin-top: 5px;
        color: #0272A2;
    }
    table {
  border-collapse:separate; 
  border-spacing: 0 0.5em;
}

@media(max-width:576px){
    .upgrade{
        background: #DE911D;
        padding: 2rem 1rem;
        margin-top: 1rem;
        border-radius: 10px;
        color: white;
    }
    .grid{
        display: grid;
        grid-template-columns:1fr;
        grid-column-gap: 1rem;
    }
    .grade{
        text-align: center;
    
    }
    .grade button{
        background: #F0B429;
        margin-top: 2.5rem;
        padding: 8px 2rem;
        border-radius: 8px;
        border: none;
        color:white;
    }
       .sign1{
        margin-left: 0%;
        background: #F4FAFD;
        height: 120vh;
        padding-top: 2rem;
        
    }
    .sign2{
        margin-left: 1rem;
        margin-right: 1rem;
    }
}

@media (min-width:577px) and (max-width:768px){
    .sign1{
        margin-left: 0%;
        background: #F4FAFD;
        height: 100vh;
        padding-top: 3rem;
        
    }
}

</style>