<template>
  <div class="header landing_page">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 position-relative">
          <nav
            class="navbar navbar-expand-lg navbar-light px-0"
            data-target="#navbar-example2"
          >
            <router-link class="navbar-brand" to="landing">
              <img src="https://khodo.africa/wp-content/uploads/2021/02/Asset-3@3x.png" alt="" />
              <span style="color: #5052D9">Khodo </span></router-link
            >
            <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

            <b-collapse as="div" id="nav-collapse" is-nav>
              <b-navbar-nav class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    :class="active === 'home' && 'active'"
                    href="#intro"
                    data-scroll-nav="0"
                    @click="active = 'home'"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    :class="active === 'market' && 'active'"
                    href="#market"
                    data-scroll-nav="1"
                    @click="active = 'market'"
                    >Market</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    :class="active === 'Portfolio' && 'active'"
                    href="#portfolio"
                    @click="active = 'Portfolio'"
                    data-scroll-nav="2"
                    >Portfolio</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    :class="active === 'Testimonial' && 'active'"
                    @click="active = 'Testimonial'"
                    href="#testimonial"
                    data-scroll-nav="3"
                    >Testimonial</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    :class="active === 'Contact' && 'active'"
                    @click="active = 'Contact'"
                    href="#contact"
                    data-scroll-nav="4"
                    >Contact</a
                  >
                </li>
              </b-navbar-nav>
            </b-collapse>
            <div class="dashboard_log">
              <div class="d-flex align-items-center">
                <div class="header_auth">
                  <router-link v-if="access_token == null" to="/signin" style="background-color: #5052D9" class="btn btn-primary"
                    >Sign In</router-link
                  >
                  <router-link v-if="access_token != null" to="/index" style="background-color: #5052D9" class="btn btn-primary"
                    >Dashboard</router-link
                  >
                  <router-link v-if="access_token == null" to="/signup" style="color: #5052D9" class="btn btn-outline-primary"
                    >Sign Up</router-link
                  >
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
  name: "Nav",
  data() {
    return {
      active: "home",
      access_token: localStorage.getItem("access_token") || null,
    };
  },
};
</script>
