<template>
  <div class="page_title">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page_title-content">
            <p>
              Welcome Back,
              <span> {{fullName}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  data() {
    return {
       fullName: localStorage.getItem("fullName") || null,
    };
  },
};
</script>
