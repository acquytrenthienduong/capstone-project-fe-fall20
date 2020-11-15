<template>
  <div>
    <h1>Enter phone</h1>
    <input v-model="phone" type="text" name="" id="number" />
    <button id="sign-in-button" v-on:click="sendCode()">SendCode</button>
    <div id="recaptcha-container"></div>
    <h1>name</h1>
    <input v-model="name" type="text" name="" />
    <h1>password</h1>
    <input v-model="password" type="password" name="" />
    <h1>email</h1>
    <input v-model="email" type="text" name="" />
    <h1>Code</h1>
    <input v-model="code" type="text" name="" id="number" />
    <button v-on:click="enterCode()">register</button>
    <!-- <button v-on:click="register()">submit</button> -->
  </div>
  <!-- The core Firebase JS SDK is always required and must be listed first -->
</template>

<script>
/*eslint-disable*/
import firebase from "@firebase/app";
import { fb } from "@/firebase";
import axios from "axios";
// import 'firebase/firebase-auth';

export default {
  name: "Preview",
  data: () => ({
    phone: "",
    code: "",
    password: "",
    name: "",
    email: "",
  }),

  mounted() {
    this.initRecaptcha();
  },

  methods: {
    sendCode: function() {
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      let phone = this.phone;
      firebase
        .auth()
        .signInWithPhoneNumber(phone, window.recaptchaVerifier)
        .then(function(confirmationResult) {
          console.log("sdas", confirmationResult.verificationId);
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log("loi");
        });
    },

    enterCode: function() {
      let code = this.code;
      console.log("code", code);
      var credential = firebase.auth.PhoneAuthProvider.credential(
        confirmationResult.verificationId,
        code
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((credential) => {
          console.log("asdasdas", credential);
          axios
            .post(`http://localhost:8000/register`, {
              account: this.phone,
              password: this.password,
              email: this.email,
              gender: 1,
              name: this.name,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((e) => {
              this.errors.push(e);
            });
        });
    },

    register() {
      axios
        .post(`http://localhost:8000/register`, {
          account: this.phone,
          password: this.password,
          email: "test@gmail.com",
          gender: 1,
          name: this.name,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    initRecaptcha() {
      let vm = this;
      // firebase thingies
      fb.auth().languageCode = "vi";
      // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      //   "recaptcha-container"
      // );
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );

      firebase.auth().settings.appVerificationDisabledForTesting = true;

      // this.appVerifier = window.recaptchaVerifier;
    },
  },
};
</script>
