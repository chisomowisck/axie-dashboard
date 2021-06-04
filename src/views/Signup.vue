<template>
  <div class="authincation">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <div class="mini-logo text-center my-4">
            <router-link to="landing"
              ><img src="" alt="" style="height:90px; width:auto"
            /></router-link>
          </div>
          <div class="auth-form card">
            <div class="card-header justify-content-center">
              <h4 class="card-title">Sign up your account</h4>
            </div>
            <div class="card-body">
              <form
                @click.prevent="formSubmit"
                method="post"
                name="myform"
                class="signup_validate"
              >
                <div class="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    name="username"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                <div class="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City"
                    name="username"
                  />
                </div>
                  </div>
                   <div class="col-md-6">
                      <div class="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Mobile Number"
                    name="username"
                  />
                </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="hello@example.com"
                    name="email"
                  />
                </div>
                 <div class="row">
                   <div class="col-md-8">
                      <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Verification Code"
                    name="username"
                  />
                </div>
                   </div>
                   <div class="col-md-4">
                      <div class="form-group">
                        <button class="bt btn-success btn-sm">
                          Send OTP
                        </button>
                </div>
                   </div>
                 </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div class="text-center mt-4">
                  <button type="submit" class="btn btn-success btn-block">
                    Sign up
                  </button>
                </div>
              </form>
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
  methods: {
    formSubmit() {
      console.log("hello");
      this.$router.push({ name: "Otp2" });
    },
  },
};
</script>
