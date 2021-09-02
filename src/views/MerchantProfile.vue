<template>
    <div class="main-content">
            <div class="card-body">
                <div v-if="errorMessage" class="alert alert-danger">
                    <ul>
                        <li v-for="err in errorMessage">
                            {{err.msg}}
                        </li>
                    </ul>
                </div>
                <div v-if="successMessage" class="alert alert-success">{{this.successMessage}}</div>
                <h4 style="text-align:center;">Merchant Details</h4>
                <div class="m-t-25">
                    <form @submit.prevent="merchantCreate">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="businessName">Business Name <span class="required-feilds">*</span></label>
                                <input type="text" class="form-control" v-model="business_name" id="businessName" placeholder="Business Name">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="fullAddress">Full Address <span class="required-feilds">*</span></label>
                                <input type="text" class="form-control" v-model="full_address" id="fullAddress" placeholder="Full Address">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="stateID">State ID <span class="required-feilds">*</span></label>
                                <select class="form-control" v-model="state_id" id="stateID">
                                    <option value="">Select State</option>
                                    <option v-for="state in states" :value="state.id" >{{state.state}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="city">City</label>
                                <input type="text" class="form-control" v-model="city" id="city" placeholder="City">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="language">Language</label>
                                <select v-model="language" id="language" class="custom-select" style="min-width: 180px;" required>
                                    <option selected>Select Language</option>
                                    <option value="yoruba">Yoruba</option>
                                    <option value="igbo">Igbo</option>
                                    <option value="hausa">Hausa</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="dateOfBirth">Date of Birth</label>
                                <input type="date" class="form-control" v-model="date_of_birth" id="date" placeholder="Date of Birth">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="bvnNumber">Bvn Number <span class="required-feilds">*</span></label>
                                <input type="text" class="form-control" v-model="bvn_number" id="bvnNumber" placeholder="BVN Number">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="ninNumber">Nin Number<span class="required-feilds">*</span></label>
                                <input type="text" class="form-control" v-model="nin_number" id="ninNumber" placeholder="Nin Number">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="accountName">Account Name<span class="required-feilds">*</span></label>
                                <input type="text" class="form-control" v-model="account_name" id="accountName" name="accountName" placeholder="Account Name">
                            </div>
                                <div class="form-group col-md-6">
                                <label for="bankID">Bank ID <span class="required-feilds">*</span></label>
                                <select class="form-control" v-model="bank_id" id="bandId">
                                    <option value="">Select Bank</option>
                                    <option v-for="bank in banks" :value="bank.id">{{bank.bank_name}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="accountType">Account Type</label>
                                <input type="text" class="form-control" v-model="account_type" id="accountType" name="accountType">
                            </div>
                                <div class="form-group col-md-6">
                                <label for="branch">Branch </label>
                                <input type="text" class="form-control" v-model="branch" id="branch" placeholder="Branch">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary float-right btn-profile">Update Merchant Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { validationMixin } from 'vuelidate';
    import { required } from 'vuelidate/lib/validators';
    import axios from 'axios';
    import { userProfile, editProfile } from '../services/MerchantServices.js';
    import { getBanks, getStates } from '../services/BaseServices.js';
    export default {
        props:['user'],
        mixins: [validationMixin],
        validations: {
            business_name: {
                required
            },
            full_address: {
                required
            },
            state_id: {
                required
            },
            date_of_birth: {
                required
            },
            bvn_number: {
                required
            },
            nin_number: {
                required
            },
            account_name: {
                required
            },
            bank_id: {
                required
            }
        },
        data(){
            return {
                states:"",
                banks:'',
                successMessage:'',
                errorMessage:'',
                business_name:this.user.business_name,
                full_address:this.user.full_address,
                state_id:'',
                bvn_number:this.user.bvn_number,
                nin_number:this.user.nin_number,
                city:this.user.city,
                language:this.user.language,
                date_of_birth:this.user.date_of_birth,
                account_name:this.user.accont_name,
                bank_id:'',
                account_type:this.user.account_type,
                branch:''
            }
        },
        //beforeRouteEnter (to, from, next) {
            //const token = localStorage.getItem('token')

            //return token ? next() : next('/auth/login')
        //},
        computed:{
            businessNameComputed(){
                return this.business_name
            },
            fullAddress(){
                return this.full_address
            },
            ninNumber(){
                return this.nin_number
            }
        },
       created(){
           userProfile()
           .then(res=>{
               if(res.statusCode!=200) return;
               this.business_name=res.message[0].merchant_info.business_name
                this.full_address=res.message[0].merchant_info.full_address
                this.date_of_birth=res.message[0].merchant_info.date_of_birth
                this.city=res.message[0].merchant_info.city
                this.language=res.message[0].merchant_info.language
                this.email=res.message[0].merchant_info.email
                this.phone=res.message[0].merchant_info.phone
                this.merchant_id=res.message[0].merchant_info.merchant_id
                this.nin_number=res.message[0].merchant_info.nin_number
                this.bvn_number=response.message[0].merchant_info.bvn_number
                this.fullname=response.message[0].merchant_info.fullname
           })
          this.getBaseData()
        },
        methods: {
            merchantCreate(){
                let btn=document.querySelector(".btn-profile");
                btn.innerHTML='<div class="spinner-border text-info"></div>'
                btn.setAttribute("disabled", true)

                let payload={
                    business_name: this.business_name,
                    full_address: this.full_address,
                    bvn_number: this.bvn_number,
                    nin_number: this.nin_number,
                    city: this.city,
                    language: this.language,
                    date_of_birth: this.date_of_birth,
                    account_name: this.account_name,
                    bank_id: this.bank_id,
                    account_type: this.account_type,
                    branch: this.branch,
                    state_id:this.state_id
                };
                //console.log(payload)
                // return;
                const result = editProfile(payload)
                .then(res=>{
                    if(res.statusCode!=201){
                        this.errorMessage=res.errors
                    }else{
                        this.successMessage="Profile updated successfully"
                        this.$router.push({path:'/merchant'});
                    }
                })
                btn.innerHTML='Update Merchant Profile'
                btn.removeAttribute("disabled", null)
            },

            getBaseData(){
                getStates()
                .then(res=>{
                    if(res.statusCode==900){
                        localStorage.removeItem("token")
                        this.$router.push("/auth/login");
                    }
                    this.states=res.message.data
                }).catch(err=>{
                    
                });
                getBanks()
                .then(res=>{
                    this.banks=res.message.data
                }).catch(err=>{

                });
            }
        },
    }
</script>
<style>
    .main-content{
        margin: 0px;
        padding: 0px;
    }
    .card-body{
        padding: 0px;
        margin: 0px;
    }
    
    
</style>
    