<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
       
            <div class="row mb-4">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                   <div class="card">
          <br />
          <div class="card-body">
                  <div class="d-flex justify-content-center mb-2">
                    <button class="btn btn-primary" @click="bank">Bank</button>
                  </div>
                  <div class="d-flex justify-content-center mb-2">
                    <button class="btn btn-danger text-white" @click="airtel">Airtel Money</button>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-success" @click="mpamba">TNM Mpamba</button>
                </div>
                </div>
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
    return {};
  },

  methods: {
    goToHome() {
      this.$router.push("/buy/payment-method");
    },

    bank(){
        this.$router.push("/buy/bank");
    },
    mpamba(){
        this.$router.push("/buy/airtel-money");
    },
    airtel(){
        this.$router.push("/buy/tnm-mpamba");
    },
  },
};
</script>
