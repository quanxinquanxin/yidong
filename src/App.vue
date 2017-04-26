<template>
  <div id="app">
  <div class="main_view">
    <router-view >

      </router-view>
  </div>
    <footer>
      <ul>
        <li>
          <router-link to="/Home">
            <dl>
              <dt>
                <span class="glyphicon glyphicon-home"></span>
              </dt>
              <dd>首页</dd>
            </dl>
          </router-link>
        </li>
        <li>
          <router-link to="/Market">
            <dl>
              <dt>
                <span class="glyphicon glyphicon-user"></span>
              </dt>
              <dd>分类</dd>
            </dl>
          </router-link>
        </li>
        <li>
          <router-link to="/Cart">
            <dl>
              <dt>
                <span class="glyphicon glyphicon-user"></span>
              </dt>
              <dd>购物车</dd>
            </dl>
          </router-link>
        </li>
        <li>
          <router-link to="/Mine">
            <dl>
              <dt>
                <span class="glyphicon glyphicon-user"></span>
              </dt>
              <dd>我的</dd>
            </dl>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

  window.onload = function () {
    setTimeout(function () {
      document.documentElement.style.fontSize = innerWidth / 10 + "px";
      window.onresize = function () {
        document.documentElement.style.fontSize = innerWidth / 10 + "px";
      };
    }, 10)
  };
</script>

<style lang="scss">
 body, html {
   width: 100%;
   height: 100%;
   overflow: hidden;
   font-family: "Microsoft YaHei", sans-serif;
   font-size: 0.5rem;
 }

 body, html, h1, h2, h4, h3, h5, h6, p, img, input, form, nav, menu,
 ul, ol, li, dl, dt, dd, table ,form ,input ,button {
   margin: 0;
   padding: 0;
 }

 li {
   list-style-type: none;
 }
  img{
    border:none;
  }
 a {
   text-decoration: none;
   outline:none;
 }
 a:hover{
  text-decoration:none;
 }
 input{
  outline:none;
 }
 #app{
  width:100%;
  height:100%;
  overflow:hidden;
  padding-bottom:1.4rem;
 }
 #app>.main_view{
  width:100%;height:100%;
  background:white;
  overflow:auto;
 }
 #app > footer {
   width: 100%;
   height: 1.4rem;
   position: fixed;
   bottom: 0;
   left: 0;
   overflow: hidden;
   z-index: +100;
   background-color: white;
   border-top: 1px solid lightgrey;
   ul {
     flex-wrap: nowrap;
     display: flex;
     justify-content: space-around;
     li {
       width: 25%;
       text-align: center;
       a {
         display: block;
         text-decoration: none;
         dl {
           height: 1.4rem;
           dt {
             span {
               color: black;
               font-size: 0.6rem;
               margin-top: 0.2rem;
             }
           }
           dd {
             font-size: 0.33rem;
             color: black;
           }
         }
       }
       .router-link-active span ,.router-link-active dd{
                   color:darkred;
        }
     }
   }
 }



</style>
