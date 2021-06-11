<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
         
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card">
              <div class="card-body">
                 <div class="buy-sell-widget px-2">
                        <ValidationObserver v-slot="{ passes }">
                          <form
                            @submit.prevent="passes(formSubmit)"
                            class="currency_validate"
                            method="post"
                          >
                            <ValidationProvider
                              rules="required"
                              v-slot="{ errors }"
                              name="currency"
                              class="form-group"
                            >
                            <h2 class="h2 text-primary">Sale Bitcoin</h2>
                            <div class="row" v-if="currency == 'BTC'">
                              <div class="col-md-6">
                                <p>1 Bitcoin <br> updated few seconds</p>
                              </div>
                              <div class="col-md-6">
                              <label>{{mwk_btc_sale.toLocaleString()}} MWK <br> <span v-if="btc_in_usd_24 >= 1" class="text-success">+{{btc_in_usd_24}}</span> <span v-if="btc_in_usd_24 < 1" class="text-danger">{{btc_in_usd_24}}</span> over 24hrs</label>
                              </div>
                            </div>
                             <div class="row" v-if="currency == 'ETH'">
                              <div class="col-md-6">
                                <p>1 Ethereum <br> updated few seconds</p>
                              </div>
                              <div class="col-md-6">
                              <label>{{mwk_eth_sale.toLocaleString()}} MWK <br> <span v-if="eth_in_usd_24 >= 1" class="text-success">+{{eth_in_usd_24}}</span> <span v-if="eth_in_usd_24 < 1" class="text-danger">{{eth_in_usd_24}}</span> over 24hrs</label>
                              </div>
                            </div>
                             <div class="row" v-if="currency == 'BCH'">
                              <div class="col-md-6">
                                <p>1 Bitcoin Cash <br> updated few seconds</p>
                              </div>
                              <div class="col-md-6">
                              <label>{{mwk_bch_sale.toLocaleString()}} MWK <br> <span v-if="bch_in_usd_24 >= 1" class="text-success">+{{bch_in_usd_24}}</span> <span v-if="bch_in_usd_24 < 1" class="text-danger">{{bch_in_usd_24}}</span> over 24hrs</label>
                              </div>
                            </div>
                            <br>
                              <label class="mr-sm-2">Currency</label>
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <label class="input-group-text"
                                    ><i class="cc BTC-alt"></i
                                  ></label>
                                </div>
                                <select
                                  v-model="currency"
                                  name="currency"
                                  class="form-control"
                                >
                                  <option value="BTC" selected>Bitcoin</option>
                                  <option value="ETH">Ethereum</option>
                                  <option value="BCH">
                                    Bitcoin Cash
                                  </option>
                                </select>
                                <label class="error" for="currency">{{
                                  errors[0]
                                }}</label>
                              </div>
                            </ValidationProvider>

                            <ValidationProvider
                              rules="required"
                              v-slot="{ errors }"
                              name="method"
                              class="form-group"
                            >
                              <label class="mr-sm-2">Payment Method</label>
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <label class="input-group-text"
                                    ><i class="fa fa-bank"></i
                                  ></label>
                                </div>
                                <select
                                  class="form-control"
                                  v-model="method"
                                  name="method"
                                >
                                  <option value="">Select</option>
                                  <option value="Airtel Money">Airtel Money</option>
                                  <option value="Mpamba">Mpamba</option>
                                  <option value="Bank">Bank</option>
                                </select>
                                <label class="error" for="method">{{
                                  errors[0]
                                }}</label>
                              </div>
                            </ValidationProvider>

                           <!-- BTC Buy Fields Start -->
                            <div v-if="currency == 'BTC'">
                                  <div class="form-group">
                                  <label class="mr-sm-2 mb-1"
                                    >Enter your amount</label
                                  >
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                      <a
                                        @click="changeToMwkBTCSale"
                                        class="
                                          btn
                                          text-white
                                          btn-success btn-sm
                                        "
                                        >In MWK</a
                                      >
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                      <a
                                        @click="changeToBTCSale"
                                        class="
                                          btn
                                          text-white
                                          btn-primary btn-sm
                                        "
                                        >In BTC</a
                                      >
                                    </div>
                                  </div>
                                </div>
                                  <div v-if="btc_calc_status == 'mwk_btc'">
                                    <div class="row mt-0">
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"
                                              >MWK</span
                                            >
                                          </div>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="0"
                                            v-model="btc_mwk"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <label class="text-dark pt-2"
                                            >For: {{ btcConvSaleMWK }} BTC</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div v-if="btc_calc_status == 'btc'">
                                    <div class="row mt-0">
                                      <div class="col-md-6 pb-2">
                                        <div class="input-group">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"
                                              >BTC</span
                                            >
                                          </div>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="0"
                                            v-model="btc"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <label class="text-dark pt-2"
                                            >For: MWK {{ btcConvSale }}</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                </div>
                          <!-- BTC Buy Fields End -->
                           <!-- ETH Buy Fields Start -->
                            <div v-if="currency == 'ETH'">
                                 <div class="form-group">
                                  <label class="mr-sm-2 mb-1"
                                    >Enter your amount</label
                                  >
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                      <a
                                        @click="changeToMwkETHSale"
                                        class="
                                          btn
                                          text-white
                                          btn-success btn-sm
                                        "
                                        >In MWK</a
                                      >
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                      <a
                                        @click="changeToETHSale"
                                        class="
                                          btn
                                          text-white
                                          btn-primary btn-sm
                                        "
                                        >In ETH</a
                                      >
                                    </div>
                                  </div>
                                </div>
                                  <div v-if="eth_calc_status == 'mwk_eth'">
                                    <div class="row mt-0">
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"
                                              >MWK</span
                                            >
                                          </div>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="0"
                                            v-model="eth_mwk"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <label class="text-dark pt-2"
                                            >For: {{ ethConvSaleMWK }} ETH</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div v-if="eth_calc_status == 'eth'">
                                    <div class="row mt-0">
                                      <div class="col-md-6 pb-2">
                                        <div class="input-group">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"
                                              >ETH</span
                                            >
                                          </div>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="0"
                                            v-model="eth"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <label class="text-dark pt-2"
                                            >For: MWK {{ ethConvSale }}</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                </div>
                          <!-- ETH Buy Fields End -->
                          <!-- BCH Buy Fields Start -->
                             <div v-if="currency == 'BCH'">
                                 <div class="form-group">
                                  <label class="mr-sm-2 mb-1"
                                    >Enter your amount</label
                                  >
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                      <a
                                        @click="changeToMwkBCHSale"
                                        class="
                                          btn
                                          text-white
                                          btn-success btn-sm
                                        "
                                        >In MWK</a
                                      >
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                      <a
                                        @click="changeToBCHSale"
                                        class="
                                          btn
                                          text-white
                                          btn-primary btn-sm
                                        "
                                        >In BCH</a
                                      >
                                    </div>
                                  </div>
                                </div>
                                  <div v-if="bch_calc_status == 'mwk_bch'">
                                    <div class="row mt-0">
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"
                                              >MWK</span
                                            >
                                          </div>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="0"
                                            v-model="bch_mwk"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <label class="text-dark pt-2"
                                            >For: {{ bchConvSaleMWK }} BCH</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div v-if="bch_calc_status == 'bch'">
                                    <div class="row mt-0">
                                      <div class="col-md-6 pb-2">
                                        <div class="input-group">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"
                                              >BCH</span
                                            >
                                          </div>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="0"
                                            v-model="bch"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6 mb-2">
                                        <div class="input-group">
                                          <label class="text-dark pt-2"
                                            >For: MWK {{ bchConvSale }}</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                </div>
                          <!-- BCH Buy Fields End -->
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-warning text-white btn-block">
                              Sale Now
                            </button>
                          </form>
                        </ValidationObserver>
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
import { ValidationObserver, ValidationProvider } from "vee-validate";
// import CurrencyForm from "../../components/CurrencyForm.vue";
import Layout from "../../components/dashboard/Layout.vue";

