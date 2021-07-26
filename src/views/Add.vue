<template>
  <div class="add">
    <form action="api/book" method="pust" name="form" id="form" enctype="multipart/form-data">
      <label for="title">书名：</label>
      <input type="text" id="title" placeholder="请输入书籍名称">
      <label for="status">状态：</label>
      <select name="" id="status">
        <option selected value="0">在库</option>
        <option value="1">借出</option>
        <option value="2">逾期</option>
      </select>
      <label for="img">书籍封面</label>
      <input type="file">
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
(()=>{
  const el = document.querySelector('#status')
  console.log({el});
})()
export default {

}
</script>

<style>

</style>