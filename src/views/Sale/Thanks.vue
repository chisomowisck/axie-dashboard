<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="card">
            <br>
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <h3 class="text-primary text-center">Hooray</h3>
                </div>
                 <div class="d-flex justify-content-center">
                    <h5 class="text-center">Thank you, we'll send you funds shortly and send proof of payment soon</h5>
                </div>
                <div class="d-flex justify-content-center m-4">
                    <img src="https://khodo.africa/wp-content/uploads/2021/06/runningIllustration.png" alt="" class="card-img" style="width: auto; height: 200px">
                </div>
                 <div class="d-flex justify-content-center">
                    <p class="text-center">The order receipt has been mailed to your registered id. We will notify you once we've sent you the funds to your perspective payment method</p>
                </div>

                 <div class="d-flex justify-content-center">
                     <button @click="goToHome" class="btn btn-warning p-3 text-white">Continue to Home</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/dashboard/Layout.vue";

export default {
  components: {
    Layout,
  },

  data() {
    return {
      
    };
  },

  methods: {
    goToHome(){
        this.$router.push('/index')
    }
  },
};
</script>
