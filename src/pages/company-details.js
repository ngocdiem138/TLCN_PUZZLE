import React, { useState, useEffect, useContext } from "react";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { useLocation } from "@reach/router";
import { parse } from "query-string";
import GlobalContext from "../context/GlobalContext";
import defaultCompanyImage from '../assets/image/wood-blog-placeholder.jpg'

import { EmployerServiceIml } from "../actions/admin-actions";

import { CompanyServiceIml, JobPostServiceIml } from "../actions/user-actions";

import axios from "axios";
import { API_BASE_URL, REDIRECT_BASE_URL } from "../utils/constants/url";
import { useTranslation } from 'react-i18next';
import { useToasts } from 'react-toast-notifications';
import { width } from "styled-system";

const CompanyDeatails = () => {
    const gContext = useContext(GlobalContext);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const searchParams = parse(location.search);
    const id = searchParams.id;
    const [companyDetail, setCompanyDetail] = useState("");
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        CompanyServiceIml.getCompanyById(id).then((response) => {
            setCompanyDetail(response.data.data);
        })
        JobPostServiceIml.getJobByFilterParamsSearch({ "companyIds": [id] }).then((response) => {
            setJobs(response.data.data);
        })
    }, [id])


    const [error, setError] = useState("");
    const [success, setSucces] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = jobs.slice(0, indexOfLastPost);

    const saveForJob = (id) => {
        if (!isAuthenticated) {
            setError("You must login to save for jobs");
        } else {
            axios
                .get(
                    API_BASE_URL + "/candidate/save-job-post/" + id,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token"),
                        },
                    }
                )
                .then((response) => {
                    if (response.data.status == 200) {
                        //show success message
                        setSucces("Successfuly saved for job");
                        setError("")
                    } else if (response.data.errMsg) {
                        setError(response.data.errMsg)
                        setSucces("")
                    } else {
                        setSucces("");
                        setError("Request Failed")
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };


    const jobGrid = currentPosts.map(job => {
        return <div className="job-item-default job-ta bg-flash-job" data-job-id="894092" data-job-position="1" data-box="BoxRecruitmentInCompany">
            <div className="avatar">
                <a target="_blank" href="#">
                    <img src={job.company ? job.company.image : defaultCompanyImage} className="w-100" alt={job.company ? job.company.name : ""} title="Chuyên Viên Quan Hệ Khách Hàng - Khu Vực Hồ Chí Minh" />
                </a>
                <div className="tag-job-flash" data-toggle="tooltip-flash-job" data-trigger="manual" data-html="true" data-job-id="894092" data-template="<div data-job-id=894092 className=&quot;flash-job-tag-tooltip tooltip&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-arrow&quot;></div><div className=&quot;tooltip-inner&quot;></div></div>" title="" data-placement="top" data-container="body" data-original-title="<div>Tin đăng được NTD tương tác thường xuyên trong 24 giờ qua | <a className='flash-job-tag-tooltip-view-all' href='https://www.topcv.vn/huy-hieu-tia-set'>Xem tất cả</a> <i className='fa fa-chevron-right'></i></div>">
                    <img src="#" alt="" />
                </div>
            </div>
            <div className="body">
                <div className="body-content">
                    <div className="title-block">
                        <div>
                            <h3 className="title">
                                <div className="box-label-top">
                                </div>
                                <Link target="_blank" to={"/groups/job-details/" + job.id}>
                                    <span data-toggle="tooltip" data-container="body" data-placement="top" title="" data-original-title="Chuyên Viên Quan Hệ Khách Hàng - Khu Vực Hồ Chí Minh">{job.title}</span>
                                    <span className="icon-verified-employer level-five">
                                        <i className="fa-solid fa-circle-check icon-verified-employer-tooltip" data-toggle="tooltip" data-container="body" data-html="true" title="" data-placement="top" data-original-title="
<b>Nhà tuyển dụng</b><span> đã được xác thực:</span><br>
<span><i className='fa-solid fa-circle-check color-green'></i> Đã xác thực email tên miền công ty</span><br>
<span><i className='fa-solid fa-circle-check color-green'></i> Đã xác thực số điện thoại</span><br>
<span><i className='fa-solid fa-circle-check color-green'></i> Đã được duyệt Giấy phép kinh doanh</span><br>
<span><i className='fa-solid fa-circle-check color-green'></i> Tài khoản NTD được tạo tối thiểu 6 tháng</span><br>
<span><i className='fa-solid fa-circle-check color-green'></i> Chưa có lịch sử bị báo cáo tin đăng</span><br>"></i></span>
                                </Link>
                            </h3>
                            <a className="company" href="#" data-toggle="tooltip" title="" data-placement="top" target="_blank" data-original-title={job.company ? job.company.name : job.company}>{job.company ? job.company.name : job.company}</a>
                        </div>

                        <label className="title-salary">
                            {job.minBudget} -  {job.maxBudget} $
                        </label>
                    </div>

                </div>


                <div className="info">
                    <div className="label-content">
                        <label className="address" data-toggle="tooltip" data-html="true" title="" data-placement="top" data-original-title="<p style={{'text-align': 'left'}}>Hồ Chí Minh</p>">Hồ Chí Minh</label>
                        <label className="time">
                            <strong>{job.deadline}</strong>
                        </label>

                        <label className="address" data-container="body">
                            Cập nhật {job.createdAt}
                        </label>
                    </div>
                    <div className="icon">
                        {(
                            <button
                                type="submit"
                                className="btn btn-green text-uppercase btn-medium rounded-3"
                                // onClick={() => applyForJob(job.id)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    gContext.setToggleJobPostId(job.id);
                                    gContext.setToggleJobPostName(job.title);
                                    gContext.toggleApplyModal();
                                }}
                            >
                                {t('apply.applyNow')}
                            </button>
                        )}
                        {(
                            <button
                                type="submit"
                                className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3"
                                onClick={() => saveForJob(job.id)}
                            >
                                <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                {t('apply.saveIt')}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    });


    return (
        <>
            <PageWrapper headerConfig={{ button: "profile" }}>
                <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
                    <div className="container">
                        <div id="main">
                            <div className="company-cover">
                                <div className="container">
                                    <div className="company-cover-inner">
                                        <div className="company-logo">
                                            <div className="company-image-logo">
                                                <img draggable="false" src={companyDetail.image ? companyDetail.image : defaultCompanyImage} alt={companyDetail.name} className="img-responsive" />
                                            </div>
                                        </div>
                                        <div className="company-detail-overview">
                                            <div className="box-detail">
                                                <h1 data-toggle="tooltip" title="" className="company-detail-name text-highlight" data-original-title={companyDetail.name}>{companyDetail.name}</h1>
                                                <div className="company-subdetail">
                                                    <div className="company-subdetail-label">
                                                        <label className="vnr500">Website</label>
                                                    </div>
                                                    <div data-toggle="tooltip" title="" className="company-subdetail-info website  have-label-before " data-original-title="https://www.baovietbank.vn/">
                                                        <span className="company-subdetail-info-icon">
                                                            <i className="fa-solid fa-globe"></i>
                                                        </span>
                                                        <a className="company-subdetail-info-text" href={companyDetail.website} target="_blank">{companyDetail.website}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-follow">
                                                <a href="#" className="btn btn-follow">
                                                    <span><i className="fa-regular fa-plus"></i></span>
                                                    Theo dõi công ty
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="unfollow" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="myModalLabel">Bỏ theo dõi</h4>
                                            <button type="button" className="btn-close" data-dismiss="modal">
                                                <span><i className="fa-regular fa-xmark"></i></span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="modal-body-text">
                                                Bỏ theo dõi sẽ không tiếp tục nhận được thông tin tuyển dụng từ <span>{companyDetail.name}</span>.
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <form action="#" method="POST">
                                                <input type="hidden" name="company_id" value="3830" />
                                                <input type="hidden" name="_token" value="mJlgM5dQaKyFUT00GmxBhdCRTdPCDuwemI1SWBwW" />
                                                <button type="button" className="btn btn-sm btn-cancel" data-dismiss="modal">Hủy</button>
                                                <button type="submit" className="btn btn-sm btn-unfollow" id="btn-remove-follow">Bỏ theo dõi</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div id="section-introduce">
                                                <div className="company-info">
                                                    <h4 className="title">Giới thiệu công ty</h4>
                                                    <div className="box-body">
                                                        <div className="content">
                                                            <div dangerouslySetInnerHTML={{ __html: companyDetail.description ? companyDetail.description : "No more info" }} />
                                                            <p>
                                                            </p>
                                                            <p style={{ "text-align": "justify;" }}></p>
                                                            <div className="temp" style={{ "display": "block;" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-listing box-white" id="box-job-listing">
                                                <div className="job-listing__header">
                                                    <h4 className="title">Tuyển dụng</h4>
                                                </div>
                                                <div className="box-body">
                                                    <div className="box-search">
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#6F7882"></path>
                                                                    <path d="M22.0004 22.7504C21.8104 22.7504 21.6204 22.6804 21.4704 22.5304L19.4704 20.5304C19.1804 20.2404 19.1804 19.7604 19.4704 19.4704C19.7604 19.1804 20.2404 19.1804 20.5304 19.4704L22.5304 21.4704C22.8204 21.7604 22.8204 22.2404 22.5304 22.5304C22.3804 22.6804 22.1904 22.7504 22.0004 22.7504Z" fill="#6F7882"></path>
                                                                </svg>
                                                            </div>
                                                            <input type="text" className="form-control" id="job-listing-name" placeholder="Tên công việc, vị trí ứng tuyển..." aria-label="Username" aria-describedby="basic-addon1" />
                                                        </div>
                                                        <a href="javascript:void(0)" className="btn btn-search btn-search-job-company mb-3">
                                                            <div className="input-group-prepend">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#6F7882"></path>
                                                                    <path d="M22.0004 22.7504C21.8104 22.7504 21.6204 22.6804 21.4704 22.5304L19.4704 20.5304C19.1804 20.2404 19.1804 19.7604 19.4704 19.4704C19.7604 19.1804 20.2404 19.1804 20.5304 19.4704L22.5304 21.4704C22.8204 21.7604 22.8204 22.2404 22.5304 22.5304C22.3804 22.6804 22.1904 22.7504 22.0004 22.7504Z" fill="#6F7882"></path>
                                                                </svg>
                                                            </div>
                                                            <span>
                                                                Tìm kiếm
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="box-content" id="job-listing-content">
                                                        <link rel="stylesheet" href="https://static.topcv.vn/v4/css/components/desktop/jobs/job-list-default.54c1c7011c100262.css" />

                                                        <div className="job-list-default">
                                                            {jobGrid}
                                                        </div>
                                                        <div className="text-center pt-5 pt-lg-13">
                                                            <button style={{ "margin-left": "auto", "margin-right": "auto", "border": "none", "minHeight": "1vh" }}
                                                                // to="/#"
                                                                onClick={() => { setCurrentPage(currentPage + 1) }}
                                                                className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center"
                                                            >
                                                                {t('search.loadMore')}{" "}
                                                                <i className="fas fa-sort-down ml-3 mt-n2 font-size-4"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="unfollow" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                            <h4 className="modal-title" id="myModalLabel">Xác nhận</h4>
                                        </div>
                                        <div className="modal-body">
                                            Bỏ theo dõi sẽ không tiếp tục nhận được thông tin tuyển dụng từ <span style={{ "color": "#00B14F", "font-weight": "600" }}>Ngân Hàng Bảo Việt</span>.
                                        </div>
                                        <div className="modal-footer">
                                            <form action="https://www.topcv.vn/cong-ty/bo-theo-doi" method="POST">
                                                <input type="hidden" name="company_id" value="3830" />
                                                <input type="hidden" name="_token" value="mJlgM5dQaKyFUT00GmxBhdCRTdPCDuwemI1SWBwW" />
                                                <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Đóng lại</button>
                                                <button type="submit" className="btn btn-sm btn-danger" id="btn-remove-follow">Bỏ theo dõi</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default CompanyDeatails;
