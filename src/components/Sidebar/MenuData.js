const employmentType = [
    {"name": "FULL_TIME", "label":"Full Time", value:"Full Time"},
    {"name": "PART_TIME", "label":"Part Time", value:"Part Time"},
    {"name": "INTERNSHIP", "label":"Internship", value:"Internship"},
    {"name": "FREELANCE", "label":"Freelance", value:"Freelance"},
    {"name": "CONTRACT", "label":"Contract", value:"Contract"},
    {"name": "TEMPORARY", "label":"Temporary", value:"Temporary"},
]

const experienceYear = [
    {"id": "experienceYear", "name": "experienceYear", value:-1, "label":"All"},
    {"id": "experienceYear", "name": "experienceYear", value: 2, "label":"Junior (2 years)"},
    {"id": "experienceYear", "name": "experienceYear", value: 3, "label":"Mid (3 years)"},
    {"id": "experienceYear", "name": "experienceYear", value: 5, "label":"Senior (5 years)"},
]

const postTime = [
    {"id": "postTime", "name": "postTime", value:-1, "label":"All"},
    {"id": "postTime", "name": "postTime", value:1, "label":"Last day"},
    {"id": "postTime", "name": "postTime", value:3, "label":"Last 3 days"},
    {"id": "postTime", "name": "postTime", value:7, "label":"Last week"},
]

export {employmentType, experienceYear, postTime};