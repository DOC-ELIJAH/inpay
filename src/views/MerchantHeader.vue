<template>
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
                <router-link :to="`/${user.firstName}`">
                    <h5>
                        {{ user.name }}
                    </h5>
                </router-link>
                <router-link>
                    <h6>
                        bridget_sonia@gmail.com
                    </h6>
                </router-link>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="profile-tab"  href="#profile" role="tab" aria-controls="profile" aria-selected="true">Merchant Profile</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-2" v-if="isOwner && isLoggedIn">
            <router-link to="/views/MerchantProfile"><input type="submit" class="btn btn-primary float-right" name="btnAddMore" value="Edit Merchant Profile"/></router-link>
        </div>
    </div>
</template>
<script>
module.exports ={
    props:['user']
}
</script>