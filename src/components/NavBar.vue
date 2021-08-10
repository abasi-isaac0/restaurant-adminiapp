<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"
          >Ketti's <br />
          <span>Restaurant</span></a
        >
      </div>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0 nav-text">
          <li class="nav-item">
            <router-link to="Subscribers"
              ><a class="nav-link">Subscribers</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="Orders"
              ><a class="nav-link">Orders</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="Message"
              ><a class="nav-link">Message US</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="Registration"
              ><a class="nav-link">Registration </a></router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/"
              ><a class="nav-link" href="#"><button>Logout</button></a></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Style+Script&family=Ultra&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Tourney:ital,wght@1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playball&family=Tourney:ital,wght@1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
.navbar-brand {
  margin-left: 23px;
  font-family: "Playball", cursive;
  text-transform: uppercase;
  font-size: 27px;
}
span {
  font-family: "Playball", cursive;
}
.navbar {
  background-color: white !important;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
}
nav {
  height: 80px;
}
.navbar-nav {
  margin: auto;
}
.navbar .nav-link {
  font-size: 20px;
  margin-left: 18px;
}
.nav-link:hover {
  color: rgb(177, 177, 165) !important;
  text-decoration: none !important;
  border-bottom: none !important;
}
a {
  font-weight: bolder;
  color: rgb(129, 137, 155) !important;
}
button{
  background-color: red;
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;

}

@media (max-width: 567px) {
}
</style>
