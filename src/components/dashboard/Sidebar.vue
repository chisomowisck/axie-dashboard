<template>
  <div class="sidebar">
    <router-link class="brand-logo" to="/">
    <div class="d-flex justify-content-center"></div>
      <img src="https://khodo.africa/wp-content/uploads/2021/02/Asset-3@3x.png" class="ml-3" alt="" style="height:40px; width:40px" />
      <span style="color: #5052D9; font-size:2em">Khodo </span></router-link
    >
    <div class="menu">
      <ul>
        <li :class="active === 1 && 'active'">
          <router-link to="/index" :class="active === 1 && 'active'">
            <span><i class="mdi mdi-view-dashboard"></i></span>
            <span class="nav-text">Scholars</span>
          </router-link>
        </li>
         <li :class="active === 2 && 'active'">
          <router-link to="/buy" :class="active === 2 && 'active'">
            <span><i class="mdi mdi-arrow-up-circle"></i></span>
            <span class="nav-text">Players</span>
          </router-link>
        </li>

      </ul>
    </div>

    <div class="sidebar-footer">
      <div class="social">
        <a to="#"><i class="fa fa-youtube-play"></i></a>
        <a to="#"><i class="fa fa-instagram"></i></a>
        <a to="#"><i class="fa fa-twitter"></i></a>
        <a to="#"><i class="fa fa-facebook"></i></a>
      </div>
      <div class="copy_right">© {{ new Date().getFullYear() }} Khodo</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: Number,
  },
};
</script>
