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
                                <th>ID</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock Left</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    #31
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">Gray Sofa</h6>
                                    </div>
                                </td>
                                <td>Home Decoration</td>
                                <td>$912.00</td>
                                <td>20</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-success badge-dot m-r-10"></div>
                                        <div>In Stock</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <i class="anticon anticon-delete"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    #32
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">Beat Headphone</h6>
                                    </div>
                                </td>
                                <td>Eletronic</td>
                                <td>$137.00</td>
                                <td>56</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-success badge-dot m-r-10"></div>
                                        <div>In Stock</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <i class="anticon anticon-delete"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    #33
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">Wooden Rhino</h6>
                                    </div>
                                </td>
                                <td>Home Decoration</td>
                                <td>$912.00</td>
                                <td>12</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-success badge-dot m-r-10"></div>
                                        <div>In Stock</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <i class="anticon anticon-delete"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    #34
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">Red Chair</h6>
                                    </div>
                                </td>
                                <td>Home Decoration</td>
                                <td>$128.00</td>
                                <td>0</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-danger badge-dot m-r-10"></div>
                                        <div>Out of Stock</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <i class="anticon anticon-delete"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    #35
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">Wristband</h6>
                                    </div>
                                </td>
                                <td>Eletronic</td>
                                <td>$776.00</td>
                                <td>0</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-danger badge-dot m-r-10"></div>
                                        <div>Out of Stock</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <i class="anticon anticon-delete"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    #36
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">Charging Cable</h6>
                                    </div>
                                </td>
                                <td>Eletronic</td>
                                <td>$119.00</td>
                                <td>37</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-success badge-dot m-r-10"></div>
                                        <div>In Stock</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <i class="anticon anticon-delete"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    #37
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 class="m-b-0 m-l-10">Three Legs</h6>
                                    </div>
                                </td>
                                <td>Home Decoration</td>
                                <td>$199.00</td>
                                <td>17</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="badge badge-success badge-dot m-r-10"></div>
                                        <div>In Stock</div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right" onclick="location.href='./view-product.html';">
                                        <i class="anticon anticon-eye"></i>
                                    </button>
                                    <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                        <i class="anticon anticon-delete"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

            <div class="modal fade" id="create-new-project">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create New Product</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <i class="anticon anticon-close"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="new-project-name">Product Name</label>
                                <input type="text" class="form-control" id="new-project-name" placeholder="Please input product name">
                            </div>
                            <div class="form-group">
                                <label for="amount">Amount <span class="required">*</span></label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">&#8358;</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" required>
                                    <div class="input-group-append">
                                        <span class="input-group-text">.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="category">Category <span class="required">*</span></label>
                                <select class="custom-select" style="min-width: 180px;" required>
                                    <option selected>Select Category</option>
                                    <option value="homeDeco">Home Decoration</option>
                                    <option value="eletronic">Eletronic</option>
                                    <option value="jewellery">Jewellery</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="availability">Availability <span class="required">*</span></label>
                                <select class="custom-select" style="min-width: 180px;" required>
                                    <option selected>Select Availability</option>
                                    <option value="inStock">In Stock</option>
                                    <option value="outOfStock">Out Of Stock</option>
                                </select>
                            </div>
                            <div class="form-group ">
                            <label for="stockNo">Available Stock <span class="required">*</span></label>
                            <input type="text" class="form-control" id="stockNo" placeholder="Stock Available" onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" required>
                        </div> 
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Update Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
</template>