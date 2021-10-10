<<template>
   <div class="page-container">     
        <!-- Content Wrapper START -->
        <div class="main-content">
            <div class="card">
                <div class="card-body">
                    <h4>Product Details</h4>
                    <div class="m-t-25">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="productName">Product Name <span class="required-feilds">*</span></label>
                                    <input type="text" class="form-control" id="productName" placeholder="Product Name" required>
                                </div>
                                    <div class="form-group col-md-6">
                                    <label > Product Image</label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="productImg" name="productImg" accept="image/*">
                                        <label  class="custom-file-label" for="img">Select Product Image </label>
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
                                        <input type="text" class="form-control" id="costPrice" aria-label="Amount (to the nearest dollar)" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" required>
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
                                        <input type="text" class="form-control" id="sellingPrice" aria-label="Amount (to the nearest dollar)" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" required>
                                        <div class="input-group-append">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="category">Category <span class="required-feilds">*</span></label>
                                    <select class="custom-select" style="min-width: 180px;" required>
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
                                    <label for="availability">Availability <span class="required-feilds">*</span></label>
                                    <select class="custom-select" style="min-width: 180px;" required>
                                        <option selected>Select Availability</option>
                                        <option value="inStock">In Stock</option>
                                        <option value="outOfStock">Out Of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group ">
                                <label for="stockNo">Available Stock <span class="required-feilds">*</span></label>
                                <input type="text" class="form-control" id="stockNo" placeholder="Stock Available" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" required>
                            </div> 
                            <button type="submit" class="btn btn-primary float-right">Create Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer START -->
        <footer class="footer">
            <div class="footer-content">
                <p class="m-b-0">Copyright © 2019 Theme_Nate. All rights reserved.</p>
                <span>
                    <a href="" class="text-gray m-r-15">Term &amp; Conditions</a>
                    <a href="" class="text-gray">Privacy &amp; Policy</a>
                </span>
            </div>
        </footer>
        <!-- Footer END -->

    </div>
</template>