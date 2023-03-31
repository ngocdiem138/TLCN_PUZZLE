import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

import SearchTab from "../sections/search/SearchTab";

import { useLocation } from "@reach/router";
import { parse } from "query-string";

import { JobPostServiceIml } from "../actions/user-actions";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const SearchGrid = () => {
  const { t, i18n } = useTranslation()

  const postTime = [
    { "id": "postTime", "name": "postTime", value: -1, "label": t('postTime.all') },
    { "id": "postTime", "name": "postTime", value: 1, "label": t("postTime.oneDayAgo") },
    { "id": "postTime", "name": "postTime", value: 3, "label": t("postTime.threeDayAgo") },
    { "id": "postTime", "name": "postTime", value: 7, "label": t("postTime.oneWeekAgo") },
  ]
  const defaultCountries = [
    { id: 0, value: "", label: t('defaultCountries.selectCity') },
    { id: 1, value: "Tp Hồ Chí Minh", label: t('defaultCountries.HCM') },
    { id: 2, value: "Hà Nội", label: t('defaultCountries.HaNoi') },
    { id: 3, value: "Cần Thơ", label: t('defaultCountries.CanTho') },
    { id: 4, value: "Đà Nẵng", label: t('defaultCountries.DaNang') },
  ];
  const experienceYear = [
    { "id": "experienceYear", "name": "experienceYear", value: -1, "label": t('experienceYear.all') },
    { "id": "experienceYear", "name": "experienceYear", value: 2, "label": t('experienceYear.junior') },
    { "id": "experienceYear", "name": "experienceYear", value: 3, "label": t('experienceYear.mid') },
    { "id": "experienceYear", "name": "experienceYear", value: 5, "label": t('experienceYear.senior') },
  ]

  const employmentTypeSelect = [
    { "name": "", "label": t('employmentTypeData.All'), value: "" },
    { "name": "FULL_TIME", "label": t('employmentTypeData.FullTime'), value: "Full Time" },
    { "name": "PART_TIME", "label": t('employmentTypeData.PartTime'), value: "Part Time" },
    { "name": "INTERNSHIP", "label": t('employmentTypeData.Internship'), value: "Internship" },
    { "name": "FREELANCE", "label": t('employmentTypeData.Freelance'), value: "Freelance" },
    { "name": "CONTRACT", "label": t('employmentTypeData.Contract'), value: "Contract" },
    { "name": "TEMPORARY", "label": t('employmentTypeData.Temporary'), value: "Temporary" },
  ]
  const defaultSalaryRange = [
    { value: [null, null], label: t('salary.all') },
    { value: [0, 500], label: "< 500$" },
    { value: [500, 1000], label: "500 - 1000$" },
    { value: [1000, 2000], label: "1000 - 2000$" },
    { value: [2000, 5000], label: "2000 - 5000$" },
    { value: [5000, 10000], label: "5000 - 10000$" },
    { value: [10000, 15000], label: "10000 - 15000$" },
  ];
  const location = useLocation();
  const searchParams = parse(location.search);
  const [city, setCity] = useState([searchParams.city]);
  const [title, setTitle] = useState([searchParams.title]);
  const [selectedOptions, setSelectedOptions] = useState(0);
  const [selectedPostTimeOptions, setSelectedPostTimeOptions] = useState(0);
  
  useEffect(() => {
    console.log(filter);
    defaultCountries.forEach((city) => {
      if (city.value == searchParams.city) {
        setSelectedOptions(city.id)
      }
    })
    JobPostServiceIml.getJobByFilterParams({
      titles: [searchParams.title],
      cities: [searchParams.city],
    }).then((response) => { setJobs(response.data.data); });
  }, [])
  const [jobs, setJobs] = useState([]);
  const handleChange = (event) => {
    setCity(event.value);
    setSelectedOptions(event.id);
    console.log(event.id);
  };
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");

  const [filter, setFilter] = useState({
    minBudget: null,
    maxBudget: null,
    experienceYear: [],
    employmentTypes: [],
    titles: [searchParams.title],
    cities: [searchParams.city],
    positions: [],
    skills: [],
    others: [],
    numDayAgo: -1
  });

  const handleFilters = (filters, category) => {
    const newFilters = filter
    if (category === "experienceYear" || category === "titles" || category === "cities" || category === "employmentTypes") {
      newFilters[category] = [filters]
    } else if (category === "salary") {
      let minBudget = filters[0]
      let maxBudget = filters[1]
      newFilters["minBudget"] = minBudget
      newFilters["maxBudget"] = maxBudget
    } else { newFilters[category] = filters }
    setFilter(newFilters);
    getProducts(newFilters);
    setError("");
    setSucces("");
  };
  const getProducts = (variables) => {
    JobPostServiceIml.getJobByFilterParams(variables).then((response) => { setJobs(response.data.data); });
  };



  return (
    <>
      <PageWrapper>
        <div className="bg-black-2 mt-15 mt-lg-22 pt-18 pt-lg-13 pb-13">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- form --> */}
                <form className="search-form" >
                  <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-7 pl-6  search-1-adjustment">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-xl-50">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          value={title}
                          name="titles"
                          onChange={(e) => {
                            handleFilters(e.target.value, "titles"); setTitle(e.target.value)
                          }}
                          placeholder={t('search.searchTitle')}
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-50">
                        <Select
                          name="cities"
                          onChange={(e) => {
                            handleFilters(e.value, "cities"); setSelectedOptions(e.id); setCity(e.value);
                          }}
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-default-1 pt-9 pb-13 pb-xl-30 pb-13 position-relative overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-12">
                <h2 className="font-size-8 mb-6">
                  {t('search.searching')}{' "'}{title != "" ? title : t('search.all')}{'" '}{t('search.titleIn')}{' "'}{city != "" ? city : "All"}{'" '}{t('search.inCity')}
                </h2>
                <form className="mb-8">
                  <div className="search-filter from-group d-flex align-items-center flex-wrap">
                    <div className="mr-5 mb-5">
                      <Select
                        onChange={(e) => {
                          handleFilters(e.name, "employmentTypes")
                        }}
                        options={employmentTypeSelect}
                        className="font-size-4"
                        css={`
                          min-width: 175px;
                          min-width: 175px;
                        `}

                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        onChange={(e) => {
                          handleFilters(e.value, "salary")
                        }}
                        options={defaultSalaryRange}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        onChange={(e) => {
                          handleFilters(e.value, "experienceYear")
                        }}
                        options={experienceYear}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        placeholder={t('postTime.all')}
                        onChange={(e) => {
                          handleFilters(e.value, "numDayAgo"),
                          setSelectedPostTimeOptions(e.id);
                        }}
                        options={postTime}
                        className="font-size-4"
                        value={postTime[selectedPostTimeOptions]}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                  </div>
                </form>
                <div className="d-flex align-items-center justify-content-between mb-6">
                  <h5 className="font-size-4 font-weight-normal text-gray">
                    {t('search.showing')}{" "}
                    <span className="text-black-2">{jobs.length}</span> {t('search.matchResult')}
                  </h5>
                </div>
              </div>
            </div>
            <SearchTab listJob={jobs} />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default SearchGrid;
