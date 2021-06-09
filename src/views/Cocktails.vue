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
                                <form @submit.prevent="orderChampagne">
                                        <label for="">Champagne</label>
                                        <input type="text" v-model="Champagne.drink">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Champagne.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Champagne.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderHero">
                                        <label for="">Hero</label>
                                        <input type="text" v-model="Hero.drink">
                                        <label for="">Description</label>   
                                        <input type="text" v-model="Hero.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Hero.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderBudweiser">
                                        <label for="">Budweiser</label>
                                        <input type="text" v-model="Budweiser.drink">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Budweiser.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Budweiser.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderHennessy">
                                        <label for="">Hennessy</label>
                                        <input type="text" v-model="Hennessy.drink">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Hennessy.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Hennessy.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderSmoove">
                                        <label for="">Smoove drinks</label>
                                        <input type="text" v-model="Smoove.drink">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Smoove.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Smoove.price">
                                        <button type="submit" class="submit mt-4 ml-3 p-2">Submit</button>
                                </form>
                    
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box-form">
                            <div class="form-border">
                                <form @submit.prevent="orderChampion">
                                        <label for="">Champion</label>
                                        <input type="text" v-model="Champion.drink">
                                        <label for="">Description</label>
                                        <input type="text" v-model="Champion.description">
                                        <label for="">Price</label>
                                        <input type="text" v-model="Champion.price">
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
            // meal:{
            //     food:'',
            //     description: '',
            //     price: ''
            // },
            // drinks:{
            //     drink:'',
            //     description:'',
            //     price:''
            // },
            champagne:{
                drink:'',
                description:'',
                price:''
            },
            Hero:{
                drink:'',
                description:'',
                price:''
            },
            Budweiser:{
                drink:'',
                description:'',
                price:''
            },
            Hennessy:{
                drink:'',
                description:'',
                price:''
            },
            smoove:{
                drink:'',
                description:'',
                price:''
            },
            Champion:{
                drink:'',
                description:'',
                price:''
            },
            



        };
    },
    computed: {
        
    },
    methods: {
        orderChampagne(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderChampagne.json',this.drinkss,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.drinks={}
        })
      },
      orderHero(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderHero.json',this.drinkss,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.drinks={}
        })
      },
      orderBudweiser(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderBudweiser.json',this.drinkss,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.drinks={}
        })
      },
      orderHennessy(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderHennessy.json',this.drinkss,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.drinks={}
        })
      },
      orderSmoove(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderSmoove.json',this.drinkss,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.drinks={}
        })
      },
      orderChampion(){
        axios.post('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderChampion.json',this.drinkss,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
          console.log(res)
          this.drinks={}
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