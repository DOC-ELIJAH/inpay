<template>
    <div class="side-nav">
        <div class="side-nav-inner">
            <ul class="side-nav-menu scrollable mx-auto">
                <!-- <li class="nav-item active">
                    <a class="active" href="dashboard">
                        <span class="icon-holder">
                            <i class="anticon anticon-dashboard"></i>
                        </span>
                        <span  >Dashboard</span>
                    </a>
                </li>
    <v-list-group
        :value="true"
        prepend-icon="anticon anticon-shopping-cart "
      >
        <template v-slot:activator>
          <v-list-item-title class="title">Transaction</v-list-item-title>
        </template>
         <v-list-item
            v-for="(title, i) in transaction"
            :key="i"
            :to="title.link"
            link
          >
            <v-list-item-title>{{title.text}}</v-list-item-title>
        </v-list-item>
    </v-list-group>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">
                            <i class="anticon anticon-shopping-cart"></i>
                        </span>
                        <span class="title">Transaction</span>
                        <span class="arrow">
                            <i class="arrow-icon"></i>
                        </span>
                    </a>
                        <ul class="dropdown-menu">
                        <li >
                            <a href="create-transaction">Create Transaction</a>
                        </li>
                        <li >
                            <a href="transactions">Transaction List</a>
                        </li>
                            <li >
                            <a href="cancelled-transactions">Cancelled Transactions</a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">
                            <i class="anticon anticon-appstore"></i>
                        </span>
                        <span class="title">Product</span>
                        <span class="arrow">
                            <i class="arrow-icon"></i>
                        </span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="create-product">Create Products</a>
                        </li>
                        <li>
                            <a href="product-list">Products List</a>
                        </li>
                    </ul>
                </li>
                    <li class="nav-item ">
                    <a href="withdraw">
                        <span class="icon-holder">
                            <i class="anticon anticon-bank"></i>
                        </span>
                        <span class="" >Withdraw</span>
                    </a>
                </li>
                <li class="nav-item ">
                    <a href="reports">
                        <span class="icon-holder">
                            <i class="anticon anticon-reconciliation"></i>
                        </span>
                        <span class="" >Reports</span>
                    </a>
                </li>
                <li class="nav-item ">
                    <a href="settings">
                        <span class="icon-holder">
                            <i class="anticon anticon-setting"></i>
                        </span>
                        <span class="" >Settings</span>
                    </a>
                </li>
                 -->

    <v-list>
        <v-list-item class="active" to="dashboard">
            <v-list-item-icon>
            <v-icon>anticon-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-group
            :value="true"
            prepend-icon="anticon anticon-shopping-cart "
            
            >
         <template v-slot:activator>
            <v-list-item-title >Transaction</v-list-item-title>
         </template>
            <v-list-item
                v-for="(title, i) in transaction"
                :key="i"
                :to="title.link"
                link
            >
                <v-list-item-title>{{title.text}}</v-list-item-title>
            </v-list-item>
        </v-list-group>
        
        <v-list-group
            :value="true"
            prepend-icon="anticon anticon-appstore"
            
            >
         <template v-slot:activator>
            <v-list-item-title >Products</v-list-item-title>
         </template>
            <v-list-item
                v-for="(title, i) in product"
                :key="i"
                :to="title.link"
                link
            >
                <v-list-item-title>{{title.text}}</v-list-item-title>
            </v-list-item>
        </v-list-group>

        <v-list-item class="active" to="withdraw">
            <v-list-item-icon>
            <v-icon>anticon-bank</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Withdraw</v-list-item-title>
        </v-list-item>
        <br>
        <v-list-item class="active">
                <div>
                    <button @click="logout" type="submit" class="btn btn-primary btnLogout"><a href="/auth/logout">Logout</a></button>
                </div>
        </v-list-item>
    </v-list>
            </ul>
        </div>
    

    </div>
</template>


<style scoped>
.btnLogout {
  padding:14px 40px;
  color: #ccc !important
}
</style>


<script>
module.exports = {
    data: () => ({
        show:false,
      transaction: [
        {
            text:'Create Transaction', 
            link:'/create-transaction',
        },
        {
            text:'Transaction', 
            link:'/transaction',
        },{
            text:'Cancelled Transaction', 
            link:'/cancelled-transaction',
        },
      ],
       product: [
        {
            text:'Create Product', 
            link:'/create-product',
        },
        {
            text:'Products', 
            link:'/products',
        }
      ]
    }),

    methods: {
        logout(){
            localStorage.removeItem('token');
            this.$router.push({path: '/auth/login'});
        }
    },

}
</script>

