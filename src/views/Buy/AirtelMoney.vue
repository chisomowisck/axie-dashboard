<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-6 col-md-12">
            <div class="card acc_balance">
              <div class="card-header">
                <h4 class="card-title">Airtel Money</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-md-6">
                        <span>Buying</span>
                        <h3>
                          {{ cryptoValue }}
                          {{ currency }}
                        </h3>
                      </div>
                      <div class="col-md-6">
                        <span>For</span>
                        <h3>MWK {{ mwkAmount }}</h3>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6" v-if="currency == 'BTC'">
                        <span>Bitcoin Address</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your Bitcoin Address"
                          v-model="bitcoinAddress"
                        />
                      </div>
                      <div class="col-md-6" v-if="currency == 'ETH'">
                        <span>Ethereum Address</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your Ethereum Address"
                          v-model="ethereumAddress"
                        />
                      </div>
                      <div class="col-md-6" v-if="currency == 'BCH'">
                        <span>Bitcoin cash Address</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your Bitcoin Cash Address"
                          v-model="ethereumAddress"
                        />
                      </div>
                      <div class="col-md-6">
                        <span>Reference</span>
                        <h3>{{ ref }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group col-xl-12">
                      <span>Proof of Payment</span>
                      <div
                        class="file-upload-wrapper"
                        v-bind:data-text="
                          !filevalue ? 'Upload Proof' : filevalue
                        "
                      >
                        <input
                          name="fileValue"
                          type="file"
                          class="file-upload-field"
                          accept="image/*"
                          @change="handleFileUpload"
                        />
                      </div>
                    </div>
                    <div class="card">
                      <img class="card-img" v-bind:src="proof" />
                    </div>
                  </div>
                </div>

                <div class="btn">
                  <button
                    v-on:click="buyBTC"
                    class="btn btn-success"
                    v-if="currency == 'BTC'"
                  >
                    Continue
                  </button>
                  <button
                    v-on:click="buyETH"
                    class="btn btn-success"
                    v-if="currency == 'ETH'"
                  >
                    Continue
                  </button>
                  <button
                    v-on:click="buyBCH"
                    class="btn btn-success"
                    v-if="currency == 'BCH'"
                  >
                    Continue
                  </button>
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
  props: ["posts"],
  name: "Index",
  components: {
    Layout,
  },

  data() {
    return {
      showVideo: false,
      filevalue: "",
      access_token: localStorage.getItem("access_token"),
      ref: localStorage.getItem("fullName") + " " + 1,
      // ref:localStorage.getItem("fullName") + " " + new Date().toJSON().slice(0, 13).replace(/-/g, ""),

      currency: null,
      momoType: "Airtel",
      mwkAmount: null,
      cryptoValue: null,
      phoneNumber: null,
      bitcoinAddress: null,
      ethereumAddress: null,
      bitcoinCashAddress: null,
      proof: "",
      image: "",
    };
  },

  mounted() {
    //this.saleDetails = this.$store.getters.getbuyDetails;
    this.currency = this.$store.getters.getbuyDetails.currency;
    this.mwkAmount = this.$store.getters.getbuyDetails.cryptoValueMWK;
    this.cryptoValue = this.$store.getters.getbuyDetails.cryptoValue;
  },

  methods: {
    handleFileUpload(event) {
      this.filevalue = event.target.value;
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },

    createBase64Image(fileObject) {
      const reader = new FileReader();

      reader.onload = (event) => {
        this.proof = event.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    buyBTC() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.access_token,
      };
      this.$axios
        .post(
          "/wallet/momo-transfer-buy-bitcoin",
          {
            momoType: this.momoType,
            mwkAmount: this.mwkAmount.toString(),
            bitcoinAddress: this.bitcoinAddress,
            ref: this.ref,
            proof: this.proof,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.push("/sale/thank-you");
          //console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    buyETH() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.access_token,
      };
      this.$axios
        .post(
          "/wallet/momo-transfer-buy-ethereum",
          {
            momoType: this.momoType,
            mwkAmount: this.mwkAmount.toString(),
            ethereumAddress: this.ethereumAddress,
            ref: this.ref,
            proof: this.proof,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.push("/sale/thank-you");
          //console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    buyBCH() {
      // const headers = {
      //   "Content-Type": "application/json",
      //   Authorization: "Bearer " + this.access_token,
      // };
      // this.$axios
      //   .post(
      //     "/wallet/momo-transfer-sell-bitcoin",
      //     {
      //       ref: this.ref,
      //       momoType: this.momoType,
      //       mwkAmount: this.mwkAmount.toString(),
      //       btcAmount: this.cryptoValue,
      //       phoneNumber: this.phoneNumber,
      //       proof: this.proof,
      //     },
      //     {
      //       headers: headers,
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response);
      //     this.$router.push('/sale/thank-you')
      //     //console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
</script>
