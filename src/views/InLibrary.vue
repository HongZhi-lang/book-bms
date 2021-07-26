<template>
  <div class="in-library">
    <Card 
      v-for="inLibrary in inLibrarys" 
      :key="inLibrary.id"
      :book="inLibrary">
    </Card>
  </div>

</template>

<script>
import Card from '@/components/Card.vue'; 

export default {
  props:['books'],
  data(){
    return {
      inLibrarys:[],
    }
  },
  created(){
    this.books.forEach(book => {
      if(book.status === 0){
        this.inLibrarys.push(book)
        console.log(this.inLibrarys);
      }
    })
  },
  // watch: {
  //   books(){
  //     this.books.forEach(book => {
  //       if(book.status === 0){
  //         this.inLibrarys.push(book)
  //         console.log(this.inLibrarys);
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
.in-library {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>