<template>
    <div>
        <div class="page-header">
                        <h2 class="header-title">Withdrawal</h2>
                        <div class="header-sub-title">
                            <nav class="breadcrumb breadcrumb-dash">
                                <a href="#" class="breadcrumb-item"><i class="anticon anticon-home m-r-5"></i>Home</a>
                                <span class="breadcrumb-item active">Withdrawal</span>
                            </nav>
                        </div>
                    </div>
                     <div class="card">
                        <div class="card-body w-bg">
                            <form action="" method="get" accept-charset="utf-8">
                                <div class="form-group">
                                    <div>
                                       <label for="reportType"> Mode of Withdrawal</label>
                                       <select class="custom-select" id="account" name="reportType" required>
                                           <option value="">Select Mode of Withdrawal</option>
                                           <option value="Self">Self</option>
                                           <option value="Another">Another Account</option>
                                       </select>
                                    </div>
                                </div>
                                <hr>
                                <div class="form-row" id="isSelf">
                                    <div class="form-group">
                                        <label for="amount">Amount</label>
                                        <input type="text" class="form-control" id="amount" name="amount">
                                    </div>
                                </div>

                                <div class="form-row" id="isAnother">
                                    <div class="form-group col-md-4">
                                        <label for="accountName">Account Name</label>
                                        <input type="text" class="form-control" id="accountName" name="accountName">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="accountNumber">Account Number</label>
                                        <input type="text" class="form-control" id="accountNumber" name="accountNumber">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="bank">Bank</label>
                                        <input type="text" class="form-control" id="bank" name="bank">
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary">Withdraw </button>
                                  
                            </form>
                        </div>
                    </div>
                    <hr>
                   
                    <div class="card">
                        <div class="card-body">
                                <div class="text-right float-right m-b-30">
                                    <button class="btn btn-primary" >
                                        <i class="anticon anticon-file-excel m-r-5"></i>
                                        <span>Export</span>
                                    </button>
                                </div>
                            <div class="table-responsive">
                                <table class="table table-hover " id="interaction">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div class="checkbox">
                                                    <input id="checkAll" type="checkbox">
                                                    <label for="checkAll" class="m-b-0"></label>
                                                </div>
                                            </th>
                                            <th>ID</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Account No</th>
                                            <th>Status</th>
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
                                            <td>#5331</td>
                                            <td>8 May 2019</td>
                                            <td>&#8358;20,560</td>
                                            <td>2209382242</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <span class="badge badge-success badge-dot m-r-10"></span>
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="checkbox">
                                                    <input id="check-item-1" type="checkbox">
                                                    <label for="check-item-1" class="m-b-0"></label>
                                                </div>
                                            </td>
                                            <td>#5332</td>
                                            <td>8 May 2021</td>
                                            <td>&#8358;233,560</td>
                                            <td>1109924424</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <span class="badge badge-danger badge-dot m-r-10"></span>
                                                    <span>Pending</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    </div>
</template>

