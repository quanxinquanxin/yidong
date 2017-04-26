<template>
  <div class="market_search">
    <div class="header">
      <router-link to="Market_index"><span></span></router-link>
      <input type="text" placeholder="搜索商品" id="mainSearch" v-on:input="input_search()" v-model="inputContent"/>
      <span v-on:click="show_nav()">···</span>

      <div class="nav_block" v-if="nav_flag">
        <router-link to="/Home"><p><span class="glyphicon glyphicon-home"></span>首页</p></router-link>
        <router-link to="/Market"><p><span class="glyphicon glyphicon-list-alt"></span>分类搜索</p></router-link>
        <router-link to="/Cart"><p><span class="glyphicon glyphicon-shopping-cart"></span>购物车</p></router-link>
        <router-link to="/Mine"><p><span class="glyphicon glyphicon-user"></span>我的</p></router-link>
      </div>
    </div>
    <div class="search_content">
      <div class="ready_made" v-show="!show_list">
        <h2><span class="glyphicon glyphicon-fire	"></span>热门搜索</h2>
        <router-link to="Market_result"><span>金玫瑰庄园干红葡萄酒</span></router-link>
        <router-link to="Market_result"><span>奔富</span></router-link>
        <router-link to="Market_result"><span>泽巴赫</span></router-link>
        <router-link to="Market_result"><span>白马庄园</span></router-link>
        <router-link to="Market_result"><span>安迪斯砖石</span></router-link>
      </div>
      <nav v-show="show_list">
        <ul class="assist">
          <li v-for="item of search_preset_list">
            <router-link to="Market_result"><span>{{item["chinese"]}}</span></router-link>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
  import jquery from 'jquery'

  export default {
    name: 'market_search',
    data: function () {
      return {
        msg: 'market_search',
        show_list: false,
        nav_flag: false,
        inputContent: "",
        search_preset_list: [],
      }
    }, methods: {
      input_search: function () {

        this.show_list = true;
        console.log("点击还是输入??")
        console.log(this.inputContent)
      },
      show_nav: function () {
        this.nav_flag = !this.nav_flag;
      }
    },
    mounted: function () {
      var _this = this;
      jquery("#mainSearch").on({
        "focus": function (e) {
          jquery(".assist").slideDown(1000);
          e.preventDefault();
        }, "keyup": function (e) {
          var val = $(this).val();
          var jsScriptSrc = "http://so.wangjiu.com/product/productfacet/?&pagecount=5&result_type=jsonp&keyword="
            + val + "&client_sig=wap&format=jsonp&_=" + new Date().getTime();
          $.ajax({
            url: jsScriptSrc,
            // jsonp类型下的请求,只能是GET
            type: 'GET',
            data: {},
            // 指定为jsonp类型
            dataType: 'jsonp',
            // 服务器端获取回调函数名的key,callback是默认值.
            jsonp: 'callback',
            //回调函数名
            jsonCallback: 'jQuery21404599908823238783_1493167211540',
            client_sig: "wap",
            success: function (data) {
              _this.search_preset_list = [];
              if (data["result"].length) {
                _this.search_preset_list = data["result"].slice(0, 50);
              } else {
                _this.search_preset_list = [];
              }
            },
            error: function (msg) {
              console.log('fail');
            }
          })
        }
      });
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/Market_search.scss";
</style>
