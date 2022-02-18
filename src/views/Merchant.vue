<template>
    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="" alt=""/>
                        <!-- <input type="file" name="file" class="file"> -->
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
                <div class="col-md-6">
                    <div class="profile-work">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Business Name:</label>
                            </div>
                            <div class="col-md-6">
                                <p v-show="user.business_name">{{ user.business_name }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Date of Birth:</label>
                            </div>
                            <div class="col-md-6">
                                <p v-show="user.date_of_birth">{{ user.date_of_birth }}</p>
                            </div>
                        </div>
                        <!--
                        <div class="row">
                            <div class="col-md-6">
                                <label>NIN Number:</label>
                            </div>
                            <div class="col-md-6">
                                <p v-show="user.nin_number">{{ user.nin_number }}</p>
                            </div>
                        </div>
                        -->
                        <div class="row">
                            <div class="col-md-6">
                                <label>Bank Name:</label>
                            </div>
                            <div class="col-md-6">
                                <p v-show="user.bank_name">{{ user.bank_name }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Account Number:</label>
                            </div>
                            <div class="col-md-6">
                                <p v-show="user.account_number">{{ user.account_number }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>State ID:</label>
                            </div>
                            <div class="col-md-6">
                                <p v-show="user.state">{{ user.state }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="d-flex align-items-center justify-content-between m-b-30">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Full Address:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p v-show="user.full_address">{{ user.full_address }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>City:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p v-show="user.city">{{ user.city }}</p>
                                        </div>
                                    </div>
                                    <!--
                                   <div class="row">
                                        <div class="col-md-6">
                                            <label>BVN Number:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p v-show="user.bvn_number">{{ user.bvn_number }}</p>
                                        </div>
                                    </div>
                                    -->
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Language:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p v-show="user.language">{{ user.language }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Account Type:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p v-show="user.account_type">{{ user.account_type }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Account Name:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p v-show="user.account_name">{{ user.account_name }}</p>
                                        </div>
                                    </div>
                                    <!--
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Branch:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p v-show="user.branch">{{ user.branch }}</p>
                                        </div>
                                    </div>
                                    -->
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
    export default {
        props:['user']
       
    }
</script>
<style>
.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}

.profile-img{
    text-align: center;
}

.profile-img img{
    width: 70%;
    height: 100%;
}

.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}

.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}

.profile-head h5{
    color: #333;
}

.profile-head h6{
    color: #0062cc;
}

.profile-head .nav-tabs{
    margin-bottom:5%;
}

.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}

.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}

.profile-work{
    padding: 14%;
    margin-top: -15%;
}



.profile-work p{
    font-size: 12px;
    color: #0062cc;
    font-weight: 600;
    margin-top: 10%;
}

.profile-work label{
    font-weight: 600;
    padding: 14%;
    margin-top: -15%;
}

.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}

.profile-work ul{
    list-style: none;
}

.profile-tab label{
    font-weight: 600;
}

.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
</style>
