import { API_BASE_URL } from "../utils/constants/url";
import axios from 'axios';

class EmployerService {


    getAllAmountApplicationApplied() {
        return axios.get(API_BASE_URL + "/employer/get-amount-application-to-employer", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
    }

    getRateApplicationApplied() {
        return axios.get(API_BASE_URL + "/employer/get-application-rate-of-employer", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
    }
    
    getAllJobPostInactive() {
        return axios.get(API_BASE_URL + "/employer/get-all-job-post-created-inactive", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
    }

    responseCandidateApplication(response) {
        return axios.post(API_BASE_URL + "/employer/response-application-by-candidate-and-job-post", response, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
    }

    getAllAmountApplicationApplied() {
        return axios.get(API_BASE_URL + "/employer/get-amount-application-to-employer", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
    }

    getEmployerSettingProfile() {
        return axios.get(API_BASE_URL + "/employer/profile", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    updateEmployerSettingProfile(employerProfile) {
        return axios.put(API_BASE_URL + "/employer/update", employerProfile, {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getCandidateProfile(candidateId) {
        return axios.get(API_BASE_URL + "/common/get-profile-candidate/" + candidateId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    createCompany(company) {
        return axios.post(API_BASE_URL + "/admin/add-company", company, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getCompanyById(companyId) {
        return axios.get(API_BASE_URL + '/admin/get-one-company/' + companyId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    getCompanyByKeyWordAndStatus(keyword, status) {
        return axios.get(API_BASE_URL + '/search?' + 'keyword=' + keyword + '&status=' + status, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    updateCompany(company) {
        return axios.put(API_BASE_URL + '/admin/update-info-company', company, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

    deleteCompany(companyId) {
        return axios.delete(API_BASE_URL + '/company/' + companyId, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }

}

export const EmployerServiceIml = new EmployerService();