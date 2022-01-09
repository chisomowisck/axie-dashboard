<template>
  <div class="authincation">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <!-- <div class="mini-logo text-center my-4">
            <router-link to="landing"
              ><img
                src="https://khodo.africa/wp-content/uploads/2021/02/Asset-3@3x.png"
                alt=""
                style="height: 90px; width: auto"
            /></router-link>
          </div> -->
          <div class="auth-form card">
            <div class="card-header justify-content-center">
              <h4 class="card-title">Sign in</h4>
            </div>
            <div class="card-body">
              <b-alert
                variant="danger"
                dismissible
                fade
                :show="verifyStatus == false"
                @dismissed="verifyStatus = null"
              >
                {{ verifyMsg }}
              </b-alert>
              <ValidationObserver>
                <ValidationProvider
                  rules="required|email"
                  v-slot="{ errors }"
                  name="method"
                  class="form-group"
                  tag="div"
                >
                  <label>Email</label>
                  <input
                    type="text"  
                    class="form-control error"
                    v-model="username"
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
                    v-model="password"
                    aria-invalid="true"
                  />
                  <label class="error" for="password">{{ errors[0] }}</label>
                </ValidationProvider>

                <div class="form-row d-flex justify-content-between mt-4 mb-2">
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
                    v-on:click = "signingIn"
                    class="bt btn-primary btn-block"
                  >
                    Sign in
                  </button>
                </div>
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
      username: null,
      password: null,
      name: "",
      nameState: null,
      verifyStatus: null,
    verifyMsg: null,
    showDismissibleAlert: true,
    };
  },
  methods: {
    signingIn() {
      this.$store
        .dispatch("retrieveToken", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.$router.push("/index");
          console.log(response);
        })
        .catch((error) => {
            this.verifyMsg = "Unable to Login, either Email, Password or PIN is incorect";
            console.log(error);
        });
    }
  },
};
</script>
