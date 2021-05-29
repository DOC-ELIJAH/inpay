<template>    
        <div>
        <a href="javascript:void(0)" class="float-right" @click="changeInput" >Login with {{inputType === 'email' ? 'Phone': 'Email'}}</a>
        <br>
        <hr>
        <form novalidate>
          <div class="form-group" v-if="inputType === 'email'">
            <label class="font-weight-semibold" for="userName"
              >Email: <span class="required-feilds">*</span></label
            >
            <div class="input-affix">
              <i class="prefix-icon anticon anticon-mail"></i>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          
          <div class="form-group" v-else>
            <label class="font-weight-semibold" for="phone"
              >Phone: <span class="required-feilds">*</span></label
            >
            <div class="input-affix">
              <i class="prefix-icon anticon anticon-phone"></i>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="+234 703 445 2342"
                required
              />
            </div>
          </div>

        

          <div class="form-group">
            <label class="font-weight-semibold" for="password"
              >Password: <span class="required-feilds">*</span></label
            >
            <a
              class="float-right font-size-13 text-muted"
              href="/forgot-password"
              >Forget Password?</a
            >
            <div class="input-affix m-b-10">
              <i class="prefix-icon anticon anticon-lock"></i>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div
              class="d-flex align-items-center justify-content-between"
            >
              <span class="font-size-13 text-muted">
                Don't have an account?
                <a class="small" href="/signup"> Signup</a>
              </span>
              <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
          </div>
        </form>
        </div>
</template>

<script>

    module.exports = {
        data(){
          return {
            inputType: 'email'
          }
        },
        methods: {
          changeInput(){
            if (this.inputType === 'email'){
                this.inputType = 'phone'
            }
            else this.inputType = 'email'
          }
        }
    }
</script>

