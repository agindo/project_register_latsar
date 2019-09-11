<template>
  <div>
<form class="form-signin">
  <div class="text-center mb-3 mt-20">
    <!-- <img class="mb-4" src="@/assets/user.png" alt="" width="72" height="72"> -->
    <div class="flex justify-center">
      <div class="text-gray-700 text-center">
        <img class="" src="@/assets/user.png" alt="" width="100" height="100">
      </div>
    </div>
    <h1 class="font-weight-normal mt-2 mb-2">Sign In</h1>
    <!-- <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p> -->
  </div>

  <div class="form-label-group">
    <input type="text" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="username">
    <label for="inputEmail">Username</label>
  </div>

  <div class="form-label-group">
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
    <label for="inputPassword">Password</label>
  </div>

  <!-- <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div> -->
  <button class="btn btn-lg btn-primary btn-block" type="button" @click="signIn">Sign in</button>
  <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2019</p>
</form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      username: null,
      password: null
    }
  },
  methods: {
    signIn: function() {
      // let username = this.username
      // let password = this.password
      // this.$store.dispacth('signin', {username, password})
      var ab = this.$store.getters.log;
      for (let i = 0; i < ab.length; i++) {
        const element = ab[i];
        if(element.username == this.username && element.password == this.password){
          this.$store.dispatch('actionrole', element.role)
          localStorage.setItem('role', element.role)
          axios.defaults.headers.common['Authorization'] = element.role
          this.$router.push('/dashboard')
        }
      }
      
    }
  }
}
</script>
<style scoped>
body {
  height: 100%;
}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}
.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}
.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: .75rem;
}
.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}
.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}
.form-label-group input:-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-moz-placeholder {
  color: transparent;
}
.form-label-group input::placeholder {
  color: transparent;
}
.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}
.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}

</style>