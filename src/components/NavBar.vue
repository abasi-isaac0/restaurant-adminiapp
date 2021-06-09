<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0 nav-text">
         <li class="nav-item active">
            <router-link to="/"><a class="nav-link" href="#">Home</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="About"><a class="nav-link">About</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="Weekends"><a class="nav-link">Weekends</a></router-link>
          </li>
          <li class="nav-item">
             <router-link to="Menu"><a class="nav-link">Menu</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="Orders"><a class="nav-link">Orders</a></router-link>
          </li>
           <li class="nav-item">
            <router-link to="Cocktails"><a class="nav-link">Cocktail order</a></router-link>
          </li>
        </ul>
        
      </div>
</nav>
    </div>
</template>