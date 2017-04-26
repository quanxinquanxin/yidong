<template>
  <div class="market_index">

    <div class="header">
      <button>
        <router-link to="Market_search"><span class="glyphicon glyphicon-search	"></span>搜索商品</router-link>
      </button>
    </div>
    <div class="aside_left">
      <nav>
        <ul>
          <li v-bind:class="{'bgc_whitesmoke': item['category_name'] == show_cate }" v-for="item of market_result"
              @click="cateFirst(item)">{{item["category_name"]}}
          </li>
        </ul>
      </nav>
    </div>
    <div class="market_content" v-show="item['category_name'] == show_cate " v-for="item of market_result">
      <div class="market_banner">
        <img v-bind:src="item['image_url']" alt="您的网络异常"/>
      </div>
      <menu>
        <ul>
          <li v-for="child of item['child_categories']">
            <dl>
              <dt>{{child["category_name"]}}</dt>
              <dd>
                <a v-for="grandchild of child['child_categories']" v-if="grandchild['category_name']">
                  <img v-if="grandchild['image_url']" v-bind:src="grandchild['image_url']" alt=""/>
                  <label>{{grandchild["category_name"]}}</label>
                </a>
              </dd>
            </dl>
          </li>
        </ul>
      </menu>
    </div>
  </div>
</template>

<script>
  import jquery from "jquery"
  export default {
    name: 'market_index',
    data: function () {
      return {
        msg: 'market_index',
        apiUrl: "../../../static/market_index.json",
        market_result: [],
        show_cate: "一键选酒",
      }
    },
    created: function () {
      this.$http.get(this.apiUrl)
        .then(function (res) {
          this.market_result = res["body"]["result"];
          console.log(this.market_result)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    methods: {
      toSearch: function () {
        console.log(1)
      },
      cateFirst: function (item) {
        this.show_cate = item["category_name"]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/Market_index.scss";
</style>
