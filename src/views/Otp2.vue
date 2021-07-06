<template>
  <div id="main-wrapper" class="show">
    <div class="authincation">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-xl-5 col-md-6">
            <div class="mini-logo text-center my-3">
              <router-link to="landing"
                ><img
                  src="https://khodo.africa/wp-content/uploads/2021/02/Asset-3@3x.png"
                  alt=""
                  style="height: 90px; width: auto"
              /></router-link>
            </div>
            <div class="auth-form card">
              <div class="card-body">
                <router-link class="page-back text-muted" to="signup"
                  ><span><i class="fa fa-angle-left"></i></span>
                  Back</router-link
                >
                <h3 class="text-center">OTP Verification</h3>
                <p class="text-center mb-5">
                  We have sent one time code to your email
                </p>

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
                  <label>Your OTP Code</label>
                  <input
                    type="text"
                    v-model="otp"
                    class="form-control text-center font-weight-bold"
                  />
                </div>
                <div class="text-center">
                  <button @click="signUp" class="btn btn-success btn-block">
                    <template v-if="loading">
                      <b-spinner class="mr-2"></b-spinner>
                      Verifying OTP...
                    </template>

                    <span v-if="!loading">Verify</span>
                    
                  </button>
                </div>
                <div class="info mt-3">
                  <p class="text-muted">
                    You dont recommended to save password to browsers!
                  </p>
                </div>
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
  data() {
    return {
      otp: "",
      userData: null,
      loading: false,
       verifyMsg2: null,
      showDismissibleAlert: true,
    };
  },
  mounted() {
    this.userData = this.$store.getters.getsignUpDetails;
  },
  methods: {
    signUp() {
      this.loading = true;

      this.$store
        .dispatch("registerUser", {
          fullName: this.userData.fullName,
          email: this.userData.email,
          mobile: this.userData.mobile,
          country: this.userData.country,
          city: this.userData.city,
          password: this.userData.password,
          pin: this.userData.pin,
          otp: this.otp,
        })
        .then((response) => {
          this.loading = false;
          this.$router.push("/index");
          console.log(response);
          
        })
        .catch((error) => {
          this.loading = false;
          this.verifyStatus2 = true;
          this.verifyMsg2 = "OTP is wrong";
          console.log(error);
        });
    },
  },
};
</script>
