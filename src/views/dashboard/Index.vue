<template>
  <Layout :active="1" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header border-0">
                <h4 class="card-title">All Scholars</h4>
              </div>
              <div class="card-body pt-0">
                <div class="transaction-table">
                  <div class="table-responsive">
                    <table class="table mb-0 table-responsive-sm">
                      <tbody>
                        <tr v-for="scholar in scholarsList" v-bind:key="scholar.id">
                          <td>
                            <span class="sold-thumb"
                              ><i class="la la-arrow-down"></i
                            ></span>
                          </td>

                          <td>
                            <span class="badge badge-danger">Sold</span>
                          </td>
                          <td><i class="cc BTC"></i> BTC</td>
                          <td>Using - Bank *******5264</td>
                          <td class="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
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
  </Layout>
</template>

<script>
import Layout from "../../components/dashboard/Layout.vue";
export default {
  name: "Accounts",
  components: {
    Layout,
  },
  data() {
    return {
      scholars: [],
    };
  },
  computed: {
    scholarsList() {
      return this.scholars;
    },
  },
  mounted() {
   this.$axios.get('/api/scholars')
    .then(response => {
        this.scholars = response
      }).catch(err => {
        console.log(err)
      })
  },
  methods: {},
};
</script>
