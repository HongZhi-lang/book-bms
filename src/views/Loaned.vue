<template>
  <div class="loaned">
    <Card 
      v-for="loaned of loaneds" 
      :key="loaned.id"
      :book="loaned">
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  props:['books'],
  data(){
    return {
      loaneds:[],
    }
  },
  created(){
    this.books.forEach(book => {
      if(book.status !== 0){
        this.loaneds.push(book)
      }
    })
  },
  // watch: {
  //   books(){
  //     this.books.forEach(book => {
  //       if(book.status !== 0){
  //         this.loaneds.push(book)
  //       }
  //     });
  //   }
  // },
  components: {
    Card
  }
}

</script>

<style>
.loaned {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>