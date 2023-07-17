import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import { useEffect } from "react";
import CheckBox from "../components/CheckBox/Checkbox";

import imgB1 from "../assets/image/l1/png/feature-brand-1.png";

import imgF from "../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../assets/image/svg/icon-suitecase.svg";

import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";
import { employmentType, experienceYear, postTime } from "../components/Sidebar/MenuData";
import { JobPostServiceIml } from "../actions/user-actions";
import CheckboxRadio from "../components/CheckboxRadio/CheckboxRadio";
import axios from "axios";
import { API_BASE_URL, REDIRECT_BASE_URL } from "../utils/constants/url";

import { useTranslation } from 'react-i18next';
import GlobalContext from "../context/GlobalContext";


const STEP = 50;
const MIN = 0;
const MAX = 50000;

const CheckStyled = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #2b3940 !important;
  font-size: 16px;
  color: inherit;
  &::before {
    content: "\f0c8";
    font-weight: 400;
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    color: #7e8989;
    margin-right: 11px;
    margin-top: 2px;
  }
  &.active {
    color: #2b3940 !important;
    font-weight: 600;
    &::before {
      content: "\f14a";
      font-weight: 900;
      color: #00b074;
    }
  }
`;

const Check = ({ children }) => {
  const [active, setActive] = useState(false);


  return (
    <CheckStyled
      className={`toggle-item ${active ? "active" : ""}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {children}
    </CheckStyled>
  );
};



