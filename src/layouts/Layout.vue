<template>
  <div class="default-layout">
    <header>
      <span class="title">图书借阅管理系统</span>
      <div class="user">
        <span>管理员</span>
      </div>
    </header>
    <main>
      <div class="search">
        <input type="text" placeholder="请输入书名">
        <button type="button">搜索</button>
      </div>
      <div class="container">
        <aside>
          <ul>
            <li>
              <router-link to="/">在库</router-link>
            </li>
            <li>
              <router-link to="/loaned">借出</router-link>
            </li>
            <li>
              <router-link to="/add">添加</router-link>
            </li>
          </ul>
        </aside>
        <div class="main-content">
          <router-view :books="books"></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data(){
    return {
      books:[]
    }
  },
  created(){
    this.ajax()
    console.log(this.books);
  },
  methods: {
    ajax(){
      const http = new XMLHttpRequest();
      http.onreadystatechange = () => {
        if (http.readyState === XMLHttpRequest.DONE) {
          if(http.status === 200){
            this.books = JSON.parse(http.responseText);
          }
        } else {
          console.log('请求有问题');
        }
      };
      http.open('GET', 'api/books');
      http.send();
    }
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    > header {
      flex: 0 0 auto;
      height: 48px;
      padding: 0px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      background-color: lightgray;

      top: 0px;
      position: sticky;
      > .title {
        font-size: 20px;
        font-family: "微软雅黑";
        letter-spacing: 10px;
      }
      > .user {
        position: absolute;
        right: 50px;
      }
    }
    > main {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      > .search {
        height: 50px;
        margin: 20px;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        box-shadow: 0px 0px 12px rgba($color: #000000, $alpha: 0.128);
        > input {
          width: 200px;
          height: 30px;
          margin-left: 30px;
          padding: 0px;
          outline: 0px;
          border-style: none;
          border-radius: 4px;
          border: solid 1px #a9a9a9;
          box-sizing: border-box;
        }
        > button {
          width: 50px;
          height: 30px;
          margin-left: 10px;
          outline: none;
          border-radius: 4px;
          border: 1px solid #a9a9a9;
          box-sizing: border-box;
          background-color: #fff;
          &:active {
            background-color: #efefef;
          }
        }
      }
      > .container{
        // height: calc(100vh - 118px);
        flex: 1 1 auto;
        display: flex;
        > aside {
          flex: 0 0 auto;
          width: 250px;
          height: calc(100vh - 118px);
          top: 48px;
          position: sticky;
          padding: 20px;
          box-sizing: border-box;
          > ul {
            margin: 0px;
            padding: 20px 0px;
            box-sizing: border-box;
            overflow: hidden;
            list-style: none;
            height: 100%;
            border-radius: 4px;
            box-shadow: 0px 0px 12px rgba($color: #000000, $alpha: 0.128);
            > li {
              display: block;
              > a {
                color: inherit;
                height: 32px;
                padding: 0px 16px;
                display: flex;
                align-items: center;
                text-decoration: none;
                
                &:hover {
                  background-color: rgba($color: #000000, $alpha: 0.128);
                }
                &.router-link-exact-active {
                  color: #17B9C4;
                  background-color: rgba($color: #17B9C4, $alpha: 0.128);
                }
              }
            }
          }
        }
        > .main-content {
          flex: 1 1 auto;
          margin: 20px;
          padding: 20px;
          box-shadow: 0px 0px 12px rgba($color: #000000, $alpha: 0.128);

        }
      }
    }
  }
</style>