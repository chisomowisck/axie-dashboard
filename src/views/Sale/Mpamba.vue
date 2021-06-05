<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
         
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card">
              <div class="card-body">
            <div class="media">
                  <img
                    class="mr-3 rounded-circle mr-0 mr-sm-3"
                    src="../../assets/images/profile/2.png"
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div class="media-body">
                    <span>ccc</span>
                    <h4 class="mb-2">Chisomo Wisck</h4>
                    <p class="mb-1">
                      <span><i class="fa fa-phone mr-2 text-primary"></i></span>
                      +1 235 5547
                    </p>
                    <p class="mb-1">
                      <span
                        ><i class="fa fa-envelope mr-2 text-primary"></i
                      ></span>
                      hello@example.com
                    </p>
                  </div>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pop v-show="showVideo" :closeFuntion="closeFuntion" />
  </layout>
</template>

<script>
import Layout from "../../components/dashboard/Layout.vue";
import Pop from "../../components/dashboard/Pop.vue";

export default {
  props:['posts'],
  name: "Index",
  components: { 
    Layout,
    Pop,
  },
  
  data() {
    return {
      showVideo: false,
    };
  },
};
</script>
