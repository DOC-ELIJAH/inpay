<template>
    <div class="main-content">
        <div class="page-header">
            <h2 class="header-title">Product List</h2>
            <div class="header-sub-title">
                <nav class="breadcrumb breadcrumb-dash">
                    <a href="#" class="breadcrumb-item"><i class="anticon anticon-home m-r-5"></i>Home</a>
                    <a class="breadcrumb-item" href="#">Products</a>
                    <span class="breadcrumb-item active">Product List</span>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="row m-b-30">
                    <div class="col-lg-8">
                        <div class="d-md-flex">
                            <div class="m-b-10 m-r-15">
                                <select class="custom-select" style="min-width: 180px;">
                                    <option selected>Catergory</option>
                                    <option value="all">All</option>
                                    <option value="homeDeco">Home Decoration</option>
                                    <option value="eletronic">Eletronic</option>
                                    <option value="jewellery">Jewellery</option>
                                </select>
                            </div>
                            <div class="m-b-10">
                                <select class="custom-select" style="min-width: 180px;">
                                    <option selected>Status</option>
                                    <option value="all">All</option>
                                    <option value="inStock">In Stock </option>
                                    <option value="outOfStock">Out of Stock</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 text-right">
                        <router-link to="/create-product">
                            <input type="submit" class="btn btn-primary float-right" name="btnAddMore" value="Add Product"/>
                        </router-link>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover e-commerce-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Product Description</th>
                                <th>Product Category</th>
                                <th>Cost Price</th>
                                <th>Selling Price</th>
                                <th>Stock Left</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prod in product" >
                                <td>{{ prod.Product.id }}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">{{ prod.Product.Name}}</h6>
                                    </div>
                                </td>
                                <td>{{ prod.Product.Description }}</td>
                                <td>{{ prod.Product.Category }}</td>
                                <td>{{ prod.Product.Cost_Price }}</td>
                                <td>{{ prod.Product.Selling_Price  }}</td>
                                <td>{{ prod.Product.Availability }}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-success badge-dot m-r-10"></div>
                                        <div>{{ prod.Product.status }}</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                        <button @click="navigate('product/'+prod.Product.id)">
                                        <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </button>
                                        </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { productList, productItem, productDelete } from '../../services/ProductServices';
    export default {
        data(){
            return {
                product: []
                
            }
        },
        methods: {
            retrieveProduct() {
                let data = 
                productList()
                .then(response=>{
                    this.product = response.data.response.records;
                    console.log(this.product);
                })
                .catch(e=>{
                });
            },
            navigate(path){
                this.$router.push({path : path})
            },
            removeAllProduct() {
                productDelete()
                .then(response=> {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e=>{
                });
            },
        },
        mounted() {
            this.retrieveProduct();
        },
    }
</script>