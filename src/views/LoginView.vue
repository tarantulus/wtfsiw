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
      let provider = new firebase.auth.GoogleAuthProvider();
firebase
        .initializeApp({
            apiKey: 'AIzaSyAaT-NzALlozGO7zMBE4JmZkBDG82mdu9E',
            authDomain: 'wtfsiw-3af12.firebaseapp.com'
        })
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
            console.log(token) // Token
            console.log(user) // User that was authenticated
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    }
  },
};
</script>