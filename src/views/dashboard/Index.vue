
    <template>
  <layout :active="1" :title="true">
    <toster />
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-xxl-12">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div class="widget-stat">
                          <div class="coin-title">
                            <span><i class="cc BTC-alt"></i></span>
                            <h5 class="d-inline-block ml-2 mb-3">
                              Bitcoin
                              <span>(24h)</span>
                            </h5>
                          </div>
                          <h4>
                            ${{ btc_in_usd.toFixed(2) }}

                            <span
                              v-if="btc_in_usd_24 >= 1"
                              class="badge badge-success ml-2"
                            >
                              {{ btc_in_usd_24.toFixed(2) }}%</span
                            >
                            <span
                              v-if="
                               btc_in_usd_24 < 1
                              "
                              class="badge badge-danger ml-2"
                            >
                              {{btc_in_usd_24.toFixed(2)}}%</span
                            >
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div class="widget-stat">
                          <div class="coin-title">
                            <span><i class="cc ETH-alt"></i></span>
                            <h5 class="d-inline-block ml-2 mb-3">
                              Ethereum
                              <span>(24h)</span>
                            </h5>
                          </div>
                          <h4>
                            ${{ eth_in_usd.toFixed(2) }}
                            <span
                              v-if="eth_in_usd_24 >= 1"
                              class="badge badge-success ml-2"
                            >
                              {{eth_in_usd_24.toFixed(2)}}%</span
                            >
                            <span
                              v-if="eth_in_usd_24 <1"
                              class="badge badge-danger ml-2"
                            >
                              {{eth_in_usd_24.toFixed(2)}}%</span
                            >
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div class="widget-stat">
                          <div class="coin-title">
                            <span><i class="cc BCH-alt"></i></span>
                            <h5 class="d-inline-block ml-2 mb-3">
                              Bitcoin Cash
                              <span>(24h)</span>
                            </h5>
                          </div>
                          <h4>
                            ${{ bch_in_usd.toFixed(2)}}
                            <span
                              v-if="bch_in_usd_24 >= 1
                              "
                              class="badge badge-success ml-2"
                            >
                              {{bch_in_usd_24.toFixed(2)}}%</span
                            >
                            <span
                              v-if="bch_in_usd_24 < 1 "
                              class="badge badge-danger ml-2"
                            >
                              {{bch_in_usd_24.toFixed(2)}}%</span
                            >
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-12 col-md-12">
                <div class="card">
                  <div class="card-body">
                    <div class="buy-sell-widget">
                      <b-tabs class="tab-content tab-content-default">
                        <b-tab
                          title="Buy"
                          class="tab-pane fade"
                          id="buy"
                          v-on:click="buyTabClick"
                          role="tabpanel"
                        >
                          <div class="buy-sell-widget px-2">
                            <ValidationObserver >
                                <ValidationProvider
                                  rules="required"
                                  v-slot="{ errors }"
                                  name="currency"
                                  class="form-group"
                                >
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
                                      <option value="BTC" selected>
                                        Bitcoin
                                      </option>
                                      <option value="ETH">Ethereum</option>
                                      <option value="BCH">Bitcoin Cash</option>
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
                                      <option value="Airtel Money">
                                        Airtel Money
                                      </option>
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
                                        @click="changeToMwkBTCBuy"
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
                                        @click="changeToBTCBuy"
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
                                            >For: {{ btcConvBuyMWK }} BTC</label
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
                                            >For: MWK {{ btcConvBuy }}</label
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
                                        @click="changeToMwkETHBuy"
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
                                        @click="changeToETHBuy"
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
                                            >For: {{ ethConvBuyMWK }} ETH</label
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
                                            >For: MWK {{ ethConvBuy }}</label
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
                                        @click="changeToMwkBCHBuy"
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
                                        @click="changeToBCHBuy"
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
                                            >For: {{ bchConvBuyMWK }} BCH</label
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
                                            >For: MWK {{ bchConvBuy }}</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                </div>
                                <!-- BCH Buy Fields END -->
                                <a
                                v-if="currency == 'BTC'"
                                  
                                  class="btn btn-success text-white btn-block"
                                  @click="buyBitcoin"
                                  >Buy Now</a
                                >
                                 <a
                                 v-if="currency == 'ETH'"
                                  
                                  class="btn btn-success text-white btn-block"
                                  @click="buyEthereum"
                                  >Buy Now</a
                                >
                                 <a
                                 v-if="currency == 'BCH'"
                                  
                                  class="btn btn-success text-white btn-block"
                                  @click="buyBitcoinCash"
                                  >Buy Now</a
                                >
                             
                            </ValidationObserver>
                          </div>
                        </b-tab>
                        <b-tab
                          title="Sell"
                          class="tab-pane fade"
                          id="sell"
                          v-on:click="sellTabClick"
                        >
                          <div class="buy-sell-widget px-2">
                            <ValidationObserver >
                                <ValidationProvider
                                  rules="required"
                                  v-slot="{ errors }"
                                  name="currency"
                                  class="form-group"
                                >
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
                                      <option value="BTC" selected>
                                        Bitcoin
                                      </option>
                                      <option value="ETH">Ethereum</option>
                                      <option value="BCH">Bitcoin Cash</option>
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
                                      <option value="Airtel Money">
                                        Airtel Money
                                      </option>
                                      <option value="Mpamba">Mpamba</option>
                                      <option value="Bank">Bank</option>
                                    </select>
                                    <label class="error" for="method">{{
                                      errors[0]
                                    }}</label>
                                  </div>
                                </ValidationProvider>
                         
                                <!-- BTC Sale Fields Start -->
                                <div v-if="currency == 'BTC'">
                                   <div class="form-group">
                                  <label class="mr-sm-2 mb-1"
                                    >Enter your amount</label
                                  >
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                      <a
                                        @click="changeToMwkBTCBuy"
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
                                <!-- BTC Sale Fields End -->
                                <!-- ETH Sale Fields Start -->
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
                                <!-- ETH Sale Fields End -->
                                <!-- BCH Sale Fields Start -->
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
                                <!-- BCH Sale Fields End -->
                                <a
                                v-if="currency == 'BTC'"
                                  
                                  class="btn btn-warning text-white btn-block"
                                  @click="saleBitcoin"
                                  >Buy Now</a
                                >
                                 <a
                                 v-if="currency == 'ETH'"
                                  
                                  class="btn btn-warning text-white btn-block"
                                  @click="saleEthereum"
                                  >Buy Now</a
                                >
                                 <a
                                 v-if="currency == 'BCH'"
                                  
                                  class="btn btn-warning text-white btn-block"
                                  @click="saleBitcoinCash"
                                  >Sale Now</a
                                >
                             
                            </ValidationObserver>
                          </div>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </div>
                </div>
                <p class="p-4"></p>
              </div>
              <div class="col-xl-6 col-lg-12 col-md-12">
                <div class="card">
                  <div class="card-body">
                    <div class="buyer-seller">
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td>
                                <span class="text-primary">{{
                                  exchangeMsg
                                }}</span>
                              </td>
                              <td
                                v-if="
                                  currency == 'BTC' && exchange_type == 'buy'
                                "
                              >
                                <span class="text-primary"
                                  >{{ btcConvBuyMWK }} {{ currency }} <br />
                                  For {{ btc_mwk }} MWK
                                </span>
                              </td>
                              <td
                                v-if="
                                  currency == 'ETH' && exchange_type == 'buy'
                                "
                              >
                                <span class="text-primary"
                                  >{{ eth }} {{ currency }} <br />
                                  For {{ mwk_eth_buy }} MWK
                                </span>
                              </td>
                              <td
                                v-if="
                                  currency == 'BCH' && exchange_type == 'buy'
                                "
                              >
                                <span class="text-primary"
                                  >{{ bch }} {{ currency }} <br />
                                  For {{ mwk_bch_buy }} MWK
                                </span>
                              </td>

                              <td
                                v-if="
                                  currency == 'BTC' && exchange_type == 'sale'
                                "
                              >
                                <span class="text-primary"
                                  >{{ btc2 }} {{ currency }} <br />
                                  For {{ mwk_btc_sale }} MWK
                                </span>
                              </td>
                              <td
                                v-if="
                                  currency == 'ETH' && exchange_type == 'sale'
                                "
                              >
                                <span class="text-primary"
                                  >{{ eth2 }} {{ currency }} <br />
                                  For {{ mwk_eth_sale }} MWK
                                </span>
                              </td>
                              <td
                                v-if="
                                  currency == 'BCH' && exchange_type == 'sale'
                                "
                              >
                                <span class="text-primary"
                                  >{{ bch2 }} {{ currency }} <br />
                                  For {{ mwk_bch_sale }} MWK
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Payment Method</td>
                              <td>{{ method }}</td>
                            </tr>
                            <tr>
                              <td>Exchange Rate</td>
                              <td>0.00212455 BTC</td>
                            </tr>
                            <tr>
                              <td>Fee</td>
                              <td>$28.00 USD</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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
