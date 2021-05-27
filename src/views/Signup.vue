<template>
    <div class="app">
      <div
        class="container-fluid p-h-0 p-v-20 bg full-height d-flex backdrop"
      >
        <div class="d-flex flex-column justify-content-between w-100">
          <img
                        class="img-fluid align-self-center"
                        alt=""
                        src="@/assets/images/logo/INPAY.png"
                        width="10%"
                      />
          <div class="container d-flex h-100">
            <div class="row align-items-center w-100">
              <div class="col-md-7 col-lg-5 m-h-auto">
                <div class="card shadow-lg">
                  <div class="card-body">
                    <div
                      class="d-flex align-items-center justify-content-between m-b-30"
                    >
                      <h2 class="m-b-0">You are a step closer to creating an INPAY account.</h2>
                    </div>
                    <form action="" class="needs-validation" method="post" role="form" novalidate>

                      <div class="form-group">
                        <label class="font-weight-semibold" for="firstName">First Name <span class="required-feilds">*</span></label>
                        <input type="text" name="firstName" id="firstName" class="form-control" placeholder="First Name" required>
                      </div>

                      <div class="form-group">
                        <label class="font-weight-semibold" for="lastName">Last Name <span class="required-feilds">*</span></label>
                        <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Last Name" required>
                      </div>

                      <div class="form-group">
                        <label class="font-weight-semibold" for="tradeName">Trade Name <span class="required-feilds">*</span></label>
                        <div class="input-affix">
                           <i class="prefix-icon anticon anticon-bank"></i>
                           <input type="text" name="tradeName" id="tradeName" class="form-control" placeholder="Trade Name" required>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="font-weight-semibold" for="email"
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

                      <div class="form-group">
                        <label class="font-weight-semibold" for="phoneNumber">Phone Number <span class="required-feilds">*</span></label>
                        <div class="input-affix m-b-10">
                          <i class="prefix-icon anticon anticon-phone"></i>
                          <input type="tel" class="form-control" name="phoneNumber" id="phoneNumber" placeholder="08082821122" pattern="^[0]\d{8,10}$" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" maxlength="11" required>  
                        </div> 
                      </div>

                        <div class="form-group">
                            <label class="font-weight-semibold" for="password"
                              >Password: <span class="required-feilds">*</span></label
                            >
                            <div class="input-affix m-b-10">
                              <i class="prefix-icon anticon anticon-lock"></i>
                              <input
                                type="password"
                                class="form-control"
                                id="password"
                                placeholder="Password"
                                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                                required
                              />
                              <i toggle="#password" class="suffix-icon anticon anticon-eye toggle-password"></i>
                              <!-- <span class="invalid-feedback">Please enter at least one upper case.</span> -->
                            </div>
                              <div class="invalid-feedback">Please enter at least one upper case.</div>
                        </div>
                             
                      <button type="submit" class="btn btn-primary w-100 mb-3" >Create Account</button>

                      <span class="font-size-13 text-muted text-center d-block">
                        By clicking the “Create Account” button, you agree to INPAY's <a href="#" style="color: blue">terms of acceptable use</a>, <a href="#" style="color: blue">Merchant Agreement</a> and <a href="#" style="color: blue">Privacy Policy.</a>      
                      </span>
                    </form>
                  </div>
                </div>
                <span class="font-size-13 text-muted d-block text-center">
                      Already have an account?
                      <a class="blue" href="/login"> Login </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>