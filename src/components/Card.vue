<template>
  <div class="card">
    <div class="mask">
      <button type="button">编辑</button>
      <button type="button">删除</button>
    </div>
    <div class="img-content">
      <img src="../assets/0-cover.jpg" alt="钢铁是怎样练成的">
    </div>
    <p class="title">{{book.title}}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card',
  props: ['book'],
};
</script>

<style scoped lang="scss">
.card {
  width: 200px;
  height: 340px;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0px 0px 12px rgba($color: #000000, $alpha: 0.128);
  &.card + .card{
    margin-left: 20px;
  }
  &:hover > .mask{
    display: flex;
  }
  > .mask{
    width: 200px;
    height: 340px;
    position: absolute;
    top: 0px;
    left: 0px;
    // display: flex;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #000000, $alpha: 0.3);
    > button {
      width: 60px;
      height: 40px;
      font-size: 16px;
      margin: 10px;
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
  > .img-content {
    font-size: 0px;
    > img {
      width: 180px;
      height: 260px;
    }
  }
  > p {
    margin: 0px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
