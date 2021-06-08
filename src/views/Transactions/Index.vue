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
                          <h4 class="card-title">Buy Activities</h4>
                        </div>
                        <div class="card-body pt-0">
                          <div class="transaction-table">
                            <div class="table-responsive">
                              <table class="table mb-0 table-responsive-sm">
                                <tbody>
                                  <tr>
                                    <td>
                                      <span class="sold-thumb"
                                        ><i class="la la-arrow-down"></i
                                      ></span>
                                    </td>

                                    <td>
                                      <span class="badge badge-danger"
                                        >Sold</span
                                      >
                                    </td>
                                    <td><i class="cc BTC"></i> BTC</td>
                                    <td>Using - Bank *******5264</td>
                                    <td class="text-danger">-0.000242 BTC</td>
                                    <td>-0.125 USD</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span class="buy-thumb"
                                        ><i class="la la-arrow-up"></i
                                      ></span>
                                    </td>
                                    <td>
                                      <span class="badge badge-success"
                                        >Buy</span
                                      >
                                    </td>
                                    <td><i class="cc LTC"></i> LTC</td>
                                    <td>Using - Card *******8475</td>
                                    <td class="text-success">-0.000242 BTC</td>
                                    <td>-0.125 USD</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span class="sold-thumb"
                                        ><i class="la la-arrow-down"></i
                                      ></span>
                                    </td>
                                    <td>
                                      <span class="badge badge-danger"
                                        >Sold</span
                                      >
                                    </td>
                                    <td><i class="cc XRP"></i> XRP</td>
                                    <td>Using - Card *******8475</td>
                                    <td class="text-danger">-0.000242 BTC</td>
                                    <td>-0.125 USD</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span class="buy-thumb"
                                        ><i class="la la-arrow-up"></i
                                      ></span>
                                    </td>
                                    <td>
                                      <span class="badge badge-success"
                                        >Buy</span
                                      >
                                    </td>
                                    <td><i class="cc DASH"></i> DASH</td>
                                    <td>Using - Card *******2321</td>
                                    <td class="text-success">-0.000242 BTC</td>
                                    <td>-0.125 USD</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span class="sold-thumb"
                                        ><i class="la la-arrow-down"></i
                                      ></span>
                                    </td>
                                    <td>
                                      <span class="badge badge-danger"
                                        >Sold</span
                                      >
                                    </td>
                                    <td><i class="cc BTC"></i> BTC</td>
                                    <td>Using - Card *******2321</td>
                                    <td class="text-danger">-0.000242 BTC</td>
                                    <td>-0.125 USD</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div></b-card-text
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
                                      <span class="buy-thumb"
                                        ><i class="la la-arrow-up"></i
                                      ></span>
                                    </td>
                                
                                    <td> {{transaction.coinType.toUpperCase()}}</td>
                                    <td class="text-success"> {{transaction.btcAmount}} {{transaction.coinType.toUpperCase()}}</td>
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
      access_token: localStorage.getItem("access_token"),
    };
  },



  computed: {
    transactionList() {
      return this.transactions;
    },
  },

  mounted() {
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
  },
};
</script>
