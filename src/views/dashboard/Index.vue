
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
              <div class="col-xl-8 col-lg-12 col-xxl-8">
                <div class="card profile_chart transparent">
                  <div class="card-header">
                    <div class="chart_current_data">
                      <h3>254856 <span>USD</span></h3>
                      <p class="text-success">125648 <span>USD (20%)</span></p>
                    </div>
                    <div class="duration-option">
                      <a
                        id="all"
                        class="c-pointer"
                        @click="active = 'all'"
                        :class="active === 'all' && 'active'"
                        >ALL</a
                      >
                      <a
                        id="one_month"
                        class="c-pointer"
                        @click="active = '1m'"
                        :class="active === '1m' && 'active'"
                        >1M</a
                      >
                      <a
                        id="six_months"
                        class="c-pointer"
                        @click="active = '6m'"
                        :class="active === '6m' && 'active'"
                        >6M</a
                      >
                      <a
                        id="one_year"
                        class="c-pointer"
                        @click="active = '1y'"
                        :class="active === '1y' && 'active'"
                        >1Y</a
                      >
                      <a
                        id="ytd"
                        class="c-pointer"
                        @click="active = 'ytm'"
                        :class="active === 'ytm' && 'active'"
                        >YTD</a
                      >
                    </div>
                  </div>
                  <div class="card-body">
                    <!-- <div id="timeline-chart"></div> -->
                    <TimelineChart />
                    <div class="chart-content text-center">
                      <div class="row">
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">24hr Volume</p>
                            <strong>$1236548.325</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Market Cap</p>
                            <strong>19B USD</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Circulating</p>
                            <strong>29.4M BTC</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">All Time High</p>
                            <strong>19.783.06 USD</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Typical hold</p>
                            <strong>88 days</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Trading activity</p>
                            <strong>70% buy </strong>
                          </div>
                        </div>
                        <!-- <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Popularity </p>
                                                        <strong>#1 most held </strong>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Popularity </p>
                                                        <strong>#1 most held </strong>
                                                    </div>
                                                </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-12 col-xxl-4">
                <div class="card balance-widget transparent">
                  <div class="card-body">
                    <!-- <div id="wallet-chart"></div> -->
                    <wallet-chart />
                    <div class="balance-widget mt-5">
                      <h4>Total Balance : <strong>$125480</strong></h4>
                      <ul class="list-unstyled">
                        <li class="media">
                          <i class="cc BTC mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Bitcoin</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 BTC</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li class="media">
                          <i class="cc LTC mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Litecoin</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 LTC</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li class="media">
                          <i class="cc XRP mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Ripple</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 XRP</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li class="media">
                          <i class="cc DASH mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Dash</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 XRP</h5>
                            <span>0.125 USD</span>
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
import Layout from "../../components/dashboard/Layout.vue";
import Toster from "../../components/dashboard/Toster.vue";
import TimelineChart from "../../components/dashboard/charts/TimelineChart.vue";
import WalletChart from "../../components/dashboard/charts/WalletChart.vue";
// import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "Index",
  components: {
    Layout,
    TimelineChart,
    WalletChart,
    // ValidationObserver,
    // ValidationProvider,
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

    