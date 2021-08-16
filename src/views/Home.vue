<template>
<div>
    
      <div class="d-flex justify-content-center pt-5">
        
           <h3>WELCOME TO INPAY</h3>
        
       
        <a class="btn btn-info btn-lg" href="/auth/login"> Login </a>
        <a class="btn btn-warning btn-lg" href="/auth/signup"> Sighup </a>
      </div>
</div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
