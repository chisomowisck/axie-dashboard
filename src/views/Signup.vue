<template>
  <div class="authincation">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
     
          <div class="auth-form card my-4" style="margin-top: 200px !important">
            <div class="card-header justify-content-center">
              <h4 class="card-title">Sign up your account</h4>
            </div>
            <div class="card-body">
              <b-alert
                variant="danger"
                dismissible
                fade
                :show="verifyStatus2"
                @dismissed="verifyStatus = false"
              >
                {{ verifyMsg2 }}
              </b-alert>
              <div class="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="fullName"
                  required
                />
              </div>
       
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  required
                />
              </div>
                    
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  required
                />
              </div>
              <div class="text-center mt-4">
                <button class="bt btn-primary btn-block" @click="signUp()">
                  <template v-if="loading">
                    <b-spinner class="mr-2"></b-spinner>
                    Verifying Email Address...
                  </template>

                  <span v-if="!loading">Sign up</span>
                </button>
              </div>
              <div class="new-account mt-3">
                <p>
                  Already have an account?
                  <router-link class="text-primary" to="/signin"
                    >Sign in</router-link
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
export default {
  name: "Signup",
  data() {
    return {
      fullName: null,
      email: null,
      password: null,
      verifyStatus: null,
      verifyStatus2: false,
      verifyMsg: null,
      verifyMsg2: null,
      showDismissibleAlert: true,
      nameState: "",
      loading: false,
    };
  },
  methods: {

    signUp() {
      this.$store
        .dispatch("registerUser", {
           username: this.fullName,
        email: this.email,
        password: this.password,
        roles : ["moderator", "user"]
        })
        .then((response) => {
          this.$router.push("/signin");
          console.log(response);
        })
        .catch((error) => {
          this.verifyStatus2 = true;
          this.verifyMsg2 = "Unable to create an Account";
          console.log(error);
        });
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
