<template>
<div class="rounded mt-5 bg-white p-md-5" style="    background: transparent url(images/h01.gif) repeat center center;
">
    <div class="p-4">
        <div class="h2 font-weight-bold" style="color: #8691b4">Earnings Dashboard</div>
    </div>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <td>#</td>
                    <th scope="col">Ronin address</th>
                    <th scope="col">Nick Name</th>
                    <th scope="col">MMR</th>
                    <th scope="col">Total (SLP)</th>
                    <th scope="col">Claimable</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-primary" v-for="(scholar, index) in scholarsList.data" v-bind:key="scholar.id">
                   <td class="pt-2">{{index+1}}</td>
                   <td class="pt-2 text-info"><a class="text-info" v-bind:href="'https://marketplace.axieinfinity.com/profile/ronin:'+ scholar.ronin_address + '/axie/'" target="_blank">{{scholar.ronin_short}}</a> <a class="text-info" v-bind:href="'https://explorer.roninchain.com/address/'+ scholar.ronin_address" target="_blank"><i class="mdi mdi-open-in-new "></i></a></td>
                    <td class="pt-2">
                       {{scholar.scholar_name}}
                    </td>
                    <td class="pt-3 text-success">{{scholar.mmr}}</td>
                    <td class="pt-3">{{scholar.total_slp}}</td>
                    <td class="pt-3" style="color: #007d23">In {{scholar.remaining_days}} day(s)</td>
                </tr>
       
            </tbody>
        </table>
    </div>
</div>
</template>
<script>

export default {
  name: "Accounts",

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
<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Poppins:wght@600&display=swap');


thead {
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    color: #666
}

img {
    width: 40px;
    height: 40px
}

.name {
    display: inline-block
}

.bg-blue {
    background-color: #032031 !important;
    border-radius: 8px
}

.fa-check,
.fa-minus {
    color: blue
}

.bg-blue:hover {
    background-color: #3e64ff;
    color: #0254a6;
    cursor: pointer
}

.bg-blue:hover .fa-check,
.bg-blue:hover .fa-minus {
    background-color: #3e64ff;
    color: #0254a6
}

.table thead th,
.table td {
    border: none
}

.table tbody td:first-child {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px
}

.table tr td, .table tr th {
    background: #0f1422;
    border: 0px;
    vertical-align: middle;
}

.table tbody td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px
}

#spacing-row {
    height: 10px
}

@media(max-width:575px) {
    .container {
        width: 125%;
        padding: 20px 10px
    }
}
</style>