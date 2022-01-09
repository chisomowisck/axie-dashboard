<template>
  <div id="main-wrapper pt-0">
    <Nav />
    <div>
      <Dashboard />
   
    </div>
    <Footer />
  </div>
</template>

<script>

import Nav from "../components/landing/Nav";
import Dashboard from "../components/landing/Dashboard";
import Footer from "../components/landing/Footer";

export default {
  name: "Landing",
  components: {
    Nav,
    Dashboard,
    Footer,
  },
};
</script>
