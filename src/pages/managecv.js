import React from "react";
import PageWrapper from "../components/PageWrapper";

const ManageCV = () => {
    return (
        <>
            <PageWrapper>
                <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
                    <div className="container">
                        <div className="row col-sm-12">
                            <div className="col-sm-8" id="manager-cv">
                                <div id="cv-list" className="box-block">
                                    <div className="box-header">
                                        <h1 className="title">CV đã tạo trên PUZZLE</h1>
                                        <a href={"/resume"} className="btn btn-add-cv btn-primary-hover ">
                                            <i className="fa-solid fa-plus"></i> Tạo mới
                                        </a>
                                    </div>
                                    <div className="box-conten box-no-cv center">
                                        <div className="center" style={{ display: "flex", justifyContent: "center" }}>
                                            <img src="https://www.topcv.vn/v4/image/cv-manager/no-cv.png" alt="" />
                                        </div>
                                        <p>Bạn chưa tạo CV nào</p>
                                    </div>
                                </div>
                                <div id="suggest-ai">
                                    <div className="box-group">
                                        <div className="box-group-header">
                                            <div className="box-group-title mb-12px">
                                                <h1 className="title">
                                                    Việc làm phù hợp với bạn
                                                </h1>
                                            </div>
                                            <p>Để nhận được gợi ý việc làm chính xác hơn, hãy <a target="_blank" href="https://www.topcv.vn/cai-dat-goi-y-viec-lam" className="text-highlight">tùy chỉnh cài đặt gợi ý việc làm</a>.</p>
                                        </div>
                                        <div className="box-group-body">
                                            <div className="suggestion-jobs">
                                                <link rel="stylesheet" href="https://static.topcv.vn/v4/css/components/desktop/jobs/job-list-default.de7103438670751b.css" />
                                                <div className="job-list-default">
                                                    <div className="job-item-default bg-diamond-employer bg-highlight job-ta" data-job-id="1036996" data-job-position="1" data-box="SuggestJobBox" data-jr-id="realtime-v2.4::1687673127370-c4e65f::fd99ee9368fd49958de0c705945e03e5::1" id="featured-suggest-1036996">
                                                        <div className="avatar">
                                                            <a target="_blank" href="https://www.topcv.vn/brand/educa/tuyen-dung/nhan-vien-tu-van-tuyen-sinh-telesales-tai-ha-noi-100-data-nong-thu-nhap-13-30-trieu-j1036996.html?ta_source=JobSuggestInManagerCV&amp;jr_i=realtime-v2.4%3A%3A1687673127370-c4e65f%3A%3Afd99ee9368fd49958de0c705945e03e5%3A%3A1">
                                                                <img src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/cong-ty-cp-giao-duc-educa-corporation-6d67556358b65494d801a26a77be21fb-5ea7b55a0ca31.jpg" className="w-100" alt="EDUPIA" title="Nhân Viên Tư Vấn Tuyển Sinh (Telesales) Tại Hà Nội - 100% Data Nóng - Thu Nhập 13 - 30 Triệu" />
                                                            </a>
                                                        </div>
                                                        <div className="body">
                                                            <div className="body-content">
                                                                <div className="title-block">
                                                                    <div>
                                                                        <h3 className="title">
                                                                            <div className="box-label-top">
                                                                                <label data-toggle="tooltip" title="" data-placement="top" data-container="body" className="label label-primary tag-diamond-employer" for="" data-original-title="Nhà tuyển dụng kim cương"><i class="icon fa fa-gem">TOP</i> </label>
                                                                            </div>
                                                                            <a target="_blank" href="">
                                                                                <span data-toggle="tooltip" title="" data-placement="top" data-container="body" data-original-title="Nhân Viên Tư Vấn Tuyển Sinh (Telesales) Tại Hà Nội - 100% Data Nóng - Thu Nhập 13 - 30 Triệu">Nhân Viên Tư Vấn Tuyển Sinh (Telesales) Tại Hà Nội - 100% Data Nóng - Thu Nhập 13 - 30 Triệu</span>
                                                                            </a>
                                                                        </h3>
                                                                        <a className="company" href="https://www.topcv.vn/brand/educa" data-toggle="tooltip" title="" data-placement="top" data-container="body" target="_blank" data-original-title="EDUPIA">EDUPIA</a>
                                                                    </div>
                                                                    <label className="title-salary">
                                                                        13 - 30 triệu
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <div className="label-content">
                                                                    <label className="address" data-toggle="tooltip" data-html="true" title="" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hà Nội: Thanh Xuân</p>">Hà Nội</label>
                                                                    <label className="time">
                                                                        Còn
                                                                        <strong>34</strong>
                                                                        ngày để ứng tuyển
                                                                    </label>
                                                                    <label className="address" data-container="body">
                                                                        Cập nhật 1 ngày trước
                                                                    </label>
                                                                </div>
                                                                <div className="icon">
                                                                    <button data-redirect-to="https://www.topcv.vn/brand/educa/tuyen-dung/nhan-vien-tu-van-tuyen-sinh-telesales-tai-ha-noi-100-data-nong-thu-nhap-13-30-trieu-j1036996.html?ta_source=JobSuggestInManagerCV&amp;jr_i=realtime-v2.4%3A%3A1687673127370-c4e65f%3A%3Afd99ee9368fd49958de0c705945e03e5%3A%3A1" className="btn btn-apply-now">
                                                                        <span>Ứng tuyển</span>
                                                                    </button>
                                                                    <div id="box-save-job-1036996" className="box-save-job  box-save-job-hover   job-notsave ">
                                                                        <a href="javascript:void(0)" className="btn-save save" data-id="1036996" data-title="Lưu" data-toggle="tooltip" data-placement="top" data-container="body" data-original-title="" title="">
                                                                            <span id="save-job-loading" style={{ "display": "none" }}>
                                                                                <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ "width": "20px" }} />
                                                                            </span>
                                                                            <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>
                                                                        </a>
                                                                        <a href="javascript:void(0)" className="btn-unsave unsave text-highlight" data-toggle="tooltip" title="" data-id="1036996" data-title="Nhân Viên Tư Vấn Tuyển Sinh (Telesales) Tại Hà Nội - 100% Data Nóng - Thu Nhập 13 - 30 Triệu" data-placement="top" data-container="body" data-original-title="Bỏ lưu">
                                                                            <span id="unsave-job-loading" style={{ "display": "none" }}>
                                                                                <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{ "width": "20px" }} />
                                                                            </span>
                                                                            <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>
                                                                        </a>
                                                                    </div>
                                                                    <div className="btn-remove-job">
                                                                        <a href="javascript:showConfirmIgnoreJob(1036996)" className="" title="Ẩn tin tuyển dụng này">
                                                                            <i class="icon fa fa-window-close"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a href="https://www.topcv.vn/viec-lam-phu-hop" className="btn btn-suggestion-more btn-primary-hover" target="_blank">
                                                    Xem tất cả việc làm phù hợp
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4" id="sidebar" style={{ marginTop: "16px" }}>
                                <div className="box box-white text-center-sm">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="profile-avatar">
                                                <img src="https://www.topcv.vn/images/avatar-default.jpg" alt="" />
                                                <span className="vip-badge" style={{ backgroundColor: "gray" }}>VERIFIED</span>
                                            </div>
                                            <div className="text-center">
                                                <input type="file" name="avatar" style={{ display: "none" }} id="img-avatar" />
                                                <a href="javascript:void(0)" style={{ fontSize: "11px", padding: "3px 5px", margin: "6px 0px", color: "#777", fontStyle: "italic" }} data-target="#upload-profile-avatar" data-toggle="modal" id="btn-upload-avatar">
                                                    Cập nhật ảnh
                                                </a>
                                            </div>
                                            <form action="https://www.topcv.vn/ajax-upload-avatar" method="post" enctype="multipart/form-data" id="upload-avatar-form" style={{ display: "none" }}>
                                                <input type="hidden" name="_token" value="J7R1Ug4FXsF7RXGeYndP0hhXJ50PBMuUbUuH00PK" />
                                                <input type="file" name="avatar" id="avatar-image" />
                                            </form>
                                            <div id="imageEditorWraper" style={{ display: "none" }}>
                                                <div className="container">
                                                    <h3>Chỉnh sửa ảnh đại diện</h3>
                                                    <div className="editor-col-left">
                                                        <h4>Ảnh gốc</h4>
                                                        <div className="imageEditor">
                                                            <img src="" />
                                                        </div>
                                                        <div className="editorChooseImage">
                                                            <a href="#" className="btn-choose-image"><i className="fa fa-picture-o"></i><br />Click chọn ảnh để tải lên!</a>
                                                        </div>
                                                        <div className="tipCompress" style={{ color: "red", marginTop: "5px", marginLeft: "20px", textAlign: "left" }}>
                                                            Nếu ảnh của bạn có dung lượng trên 5MB, vui lòng
                                                            <a href="https://compressor.io/compress" target="_blank"> bấm vào đây</a> để giảm dung lượng ảnh.
                                                        </div>
                                                        <div className="loadingShow" style={{ display: "none" }}>
                                                            <i className="fa fa-spinner fa-spin"></i>
                                                            <br />
                                                            <span className="loadingMessage">Đang tải ảnh lên ...</span>
                                                        </div>
                                                    </div>
                                                    <div className="editor-col-right">
                                                        <h4>Ảnh đại diện hiển thị</h4>
                                                        <div className="imageEditorControls">
                                                            <div className="img-edit-preview" style={{ border: "1px solid #efefef", borderRadius: "50%" }}><img src="/images/avatar-default.jpg" /></div>
                                                            <div className="edit-image-btns">
                                                                <button type="button" className="btn-change-image">Đổi ảnh</button>
                                                                <button type="button" className="btn-remove-image">Xóa ảnh</button><br />
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn-save-image">Xong</button>
                                                            </div>
                                                            <div>
                                                                <a href="#" className="btn-close-image-editor" title="Đóng trình chỉnh sửa (Không lưu thay đổi)">Đóng lại (Không lưu)</a>
                                                            </div>
                                                            <form action="https://www.topcv.vn/ajax-save-crop-avatar" method="post" id="saveEditedAvatar" style={{ display: "none" }}>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div>Chào bạn trở lại,</div>
                                            <h4 className="profile-fullname">Le Thi Ngoc Diem</h4>
                                            <div className="account-type vip">
                                                <span style={{ backgroundColor: "gray" }}>
                                                    Tài khoản đã xác thực
                                                </span>
                                            </div>
                                            <div className="box-footer">
                                                <a href="https://www.topcv.vn/tai-khoan/nang-cap" className="btn btn-sm btn-topcv-primary">Nâng cấp tài khoản</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-white text-center-sm">
                                    <div className="row">
                                        <div className="text-center cv-count-header">
                                            <div className="text-highlight">
                                                <strong style={{ fontSize: "20px" }}>CV của bạn đã đủ tốt?</strong>
                                                <p className="text-gray" style={{ fontSize: "13px" }}>Bao nhiêu NTD đang quan tâm tới Hồ sơ của bạn?</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="cv-count text-center  gray ">
                                                <div className="cv-count-number">0</div>
                                                <div>lượt</div>
                                            </div>
                                        </div>
                                        <div className="col-md-8" style={{ paddingTop: "5px" }}>
                                            <p style={{ fontSize: "13px" }}>Mỗi lượt Nhà tuyển dụng xem CV mang đến một cơ hội để bạn gần hơn với công việc phù hợp.</p>
                                            <div className="text-center">
                                                <a href="https://www.topcv.vn/xem-ho-so" target="_blank" className="btn btn-sm btn-topcv-primary">Khám phá ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper >
        </>
    );
};
export default ManageCV;
