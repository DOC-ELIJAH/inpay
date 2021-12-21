<template>
    <div class="main-content">
        <div class="page-header">
            <h2 class="header-title">Product</h2>
        </div>
        <div class="card" v-if="currentProduct">
            <div class="card-body">
                <div class="form-group">
                    <label class="font-weight-semibold" for="productName">Product Name</label>
                    <input type="text" class="form-control" v-model="currentProduct.Product.Name" id="productName" placeholder="Product Name">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="productName">Product Description</label>
                    <input type="text" class="form-control" v-model="currentProduct.Product.Description" id="productDescription" placeholder="Product Description">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="productCategory">Product Category</label>
                    <input type="text" class="form-control" v-model="currentProduct.Product.Category" id="productCategory" placeholder="Product Description">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="costPrice">Cost Price</label>
                    <input type="text" class="form-control" v-model="currentProduct.Product.Cost_Price" id="costPrice" placeholder="Price">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="sellingPrice">Selling Price</label>
                    <input type="text" class="form-control" v-model="currentProduct.Product.Selling_Price" id="sellingPrice" placeholder="Selling Price" value="$ 199">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="Availability">Availability</label>
                    <select class="custom-select" v-model="currentProduct.Product.Availability" style="min-width: 180px;" required>
                        <option selected>Select Availability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div class="m-b-15">
                    <button class="btn btn-primary float-right"
                        @click="updateProduct"
                    >
                        <i class="anticon anticon-submit"></i>
                        <span>Update</span>
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <br/>
            <p>Please click on a product...</p>
        </div>
    </div>
</template>
<script>
    import { productItem, productUpdate } from '../../services/ProductServices';
    export default {
        data() {
            return {
               currentProduct: null,
            }
        },
        methods: {
            getProduct(id) {
                const result = productItem(id)
                .then(response=>{
                    this.currentProduct = response.data.message;
                })
                .catch(e=>{
                    console.log(e);
                })
            },
            updateProduct() {
                let data = {
                   // id: this.currentProduct.Product.id,
                    product_name: this.currentProduct.Product.Name,
                    product_description: this.currentProduct.Product.Description,
                    product_ategory: this.currentProduct.Product.Category,
                    cost_price: this.currentProduct.Product.Cost_Price,
                    selling_price: this.currentProduct.Product.Selling_Price,
                    availability: this.currentProduct.Product.Availability,
                };
                console.log(data)
                productUpdate(this.currentProduct.Product.id, data)
                .then(response =>{
                    console.log(response.data.message);
                    message = "Product update was successful"
                    this.$router.push({path:'/product-list'});
                })
            }
            
        },
        mounted() {
            this.message = '';
            this.getProduct(this.$route.params.id);
        },
    }

</script>