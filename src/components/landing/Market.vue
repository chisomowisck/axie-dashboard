<template>
  <div
    id="market"
    class="market section-padding page-section"
    data-scroll-index="1"
  >
    <div class="container">
      <div class="row py-lg-5 justify-content-center">
        <div class="col-xl-7">
          <div class="section_heading">
            <span>Who we are?</span>
            <h3>The World's Leading Khodo ocurrency Exchange</h3>
            <p>
              Trade Bitcoin, ETH, and hundreds of other Khodo ocurrencies in
              minutes.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
     
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Market",
  components: {  },
  data() {
    return {
      canvasData: [],
    };
  },
  mounted() {
    this.canvasData = document.querySelectorAll("#sparkLink canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "25px";
      element.style.width = "200px";
    }
    for (let i = 0; i < document.querySelectorAll("#sparkLink").length; i++) {
      const element = document.querySelectorAll("#sparkLink")[i];
      element.style.width = "200px";
    }
  },
  updated() {
    this.canvasData = document.querySelectorAll("#sparkLink canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "25px";
      element.style.width = "200px";
    }
    for (let i = 0; i < document.querySelectorAll("#sparkLink").length; i++) {
      const element = document.querySelectorAll("#sparkLink")[i];
      element.style.width = "200px";
    }
  },
};
</script>
