import axios from "axios";

import {
  PERFUME_ADDED_SUCCESS,
  PERFUME_UPDATED_SUCCESS,
  PERFUME_ADDED_FAILURE,
  PERFUME_UPDATED_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_COMPANYS_SUCCESS,
  FETCH_ALL_USERS_ORDERS_SUCCESS,
  FORM_RESET,
} from "../utils/constants/actions-types";
import { API_BASE_URL } from "../utils/constants/url";

class CompanyService {
  getNumberPostedJob() {

  }
  getAllCompanys() {
    return axios.get(API_BASE_URL + "/common/company");
  }

  createCompany(company) {
    return axios.post(API_BASE_URL + "/admin/add-company", company, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  getCompanyById(companyId) {
    return axios.get(API_BASE_URL + "/admin/get-one-company/" + companyId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  getCompanyByKeyWordAndStatus(keyword, status) {
    return axios.get(
      API_BASE_URL + "/search?" + "keyword=" + keyword + "&status=" + status,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  }

  updateCompany(company) {
    return axios.put(API_BASE_URL + "/admin/update-info-company", company, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  deleteCompany(companyId) {
    return axios.delete(API_BASE_URL + "/company/" + companyId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}

export const CompanyServiceIml = new CompanyService();

class SkillService {
  getAllExtraInfoByType(type) {
    return axios.get(
      API_BASE_URL + "/common/get-all-extra-info-by-type?type=" + type,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      });
  }

  createCompany(company) {
    return axios.post(API_BASE_URL + "/admin/add-company", company, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  getCompanyById(companyId) {
    return axios.get(API_BASE_URL + "/admin/get-one-company/" + companyId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  getCompanyByKeyWordAndStatus(keyword, status) {
    return axios.get(
      API_BASE_URL + "/search?" + "keyword=" + keyword + "&status=" + status,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  }

  updateCompany(company) {
    return axios.put(API_BASE_URL + "/admin/update-info-company", company, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  deleteCompany(companyId) {
    return axios.delete(API_BASE_URL + "/company/" + companyId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}

export const SkillServiceIml = new SkillService();

export class EmployerService {


  createEmployer(response) {
    return axios.post(API_BASE_URL + "/employer/response-application", response, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  getAllEmployers() {
    return axios.get(API_BASE_URL + "/candidate-profile-2");
  }

  createEmployer(account) {
    return axios.post(API_BASE_URL + "/admin/add-compan", account, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  getEmployerById(accountId) {
    return axios.get(
      API_BASE_URL + "/common/employer/get-employer-by-id/" + accountId
    );
  }

  getEmployerByKeyWordAndStatus(keyword, status) {
    return axios.get(
      API_BASE_URL + "/search?" + "keyword=" + keyword + "&status=" + status
    );
  }

  updateEmployer(account) {
    return axios.put(API_BASE_URL + "/admin/update-info-account", account, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  deleteEmployer(accountId) {
    return axios.delete(API_BASE_URL + "/candidate-profile-2/" + accountId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
  getApplication(jobId) {
    return axios.get(
      API_BASE_URL + "/employer/get-application-by-job-post/" + jobId,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  }
  responseApplication(applicationId, result, note) {
    return axios.get(
      API_BASE_URL +
      "/employer/response-application?result=" +
      result +
      "?applicationId=" +
      applicationId +
      "?note=" +
      note,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  }
}

export const EmployerServiceIml = new EmployerService();

export class AccountService {
  getAllAccounts() {
    return axios.get(API_BASE_URL + "/admin/get-all-account", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
  }

  createAccount(employer) {
    return axios.post(API_BASE_URL + "/admin/add-account", employer, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
  }

  getAccountById(employerId) {
    return axios.get(API_BASE_URL + "/" + employerId);
  }

  getAccountByKeyWordAndStatus(keyword, status) {
    return axios.get(
      API_BASE_URL + "/search?" + "keyword=" + keyword + "&status=" + status
    );
  }

  updateAccount(employer) {
    return axios.put(API_BASE_URL + "/admin/update-account/", employer, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  deleteAccount(employerId) {
    return axios.delete(API_BASE_URL + "/admin/delete-account/" + employerId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}
export const AccountServiceIml = new AccountService();

export const addCompany = (data) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: API_BASE_URL + "/admin/Company/add",
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    dispatch({
      type: PERFUME_ADDED_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PERFUME_ADDED_FAILURE,
      payload: "response.data.message",
    });
  }
};

export const fetchAllCompanys = () => async (dispatch) => {
  const response = await axios({
    method: "GET",
    url: API_BASE_URL + "/company",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  dispatch({
    type: FETCH_ALL_COMPANYS_SUCCESS,
    payload: response.data,
  });
};

export const updateCompany = (data) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: API_BASE_URL + "/admin/Company/add",
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    dispatch({
      type: PERFUME_ADDED_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PERFUME_ADDED_FAILURE,
      payload: error.response.data,
    });
  }
};

export const addPerfume = (data) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: API_BASE_URL + "/admin/add",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    dispatch({
      type: PERFUME_ADDED_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PERFUME_ADDED_FAILURE,
      payload: error.response.data,
    });
  }
};

export const updatePerfume = (data, history) => async (dispatch) => {
  try {
    const response = await axios({
      method: "PUT",
      url: API_BASE_URL + "/admin/edit",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    history.push("candidate-profile-2");

    dispatch({
      type: PERFUME_UPDATED_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PERFUME_UPDATED_FAILURE,
      payload: error.response.data,
    });
  }
};

export const fetchAllUsersOrders = () => async (dispatch) => {
  const response = await axios({
    method: "GET",
    url: API_BASE_URL + "/admin/orders",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  dispatch({
    type: FETCH_ALL_USERS_ORDERS_SUCCESS,
    payload: response.data,
  });
};

export const fetchAllUsers = () => async (dispatch) => {
  const response = await axios({
    method: "GET",
    url: API_BASE_URL + "/admin/user/all",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  dispatch({
    type: FETCH_ALL_USERS_SUCCESS,
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await axios({
    method: "GET",
    url: API_BASE_URL + "/admin/user/" + id,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  dispatch({
    type: FETCH_USER_SUCCESS,
    payload: response.data,
  });
};

export const formReset = () => async (dispatch) => {
  dispatch({
    type: FORM_RESET,
  });
};