import Toster from "../../components/dashboard/Toster.vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "Index",
  components: {
    Layout,
    ValidationObserver,
    ValidationProvider,
    Toster,
  },
  data() {
    return {
      active: "all",
      transactions: [],
      access_token: localStorage.getItem("access_token"),

      showVideo: false,

      currency: "BTC",
      method: "",
      currency_amount: "",
      usd_amount: "",
      submitted: false,
      exchangeMsg: "You are buying",

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
      mwk_btc_kbuy: null,
      mwk_eth_buy: null,
      mwk_bch_buy: null,
      btc_in_usd: 0,
      btc_in_usd_24: 0,
      eth_in_usd: 0,
      eth_in_usd_24: 0,
      bch_in_usd: 0,
      bch_in_usd_24: 0,
      mwk_in_usd: 790,
      sale_rate: 850,
      buy_rate: 950,
      exchange_type: "buy",
      crypto_rates: "",
      value: 30000,

      btc_mwk: 30000,
      btc_calc_status: "mwk_btc",
      eth_mwk: 30000,
      eth_calc_status: "mwk_eth",
      bch_mwk: 30000,
      bch_calc_status: "mwk_bch",
    };
  },

  computed: {
    transactionList() {
      return this.transactions;
    },

    btcConvBuy() {
      return (this.btc * this.mwk_btc_buy);
    },
    btcConvBuyMWK() {
      return (this.btc_mwk / this.mwk_btc_buy).toFixed(5);
    },

    btcConvSale() {
      return (this.btc * this.mwk_btc_sale);
    },
    btcConvSaleMWK() {
      return (this.btc_mwk / this.mwk_btc_sale).toFixed(5);
    },

    ethConvBuy() {
      return (this.eth * this.mwk_eth_buy);
    },
    ethConvBuyMWK() {
      return (this.eth_mwk / this.mwk_eth_buy).toFixed(5);
    },

    ethConvSale() {
      return (this.eth * this.mwk_eth_sale);
    },
    ethConvSaleMWK() {
      return (this.eth_mwk / this.mwk_eth_sale).toFixed(5);
    },

    bchConvBuy() {
      return (this.bch * this.mwk_bch_buy);
    },
    bchConvBuyMWK() {
      return (this.bch_mwk / this.mwk_bch_buy).toFixed(5);
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
      this.btc_in_usd_24 = data.prices.bitcoin.price_change_percentage_24h;
      this.eth_in_usd = data.prices.ethereum.spot;
      this.eth_in_usd_24 = data.prices.ethereum.price_change_percentage_24h;
      this.bch_in_usd = data.prices.bitcoincash.spot;
      this.bch_in_usd_24 = data.prices.bitcoincash.price_change_percentage_24h;

      this.mwk_btc_buy = data.prices.bitcoin.buy;
      this.mwk_btc_kbuy = data.prices.bitcoin.buy;
      this.mwk_eth_buy = data.prices.ethereum.buy;
      this.mwk_bch_buy = data.prices.bitcoincash.buy;
    });
    this.$axios
      .get(
        "/users/me/transactions?type=momo-transfer-sell-bitcoin,wallet-transfer-bitcoin&limit=0",
        {
          headers: {
            Authorization: "Bearer " + this.access_token,
          },
        }
      )
      .then((response) => (this.transactions = response.data.data));

    this.$axios
      .get("/users/me/profile", {
        headers: {
          Authorization: "Bearer " + this.access_token,
        },
      })
      .then((response) =>
        localStorage.setItem("fullName", response.data.data.fullName)
      );
  },

  methods: {
    buyBitcoin(){
       this.$store.dispatch("buyCrypto",{
          currency: this.currency,
          paymentMethod: this.method,
          cryptoValue: this.btcConvBuyMWK,
          cryptoValueMWK: this.btc_mwk,
        });
      if(this.method == 'Airtel Money'){
        this.$router.push({ name: 'AirtelMoneyBuy'})
      }

      if(this.method == 'Mpamba'){
         this.$router.push('buy/tnm-mpamba')
      }

      if(this.method == 'Bank'){
        this.$router.push('buy/bank')
      }
      
    },

     saleBitcoin(){

       this.$store.dispatch("saleCrypto",{
          currency: this.currency,
          paymentMethod: this.method,
          cryptoValue: this.btcConvSaleMWK,
          cryptoValueMWK: this.btc_mwk,
        });

       if(this.method == 'Airtel Money'){
        this.$router.push('sale/airtel-money')
      }

      if(this.method == 'Mpamba'){
         this.$router.push('sale/tnm-mpamba')
      }

      if(this.method == 'Bank'){
        this.$router.push('sale/bank')
      }
    },

    buyEthereum(){
       this.$store.dispatch("buyCrypto",{
          currency: this.currency,
          paymentMethod: this.method,
          cryptoValue: this.ethConvBuyMWK,
          cryptoValueMWK: this.eth_mwk,
        });

      if(this.method == 'Airtel Money'){
        this.$router.push('buy/airtel-money')
      }

      if(this.method == 'Mpamba'){
         this.$router.push('buy/tnm-mpamba')
      }

      if(this.method == 'Bank'){
        this.$router.push('buy/bank')
      }
      
    },

    saleEthereum(){
      this.$store.dispatch("saleCrypto",{
          currency: this.currency,
          paymentMethod: this.method,
          cryptoValue: this.ethConvSaleMWK,
          cryptoValueMWK: this.eth_mwk,
        });
       if(this.method == 'Airtel Money'){
        this.$router.push('sale/airtel-money')
      }

      if(this.method == 'Mpamba'){
         this.$router.push('sale/tnm-mpamba')
      }

      if(this.method == 'Bank'){
        this.$router.push('sale/bank')
      }
    },

    buyBitcoinCash(){
      
       this.$store.dispatch("buyCrypto",{
          currency: this.currency,
          paymentMethod: this.method,
          cryptoValue: this.ethConvBuyMWK,
          cryptoValueMWK: this.eth_mwk,
        });

      if(this.method == 'Airtel Money'){
        this.$router.push('buy/airtel-money')
      }

      if(this.method == 'Mpamba'){
         this.$router.push('buy/tnm-mpamba')
      }

      if(this.method == 'Bank'){
        this.$router.push('buy/bank')
      }
      
    },
    saleBitcoinCash(){
       this.$store.dispatch("saleCrypto",{
          currency: this.currency,
          paymentMethod: this.method,
          cryptoValue: this.bchConvSaleMWK,
          cryptoValueMWK: this.eth_mwk,
        });

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

    closeFuntion() {
      this.showVideo = false;
    },

    //BTC Buy Function Convention
    changeToBTCBuy() {
      this.btc_calc_status = "btc";
    },
    //BTC Sale Function Convention
    changeToMwkBTCBuy() {
      this.btc_calc_status = "mwk_btc";
    },
    //BTC Sale Function Convention
    changeToBTCSale() {
      this.btc_calc_status = "btc";
    },
    changeToMwkBTCSale() {
       this.btc_calc_status = "mwk_btc";
    },
    //ETH Buy Function Convention
    changeToETHBuy() {
       this.eth_calc_status = "eth";
    },
    changeToMwkETHBuy() {
       this.eth_calc_status = "mwk_eth";
    },
    //ETH Sale Function Convention
    changeToETHSale() {
       this.eth_calc_status = "eth";
    },
    changeToMwkETHSale() {
       this.eth_calc_status = "mwk_eth";
    },
    //BCH Buy Function Convention
    changeToBCHBuy() {
       this.bch_calc_status = "bch";
    },
    changeToMwkBCHBuy() {
       this.bch_calc_status = "mwk_bch";
    },
    //BCH Sale Function Convention
    changeToBCHSale() {
       this.bch_calc_status = "bch_sale";
    },
    changeToMwkBCHSale() {
       this.bch_calc_status = "mwk_bch_sale";
    },
    buyTabClick() {
      this.exchangeMsg = "You are buying";
      this.exchange_type = "buy";
    },
    sellTabClick() {
      this.exchange_type = "sale";
      this.exchangeMsg = "You are selling";
    },
  },
};
</script>

    