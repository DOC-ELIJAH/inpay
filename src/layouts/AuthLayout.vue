<template>
        <div class="app">
      <div
        class="container-fluid p-h-0 p-v-20 bg full-height d-flex backdrop"
      >
        <div class="d-flex flex-column justify-content-between w-100">
          <div class="container d-flex h-100">
            <div class="row align-items-center w-100">
              <div class="col-md-7 col-lg-5 m-h-auto">
                <div class="card shadow-lg">
                  <div class="card-body">
                    <div
                      class="d-flex align-items-center justify-content-between m-b-30"
                    >
                      <img
                        class="img-fluid"
                        alt=""
                        src="@/assets/images/logo/INPAY.png"
                        width="20%"
                      />
                      <h2 class="m-b-0">{{ name }}</h2>
                    </div>
                    <router-view></router-view>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-flex p-h-40 justify-content-between">
            <span class="">© 2020 INPAY</span>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a class="text-dark text-link" href="">Legal</a>
              </li>
              <li class="list-inline-item">
                <a class="text-dark text-link" href="">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
 module.exports = {
        data(){
          return {
            // name: 'Sign Up'
          }
        }
    }
</script>