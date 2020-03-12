<template>
  <div class="container">
      <div class="card">
          <div class="card-content">
              <h1 class="title is-1">
                  Game Page
              </h1>
          </div>
      </div> 
       <div class="card">
      <div class="card-content">
        <ul>  
          <li v-for="player in Players" :key="player.Name"> <!-- loops through array-->
            {{player.Name}} {{player.Score}} 
          </li>
        </ul>
      </div>
        <img :src="CurrentPicture" class="card-image"/>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import { Players, PictureDeck, CurrentPicture, Init } from "../models/Game";

export default { 
  name: 'Home',

  created(){  //similar to mounted, but only happens once. Mounted happens every time
    Init();
  },
  data:()=> ({   //things available to our component
    Players,
    PictureDeck,
    CurrentPicture
  }),
  components: {
    
  }
}
</script>

<style>
  img.card-image {
    width: 100%
  }
</style>