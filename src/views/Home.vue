<template>
  <hello-world></hello-world>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    created(){
      let token=localStorage.getItem('token');
      if(token){
          this.$router.push({path:'/dashboard'});
      }
    },
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
