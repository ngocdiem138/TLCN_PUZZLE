import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import { useEffect } from "react";
import { useState, useMemo } from "react";
import { useLocation } from "@reach/router";
import { parse } from "query-string";
import { JobPostServiceIml } from "../actions/user-actions";
import { useTranslation } from 'react-i18next';
import { Link } from "gatsby";
import { Form } from 'react-bootstrap';
import ReactJsAlert from "reactjs-alert";
import { REDIRECT_BASE_URL } from "../utils/constants/url";
import dynamic from 'next/dynamic';
import "react-quill/dist/quill.snow.css";

const defaultTypes = [
    { value: "b2b", label: "B2B" },
    { value: "saas", label: "SAAS" },
    { value: "b2b", label: "b2b" },
];

const defaultEmployees = [
    { value: "10-50", label: "10-50" },
    { value: "50-100", label: "50-100" },
    { value: "100-500", label: "100-500" },
    { value: "500-2000", label: "500-2000" },
];

const defaultLocations = [
    { value: "bd", label: "Bangladesh" },
    { value: "sp", label: "Singapore" },
    { value: "tl", label: "Thailand" },
    { value: "de", label: "Germany" },
];

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
    clipboard: {
        matchVisual: false,
    },
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
];

const DashboardSettings = () => {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    const { t, i18n } = useTranslation()
    const defaultCountries = [
        { id: 0, value: "Đà Nẵng", label: t('defaultCountries.DaNang') },
        { id: 1, value: "Tp Hồ Chí Minh", label: t('defaultCountries.HCM') },
        { id: 2, value: "Hà Nội", label: t('defaultCountries.HaNoi') },
        { id: 3, value: "Cần Thơ", label: t('defaultCountries.CanTho') },
    ];

    const employmentTypeData = [
        { id: 0, "name": "FULL_TIME", "label": t('employmentTypeData.FullTime'), value: "FULL_TIME" },
        { id: 1, "name": "PART_TIME", "label": t('employmentTypeData.PartTime'), value: "PART_TIME" },
        { id: 2, "name": "INTERNSHIP", "label": t('employmentTypeData.Internship'), value: "INTERNSHIP" },
        { id: 3, "name": "FREELANCE", "label": t('employmentTypeData.Freelance'), value: "FREELANCE" },
        { id: 4, "name": "CONTRACT", "label": t('employmentTypeData.Contract'), value: "CONTRACT" },
        { id: 5, "name": "TEMPORARY", "label": t('employmentTypeData.Temporary'), value: "TEMPORARY" },
    ]

    const location = useLocation();
    const searchParams = parse(location.search);
    const id = searchParams.id;

    const [number, setNumber] = useState('')
    const [title, setTitle] = useState('')
    const [blind, setBlind] = useState('')
    const [deaf, setDeaf] = useState('')
    const [handDis, setHandDis] = useState('')
    const [labor, setLabor] = useState('')
    const [city, setCity] = useState(defaultCountries[0].value)
    const [address, setAddress] = useState('')
    const [workplaceType, setWorkplaceType] = useState('')
    const [workStatus, setWorkStatus] = useState('')
    const [communicationDis, setCommunicationDis] = useState('')
    const [skills, setSkills] = useState('')
    const [level, setLevel] = useState('')

    const [type, setType] = useState('')
    const [quantity, setQuantity] = useState('')
    const [experienceYear, setExperienceYear] = useState('')
    const [educationLevel, setEducationLevel] = useState('')
    const [employmentType, setEmploymentType] = useState(employmentTypeData[0].value)
    const [minBudget, setMinBudget] = useState('')
    const [maxBudget, setMaxBudget] = useState('')
    const [dueTime, setDueTime] = useState('')
    const [description, setDescription] = useState('')
    const [selectedOptions, setSelectedOptions] = useState(0);
    const [selectedEmploymentTypeOptions, setSelectedOEmploymentTypeOptions] = useState(0);
    const [showAlert, setShowAlert] = useState(false)


    // const navigate = useHistory();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            saveOrUpdateJobPost(event);
        }
        setValidated(true);

    };

    const saveOrUpdateJobPost = (e) => {
        e.preventDefault();

        const jobPost = {
            id, title, blind, deaf, handDis, description, labor, city, address, workplaceType, workStatus, communicationDis
            , communicationDis, skills, level, type, quantity, experienceYear, educationLevel, employmentType, minBudget, maxBudget, dueTime
        }

        console.log(jobPost);

        if (id != 'new') {
            jobPost.id = id;
            JobPostServiceIml.updateJobPost(jobPost).then((response) => {
                if (!response.data.errCode) {
                    setShowAlert(true);
                }
                // navigate.push('/employer/jobs')
            }).catch(error => {
                console.log(error)
            })

        } else {

            jobPost.number = parseInt(jobPost.number);
            const { id, ...data } = jobPost
            JobPostServiceIml.createJobPost(data).then((response) => {
                if (!response.data.errCode) {
                    setShowAlert(true);
                }

                console.log(response.data)

                // navigate.push('/employer/jobs');

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        JobPostServiceIml.getJobPostById(id).then((response) => {
            if (!response.data.errCode) {
                setNumber(response.data.data.id)
                setTitle(response.data.data.title)
                setBlind(response.data.data.blind)
                setDeaf(response.data.data.deaf)
                setHandDis(response.data.data.handDis)
                setLabor(response.data.data.labor)
                setCity(response.data.data.city)
                setAddress(response.data.data.address)
                setDescription(response.data.data.description)
                setWorkplaceType(response.data.data.workplaceType)
                setWorkStatus(response.data.data.workStatus)
                setSkills(response.data.data.skills)
                setCommunicationDis(response.data.data.communicationDis)
                setLevel(response.data.data.level)
                setType(response.data.data.type)
                setQuantity(response.data.data.quantity)
                setExperienceYear(response.data.data.experienceYear)
                setEducationLevel(response.data.data.educationLevel)
                setType(response.data.data.type)
                setMinBudget(response.data.data.minBudget)
                setMaxBudget(response.data.data.maxBudget)
                setDueTime(response.data.data.dueTime)
                setEmploymentType(response.data.data.employmentType)
                handleDropdown(response.data.data.city, response.data.data.employmentType);
            }
            else {
                setNumber('-1')
                setTitle('')
                setBlind('')
                setDeaf('')
                setHandDis('')
                setLabor('')
                setCity(defaultCountries[0].value)
                setAddress('')
                setWorkplaceType('')
                setWorkStatus('')
                setSkills('')
                setCommunicationDis('')
                setLevel('')
                setType('')
                setQuantity('')
                setExperienceYear('')
                setEducationLevel('')
                setType('')
                setMinBudget('')
                setMaxBudget('')
                setDueTime('')
                setEmploymentType(employmentTypeData[0].value)
            }
        })
    }, [id])

    const titlePage = <h2>{id != 'new' ? 'Edit JobPost information' : 'New JobPost'}</h2>;
    const action = <div>{id != 'new' ? 'Edit JobPost' : 'Create JobPost'}</div>;


    const handleChange = (event) => {
        setCity(event.value);
        console.log(event.value);
        setSelectedOptions(event.id);
        console.log(event.id);
    };

    const handleDropdown = (cityGetFromDB, employmentTypeGetFromDB) => {
        if (cityGetFromDB != null) {
            const cityEl = defaultCountries.find(element => element.value == cityGetFromDB);
            if (cityEl) {
                setSelectedOptions(cityEl.id);
            }
        }
        if (employmentTypeGetFromDB != null) {
            const employmentTypeEl = employmentTypeData.find(element => element.value == employmentTypeGetFromDB);
            if (employmentTypeEl) {
                setSelectedOEmploymentTypeOptions(employmentTypeEl.id);
            }
        }
    }


    const handleChangeEmploymentType = (event) => {
        setEmploymentType(event.value);
        setSelectedOEmploymentTypeOptions(event.id);
        console.log(event.id);
    };

    const redirect = () => {
        window.location.assign(REDIRECT_BASE_URL + "/dashboard-jobs")
    }


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
                <div
                    className="dashboard-main-container mt-24 mt-lg-31"
                    id="dashboard-body"
                >
                    <div className="container">
                        <ReactJsAlert
                            type="success"   // success, warning, error, info
                            title="Save successfully"   // title you want to display
                            status={showAlert}  // true or false
                            color="#1d36ad"
                            quotes={true}
                            quote="Save successfully! Redirect to Posted Jobs page."
                            Close={redirect}   // callback method for hide
                        />
                        <div className="mb-15 mb-lg-23">
                            <div className="row">
                                <div className="col-xxxl-9 px-lg-13 px-6">
                                    <h5 className="font-size-6 font-weight-semibold mb-11">
                                        {titlePage}
                                    </h5>
                                    <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <fieldset>
                                                <div className="row mb-xl-1 mb-9">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="namedash"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Title Job
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control h-px-48"
                                                                id="namedash"
                                                                placeholder="eg. Apple"
                                                                value={title}
                                                                onChange={(e) => setTitle(e.target.value)} required
                                                            />
                                                            {/* <input type="text" class="form-control" value={title}
                                                                onChange={(e) => setTitle(e.target.value)} required></input> */}
                                                            <div class="valid-feedback">Valid.</div>
                                                            <div class="invalid-feedback">Please fill out this field.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="select2"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                City
                                                            </label>
                                                            <Select
                                                                onChange={handleChange}
                                                                placeholder={t('defaultCountries.selectCity')}
                                                                value={defaultCountries[selectedOptions]}
                                                                options={defaultCountries}
                                                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100"
                                                                border={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-xl-1 mb-9">
                                                    <div className="col-lg-6 mb-xl-0 mb-7">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="select3"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Min Budget{" "}
                                                            </label>
                                                            <input
                                                                type="number"
                                                                className="form-control h-px-48"
                                                                id="minBudget"
                                                                placeholder="300"
                                                                min="0"
                                                                value={minBudget}
                                                                onChange={(e) => setMinBudget(e.target.value)} required
                                                            />
                                                            <div class="valid-feedback">Valid.</div>
                                                            <div class="invalid-feedback">Please fill out this field.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="address"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Max Budget
                                                            </label>
                                                            <input
                                                                type="number"
                                                                className="form-control h-px-48"
                                                                id="maxBudget"
                                                                placeholder="1000"
                                                                min="0"
                                                                value={maxBudget}
                                                                onChange={(e) => setMaxBudget(e.target.value)} required
                                                            />
                                                            <div class="valid-feedback">Valid.</div>
                                                            <div class="invalid-feedback">Please fill out this field.</div>
                                                            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-xl-1 mb-9">
                                                    <div className="col-lg-6 mb-xl-0 mb-7">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="select3"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Work Place{" "}
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control h-px-48"
                                                                id="workplaceType"
                                                                placeholder="Office"
                                                                value={workplaceType}
                                                                onChange={(e) => setWorkplaceType(e.target.value)}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="address"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Employment Type
                                                            </label>
                                                            <Select
                                                                onChange={handleChangeEmploymentType}
                                                                placeholder={t('employmentTypeData.FullTime')}
                                                                value={employmentTypeData[selectedEmploymentTypeOptions]}
                                                                options={employmentTypeData}
                                                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100"
                                                                border={false}
                                                            />
                                                            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-xl-1 mb-9">
                                                    <div className="col-lg-6 mb-xl-0 mb-7">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="select3"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Quantity{" "}
                                                            </label>
                                                            <input
                                                                type="number"
                                                                className="form-control h-px-48"
                                                                id="quantity"
                                                                placeholder="3"
                                                                min="0"
                                                                value={quantity}
                                                                onChange={(e) => setQuantity(e.target.value)} required
                                                            />
                                                            <div class="valid-feedback">Valid.</div>
                                                            <div class="invalid-feedback">Please fill out this field.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="address"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Experience Year
                                                            </label>
                                                            <input
                                                                type="number"
                                                                className="form-control h-px-48"
                                                                id="experienceYear"
                                                                placeholder="3"
                                                                min="0"
                                                                value={experienceYear}
                                                                onChange={(e) => setExperienceYear(e.target.value)} required
                                                            />
                                                            <div class="valid-feedback">Valid.</div>
                                                            <div class="invalid-feedback">Please fill out this field.</div>
                                                            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-xl-1 mb-9">
                                                    <div className="col-lg-6 mb-xl-0 mb-7">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="select3"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Education Level{" "}
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control h-px-48"
                                                                id="educationLevel"
                                                                placeholder="master"
                                                                value={educationLevel}
                                                                onChange={(e) => setEducationLevel(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group position-relative">
                                                            <label
                                                                htmlFor="address"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Due Time
                                                            </label>
                                                            <input
                                                                type="date"
                                                                className="form-control h-px-48"
                                                                style={{ "line-height": "inherit" }}
                                                                id="dueTime"
                                                                value={dueTime ? dueTime.split(' ')[0] : dueTime}
                                                                onChange={(e) => setDueTime(e.target.value + " 00:00:00")} required
                                                            />
                                                            <div class="valid-feedback">Valid.</div>
                                                            <div class="invalid-feedback">Please fill out this field.</div>
                                                            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-8">
                                                    <div className="col-lg-3">
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="namedash"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Blind
                                                            </label>
                                                            <select name="blind" id="blind" class="form-control" value={blind}
                                                                onChange={(e) => setBlind(e.target.value)} >
                                                                <option value="false">Not Allow</option>
                                                                <option value="true">Allow</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="select2"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                HandDis
                                                            </label>
                                                            <select name="handDis" id="handDis" class="form-control" defaultValue={true} value={handDis}
                                                                onChange={(e) => setHandDis(e.target.value)} >
                                                                <option value="false">Not Allow</option>
                                                                <option value="true">Allow</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="select2"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Labor
                                                            </label>
                                                            <select name="labor" id="labor" class="form-control" value={labor}
                                                                onChange={(e) => setLabor(e.target.value)} >
                                                                <option value="false">Not Allow</option>
                                                                <option value="true">Allow</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="select2"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Deaf
                                                            </label>
                                                            <select name="deaf" id="deaf" class="form-control" value={deaf}
                                                                onChange={(e) => setDeaf(e.target.value)} >
                                                                <option value="false">Not Allow</option>
                                                                <option value="true">Allow</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="aboutTextarea"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Description
                                                            </label>
                                                            <ReactQuill
                                                                style={{ width: "100%", margin: "0px", maxWidth: "100%" }}
                                                                theme="snow"
                                                                onChange={(e) => setDescription(e)} required
                                                                value={description}
                                                                modules={modules}
                                                                formats={formats}
                                                                placeholder="Describe about the job what make it unique"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-11">
                                                            <label
                                                                htmlFor="formGroupExampleInput"
                                                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                                            >
                                                                Address
                                                            </label>
                                                            <input
                                                                value={address}
                                                                onChange={(e) => setAddress(e.target.value)}
                                                                type="text"
                                                                className="form-control"
                                                                id="formGroupExampleInput"
                                                                placeholder="1, Vo Van Ngan"
                                                            />
                                                        </div>
                                                        <div class="row">
                                                            <div className="col-md-7"></div>
                                                            <div class="col-md-2">
                                                                <Link to={"/dashboard-jobPost?id=" + id} className="btn btn-dark"> Cancel </Link>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <button type="button submit" class="btn btn-primary" >{action}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </Form>
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
export default DashboardSettings;
