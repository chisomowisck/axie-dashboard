<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div>
              <b-card no-body>
                <b-tabs pills card>
                  <b-tab title="Sell" active>
                    <b-card-text>
                      <div class="">
                        <div class="card-header border-0">
                          <h4 class="card-title">Sale Activities</h4>
                        </div>
                        <div class="card-body pt-0">
                          <div class="transaction-table">
                            <div class="table-responsive">
                              <table class="table mb-0 table-responsive-sm">
                                <tbody>
                                   <div v-for="transaction2 in transactionList2" v-bind:key="transaction2.id">
                                  <tr>
                                    <td>
                                      <span v-if="transaction2.status=='success'" class="buy-thumb bg-success">
                                        <i  class="la la-arrow-down"></i>
                                        </span>
                                        <span v-if="transaction2.status=='disapproved'" class="buy-thumb bg-danger">
                                        <i  class="la la-arrow-down"></i>
                                        </span>
                                        <span v-if="transaction2.status=='pending'" class="buy-thumb bg-warning">
                                        <i  class="la la-arrow-down"></i>
                                        </span>
                                    </td>
                                
                                    <td ><i class="cc BTC" v-if="transaction2.coinType=='btc'"></i>
                                    <i class="cc ETH" v-if="transaction2.coinType=='eth'"></i>
                                     {{transaction2.coinType.toUpperCase()}}</td>
                                    <td v-if="transaction2.coinType=='btc'" class="text-success"> {{transaction2.btcAmount}} {{transaction2.coinType.toUpperCase()}}</td>
                                    <td v-if="transaction2.coinType=='eth'" class="text-success"> {{transaction2.ethAmount}} {{transaction2.coinType.toUpperCase()}}</td>
                                    <td>{{transaction2.mwkAmount.toLocaleString()}} MWK</td>
                                    <td>{{transaction2.status}}</td>
                                    <td>Using - {{transaction2.momoType}}</td>
                                  </tr>
                                   </div>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                  </b-card-text
                    ></b-tab
                  >
                  <b-tab title="Buy">
                    <b-card-text>
                      <div class="">
                        <div class="card-header border-0">
                          <h4 class="card-title">Buy Activities</h4>
                        </div>
                        <div class="card-body pt-0">
                          <div class="transaction-table">
                            <div class="table-responsive">
                              <table class="table mb-0 table-responsive-sm">
                                <tbody>
                                   <div v-for="transaction in transactionList" v-bind:key="transaction.id">
                                  <tr>
                                    <td>
                                      <span v-if="transaction.status=='success'" class="buy-thumb bg-success">
                                        <i  class="la la-arrow-up"></i>
                                        </span>
                                        <span v-if="transaction.status=='disapproved'" class="buy-thumb bg-danger">
                                        <i  class="la la-arrow-up"></i>
                                        </span>
                                        <span v-if="transaction.status=='pending'" class="buy-thumb bg-warning">
                                        <i  class="la la-arrow-up"></i>
                                        </span>
                                    </td>
                                
                                    <td ><i class="cc BTC" v-if="transaction.coinType=='btc'"></i>
                                    <i class="cc ETH" v-if="transaction.coinType=='eth'"></i>
                                     {{transaction.coinType.toUpperCase()}}</td>
                                    <td v-if="transaction.coinType=='btc'" class="text-success"> {{transaction.btcAmount}} {{transaction.coinType.toUpperCase()}}</td>
                                    <td v-if="transaction.coinType=='eth'" class="text-success"> {{transaction.ethAmount}} {{transaction.coinType.toUpperCase()}}</td>
                                    <td>{{transaction.mwkAmount.toLocaleString()}} MWK</td>
                                    <td>{{transaction.status}}</td>
                                    <td>Using - {{transaction.momoType}}</td>
                                  </tr>
                                   </div>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div></b-card-text
                    >
                    </b-tab
                  >
                </b-tabs>
              </b-card>
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
  name: "Index",
  components: {
    Layout,
  },
  data() {
    return {
      active: "all",
      transactions: [],
      transactions2: [],
      access_token: localStorage.getItem("access_token"),
    };
  },



  computed: {
    transactionList() {
      return this.transactions;
    },
    transactionList2() {
      return this.transactions2;
    },
  },

  mounted() {
    this.$axios
      .get(
        "/users/me/transactions?type=momo-transfer-sell-bitcoin,momo-transfer-sell-ethereum,wallet-transfer-bitcoin&limit=0",
        {
          headers: {
            Authorization: "Bearer " + this.access_token,
          },
        }
      )
      .then((response) => (this.transactions = response.data.data));

      this.$axios
      .get(
        "/users/me/transactions?type=momo-transfer-buy-bitcoin,momo-transfer-buy-ethereum,wallet-transfer-bitcoin&limit=0",
        {
          headers: {
            Authorization: "Bearer " + this.access_token,
          },
        }
      )
      .then((response) => (this.transactions2 = response.data.data));
  },

  
};
</script>
