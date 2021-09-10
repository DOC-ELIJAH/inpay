<template>
    <div class="d-flex align-items-center justify-content-between m-b-30">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                        <router-link :to="`/${user.fullname}`">
                            <h5>
                                {{ user.fullname }}
                            </h5>
                        </router-link>
                        <div class="profile-email">
                            <h6>
                                {{ user.email }}
                            </h6>
                        </div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="profile-tab"  href="#profile" role="tab" aria-controls="profile" aria-selected="true">Merchant Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2" >
                    <router-link to="/merchant-profile"><input type="submit" class="btn btn-primary float-right" name="btnAddMore" value="Edit Merchant Profile"/></router-link>
                </div>
            </div>  
            <div class="row">
                <div class="col-md-4">
                    
                </div>
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="d-flex align-items-center justify-content-between m-b-30">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Business Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p v-show="user.business_name">{{ user.business_name }}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Full Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p v-show="user.full_address">{{ user.full_address }}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Date of Birth</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p v-show="user.date_of_birth">{{ user.date_of_birth }}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>BVN Number</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p v-show="user.bvn_number">{{ user.bvn_number }}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>NIN Number</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p v-show="user.nin_number">{{ user.nin_number }}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>City</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p v-show="user.city">{{ user.city }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>    
</template>
<script>
    import { validationMixin } from 'vuelidate';
    import { required } from 'vuelidate/lib/validators';
    import axios from 'axios';
    import { userProfile, editProfile } from '../services/MerchantServices.js';
    import { getBanks, getStates } from '../services/BaseServices.js';
    export default {
        props:['user']
       
    //    computed:{
    //        isOwner() {
    //            return this.user.id
    //        },
    //    }
       
    }
</script>
