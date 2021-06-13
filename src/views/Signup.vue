<template>
  <div class="authincation">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <div class="mini-logo text-center my-4">
            <router-link to="landing"
              ><img src="" alt="" style="height: 90px; width: auto"
            /></router-link>
          </div>
          <div class="auth-form card">
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
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="city"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Mobile</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="mobile"
                      required
                    />
                  </div>
                </div>
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
              <b-alert
                variant="danger"
                dismissible
                fade
                :show="verifyStatus == false"
                @dismissed="verifyStatus = null"
              >
                {{ verifyMsg }}
              </b-alert>

              <b-alert
                variant="success"
                dismissible
                fade
                :show="verifyStatus == true"
                @dismissed="verifyStatus = null"
              >
                {{ verifyMsg }}
              </b-alert>
              <div class="row">
                <div class="col-md-12">
                  <label style="color: #000000">Input Verification Code</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button @click="verifyEmail" class="input-group-text">
                        Send OTP
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="OTP Code here"
                      v-model="otp"
                      required
                    />
                  </div>
                </div>
              </div>
              <br />
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
                <button
                  v-b-modal.modal-prevent-closing
                  class="bt btn-primary btn-block"
                >
                  Sign up
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
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Create A 4-Digit PIN"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="PIN"
            label-for="name-input"
            invalid-feedback="PIN is required"
            :state="nameState"
          >
            <b-form-input
              type="number"
              id="name-input"
              v-model="pin"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
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
      mobile: null,
      country: "Malawi",
      city: null,
      password: null,
      pin: null,
      otp: null,
      verifyStatus: null,
      verifyStatus2: false,
      verifyMsg: null,
      verifyMsg2: null,
      showDismissibleAlert: true,
      nameState: '',
    };
  },
  methods: {
    verifyEmail() {
      this.$axios
        .post("/auth/user/verify-email", {
          email: this.email,
        })
        .then(
          function (response) {
            this.verifyStatus = response.data.success;
            this.verifyMsg = response.data.message;
            console.log(response);
          }.bind(this)
        )
        .catch((error) => {
          this.verifyStatus = false;
          this.verifyMsg = "Invalid Email or User Already Exists";
          console.log(error);
        });
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      this.verifyStatus2 = false;
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names

      this.$store
        .dispatch("registerUser", {
          fullName: this.fullName,
          email: this.email,
          mobile: this.mobile,
          country: this.country,
          city: this.city,
          password: this.password,
          pin: this.pin,
          otp: this.otp,
        })
        .then((response) => {
          this.$router.push("/index");
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
