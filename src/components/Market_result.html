<template>
  <div class="market_result">
    <div class="header">
      <router-link to="Market_index"><span></span></router-link>
      <input type="text" placeholder="搜索商品" v-on:click="to_searchPage()"/>
      <span v-on:click="show_nav()">···</span>

      <div class="nav_block" v-if="nav_flag">
        <router-link to="/Home"><p><span class="glyphicon glyphicon-home"></span>首页</p></router-link>
        <router-link to="/Market"><p><span class="glyphicon glyphicon-list-alt"></span>分类搜索</p></router-link>
        <router-link to="/Cart"><p><span class="glyphicon glyphicon-shopping-cart"></span>购物车</p></router-link>
        <router-link to="/Mine"><p><span class="glyphicon glyphicon-user"></span>我的</p></router-link>
      </div>
    </div>
    <div class="result_content">
      <nav>
        <ul>
          <li>综合</li>
          <li>销量</li>
          <li>价格</li>
          <li>评论</li>
          <li><span class="glyphicon glyphicon-th-large"></span></li>
        </ul>
      </nav>
      <menu>
        <ul>
          <li v-for="item of market_result">
            <a href="" class="clear">
              <img v-bind:src="item['img_url']" alt=""/>

              <div><h3><span v-if="item['help_self']">自营</span>{{item["category_name"]}}</h3>

                <p v-show="item['eng_name']">{{item['eng_name']}}</p><span>{{item['price']}}</span>
              </div>
            </a>
          </li>
        </ul>
      </menu>
    </div>
  </div>
</template>
<script>
  import jquery from "jquery"
  console.log(jquery)
  var that = this;

  export default {
    name: 'market_result',
    data: function () {
      return {
        msg: 'market_result',
        show_list: false,
        nav_flag: false,
        inputContent: "",
        market_result: [],
        apiUrl: "../../../static/market_result.json",
      }
    }, created: function () {
      var _this = this;
      this.$http.get(this.apiUrl)
        .then(function (res) {
//          this.market_result = res["body"];
          jquery.get('http://www.beautifulmelody.top/market.php?uname=&pwd=&type=%E6%89%80%E6%9C%89', function (data) {
            that.arr = JSON.parse(data).data;
            console.log(that.arr)
            console.log( this)
            _this.market_result = that.arr;
            console.log(res["body"])
          })
        })
        .catch(function (err) {
          console.log(err)
        })
    }, methods: {
      to_searchPage: function () {
        this.$router.push({path: "/Market/Market_search"})
      },
      show_nav: function () {
        this.nav_flag = !this.nav_flag;
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/Market_result.scss";
</style>
