<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <b-card no-body>
              <b-tabs pills card>
                <b-tab title="National Bank" active
                  ><b-card-text>
                    <div class="row">
                      <div class="col-xl-12 col-lg-6 col-md-12">
                        <div class="acc_balance">
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
                                <br>
                               <div class="row">
                                  <div class="col-md-6">
                                    <span>Account Number</span>
                                    <h3>{{ accountNumber_NB }}</h3>
                                  </div>
                                  <div class="col-md-6">
                                    <span>Account Name</span>
                                    <h3>{{ accountName_NB }}</h3>
                                  </div>
                                </div>
                                <br>
                                <div class="row">
                                  <div class="col-md-6">
                                    <span>Account Type</span>
                                    <h3>{{ accountType_NB }}</h3>
                                  </div>
                                  <div class="col-md-6">
                                    <span>Branch</span>
                                    <h3>{{ bankBranch_NB }}</h3>
                                  </div>
                                </div>
                                <br />
                                
                                  <div class="row">
                                       <div class="col-md-6">
                                    <span>Bank</span>
                                    <h3>National Bank</h3>
                                  </div>
                                     <div
                                    class="col-md-6"
                                    v-if="currency == 'BTC'"
                                  >
                                    <span>Bitcoin Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Bitcoin Address"
                                      v-model="bitcoinAddress"
                                    />
                                  </div>
                                  <div
                                    class="col-md-6"
                                    v-if="currency == 'ETH'"
                                  >
                                    <span>Ethereum Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Ethereum Address"
                                      v-model="ethereumAddress"
                                    />
                                  </div>
                                 
                                     <div
                                    class="col-md-6"
                                    v-if="currency == 'BCH'"
                                  >
                                    <span>Bitcoin cash Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Bitcoin Cash Address"
                                      v-model="ethereumAddress"
                                    />
                                  </div>                                
                                </div>
                                <br>
                                <div class="row">
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
                                v-on:click="buyBTC('NB')"
                                class="btn btn-success"
                                v-if="currency == 'BTC'"
                              >
                                Continue
                              </button>
                              <button
                                v-on:click="buyETH('NB')"
                                class="btn btn-success"
                                v-if="currency == 'ETH'"
                              >
                                Continue
                              </button>
                              <button
                                v-on:click="buyBCH('NB')"
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
                  </b-card-text></b-tab
                >
                <b-tab title="Eco bank"
                  ><b-card-text> <div class="row">
                      <div class="col-xl-12 col-lg-6 col-md-12">
                        <div class="acc_balance">
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
                                <br>
                                <div class="row">
                                  <div class="col-md-6">
                                    <span>Account Number</span>
                                    <h3>{{ accountNumber_Eco }}</h3>
                                  </div>
                                  <div class="col-md-6">
                                    <span>Account Name</span>
                                    <h3>{{ accountName_Eco }}</h3>
                                  </div>
                                </div>
                                <br>
                                <div class="row">
                                  <div class="col-md-6">
                                    <span>Account Type</span>
                                    <h3>{{ accountType_Eco }}</h3>
                                  </div>
                                  <div class="col-md-6">
                                    <span>Branch</span>
                                    <h3>{{ bankBranch_Eco }}</h3>
                                  </div>
                                </div>
                                <br>
                                <div class="row">
                                  <div class="col-md-6">
                                    <span>Bank</span>
                                    <h3>Eco Bank</h3>
                                  </div>
                                   <div
                                    class="col-md-6"
                                    v-if="currency == 'BTC'"
                                  >
                                    <span>Bitcoin Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Bitcoin Address"
                                      v-model="bitcoinAddress"
                                    />
                                  </div>
                                  <div
                                    class="col-md-6"
                                    v-if="currency == 'ETH'"
                                  >
                                    <span>Ethereum Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Ethereum Address"
                                      v-model="ethereumAddress"
                                    />
                                  </div>
                                  <div
                                    class="col-md-6"
                                    v-if="currency == 'BCH'"
                                  >
                                    <span>Bitcoin cash Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Bitcoin Cash Address"
                                      v-model="ethereumAddress"
                                    />
                                  </div>
                                </div>
                                <br />
                                <div class="row">
                                 
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
                                v-on:click="buyBTC('Eco')"
                                class="btn btn-success"
                                v-if="currency == 'BTC'"
                              >
                                Continue
                              </button>
                              <button
                                v-on:click="buyETH('Eco')"
                                class="btn btn-success"
                                v-if="currency == 'ETH'"
                              >
                                Continue
                              </button>
                              <button
                                v-on:click="buyBCH('Eco')"
                                class="btn btn-success"
                                v-if="currency == 'BCH'"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></b-card-text></b-tab
                >
                <b-tab title="FCB"
                  ><b-card-text> <div class="row">
                      <div class="col-xl-12 col-lg-6 col-md-12">
                        <div class="acc_balance">
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
                                <br>
                                <div class="row">
                                  <div class="col-md-6">
                                    <span>Account Number</span>
                                    <h3>{{ accountNumber_FCB }}</h3>
                                  </div>
                                  <div class="col-md-6">
                                    <span>Account Name</span>
                                    <h3>{{ accountName_FCB }}</h3>
                                  </div>
                                </div>
                                <br>
                                <div class="row">
                                  <div class="col-md-6">
                                    <span>Account Type</span>
                                    <h3>{{ accountType_FCB }}</h3>
                                  </div>
                                  <div class="col-md-6">
                                    <span>Branch</span>
                                    <h3>{{ bankBranch_FCB }}</h3>
                                  </div>
                                </div>
                                <br>
                                <div class="row">
                                  <div class="col-md-6">
                                    <span>Bank</span>
                                    <h3>FCB Bank</h3>
                                  </div>
                                  <div
                                    class="col-md-6"
                                    v-if="currency == 'BTC'"
                                  >FCB
                                    <span>Bitcoin Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Bitcoin Address"
                                      v-model="bitcoinAddress"
                                    />
                                  </div>
                                  <div
                                    class="col-md-6"
                                    v-if="currency == 'ETH'"
                                  >
                                    <span>Ethereum Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Ethereum Address"
                                      v-model="ethereumAddress"
                                    />
                                  </div>
                                  <div
                                    class="col-md-6"
                                    v-if="currency == 'BCH'"
                                  >
                                    <span>Bitcoin cash Address</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Bitcoin Cash Address"
                                      v-model="ethereumAddress"
                                    />
                                  </div>
                                </div>
                                <br/>
                                <div class="row">
                                  
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
                                v-on:click="buyBTC('FCB')"
                                class="btn btn-success"
                                v-if="currency == 'BTC'"
                              >
                                Continue
                              </button>
                              <button
                                v-on:click="buyETH('FCB')"
                                class="btn btn-success"
                                v-if="currency == 'ETH'"
                              >
                                Continue
                              </button>
                              <button
                                v-on:click="buyBCH('FCB')"
                                class="btn btn-success"
                                v-if="currency == 'BCH'"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></b-card-text></b-tab
                >
              </b-tabs>
            </b-card>
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

      
      bank: null,
      accountNumber: null,

      bankBranch_NB: 'Henderson Street',
      accountType_NB: 'Savings Account',
      accountName_NB: 'Khodo Incorporation',
      accountNumber_NB: '1007245838',

      bankBranch_Eco: 'Blantyre Branch',
      accountType_Eco: 'Savings Account',
      accountName_Eco: 'Khodo Incorporation Private Limited',
      accountNumber_Eco: '5415000008510',

      bankBranch_FCB: 'Blantyre Branch',
      accountType_FCB: 'Current Account',
      accountName_FCB: 'Khodo Incorporation',
      accountNumber_FCB: '0003502007647',


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
    buyBTC(bankname) {
      if(bankname == 'NB'){
        this.bank = 'National Bank'
        this.accountNumber = this.accountNumber_NB
      }
      if(bankname == 'Eco'){
        this.bank = 'Eco Bank'
        this.accountNumber = this.accountNumber_Eco
      }
      if(bankname == 'FCB'){
        this.bank = 'First capital Bank'
        this.accountNumber = this.accountNumber_FCB
      }
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.access_token,
      };
      this.$axios
        .post(
          "/wallet/bank-transfer-buy-bitcoin",
          {
            bank: this.bank,
            accountNumber: this.accountNumber,
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

    buyETH(bankname) {
        if(bankname == 'NB'){
        this.bank = 'National Bank'
        this.accountNumber = this.accountNumber_NB
      }
      if(bankname == 'Eco'){
        this.bank = 'Eco Bank'
        this.accountNumber = this.accountNumber_Eco
      }
      if(bankname == 'FCB'){
        this.bank = 'First capital Bank'
        this.accountNumber = this.accountNumber_FCB
      }
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.access_token,
      };
      this.$axios
        .post(
          "/wallet/bank-transfer-buy-ethereum",
          {
           bank: this.bank,
            accountNumber: this.accountNumber,
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

    buyBCH(bankname) {
      console.log(bankname)
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
