<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-6 col-md-12">
            <div class="card acc_balance">
              <div class="card-header">
                <h4 class="card-title">Bank Payment</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-md-6">
                        <span>Selling</span>
                        <h3>0.0230145 BTC</h3>
                      </div>
                      <div class="col-md-6">
                        <span>For</span>
                        <h3>20,000 MWK</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <span>Phone</span>
                        <h3>0999534173</h3>
                      </div>
                      <div class="col-md-6">
                        <span>Reference</span>
                        <h3>Chisomo Wisck</h3>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <span>Bank Name</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Bank Name"
                          v-model="fullname"
                        />
                      </div>
                      <div class="col-md-6">
                        <span>Account Number:</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Account Number"
                          v-model="fullname"
                        />
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <span>Account Name:</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Account Name"
                          v-model="fullname"
                        />
                      </div>
                      <div class="col-md-6">
                        <span>Branch:</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Branch:"
                          v-model="fullname"
                        />
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-6">
                        <span>Account Number:</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Account Number"
                          v-model="fullname"
                        />
                      </div>
                      <div class="col-md-6">
                        <div class="form-group col-xl-12">
                          <br />
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
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <span>BTC Addrees</span>
                    <h6>BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2P2SH</h6>
                    <div class="d-flex justify-content-center">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="btn">
                  <button v-on:click="saleBTC" class="btn btn-success">
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

      fullname: "",

      //ref: localStorage.getItem("fullName") +' '+ new Date().toJSON().slice(0,13).replace(/-/g,''),

      bank: "FDH",
      mwkAmount: "22000",
      // btcAmount: '0.0001',
      bankBranch: "Lilongwe",
      // bitcoinAddress: '1DpgWgU4GGiYKNxgtjRzBEtNSykB3LV3Ls',
      accountName: "Carol Doyle",
      accountNumber: "30001440589404",
      proof: null,
    };
  },
  methods: {
    fileChange(e) {
      this.filevalue = e.target.value;
    },
    saleBTC() {
      // alert('hhhhh')
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.access_token,
      };
      this.$axios
        .post(
          "/wallet/bank-transfer-buy-bitcoin",
          {
            bank: this.momoType,
            mwkAmount: this.mwkAmount,
            bankBranch: this.bankBranch,
            accountNumber: this.accountNumber,
            accountName: this.accountName,
            proof: this.filevalue,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
