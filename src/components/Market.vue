<template>
  <div class="market">
    <div>
      <router-view >

      </router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'market',
    data: function () {
      return {
        msg: 'market'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .market{
    width:100%;
    padding-top:1.15rem;
    height:100%;
    overflow:hidden;
    &>div{
      width:100%;
      height:100%;
      overflow:auto;
    }
  }
</style>
