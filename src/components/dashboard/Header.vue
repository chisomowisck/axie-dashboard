<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <nav class="navbar">
            <div class="header-search d-flex align-items-center">
              <router-link class="brand-logo mr-3" to="/">
                <img src="https://khodo.africa/wp-content/uploads/2021/02/Asset-3@3x.png" alt="" width="30" />
              </router-link>
              <form action="#" @submit.prevent="">
              </form>
            </div>

            <div class="dashboard_log">
              <div class="d-flex align-items-center">
                <div
                  class="profile_log dropdown"
                  :class="show && 'show'"
                  @click.capture="show = !show"
                >
                  <div class="user" data-toggle="dropdown">
                    <span class="thumb"><i class="mdi mdi-account"></i></span>
                    <span class="name">{{fullName}}</span>
                    <span class="arrow"><i class="la la-angle-down"></i></span>
                  </div>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    :class="show && 'show'"
                  >
                    <router-link to="accounts" class="dropdown-item">
                      <i class="mdi mdi-account"></i> Account
                    </router-link>
                    <router-link to="history" class="dropdown-item">
                      <i class="la la-book"></i> History
                    </router-link>
                    <router-link to="settings" class="dropdown-item">
                      <i class="la la-cog"></i> Setting
                    </router-link>
                    <router-link to="lock" class="dropdown-item">
                      <i class="la la-lock"></i> Lock
                    </router-link>
                    <button v-on:click="logout" to="#" class="dropdown-item logout">
                      <i class="la la-sign-out"></i> Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
       fullName: localStorage.getItem("fullName") || null,
    };
  },

  methods: {
     logout() {
      this.$store.dispatch("destroyToken");
      this.$router.push("/signin");
      //window.location.href = "login"
    },
  }
};
</script>
