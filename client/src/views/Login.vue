<template>
  <form class="container" @submit.prevent="login"> <!-- .prevent lets us to stay on the page to get an error-->
    {{error}} <!-- an error, display it by binding -->
      <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email" v-model="email"> <!-- instead of using name on client side, we use v-model to let js to handle this-->
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password" v-model="password"> <!-- instead of using name on client side, we use v-model to let js to handle this-->
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>
</form>
  
</template>

<script>
import { Login } from "../models/Users";

export default { 
    data(){  //different way of doing data
        return {
          email: '',  //these variables are coming from above
          password: '',
          error: ''
        }
    },
    methods: {
        login(){
            try {
              Login(this.email, this.password)  //this function is coming from Users.js
              this.$router.push('/game');  //if login doesn't have an error, send to game page
            } catch (error) {
                this.error = error;
            }
        }
    }

}
</script>

<style>

</style>