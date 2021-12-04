<template>
    <div class="main-content">
        <div class="page-header">
            <h2 class="header-title">Product</h2>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label class="font-weight-semibold" for="productName">Product Name</label>
                    <input type="text" class="form-control" v-model="currentProduct.product_name" id="productName" placeholder="Product Name" value="Skinny Men Blazer">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="productName">Product Description</label>
                    <input type="text" class="form-control" v-model="currentProduct.product_description" id="productDescription" placeholder="Product Description" value="Skinny Men Blazer">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="productCategory">Product Category</label>
                    <select class="custom-select" v-model="currentProduct.product_category" id="productCategory">
                        <option value="cloths" selected>Cloths</option>
                        <option value="homeDecoration">Home Decoration</option>
                        <option value="eletronic">Eletronic</option>
                        <option value="jewellery">Jewellery</option>
                        <option value="agriculture">Agriculture</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="costPrice">Cost Price</label>
                    <input type="text" class="form-control" v-model="currentProduct.cost_price" id="costPrice" placeholder="Price" value="$ 199">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="sellingPrice">Selling Price</label>
                    <input type="text" class="form-control" v-model="currentProduct.selling_price" id="sellingPrice" placeholder="Selling Price" value="$ 199">
                </div>
                <div class="form-group">
                    <label class="font-weight-semibold" for="Availability">Availability</label>
                    <input type="text" class="form-control" v-model="currentProduct.availability" id="availability" placeholder="Availability" value="H&M">
                </div>
                <div class="form-group">
                    <label><strong>Status:</strong></label>
                    {{currentProduct.published ? "Published": "Pending"}}
                </div>
                <div class="m-b-15">
                    <button class="btn btn-primary"
                        v-if="currentProduct.published"
                        @click="updatePublished(false)"
                    >
                        <i class="anticon anticon-save"></i>
                        <span>Unpublish</span>
                    </button>
                    <button v-else class="btn btn-primary"
                        @click="updatePublished(true)"
                    >
                        <i class="anticon anticon-save"></i>
                        <span>Publish</span>
                    </button>
                    <button class="badge badge-success"
                        @click="updateProduct"
                    >
                        <i class="anticon anticon-submit"></i>
                        <span>Update</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { productItem, productUpdate } from '../../services/ProductServices';
    export default {
        data() {
            return {
               currentProduct: null,
               message: '',
            }
        },
        methods: {
            getProduct(id) {
                productItem(id)
                .then(res=>{
                    this.currentProduct = res.data;
                })
                .catch(err=>{
                    console.log(err);
                })
                
            },
            updatePublished(status) {
                let data = {
                    id: this.currentProduct.id,
                    product_name: this.currentProduct.product_name,
                    product_description: this.currentProduct.product_description, 
                    product_category: this.currentProduct.product_category,
                    cost_price: this.currentProduct.cost_price,
                    selling_price: this.currentProduct.selling_price,
                    availability: this.currentProduct.availability,
                    published: status
                };
                productUpdate(this.currentProduct.id, data)
                .then(res=>{
                    this.currentProduct.published = status;  
                })
                .catch(e=>{
                    console.log(e);
                })
            },
            updateProduct() {
                productUpdate(this.currentProduct.id, this.currentProduct)
                .then(res=>{
                    this.message = 'This product has successfully been updated';
                })
                .catch(e=>{
                    console.log(e);
                })
            }
    
            
        },
        mounted() {
            this.message = '';
            this.getProduct(this.$route.params.id);
        },
    }

</script>