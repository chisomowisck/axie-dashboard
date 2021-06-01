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
                        class="d-flex justify-content-between align-items-center"
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
                            $34,463.10
                            <span class="badge badge-success ml-2">+ 06%</span>
                          </h4>
                        </div>
                        <btc-chart />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="d-flex justify-content-between align-items-center"
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
                            $2,309.00
                            <span class="badge badge-danger ml-2">- 06%</span>
                          </h4>
                        </div>
                        <btc-chart />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="widget-stat">
                          <div class="coin-title">
                            <span><i class="cc BCH-alt"></i></span>
                            <h5 class="d-inline-block ml-2 mb-3">
                              BT Cash
                              <span>(24h)</span>
                            </h5>
                          </div>
                          <h4>
                            $695.01
                            <span class="badge badge-primary ml-2"> 06%</span>
                          </h4>
                        </div>
                        <btc-chart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-6 col-lg-12 col-xxl-4">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Exchange</h4>
                  </div>
                  <div class="card-body">
                    <currency-form />
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12 col-xxl-8">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Transaction</h4>
                  </div>
                  <div class="card-body">
                    <div class="transaction-widget">
                      <ul class="list-unstyled">
                        <li class="media">
                          <span class="sold-thumb"
                            ><i class="la la-arrow-down"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 BTC</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="buy-thumb"
                            ><i class="la la-arrow-up"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 LTC</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="sold-thumb"
                            ><i class="la la-arrow-down"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 XRP</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="buy-thumb"
                            ><i class="la la-arrow-up"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 XRP</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="buy-thumb"
                            ><i class="la la-arrow-up"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 XRP</h4>
                          </div>
                        </li>
                      </ul>
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
import CurrencyForm from "../../components/CurrencyForm";
import Layout from "../../components/dashboard/Layout.vue";
import BtcChart from "../../components/dashboard/charts/BtcChart.vue";
import Toster from "../../components/dashboard/Toster.vue";
export default {
  name: "Index",
  components: {
    CurrencyForm,
    Layout,
    BtcChart,
    Toster,
  },
  data() {
    return {
      active: "all",
    };
  },
};
</script>
