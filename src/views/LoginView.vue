// @/views/SignUp.vue

<template>
  <section class="container container-thin app-container flex flex-x-center flex-column">
      <header class="container flex flex-xy-center flex-column mb-large">
        <h1 class="sronly">What the fuck should I watch?</h1>
        <img src="https://via.placeholder.com/300x150?text=Logo" alt="" class="main-logo">
        <h2>Subtitle goes here.</h2>
      </header>
      <section class="container flex flex-y-center flex-column">
        <a href="#" class="button button-large full-width">Login</a>
        <a href="#" @click="googleSignIn" class="button button-large full-width">Signup with Google</a>
      </section>
    </section>
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
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push({name: 'Home'})            
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    }
  },
};
</script>

<style scoped>
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

* {
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

html {
  background-color: hsl(0deg, 0%, 100%);
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-width: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

article,
aside,
figure,
footer,
header,
hgroup,
section {
  display: block;
}

body,
button,
input,
optgroup,
select,
textarea {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

code,
pre {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-family: monospace;
}

body {
  color: hsl(0deg, 0%, 29%);
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
}

a {
  color: hsl(229deg, 53%, 53%);
  cursor: pointer;
  text-decoration: none;
}
a strong {
  color: currentColor;
}
a:hover {
  color: hsl(0deg, 0%, 21%);
}

code {
  background-color: hsl(0deg, 0%, 96%);
  color: #da1039;
  font-size: 0.875em;
  font-weight: normal;
  padding: 0.25em 0.5em 0.25em;
}

hr {
  background-color: hsl(0deg, 0%, 96%);
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0;
}

img {
  height: auto;
  max-width: 100%;
}

input[type=checkbox],
input[type=radio] {
  vertical-align: baseline;
}

small {
  font-size: 0.875em;
}

span {
  font-style: inherit;
  font-weight: inherit;
}

strong {
  color: hsl(0deg, 0%, 21%);
  font-weight: 700;
}

fieldset {
  border: none;
}

pre {
  background-color: hsl(0deg, 0%, 96%);
  color: hsl(0deg, 0%, 29%);
  font-size: 0.875em;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  white-space: pre;
  word-wrap: normal;
}
pre code {
  background-color: transparent;
  color: currentColor;
  font-size: 1em;
  padding: 0;
}

table td,
table th {
  vertical-align: top;
}
table td:not([align]),
table th:not([align]) {
  text-align: inherit;
}
table th {
  color: hsl(0deg, 0%, 21%);
}

.container {
  width: 100%;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
.container-thin {
  max-width: 768px;
}

/* flex classes */
.flex {
  display: flex;
}

.flex-x-center {
  justify-content: center;
  align-items: flex-start;
}

.flex-y-center {
  justify-content: flex-start;
  align-items: center;
}

.flex-xy-center {
  justify-content: center;
  align-items: center;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.flex-top {
  margin-bottom: auto;
}

.flex-bottom {
  margin-top: auto;
}

/* widths */
.full-width {
  width: 100%;
}

/* margins */
.mb-large {
  margin-bottom: 50px;
}

.button {
  background-color: hsl(0deg, 0%, 4%);
  color: hsl(0deg, 0%, 100%);
  border: 0 none;
  font-weight: 700;
}
.button:hover {
  background-color: hsl(271deg, 100%, 71%);
}
.button:focus {
  background-color: hsl(229deg, 53%, 53%);
}

.button-large {
  padding: 15px 20px;
  font-size: 1.25rem;
  margin: 0 0 15px;
}

/* visible for screen readers only */
.sronly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* branding */
.main-logo {
  max-width: 100%;
  margin: 0 0 15px;
}

.mini-logo {
  max-width: 80px;
  margin: 15px 0 45px;
}

h1,
.h1 {
  font-size: 3rem;
  font-weight: 700;
}

h2,
.h2 {
  font-size: 2.5rem;
  font-weight: 700;
}

h3,
.h3 {
  font-size: 2rem;
  font-weight: 400;
}

h4,
.h4 {
  font-size: 1.5rem;
  font-weight: 700;
}

h5,
.h5 {
  font-size: 1.25rem;
  font-weight: 700;
}

h6,
.h6 {
  font-size: 1rem;
  font-weight: 700;
}

/* general */
.app-container {
  width: 100%;
  height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
}
.app-container.has-navigation {
  padding-bottom: 50px;
  height: 100vh;
}

.app-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.app-navigation ul {
  border-top: 1px solid hsl(0deg, 0%, 71%);
}
.app-navigation ul li {
  width: 25%;
  height: 50px;
  border-right: 1px solid hsl(0deg, 0%, 71%);
}
.app-navigation ul li:last-child {
  border: 0;
}
.app-navigation ul li a:hover {
  color: hsl(271deg, 100%, 71%);
  border-top: 2px solid hsl(271deg, 100%, 71%);
  position: relative;
  top: -1px;
}

/*# sourceMappingURL=main.css.map */

</style>