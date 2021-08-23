<template>

    <sidebar-component></sidebar-component>
      <!-- Page Container START -->
            <div class="page-container">

                <!-- Content Wrapper START -->
                <div class="main-content">
                    <div class="page-header">
                        <h2 class="header-title">Orders List</h2>
                        <div class="header-sub-title">
                            <nav class="breadcrumb breadcrumb-dash">
                                <a href="#" class="breadcrumb-item"><i class="anticon anticon-home m-r-5"></i>Home</a>
                                <a class="breadcrumb-item" href="#">Order</a>
                                <span class="breadcrumb-item active">Orders List</span>
                            </nav>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="row m-b-30">
                                <div class="col-lg-8">
                                    <div class="d-md-flex">
                                        <div class="m-b-10">
                                            <select class="custom-select" style="min-width: 180px;">
                                                <option selected>Status</option>
                                                <option value="all">All</option>
                                                <option value="approved">Approved</option>
                                                <option value="pending">Pending</option>
                                                <option value="completed">Completed</option>
                                                <option value="rejected">Rejected</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 text-right">
                                    <button class="btn btn-primary">
                                        <i class="anticon anticon-file-excel m-r-5"></i>
                                        <span>Export</span>
                                    </button>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover e-commerce-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div class="checkbox">
                                                    <input id="checkAll" type="checkbox">
                                                    <label for="checkAll" class="m-b-0"></label>
                                                </div>
                                            </th>
                                            <th>ID</th>
                                            <th>Customer</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-1" type="checkbox">
                                                    <label for="check-item-1" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5331
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Erin Gonzales</h6>
                                                </div>
                                            </td>
                                            <td>8 May 2019</td>
                                            <td>&#8358;137.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="./cancelled-orders.html">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-2" type="checkbox">
                                                    <label for="check-item-2" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5375
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Darryl Day</h6>
                                                </div>
                                            </td>
                                            <td>6 May 2019</td>
                                            <td>&#8358;322.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                        <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-3" type="checkbox">
                                                    <label for="check-item-3" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5362
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Marshall Nichols</h6>
                                                </div>
                                            </td>
                                            <td>1 May 2019</td>
                                            <td>&#8358;543.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-4" type="checkbox">
                                                    <label for="check-item-4" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5365
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Virgil Gonzales</h6>
                                                </div>
                                            </td>
                                            <td>28 April 2019</td>
                                            <td>&#8358;876.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-primary badge-dot m-r-10"></div>
                                                    <div>Pending</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-5" type="checkbox">
                                                    <label for="check-item-5" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5213
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Nicole Wyne</h6>
                                                </div>
                                            </td>
                                            <td>28 April 2019</td>
                                            <td>&#8358;241.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-6" type="checkbox">
                                                    <label for="check-item-6" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5311
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Riley Newman</h6>
                                                </div>
                                            </td>
                                            <td>19 April 2019</td>
                                            <td>&#8358;872.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-danger badge-dot m-r-10"></div>
                                                    <div>Rejected</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-7" type="checkbox">
                                                    <label for="check-item-7" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5387
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Pamela Wanda</h6>
                                                </div>
                                            </td>
                                            <td>18 April 2019</td>
                                            <td>&#8358;728.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                           <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-8" type="checkbox">
                                                    <label for="check-item-8" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5390
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Emily Shaw</h6>
                                                </div>
                                            </td>
                                            <td>16 April 2019</td>
                                            <td>&#8358;802.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-primary badge-dot m-r-10"></div>
                                                    <div>Pending</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-9" type="checkbox">
                                                    <label for="check-item-9" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5317
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Victor Terry</h6>
                                                </div>
                                            </td>
                                            <td>12 April 2019</td>
                                            <td>&#8358;569.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                           <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-10" type="checkbox">
                                                    <label for="check-item-10" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                #5291
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <h6 class="m-b-0">Wyatt Wallace</h6>
                                                </div>
                                            </td>
                                            <td>10 April 2019</td>
                                            <td>&#8358;132.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                           <td class="text-right">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown">
                                                        <span>Action</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="./invoice.html">
                                                            <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-eye"></i> 
                                                            </button>
                                                            View Invoice
                                                        </a>
                                                         <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-edit"></i> 
                                                            </button>
                                                            Change Status
                                                        </a>
                                                         <a class="dropdown-item" href="#">
                                                             <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                                <i class="anticon anticon-close"></i> 
                                                            </button>
                                                            Cancel Order
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Content Wrapper END -->

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

            <div class="modal fade" id="exampleModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Change Invoice Status</h5>
                            <button type="button" class="close" data-dismiss="modal">
                                <i class="anticon anticon-close"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <v-form action="#">
                                    <h5>Invoice No.: <p>#3882</p></h5>
                                    <h5>Customer Name: <p>Sanji</p></h5>
                                    <h5>Current Status: <p>Pending</p></h5>
                                    <hr>
                                    <div class="form-group">
                                        <label for="status">Status <span class="required-feilds">*</span></label>
                                        <select class="custom-select category" style="min-width: 180px;" id="status" required>
                                            <option selected value="">Select Status</option>
                                            <option value="pending">Pending</option>
                                            <option value="approved">Approved</option>
                                            <option value="completed">Completed</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                    </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <input type="submit" value="Change Status" class="btn btn-primary">
                                </div>
                            </v-form>
                    </div>
                </div>
            </div>
            </div>
            <!-- Page Container END -->

</template>

<script>
import SidebarComponent from './SidebarComponent.vue'
export default {
    components: {
        SidebarComponent

    }
}
</script>