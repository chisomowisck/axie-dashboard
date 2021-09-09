<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="card">
          <br />
          <div class="card-body">
            <div class="row mb-4">
                <div class="col-md-2"></div>
              <div class="col-md-8">
                <div class="d-flex justify-content-center">
                  <div class="input-group" v-if="currency == 'BTC'">
                    <div class="input-group-prepend">
                      <span class="input-group-text">BTC Address</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="address"
                    />
                  </div>
                  <div class="input-group" v-if="currency == 'ETH'">
                    <div class="input-group-prepend">
                      <span class="input-group-text">ETH Address</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="address"
                    />
                  </div>
                  <div class="input-group" v-if="currency == 'BCH'">
                    <div class="input-group-prepend">
                      <span class="input-group-text">BCH Address</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button @click="goToHome" class="btn btn-warning p-3 text-white">
                Continue
              </button>
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
      address: "",
      currency: "",
    };
  },

     mounted() {
    //this.saleDetails = this.$store.getters.getsaleDetails;
    this.currency = this.$store.getters.getbuyDetails.currency;
  },

  methods: {
    goToHome() {
      localStorage.setItem("buy_address", this.address);
      this.$router.push("/buy/payment-method");
    },
  },
};
</script>
