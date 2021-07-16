<template>
    <div>
        <div>
            <sidebar/>
        </div>
        
        <div class="sign1">
            <div class="container">
                <div class="title">
                    <h2><b>ORDERS</b></h2>
                </div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Foods</th>
                        <th scope="col">Drinks</th>
                        <th scope="col">Quantity food</th>
                        <th scope="col">Quantity drink</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(n, id) in orders" :key="id">
                        <td>{{n. name}}</td>
                        <td>{{n. phone_number}}</td>
                        <td>{{n.foods}}</td>
                        <td>{{n.drinks}}</td>
                        <td>{{n.quantity_food}}</td>
                        <td>{{n.quantity_drink}}</td>
                        <td>{{n.date}}</td>
                        <td>{{n.time}}</td>
                        </tr>
                        
                        
                    </tbody>
                    </table>

                    
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
           orders:{
            name:'',
            phone_number:'',
            foods:'',
            drinks:'',
            quantity_food:'',
            quantity_drink:'',
            date:'',
            time:'',
           }
        };
    },
    computed: {
        
    },
    mounted(){
        this.orderNow()
    },
    methods: {
        orderNow(){
        axios.get('https://hotel-project-cafb0-default-rtdb.firebaseio.com/orderNow.json',{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
            this.orders = res.data
          console.log(this.orders)
          
          
        })
      },
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
    .title{
        text-align: center;
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