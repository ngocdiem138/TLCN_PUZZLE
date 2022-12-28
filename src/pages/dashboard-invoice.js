import React, { useContext } from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";

import imgP1 from "../assets/image/table-one-profile-image-1.png";
import imgP2 from "../assets/image/table-one-profile-image-2.png";
import imgP3 from "../assets/image/table-one-profile-image-3.png";
import imgP4 from "../assets/image/table-one-profile-image-4.png";
import imgP5 from "../assets/image/table-one-profile-image-5.png";
import { useState } from "react";
import { useEffect } from "react";
import { EmployerServiceIml } from "../actions/admin-actions";
import { JobPostServiceIml, UserServiceIml } from "../actions/user-actions";
import CandidateProfile from "./candidate-profile-2";
import ModalApplication from "../components/ModalApplication";
import ReactJsAlert from "reactjs-alert";
import { logout } from "../actions/auth-actions";
import Paginate from "../helpers/Paginate";

const defaultJobs = [
    { value: 1, label: "Product Designer" },
    { value: 2, label: "Graphics Designer" },
    { value: 3, label: "Frontend Developer" },
    { value: 4, label: "Backend Developer" },
    { value: 5, label: "Content Writer" },
];
// const [listJob, setListJob] = useState([]);


const DashboardInvoices = () => {

    const [invoces, setInvoces] = useState([]);
    const [showError, setShowError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = invoces.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        console.log("pageNumber", pageNumber)
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(invoces.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        UserServiceIml.getInvoices().then((response) => {
            if (response.data.errCode == "403") {
                setShowError(true);
            } else {
                setInvoces(response.data.data);
            }
        });
    }, []);

    const redirect = () => {
        logout();
    }

    const listInvoice = currentPosts.map(invoce => {
        return <tr
            className="border border-color-2"
        >
            <th scope="row" className="pl-6 border-0 py-7 pr-0">
                <Link
                    className="media min-width-px-235 align-items-center"
                >
                    <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                        {invoce.email}
                    </h4>
                </Link>
            </th>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    {invoce.phone}
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-205 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    {invoce.serviceType}
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-semibold text-green mb-0">
                    {invoce.price}
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    {invoce.payTime}
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                    {invoce.paymentMethod}
                </h3>
            </td>
            <td className="table-y-middle py-7 min-width-px-170 pr-0">
                <h3 className="font-size-4 font-weight-semibold text-green mb-0">
                    {invoce.status}
                </h3>
            </td>
        </tr>
    });



    const [id, setId] = useState(0);

    const gContext = useContext(GlobalContext);

    return (
        <>
            <PageWrapper
                headerConfig={{
                    button: "profile",
                    isFluid: true,
                    bgClass: "bg-default",
                    reveal: false,
                }}
            >
                <div className="dashboard-main-container mt-25 mt-lg-31">
                    <div className="container">
                        <ReactJsAlert
                            type="info"   // success, warning, error, info
                            title="Session has expired"   // title you want to display
                            status={showError}  // true or false
                            button="OK"
                            color="#1d36ad"
                            quotes={true}
                            quote="Unfortunately your session has expired and you have been logged out. Please log in again"
                            Close={redirect}   // callback method for hide
                        />
                        <div className="mb-14">
                            <div className="row mb-11 align-items-center">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <h3 className="font-size-6 mb-0">Invoces List ({invoces ? invoces.length : 0})</h3>
                                </div>
                            </div>
                            <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="pl-0  border-0 font-size-4 font-weight-normal"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 font-size-4 font-weight-normal"
                                                >
                                                    Phone
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 font-size-4 font-weight-normal"
                                                >
                                                    Service Type
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 font-size-4 font-weight-normal"
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 font-size-4 font-weight-normal"
                                                >
                                                    PayTime
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 font-size-4 font-weight-normal"
                                                >
                                                    Payment Method
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 font-size-4 font-weight-normal"
                                                >
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listInvoice}
                                        </tbody>
                                    </table>
                                </div>
                                <Paginate
                                    postsPerPage={postsPerPage}
                                    totalPosts={invoces.length}
                                    paginate={paginate}
                                    previousPage={previousPage}
                                    nextPage={nextPage}
                                    selectedPage={currentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default DashboardInvoices;
