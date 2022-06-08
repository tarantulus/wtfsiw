// @/views/SignUp.vue

<template>
  <div>
    <button @click="googleSignIn">
      Sign In with Google
    </button>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  name: "SignUp",
  methods: {
    googleSignIn: function() {   
        console.log(process.env.VUE_APP_GOOGLE_API_KEY)     
      let provider = new firebase.auth.GoogleAuthProvider();
firebase        
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
            console.log(token) // Token
            console.log(user) // User that was authenticated
            this.$router.push('/home');
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    }
  },
};
</script>