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
                                        <h1 className="title">CV đã tạo trên TopCV</h1>
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
                                <div class="box box-white text-center-sm">
                                    <div class="row">
                                        <div class="text-center cv-count-header">
                                            <div class="text-highlight">
                                                <strong style={{fontSize: "20px"}}>CV của bạn đã đủ tốt?</strong>
                                                <p class="text-gray" style={{fontSize: "13px"}}>Bao nhiêu NTD đang quan tâm tới Hồ sơ của bạn?</p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="cv-count text-center  gray ">
                                                <div class="cv-count-number">0</div>
                                                <div>lượt</div>
                                            </div>
                                        </div>
                                        <div class="col-md-8" style={{paddingTop: "5px"}}>
                                            <p style={{fontSize: "13px"}}>Mỗi lượt Nhà tuyển dụng xem CV mang đến một cơ hội để bạn gần hơn với công việc phù hợp.</p>
                                            <div class="text-center">
                                                <a href="https://www.topcv.vn/xem-ho-so" target="_blank" class="btn btn-sm btn-topcv-primary">Khám phá ngay</a>
                                            </div>
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
export default ManageCV;
