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
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">BTC Address</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="0"
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
      address: null,
      currency: null
      
    };
  },

   mounted() {
    //this.saleDetails = this.$store.getters.getsaleDetails;
    this.currency = this.$store.getters.getsaleDetails.currency;
  },

  methods: {
    goToHome() {
      this.$router.push("/sale/payment-method");
    },
  },
};
</script>
