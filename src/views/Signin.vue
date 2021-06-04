<template>
  <div class="authincation">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <div class="mini-logo text-center my-4">
            <router-link to="landing"
              ><img
                src="https://khodo.africa/wp-content/uploads/2021/02/Asset-3@3x.png"
                alt=""
                style="height: 90px; width: auto"
            /></router-link>
          </div>
          <div class="auth-form card">
            <div class="card-header justify-content-center">
              <h4 class="card-title">Sign in</h4>
            </div>
            <div class="card-body">
              <ValidationObserver v-slot="{ passes }">
                <form
                  method="post"
                  name="myform"
                  class="signin_validate"
                  novalidate="novalidate"
                  @submit.prevent="passes(formSubmit)"
                >
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors }"
                    name="method"
                    class="form-group"
                    tag="div"
                  >
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control error"
                      placeholder="hello@example.com"
                      name="mobileOrEmail"
                      v-model="mobileOrEmail"
                      aria-invalid="true"
                    />
                    <label class="error" for="email">{{ errors[0] }}</label>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="passwordFieldName|verify_password"
                    v-slot="{ errors }"
                    name="password"
                    class="form-group"
                    tag="div"
                  >
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control error"
                      placeholder="Password"
                      name="password"
                      v-model="password"
                      aria-invalid="true"
                    />
                    <label class="error" for="password">{{ errors[0] }}</label>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    name="pin"
                    class="form-group"
                    tag="div"
                  >
                    <label>PIN</label>
                    <input
                      type="number"
                      class="form-control error"
                      placeholder="PIN"
                      name="pin"
                      v-model="pin"
                      aria-invalid="true"
                    />
                    <label class="error" for="pin">{{ errors[0] }}</label>
                  </ValidationProvider>
                  <div
                    class="form-row d-flex justify-content-between mt-4 mb-2"
                  >
                    <div class="form-group mb-0">
                      <label class="toggle">
                        <input class="toggle-checkbox" type="checkbox" />
                        <div class="toggle-switch"></div>
                        <span class="toggle-label">Remember me</span>
                      </label>
                    </div>
                    <div class="form-group mb-0">
                      <router-link to="reset">Forgot Password?</router-link>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-success btn-block"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </ValidationObserver>
              <div class="new-account mt-3">
                <p>
                  Don't have an account?
                  <router-link class="text-primary" to="signup"
                    >Sign up</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "Signin",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      mobileOrEmail: null,
      password: null,
      pin: null,
    };
  },
  methods: {
    signingIn() {
      
    },

    formSubmit() {


      this.internet = false;
      this.dialog = true;
      this.$store
        .dispatch("retrieveToken", {
          mobileOrEmail: this.mobileOrEmail,
          password: this.password,
          pin: this.pin
        })
        .then((response) => {
          
          
           this.$router.push('/index'); 
          console.log(response);
          // if (response.data.status == "success") {
          //   this.$router.push({ name: "Index" });
            
          //   // this.dialog = false;
          //   // this.overlay = "";
          //   // alert(response)
          //   // this.$router.push({ name: "home" });
          // }
          // if (response.data.status == "error") {
          //   this.$router.push({ name: "Index" });
          //   //  alert(response)
          //   // this.dialog = false;
          //   // this.wrongCred = true;
          //   // this.alertMessage = response.data.message;
          // }
        })
        .catch((error) => {
          alert(error)
          // this.dialog = false;
          // this.internet = true;
          // this.alertMessage = "No Internet Connection!";
        });

      // this.$router.push("/otp-1");
      // this.$axios
      //   .post("/auth/user/login", {
      //     mobileOrEmail: this.mobileOrEmail,
      //     password: this.password,
      //     pin: this.pin,
      //   })
      //   .then(
      //     function (response) {
      //       alert(response);
      //     }.bind(this)
      //   )
      //   .catch((error) => {
      //     alert(error);
      //   });
    },
  },
};
</script>