const SearchGrid = () => {

  const gContext = useContext(GlobalContext);


  const { t, i18n } = useTranslation()
  const defaultCountries = [
    { id: 0, value: "", label: t('defaultCountries.selectCity') },
    { id: 1, value: "Tp Hồ Chí Minh", label: t('defaultCountries.HCM') },
    { id: 2, value: "Hà Nội", label: t('defaultCountries.HaNoi') },
    { id: 3, value: "Cần Thơ", label: t('defaultCountries.CanTho') },
    { id: 4, value: "Đà Nẵng", label: t('defaultCountries.DaNang') },
  ];
  const id = 1;
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");
  const [title, setTitle] = useState([]);
  const [city, setCity] = useState([]);
  const [isList, setIsList] = useState(true);
  const [rangeValues, setRangeValues] = useState([100, 10000]);

  const [jobs, setJobs] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    JobPostServiceIml.getAllActiveJobPosts().then((response) => { setJobs(response.data.data) });
    JobPostServiceIml.getAllCategory().then((response) => {
      if (response.data.data) {
        let categoryMapList = [];
        response.data.data.forEach((category) => {
          categoryMapList = [...categoryMapList, { "name": category.id, "label": category.name, value: category.id }]
        })
        setListCategory(categoryMapList);
      }
    })
  }, [])

  const [auth, setAuth] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setAuth(localStorage.getItem("userRole"));
    setIsAuthenticated(localStorage.getItem("isLoggedIn"));
  })

  const [filter, setFilter] = useState({
    minBudget: rangeValues[0],
    maxBudget: rangeValues[1],
    experienceYear: [],
    employmentTypes: [],
    numDayAgo: -1,
    titles: [],
    cities: [],
    positions: [],
    skills: [],
    others: []
  });

  const [selectedOptions, setSelectedOptions] = useState(0);
  const handleChange = (event) => {
    setCity(event.value);
    setSelectedOptions(event.id);
    console.log(event.id);
  };

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

  const applyForJob = (id) => {
    if (!isAuthenticated) {
      setError("You must login to apply for jobs")
    } else {
      axios
        .get(
          API_BASE_URL + "/candidate/apply-job-post/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.data.status == 200) {
            setSucces("Successfuly applied for job")
            setError("")
            const countTimer = setInterval(() => {
            }, 1000);
            clearInterval(countTimer);
          } else if (response.data.status != 200) {
            console.log(response.data.status)
            switch (response.data.status) {
              case 403:
                setError(response.data.errMsg + " .You can register in" + REDIRECT_BASE_URL + "/registerOfUser")
                // window.location.assign(REDIRECT_BASE_URL + "/registerOfUser");
                break;
              default:
                setSucces("");
                setError(response.data.errMsg)
              //return 'foo';
            }
            //setError(response.data.errMsg)
            //console.error(response.data.errMsg);
            //window.location.assign(REDIRECT_BASE_URL + "/registerOfUser");
          } else {

            setSucces("Request Failed")
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
  };

  const getProducts = (variables) => {
    JobPostServiceIml.getJobByFilterParamsSearch(variables).then((response) => { setJobs(response.data.data); });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(0, indexOfLastPost);


  const jobGrid = currentPosts.map(job => {
    return <div className="col-12 col-lg-6">
      <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
        <div className="d-block mb-7 square-72">
          <Link to={"/groups/job-details/" + job.id}>
            <img src={job.company ? job.company.image ? job.company.image : imgB1 : imgB1} alt="" />
          </Link>
        </div>
        <Link
          to={"/groups/job-details/" + job.id}
          className="font-size-3 d-block mb-0 text-gray"
        >
          {job.workplaceType ? job.workplaceType : "___"}
        </Link>
        <h2 className="mt-n4">
          <Link
            to={"/groups/job-details/" + job.id}
            className="font-size-7 text-black-2 font-weight-bold mb-4"
          >
            {job.title}
          </Link>
        </h2>
        <ul className="list-unstyled mb-1 card-tag-list">
          <li style={{ width: "50%" }}>
            <Link
              to={"/groups/job-details/" + job.id}
              className="bg-regent-opacity-15 text-denim font-size-3 rounded-3"
            >
              <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
              {job.city}
            </Link>
          </li>
          <li style={{ width: "50%" }}>
            <Link
              to={"/groups/job-details/" + job.id}
              className="bg-regent-opacity-15 text-orange font-size-3 rounded-3"
            >
              <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
              {job.employmentType}
            </Link>
          </li>
          <li style={{ width: "50%" }}>
            <Link
              to={"/groups/job-details/" + job.id}
              className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3"
            >
              <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
              {job.minBudget} - {job.maxBudget} $
            </Link>
          </li>
          <li style={{ width: "50%" }}>
            <Link
              to={"/groups/job-details/" + job.id}
              className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3"
            >
              <i className="fa fa-address-card mr-2 font-weight-bold"></i>{" "}
              NUM:{" "}{job.quantity}
            </Link>
          </li>
        </ul>
        <div className="card-btn-group">
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
  });

  const jobList = currentPosts.map(job => {
    return <div className="mb-10 col-12">
      {/* <!-- Single Featured Job --> */}
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
        <div className="row">
          <div className="col-md-6">
            <div className="media align-items-center">
              <div className="square-72 d-block mr-8">
                <img src={job.company ? job.company.image ? job.company.image : imgB1 : imgB1} alt="" />
              </div>
              <div>
                <h3 className="mb-0">
                  <Link
                    to={"/groups/job-details/" + job.id}
                    className="font-size-6 heading-default-color"
                  >
                    {job.title}
                  </Link>
                </h3>
                <Link
                  to={"/groups/job-details/" + job.id}
                  className="font-size-3 text-default-color line-height-2"
                >
                  {job.workplaceType}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right pt-7 pt-md-5">
            <div className="media justify-content-md-end">
              <div className="image mr-5 mt-2">
                <img src={imgF} alt="" />
              </div>
              <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                <span className="text-black-2">{job.minBudget} - {job.maxBudget} $</span> USD
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-8">
          <div className="col-md-7">
            <ul className="d-flex list-unstyled  text-gray-2 mr-n3 flex-wrap">
              <i className="fa fa-address-card mr-2 font-weight-bold"></i>
              Quantity: {job.quantity}
            </ul>
            <ul className="d-flex list-unstyled  text-gray-2 mr-n3 flex-wrap">
              <i className="fa fa-calendar-times mr-2 font-weight-bold"></i>
              Deadline: {job.deadline}
            </ul>
          </div>
          <div className="col-md-5">
            <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex" style={{ width: "50%" }}>
                <span
                  className="mr-4"
                  css={`
                  margin-top: -2px;
                `}
                >
                  <img src={iconL} alt="" />
                </span>
                <span className="font-weight-semibold">
                  {job.address}
                </span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span
                  className="mr-4"
                  css={`
                  margin-top: -2px;
                `}
                >
                  <img src={iconS} alt="" />
                </span>
                <span className="font-weight-semibold">
                  {job.employmentType}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Single Featured Job --> */}
    </div>
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilters(event.target[0].value, event.target[0].name);
    handleFilters(city, "cities");
    setError("");
    setSucces("");
  }

  const handleNumber = (value) => {
    return parseInt(value, 10);
  };


  const handleFilters = (filters, category) => {
    const newFilters = filter
    newFilters[category] = filters

    if (category === "minBudget") {
      let minSalaryValues = handleNumber(filters)
      newFilters[category] = minSalaryValues
    }

    if (category === "maxBudget") {
      let maxSalaryValues = handleNumber(filters)
      newFilters[category] = maxSalaryValues
    }

    if (category === "experienceYear" || category === "titles" || (category === "cities")) {
      newFilters[category] = [filters]
    }
    if ((category === "cities" && !city.length)) {
      newFilters[category] = []
    }
    if ((category === "numDayAgo" && !postTime.length)) {
      let numDayAgo = handleNumber(filters)
      newFilters[category] = numDayAgo
    }
    setFilter(newFilters);
    getProducts(newFilters);
    setError("");
    setSucces("");
  };

  return (
    <>
      <PageWrapper>
        <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-xs-8">
                <div className="widgets mb-11">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Job Type</h4>
                  <ul className="list-unstyled filter-check-list">
                    <CheckBox list={employmentType}
                      handleFilters={(filters) => handleFilters(filters, "employmentTypes")} />
                  </ul>
                </div>
                <div className="widgets mb-11">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Category</h4>
                  <ul className="list-unstyled filter-check-list">
                    <CheckBox list={listCategory}
                      handleFilters={(filters) => handleFilters(filters, "categoryIds")} />
                  </ul>
                </div>
                <div className="widgets mb-11 ">
                  <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
                    <h4 className="font-size-6 font-weight-semibold mb-6 w-75">
                      Salary Range
                    </h4>
                    {/* <!-- Range Slider --> */}

                    <div className="slider-price w-25 text-right mr-7">
                      <p className="font-weight-bold">
                        <span
                          className="text-primary font-weight-semibold font-size-4 "
                          css={`
                  white-space: nowrap;
                `}
                        >
                          ${rangeValues[0].toFixed()} - {rangeValues[1].toFixed()}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="graph text-center mx-0 mt-5 position-relative chart-postion">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="range-slider">
                    <>
                      <Range
                        values={rangeValues}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => {
                          setRangeValues(values);
                          handleFilters(values[0], "minBudget");
                          handleFilters(values[1], "maxBudget")
                        }}
                        renderTrack={({ props, children }) => (
                          <div
                            role="button"
                            tabIndex={0}
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: "15px",
                              display: "flex",
                              width: "290px",
                            }}
                          >
                            <div
                              ref={props.ref}
                              style={{
                                height: "5px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                  values: rangeValues,
                                  colors: ["#ccc", "#00b074", "#ccc"],
                                  min: MIN,
                                  max: MAX,
                                }),
                                alignSelf: "center",
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: "24px",
                              width: "24px",
                              borderRadius: "50%",
                              backgroundColor: "#FFF",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow: "none !important",
                              outline: "none !important",
                            }}
                            css={`
                    &:focus {
                      outline: none !important;
                    }
                  `}
                          ></div>
                        )}
                      />
                    </>
                  </div>
                </div>
                <div className="widgets mb-11">
                  <h4 className="font-size-6 font-weight-semibold mb-6">
                    Experience Level{" "}
                  </h4>
                  <ul className="list-unstyled filter-check-list">
                    <CheckboxRadio list={experienceYear}
                      handleFilters={(filters) => handleFilters(filters, "experienceYear")} />
                  </ul>
                </div>
                <div className="widgets mb-11">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Posted Time</h4>
                  <ul className="list-unstyled filter-check-list">
                    <CheckboxRadio list={postTime} value={postTime}
                      handleFilters={(filters) => handleFilters(filters, "numDayAgo")} />
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-8 col-xs-12 ">
                {/* <!-- form --> */}
                <form onSubmit={handleSubmit}
                  className="search-form search-2-adjustment ml-lg-0 ml-md-15"
                >
                  <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          value={title}
                          name="titles"
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="UI Designer"
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                        <Select
                          name="cities"
                          onChange={handleChange}
                          placeholder={t('defaultCountries.selectCity')}
                          options={defaultCountries}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                          isSearchable={true}
                          value={defaultCountries[selectedOptions]}
                        />

                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-city ends --> */}
                    </div>
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
                <div className="pt-12 ml-lg-0 ml-md-15">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="font-size-4 font-weight-normal text-default-color">
                      <span className="heading-default-color">{jobs.length}</span>
                      {" "}results for{" "}
                      <span className="heading-default-color">your filter</span>
                    </h5>
                    <div className="d-flex align-items-center result-view-type">
                      <button
                        style={{ outline: "none", border: "none" }}
                        className="heading-default-color pl-5 font-size-6 hover-text-hitgray"
                        onClick={() => {
                          setIsList(true);
                        }}
                      >
                        <i className="fa fa-list-ul" style={isList ? { color: "gray" } : { color: "black" }}></i>
                      </button>
                      <button
                        style={{ outline: "none", border: "none" }}
                        className="heading-default-color pl-5 font-size-6 hover-text-hitgray"
                        onClick={(e) => {
                          setIsList(false);
                        }}
                      >
                        <i className="fa fa-th-large" style={!isList ? { color: "gray" } : { color: "black" }}></i>
                      </button>
                    </div>
                  </div>
                  <div className="pt-6">
                    {error ? <div className="alert alert-danger col-12" role="alert">{error}</div> : null}
                    {success ? <div className="success alert-success col-12" role="alert">{success}</div> : null}
                    <div className="row justify-content-center">
                      {/* <!-- Start Feature One --> */}
                      {isList ? jobList : jobGrid}
                      {/* <!-- End Feature One --> */}
                    </div>
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
                {/* <!-- form end --> */}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default SearchGrid;
