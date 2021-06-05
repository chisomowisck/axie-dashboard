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
                            <h2 class="h2 text-primary">Buy Bitcoin</h2>
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

                          <div class="form-group">
                                  <label class="mr-sm-2 mb-0"
                                    >Enter your amount</label
                                  >

                               </div>
                           <!-- BTC Buy Fields Start -->
                            <div v-if="currency =='BTC'">
                            <div class="row mt-0">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                  >
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
                                        v-on:keyup="changeToMwkBTCBuy"
                                      />
                                  

                                      <label class="error" for="method">{{
                                        errors[0]
                                      }}</label>
                                    </div>
                                  </ValidationProvider>
                           
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                  >
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
                                        v-model="mwk_btc_buy"
                                        v-on:keyup="changeToBTCBuy"
                                      />
                                     

                                      <label class="error" for="method">{{
                                        errors[0]
                                      }}</label>
                                    </div>
                                  </ValidationProvider>
                        
                                </div>
                              </div>
                            </div>
                             </div>
                          <!-- BTC Buy Fields End -->
                           <!-- ETH Buy Fields Start -->
                            <div v-if="currency =='ETH'">
                            <div class="row mt-0">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                  >
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
                                        v-on:keyup="changeToMwkETHBuy"
                                      />
                                  

                                      <label class="error" for="method">{{
                                        errors[0]
                                      }}</label>
                                    </div>
                                  </ValidationProvider>
                           
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                  >
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
                                        v-model="mwk_eth_buy"
                                        v-on:keyup="changeToETHBuy"
                                      />
                                     

                                      <label class="error" for="method">{{
                                        errors[0]
                                      }}</label>
                                    </div>
                                  </ValidationProvider>
                        
                                </div>
                              </div>
                            </div>
                             </div>
                          <!-- ETH Buy Fields End -->
                          <!-- BCH Buy Fields Start -->
                            <div v-if="currency =='BCH'">
                            <div class="row mt-0">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                  >
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
                                        v-on:keyup="changeToMwkBCHBuy"
                                      />
                                  

                                      <label class="error" for="method">{{
                                        errors[0]
                                      }}</label>
                                    </div>
                                  </ValidationProvider>
                           
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                  >
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
                                        v-model="mwk_bch_buy"
                                        v-on:keyup="changeToBCHBuy"
                                      />
                                     

                                      <label class="error" for="method">{{
                                        errors[0]
                                      }}</label>
                                    </div>
                                  </ValidationProvider>
                        
                                </div>
                              </div>
                            </div>
                             </div>
                          <!-- BCH Buy Fields End -->
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-success btn-block"
                            >
                              Buy Now
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
    <pop v-show="showVideo" :closeFuntion="closeFuntion" />
  </layout>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
// import CurrencyForm from "../../components/CurrencyForm.vue";
import Layout from "../../components/dashboard/Layout.vue";
import Pop from "../../components/dashboard/Pop.vue";

export default {
  name: "Index",
  components: {
    ValidationObserver,
    ValidationProvider,
    // CurrencyForm,
    Layout,
    Pop,
  },
  data() {
    return {
      showVideo: false,

      currency: "BTC",
      method: "",
      currency_amount: "",
      usd_amount: "",
      submitted: false,
      exchangeMsg: 'You are buying',

      btc: 1,
      eth: 1,
      bch: 1,
      btc2: 1,
      eth2: 1,
      bch2: 1,
      mwk_btc_sale: null,
      mwk_eth_sale: null,
      mwk_bch_sale: null,
      mwk_btc_buy: null,
      mwk_eth_buy: null,
      mwk_bch_buy: null,
      btc_in_usd: 37780.35,
      eth_in_usd: 2795.98,
      bch_in_usd: 678.52,
      mwk_in_usd: 790,
      sale_rate: 850,
      buy_rate: 950,
      exchange_type: 'buy',
    };
  },

  mounted() {

    this.mwk_btc_sale = (this.btc_in_usd*this.sale_rate);
    this.mwk_eth_sale = (this.eth_in_usd*this.sale_rate);
    this.mwk_bch_sale = (this.bch_in_usd*this.sale_rate);

    this.mwk_btc_buy = (this.btc_in_usd*this.buy_rate);
    this.mwk_eth_buy = (this.eth_in_usd*this.buy_rate);
    this.mwk_bch_buy = (this.bch_in_usd*this.buy_rate);
  },
  methods: {
    closeFuntion() {
      this.showVideo = false;
    },


//BTC Buy Function Convention
    changeToBTCBuy() {
      var btcConv = this.mwk_btc_buy/(this.btc_in_usd*this.buy_rate);
      this.btc = btcConv.toFixed(5);
    },
    changeToMwkBTCBuy() {
      var mwkConv = this.btc*(this.btc_in_usd*this.buy_rate);
      this.mwk_btc_buy = mwkConv.toFixed(2);
    },
//BTC Sale Function Convention
    changeToBTCSale() {
      var btcConv = this.mwk_btc_sale/(this.btc_in_usd*this.sale_rate);
      this.btc2 = btcConv.toFixed(5);
    },
    changeToMwkBTCSale() {
      var mwkConv = this.btc2*(this.btc_in_usd*this.sale_rate);
      this.mwk_btc_sale = mwkConv.toFixed(2);
    },
//ETH Buy Function Convention
    changeToETHBuy() {
      var ethConv = this.mwk_eth_buy/(this.eth_in_usd*this.buy_rate);
      this.eth = ethConv.toFixed(5);
    },
    changeToMwkETHBuy() {
      var mwkEthConv = this.eth*(this.eth_in_usd*this.buy_rate);
      this.mwk_eth_buy = mwkEthConv.toFixed(2);
    },
//ETH Sale Function Convention
    changeToETHSale() {
      var ethConv = this.mwk_eth_sale/(this.eth_in_usd*this.sale_rate);
      this.eth2 = ethConv.toFixed(5);
    },
    changeToMwkETHSale() {
      var mwkEthConv = this.eth2*(this.eth_in_usd*this.sale_rate);
      this.mwk_eth_sale = mwkEthConv.toFixed(2);
    },
//BCH Buy Function Convention
     changeToBCHBuy() {
      var bchConv = this.mwk_bch_buy/(this.bch_in_usd*this.buy_rate);
      this.bch = bchConv.toFixed(5);
    },
    changeToMwkBCHBuy() {
      var mwkBchConv = this.bch*(this.bch_in_usd*this.buy_rate);
      this.mwk_bch_buy = mwkBchConv.toFixed(2);
    },
//BCH Sale Function Convention
     changeToBCHSale() {
      var bchConv = this.mwk_bch_sale/(this.bch_in_usd*this.sale_rate);
      this.bch2 = bchConv.toFixed(5);
    },
    changeToMwkBCHSale() {
      var mwkBchConv = this.bch2*(this.bch_in_usd*this.sale_rate);
      this.mwk_bch_sale = mwkBchConv.toFixed(2);
    },
    buyTabClick(){
      this.exchangeMsg = "You are buying"
      this.exchange_type = "buy";
    },
    sellTabClick(){
      this.exchange_type = "sale";
      this.exchangeMsg = "You are selling"
    },
  },
};
</script>
