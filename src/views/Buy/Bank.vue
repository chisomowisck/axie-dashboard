<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
           <b-card no-body>
    <b-tabs pills card>
      <b-tab title="National Bank" active><b-card-text>
        <div class="row">
          <div class="col-md-8">
            <div class="row">
                  <div class="col-md-6">
                    <span>Account Number</span>
                <h3>0.0230145 BTC</h3>
                  </div>
                  <div class="col-md-6">
                <span>Account Name</span>
                <h3>20,000 MWK</h3>
                  </div>
                </div>
                 <div class="row">
                  <div class="col-md-6">
                    <span>Account Type</span>
                <h3>0999534173</h3>
                  </div>
                  <div class="col-md-6">
                <span>Branch</span>
                <h3>Chisomo Wisck</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <span>Bank</span>
                <h3>National Bank</h3>
                  </div>
                  <div class="col-md-6">
                <span>Reference</span>
                <h3>Chisomo Wisck</h3>
                  </div>
                </div>
                 <div class="row">
                  <div class="col-md-6">
                    <span>Amount</span>
                <h3>23,0000.00</h3>
                  </div>
                
                </div>
                 <div class="btn">
                  <button @click="saleBTC" class="btn btn-success">Continue</button>
                </div>
          </div>
          <div class="col-md-4">
              <div
                  class="file-upload-wrapper"
                  v-bind:data-text="!filevalue ? 'Upload Proof' : filevalue"
                >
                  <input
                    name="fileValue"
                    type="file"
                    class="file-upload-field"
                  />
                </div>
          </div>
        </div>
        </b-card-text></b-tab>
      <b-tab title="Echo bank"><b-card-text>Tab contents 2</b-card-text></b-tab>
       <b-tab title="FCB"><b-card-text>Tab contents 2</b-card-text></b-tab>
    </b-tabs>
  </b-card>
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
      filevalue: "",

      bank: "FDH",
      accountNumber: "30001440589404",
      mwkAmount: '22000',
      ref: "Carol Doyle Testing buy 1btc",
      bitcoinAddress: '1DpgWgU4GGiYKNxgtjRzBEtNSykB3LV3Ls',
      proof: null,
    };
  },

   computed: {
    transactionList() {
      return this.transactions;
    },
  },

  mounted() {
     this.$axios
      .get("/users/me/transactions?type=momo-transfer-sell-bitcoin,wallet-transfer-bitcoin&limit=0", {
  headers: {
    'Authorization': 'Bearer '+this.access_token
  }
})
      .then((response) => (this.transactions = response.data.data));
  },

  methods: {
     fileChange(e) {
      this.filevalue = e.target.value;
    },
    saleBTC(){


     // alert('hhhh')
      const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer " + this.access_token,
}
       this.$axios.post('/wallet/bank-transfer-buy-bitcoin', {
          
            bank: this.bank,
            accountNumber: this.accountNumber,
            mwkAmount: this.mwkAmount,
            ref: this.ref,
            bitcoinAddress: this.bitcoinAddress,
            proof: this.filevalue,
        }, {
    headers: headers
  })
          .then(response => {
            console.log(response)
          
          })
          .catch(error => {
            console.log(error)
          })  
  }
  }
  }

</script>
