<<template>
    <div class="main-content">
        <h4>Product Details</h4>
        <div class="card">
            <div class="card-body">
                <div class="mb-3">
                    <div v-if="!submitted" >
                        <form @submit.prevent="saveProduct" enctype="multipart/form-data">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="productName">Product Name <span class="required-feilds">*</span></label>
                                    <input type="text" class="form-control" v-model="product.product_name" id="productName" placeholder="Product Name" required>
                                </div>
                                    <div class="form-group col-md-6">
                                    <label > Product Image</label>
                                    <div class="">
                                        <input type="file" multiple class="" id="productImg" name="productImg" accept="image/*" @change="filesChange($event.target.files); fileCount = $event.target.files.length">
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="costPrice">Cost Price <span class="required-feilds">*</span></label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">&#8358;</span>
                                        </div>
                                        <input type="text" v-model="product.cost_price" class="form-control" id="costPrice" aria-label="Amount (to the nearest dollar)" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" required>
                                        <div class="input-group-append">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="sellingPrice">Selling Price <span class="required-feilds">*</span></label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">&#8358;</span>
                                        </div>
                                        <input type="text" v-model="product.selling_price" class="form-control" id="sellingPrice" aria-label="Amount (to the nearest dollar)" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" required>
                                        <div class="input-group-append">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="category">Product Category <span class="required-feilds">*</span></label>
                                    <select class="custom-select" v-model="product.product_category" style="min-width: 180px;" required>
                                        <option selected>Select Category</option>
                                        <option value="Agriculture">Agriculture</option>
                                        <option value="Animals">Animals</option>
                                        <option value="Babies and Kids">Babies and Kids</option>
                                        <option value="Beauty World">Beauty World</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Equipments and Tools">Equipments and Tools</option>
                                        <option value="Fashion World">Fashion World</option>
                                        <option value="Foods and Pastries">Foods and Pastries</option>
                                        <option value="Health">Health</option>
                                        <option value="Home Accessories">Home Accessories</option>
                                        <option value="Phone and Tablet">Phone and Tablet</option>
                                        <option value="Property">Property</option>
                                        <option value="Services">Services</option>
                                        <option value="Vehicles">Vehicles</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="productDescription">Product Description <span class="required-feilds">*</span></label>
                                    <input type="text" class="form-control" v-model="product.product_description" id="productDescription" placeholder="Product Description" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="availability">Availability <span class="required-feilds">*</span></label>
                                    <select class="custom-select" v-model="product.availability" style="min-width: 180px;" required>
                                        <option selected>Select Availability</option>
                                        <option value="1">In Stock</option>
                                        <option value="0">Out Of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" @click="saveProduct" class="btn btn-primary float-right">Create Product</button>
                        </form>
                    </div>
                    <div v-else>
                        <h4>You submitted successfully!</h4>
                        <button class="btn btn-success" @click="newProduct">Add New Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { productCreate, productItem } from '../../services/ProductServices';
export default {
    data() {
        return {
            product: {
                product_name: "",
                product_description: "", 
                product_category: "",
                cost_price: "",
                selling_price: "",
                status: "",
                availability: "",
                productImages:[]
            },
            submitted: false
        };

    },
    methods: {
        saveProduct() {
            var fd=new FormData();
            fd.append('product_name', this.product.product_name)
            fd.append('product_description', this.product.product_description)
            fd.append('cost_price', this.product.cost_price)
            fd.append('selling_price', this.product.selling_price)
            fd.append('product_category', this.product.product_category)
            fd.append('availability', this.product.availability)
            
            //if(this.productImages.length>0){
                 //this.productImages.forEach(e=>{
                    //fd.append('product_image', e)
               // });
            //}
           
            
            productCreate(fd)
            .then(response=>{
                console.log(response)
            }).catch(error=>{

            })
            
        },
        //filesChange(files) {      
          
            //this.productImages=files
          
           //this.productImages.forEach(e=>{
                //console.log(e)
            //})
        //},
        
        newProduct() {
            this.submitted = false;
            this.product = {};
        }
    },
    
    
}
</script>