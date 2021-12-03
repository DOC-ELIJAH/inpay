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
                        <button class="btn btn-primary" onclick="location.href='./create-product.html';">
                            <i class="anticon anticon-plus-circle m-r-5"></i>
                            <span>Add Product</span>
                        </button>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover e-commerce-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Product Description</th>
                                <th>Cost Price</th>
                                <th>Selling Price</th>
                                <th>Stock Left</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prod in product">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">{{ prod.product_name}}</h6>
                                    </div>
                                </td>
                                <td>{{ prod.product_category }}</td>
                                <td>{{ prod.product_description }}</td>
                                <td>{{ prod.cost_price }}</td>
                                <td>{{ prod.selling_price }}</td>
                                <td>{{ prod.availability }}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-success badge-dot m-r-10"></div>
                                        <div>{{ prod.status }}</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded" @click="removeAllProducts">
                                        <i class="anticon anticon-delete"></i>
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
    import { productList, productDelete } from '../../services/ProductServices';
    export default {
        data(){
            return {
                product: []
            }
        },
        methods: {
            retrieveProducts() {
                productList()
                .then(response=>{
                    this.product = response.data;
                })
                .catch(e=>{
                });
            },
            refreshList() {
                this.retrieveProducts();
            },
            removeAllProducts() {
                productDelete()
                .then(response=> {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e=>{
                });
            }
        },
        mounted() {
            this.retrieveProducts();
        },
    }
</script>