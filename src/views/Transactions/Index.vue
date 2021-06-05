<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-12 col-md-12">
            <div>
              <b-card no-body>
                <b-tabs pills card>
                  <b-tab title="Sell" active
                    ><b-card-text
                      >There are no transactions!</b-card-text
                    ></b-tab
                  >
                  <b-tab title="Buy"
                    ><b-card-text
                      ><div class="transaction-widget">
                        <ul class="list-unstyled">
                          <div
                            v-for="transaction in transactionList"
                            v-bind:key="transaction.id"
                          >
                            <li class="media pb-3">
                              <span class="buy-thumb"
                                ><i class="la la-arrow-up"></i
                              ></span>
                              <div class="media-body">
                                <p>
                                  <small>{{ transaction.createdAt }}</small>
                                  <small>15:33</small>
                                </p>
                                <p class="wallet-address text-dark">
                                  {{ transaction.transactionId }}
                                </p>
                              </div>
                              <div class="text-right">
                                <h4>{{ transaction.btcAmount }} BTC</h4>
                              </div>
                            </li>
                          </div>
                        </ul>
                      </div></b-card-text
                    ></b-tab
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
