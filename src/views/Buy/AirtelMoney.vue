<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-6 col-md-12">
            <div class="card acc_balance">
              <div class="card-header">
                <h4 class="card-title">Airtel Money</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                  <div class="row">
                  <div class="col-md-6">
                    <span>Selling</span>
                <h3>0.0230145 BTC</h3>
                  </div>
                  <div class="col-md-6">
                <span>For</span>
                <h3>20,000 MWK</h3>
                  </div>
                </div>
                 <div class="row">
                  <div class="col-md-6">
                    <span>Phone</span>
                <h3>0999534173</h3>
                  </div>
                  <div class="col-md-6">
                <span>Reference</span>
                <h3>Chisomo Wisck</h3>
                  </div>
                </div>
                 <div class="row">
                   
                  <div class="col-md-6">
                   <div class="form-group col-xl-12">
                     <br>
            
              </div>
                  </div>
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
                 
                <div class="btn">
                  <button class="btn btn-success">Continue</button>
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

export default {
  props:['posts'],
  name: "Index",
  components: { 
    Layout,
  },
  
  data() {
    return {
      showVideo: false,
      filevalue: "",
    };
  },
};
</script>
