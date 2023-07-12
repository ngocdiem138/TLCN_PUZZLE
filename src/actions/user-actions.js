import axios from 'axios';

import {
    USER_UPDATED_SUCCESS,
    USER_ADDED_REVIEW_SUCCESS,
    USER_ADDED_REVIEW_FAILURE
} from "../utils/constants/actions-types";
import { API_BASE_URL } from "../utils/constants/url";

class BlogService {

    getAllCategory() {
        return axios.get(API_BASE_URL + '/common/get-all-category');
    }
    getAllBlogPost() {
        return axios.get(API_BASE_URL + '/common/blog-post');
    }
    getRecentBlogPost() {
        return axios.get(API_BASE_URL + '/common/blog-post?size=5');
    }
    getAllBlogPostByCategoryId(categoryId) {
        return axios.get(API_BASE_URL + '/common/blog-post?blogCategoryId=' + categoryId);
    }
    getAllCategoryAndPostAmount() {
        return axios.get(API_BASE_URL + '/common/blog-post/blog-category-with-post-amount');
    }
    getBlogPostById(id) {
        return axios.get(API_BASE_URL + '/common/view-blog-post/' + id, {
            headers: {
                "Content-Type": `multipart/form-data;`,
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }
    createBlogPost(file) {
        return axios.post(API_BASE_URL + "/user/create-blog-post", file, {
            headers: {
                "Content-Type": `multipart/form-data;`,
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
    uploadImageBlog(file) {
        return axios.post(API_BASE_URL + "/user/upload-blog-image", file, {
            headers: {
                "Content-Type": `multipart/form-data;`,
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
    updateBlogPost(id, file) {
        return axios.put(API_BASE_URL + "/user/update-blog-post/" + id, file, {
            headers: {
                "Content-Type": `multipart/form-data;`,
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
    getUserBlogPost() {
        return axios.get(API_BASE_URL + '/user/my-blog-post', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }
    addComment(blogPostId, newComment, buttonValue, replyingFor) {
        if (buttonValue == "send") {
            return axios.post(API_BASE_URL + '/user/comment/add?blogPostId=' + blogPostId, newComment, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        } else if (buttonValue == "reply") {
            return axios.post(API_BASE_URL + '/user/sub-comment/add?commentId=' + replyingFor, newComment, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        }
    }
    updateComment(content, id, type) {
        if (type === "comment") {
            return axios.put(API_BASE_URL + '/user/comment/update?commentId=' + id, content, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        } else if (type === "reply") {
            return axios.put(API_BASE_URL + '/user/sub-comment/update?subCommentId=' + id, content, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        }
    }
    deleteComment(id, type) {
        if (type === "comment") {
            return axios.delete(API_BASE_URL + '/user/comment/delete?commentId=' + id, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        } else if (type === "reply") {
            return axios.delete(API_BASE_URL + '/user/sub-comment/delete?subCommentId=' + id, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        }
    }

}

export const BlogServiceIml = new BlogService();

class JobPostService {

    getAllActiveJobPosts() {
        return axios.get(API_BASE_URL + "/common/get-active-job-post")
    }


    getAllCandidateApply() {
        return axios.get(API_BASE_URL + "/employer/get-all-candidate-and-result-to-employer",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
    }

    getAllCandidateApplyJobPosts(jobPostId) {
        return axios.get(API_BASE_URL + "/employer/get-candidate-and-result-by-job-post/" + jobPostId,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
    }
    getHotJobPosts() {
        return axios.get(API_BASE_URL + "/common/get-hot-job-post")
    }

    getDueSoonJobPosts() {
        return axios.get(API_BASE_URL + "/common/get-job-post-due-soon")
    }

    getJobPostAppliedByCandidate() {
        return axios.get(API_BASE_URL + "/candidate/get-job-post-applied", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getJobPostSavedByCandidate() {
        return axios.get(API_BASE_URL + "/candidate/get-job-post-saved", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getJobPostCreateByEmployer() {
        return axios.get(API_BASE_URL + "/employer/get-all-job-post-created", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getLimitJobPostCreateByEmployer() {
        return axios.get(API_BASE_URL + "/employer/get-limit-num-of-job-post-created", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getJobByFilterParams(filter) {
        return axios.post(API_BASE_URL + "/common/job-post-filter", filter);
    }

    createJobPost(jobPost) {
        return axios.post(API_BASE_URL + "/employer/post-job", jobPost, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getJobPostById(jobPostId) {
        if (localStorage.getItem("token")) {
            return axios.get(API_BASE_URL + '/common/job-post/get-one/' + jobPostId, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        } else {
            return axios.get(API_BASE_URL + '/common/job-post/get-one/' + jobPostId, {
                headers: {
                    Authorization: ""
                }
            });
        }
    }

    getAllCompany() {
        return axios.get(API_BASE_URL + '/common/company');
    }


    getAllCategory() {
        return axios.get(API_BASE_URL + '/common/get-all-category');
    }

    getJobPostByKeyWordAndStatus(keyword, status) {
        return axios.get(API_BASE_URL + '/search?' + 'keyword=' + keyword + '&status=' + status);
    }

    updateJobPost(id, jobPost) {
        return axios.put(API_BASE_URL + '/employer/update-job-post/' + id, jobPost, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    applyJob(jobPostId, data) {
        return axios.post(API_BASE_URL + '/candidate/apply-job-post/' + jobPostId, data, {
            headers: {
                "Content-Type": `multipart/form-data;`,
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    cancelAppliedJob(jobPostId) {
        return axios.get(API_BASE_URL + '/candidate/cancel-apply-job-post/' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    cancelSavedJob(jobPostId) {
        return axios.get(API_BASE_URL + '/candidate/cancel-saved-job-post/' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    deleteJobPost(jobPostId) {
        return axios.delete(API_BASE_URL + '/employer/delete-job-post/' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    checkExistedScore(candidateId, jobPostId) {
        return axios.get(API_BASE_URL + '/employer/application/ai-matcher/check-existed?candidateId=' + candidateId + '&jobPostId=' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    checkExistedQuestionSuggest(candidateId, jobPostId) {
        return axios.get(API_BASE_URL + '/employer/application/hirize-iq/check-existed?candidateId=' + candidateId + '&jobPostId=' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    countScore(candidateId, jobPostId) {
        return axios.get(API_BASE_URL + '/employer/application/score-cv?candidateId=' + candidateId + '&jobPostId=' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    clearScore(candidateId, jobPostId) {
        return axios.get(API_BASE_URL + '/employer/application/ai-matcher/clear?candidateId=' + candidateId + '&jobPostId=' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    questionSuggest(candidateId, jobPostId) {
        return axios.get(API_BASE_URL + '/employer/application/hirize-iq-suggest?candidateId=' + candidateId + '&jobPostId=' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    clearQuestionSuggest(candidateId, jobPostId) {
        return axios.get(API_BASE_URL + '/employer/application/hirize-iq/clear?candidateId=' + candidateId + '&jobPostId=' + jobPostId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }


}

export const JobPostServiceIml = new JobPostService();

class ExperienceService {

    getExperienceByCandidate() {
        return axios.get(API_BASE_URL + "/candidate/get-experience", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
    getExperienceByCandidateId(candidateId) {
        return axios.get(API_BASE_URL + "/common/get-experience-by-candidate-id/" + candidateId)
    }

    getJobPostCreateByEmployer() {
        return axios.get(API_BASE_URL + "/employer/get-all-job-post-created", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getAppliedJobPost() {
        return axios.get(API_BASE_URL + "/employer/get-all-job-post-created", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }



    createExperience(experience) {
        return axios.post(API_BASE_URL + "/candidate/add-experience", experience, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getJobPostById(jobPostId) {
        return axios.get(API_BASE_URL + '/common/job-post/get-one/' + jobPostId);
    }

    getJobPostByKeyWordAndStatus(keyword, status) {
        return axios.get(API_BASE_URL + '/search?' + 'keyword=' + keyword + '&status=' + status);
    }

    updateExperience(experience) {
        return axios.put(API_BASE_URL + '/candidate/update-experience', experience, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    deleteExperience(experienceId) {
        return axios.get(API_BASE_URL + '/candidate/delete-experience/' + experienceId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

}

export const ExperienceServiceIml = new ExperienceService();

class UserService {
    getInvoices() {
        return axios.get(API_BASE_URL + "/user/get-invoice",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
    }
    getForgotPass(email) {
        return axios.get(API_BASE_URL + "/auth/forgot-password?email=" + email)
    }
    getResetPass(token, newPass) {
        return axios.get(API_BASE_URL + "/auth/reset-password?token=" + token + "&newPassword=" + newPass)
    }
    verifyEmail(token) {
        return axios.put(API_BASE_URL + "/auth/verify-account", { "token": token },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        )
    }
    payPricing(pricing) {
        return axios.get(
            API_BASE_URL + "/payment/pay?packageCode=" + pricing,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
    }

    getUserProfile() {
        return axios.get(API_BASE_URL + "/user/profile", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
    uploadUserAvatar(file) {
        return axios.post(API_BASE_URL + "/user/upload-avatar", file, {
            headers: {
                "Content-Type": `multipart/form-data;`,
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
    deleteUserAvatar() {
        return axios.get(API_BASE_URL + "/delete-avatar", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
    updateUserSettingProfile(userProfile) {
        return axios.put(API_BASE_URL + "/user", userProfile, {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
}

export const UserServiceIml = new UserService();

export const updateUserInfo = (userData, history) => async (dispatch) => {
    axios({
        method: "PUT",
        url: API_BASE_URL + "/user/editPassword",
        data: userData,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    });

    dispatch({
        type: USER_UPDATED_SUCCESS
    })

    history.push("/candidate-profile-2");
};

export const getUserProfile = (userData, history) => async (dispatch) => {
    axios({
        method: "GET",
        url: API_BASE_URL + "/user/profile",
        data: userData.data || {},
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    });

    dispatch({
        type: USER_UPDATED_SUCCESS
    })
};

export const updateUserProfile = (userProfileData, history) => async (dispatch) => {
    axios({
        method: "PUT",
        url: API_BASE_URL + "/user/editProfile",
        data: userProfileData,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    });

    dispatch({
        type: USER_UPDATED_SUCCESS
    })

    history.push("/candidate-profile-2");
};

export const addReviewToPerfume = (data) => async (dispatch) => {
    try {
        await axios.post(API_BASE_URL + "/user/review", data);

        dispatch({
            type: USER_ADDED_REVIEW_SUCCESS
        })

        if (typeof window !== "undefined") { window.location.reload(); }
    } catch (error) {
        dispatch({
            type: USER_ADDED_REVIEW_FAILURE,
            payload: error.response.data
        })
    }
};