export default {
  name: "Index",
  components: {
    ValidationObserver,
    ValidationProvider,
    // CurrencyForm,
    Layout,
  },
  data() {
    return {
      showVideo: false,

      currency: "BTC",
      method: "",
      currency_amount: "",
      usd_amount: "",
      submitted: false,

      btc: 1,
      eth: 1,
      bch: 1,
      mwk_btc_sale: 0,
      mwk_eth_sale: 0,
      mwk_bch_sale: 0,
      btc_in_usd: 0,
      btc_in_usd_24: 0,
      eth_in_usd: 0,
      eth_in_usd_24: 0,
      bch_in_usd: 0,
      bch_in_usd_24: 0,
      exchange_type: 'buy',

      btc_mwk: 30000,
      btc_calc_status: "mwk_btc",
      eth_mwk: 30000,
      eth_calc_status: "mwk_eth",
      bch_mwk: 30000,
      bch_calc_status: "mwk_bch",
    };
  },

  computed: {
   btcConvSale() {
      return (this.btc * this.mwk_btc_sale);
    },
    btcConvSaleMWK() {
      return (this.btc_mwk / this.mwk_btc_sale).toFixed(5);
    },

    ethConvSale() {
      return (this.eth * this.mwk_eth_sale);
    },
    ethConvSaleMWK() {
      return (this.eth_mwk / this.mwk_eth_sale).toFixed(5);
    },


    bchConvSale() {
      return (this.bch * this.mwk_bch_sale);
    },
    bchConvSaleMWK() {
      return (this.bch_mwk / this.mwk_bch_sale).toFixed(5);
    },

  },

  mounted() {
      this.sockets.subscribe("get bitcoin price", (data) => {
      this.crypto_rates = data.prices;

      this.mwk_btc_sale = data.prices.bitcoin.sell;
      this.mwk_eth_sale = data.prices.ethereum.sell;
      this.mwk_bch_sale = data.prices.bitcoincash.sell;

      this.btc_in_usd = data.prices.bitcoin.spot;
      this.btc_in_usd_24 = data.prices.bitcoin.price_change_percentage_24h.toFixed(2);
      this.eth_in_usd = data.prices.ethereum.spot;
      this.eth_in_usd_24 = data.prices.ethereum.price_change_percentage_24h;
      this.bch_in_usd = data.prices.bitcoincash.spot;
      this.bch_in_usd_24 = data.prices.bitcoincash.price_change_percentage_24h;
       });
  },
  methods: {

    formSubmit() {
      if (this.method == "Airtel Money") {
        this.$router.push("/sale/airtel-money");
      }
      if (this.method == "Mpamba") {
        this.$router.push("/sale/tnm-mpamba");
      }
      if (this.method == "Bank") {
        this.$router.push("/sale/bank");
      }
      },
      //BTC Sale Function Convention
    changeToBTCSale() {
      this.btc_calc_status = "btc";
    },
    changeToMwkBTCSale() {
       this.btc_calc_status = "mwk_btc";
    },

     //ETH Sale Function Convention
    changeToETHSale() {
       this.eth_calc_status = "eth";
    },
    changeToMwkETHSale() {
       this.eth_calc_status = "mwk_eth";
    },

     //BCH Sale Function Convention
    changeToBCHSale() {
       this.bch_calc_status = "bch_sale";
    },
    changeToMwkBCHSale() {
       this.bch_calc_status = "mwk_bch_sale";
    },
  },
};
</script>
