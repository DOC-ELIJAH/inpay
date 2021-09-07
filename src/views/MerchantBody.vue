<template>
    
</template>

<script>
export default {
    
}
</script>
<template>
    <div class="row">
        <div class="col-md-8">
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
                            <label>State ID</label>
                        </div>
                        <div class="col-md-6">
                            <p v-show="user.state_id">{{ user.state_id }}</p>
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
                    <div class="row">
                        <div class="col-md-6">
                            <label>Account Name</label>
                        </div>
                        <div class="col-md-6">
                            <p v-show="user.account_name">{{ user.account_name }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Bank ID</label>
                        </div>
                        <div class="col-md-6">
                            <p v-show="user.bank_id">{{ user.bank_id }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Account Type</label>
                        </div>
                        <div class="col-md-6">
                            <p v-show="user.account_type">{{ user.account_type }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Branch</label>
                        </div>
                        <div class="col-md-6">
                            <p v-show="user.branch">{{ user.branch }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>