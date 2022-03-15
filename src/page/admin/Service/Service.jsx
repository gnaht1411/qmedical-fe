import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import createToast from '../../../component/site/toast/toast';
import toastTypes from '../../../common/constants/toast/toastTypes';

const Service = () => {

    const [services, setServices] = useState([]);

    console.log("123")

    useEffect(() => {

        const getServices = async () => {
            try {
                const resServices = await axiosInstance.searchNoAuth("service/no-page")
                setServices(resServices.data)
            } catch (e) {
                createToast(toastTypes.ERROR, `Error !!!!`)
            }
        }
        getServices();
    }, []);


    return (
        <div>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Invoice Report</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Invoice Report</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="datatable table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Service Name</th>
                                                    <th>Price</th>
                                                    <th>Unit</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    services && services.map((service, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{service.id}</td>
                                                                <td>{service.name}</td>
                                                                <td>{service.price}</td>
                                                                <td>{service.unit}</td>
                                                                <td className="text-center">

                                                                </td>
                                                                <td className="text-right">
                                                                    <div className="actions">
                                                                        <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                                                            <i className="fe fe-pencil" /> Edit
                                                                        </a>
                                                                        <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                                            <i className="fe fe-trash" /> Delete
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
            {/* Edit Details Modal */}
            <div className="modal fade" id="edit_invoice_report" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Invoice Report</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row form-row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Invoice Number</label>
                                            <input type="text" className="form-control" defaultValue="#INV-0001" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Patient ID</label>
                                            <input type="text" className="form-control" defaultValue="	#PT002" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Patient Name</label>
                                            <input type="text" className="form-control" defaultValue="R Amer" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Patient Image</label>
                                            <input type="file" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Total Amount</label>
                                            <input type="text" className="form-control" defaultValue="$200.00" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Created Date</label>
                                            <input type="text" className="form-control" defaultValue="29th Oct 2019" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Edit Details Modal */}
            {/* Delete Modal */}
            <div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        {/*	<div class="modal-header">
							<h5 class="modal-title">Delete</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>*/}
                        <div className="modal-body">
                            <div className="form-content p-2">
                                <h4 className="modal-title">Delete</h4>
                                <p className="mb-4">Are you sure want to delete?</p>
                                <button type="button" className="btn btn-primary">Save </button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Delete Modal */}
        </div>
    );
}

export default Service;