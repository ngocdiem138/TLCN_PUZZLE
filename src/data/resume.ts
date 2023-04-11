import type { ResumeConfig } from '@/components/types';

export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: false,
  },
  profile: {
    name: 'Le Thi Ngoc Diem',
    email: 'lethingocdiemxt2001@gmail.com',
    mobile: '0983884000',
    github: 'https://github.com/visiky',
    linkedin: 'https://linkedin.com/people/visiky',
    workExpYear: '2',
    workPlace: 'TP.HCM',
    positionTitle: 'Front-end engineer',
  },
  educationList: [
    {
      edu_time: ['2014.09.01', '2018.06.30'],
      school: 'HCMUTE',
      major: 'Compute Science',
      academic_degree: 'Bachelor’s degree',
    },
  ],
  awardList: [
    {
      award_info: 'English CET6',
      award_time: '2015',
    },
    {
      award_info: 'Ant Guards Outstanding Individual Award ',
      award_time: '2018.09',
    },
    {
      award_info: 'Front-end Trainee Visualization Lecturer',
      award_time: '2020.10',
    },
    {
      award_info:
        'The front end chatted early and shared "How to conceive and develop an out-of-the-box visual chart library G2Plot"',
      award_time: '2021.07',
    },
  ],
  workExpList: [
    {
      company_name: 'Ant Group',
      department_name: 'Experience Technology Department',
      work_time: ['2018.06', null],
      work_desc: `1. Served as the front-end director of Ant’s executive decision-making and management collaboration product “Data War Room”\n2. Responsible for the product capacity building of the visual analysis module of Ant Agile BI product "DeepInsight"\n3. Core member of the data visualization AntV team, responsible for the construction of G2 and G2Plot open source technologies`,
    },
    {
      company_name: 'Ant Group',
      department_name: 'Big Data Department',
      work_time: ['2017.06', '2017.12'],
      work_desc:
        'Front end intern. Use React to participate in the development of various products: data research and development platform, data decision-making platform, data analysis platform research and development, and also participate in the reconstruction of large-scale BI products, and have good coding habits. ',
    },
    {
      company_name: 'Shuwo Information Technology Co., Ltd.',
      department_name: '',
      work_time: ['2017.03', '2017.05'],
      work_desc:
        'Front-end intern. Use Vue to implement platform functions and logic, and then use ECharts to display the visual results of data mining analysis',
    },
  ],
  skillList: [
    {
      skill_name: 'HTML and CSS',
      skill_desc: '',
      skill_level: 89,
    },
    {
      skill_name: 'TypeScript / JavaScript',
      skill_level: 90,
    },
    {
      skill_name: 'Data visualization',
      skill_desc: 'Rich visualization engineering practice and open source experience',
      skill_level: 90,
    },
    {
      skill_name: 'React / front-end engineering',
      skill_desc: 'Large-scale front-end project experience and component library development experience',
      skill_level: 80,
    },
  ],
  projectList: [
    {
      project_name: 'Data war room',
      project_role: 'Front end person',
      project_time: '2019.04 - 2020.06',
      project_desc:
        'Digital business decision-making and management collaboration products for presidents and executives and decision-making BI. Provide one-stop data-based business decision-making and management collaboration functions, allowing executives to efficiently obtain decision-making information and improve management efficiency. ',
      project_content:
        '1. Framework design and development of the project from 0 to 1 2. Carefully polished product experience 3. Establish a stability guarantee mechanism. It is still in iteration to help improve the efficiency of executive business decision-making',
    },
    {
      project_name: 'DeepInsight',
      project_role: 'Visual analysis leader',
      project_time: '2018.07 - 2019.04 / 2020.07 - now',
      project_desc:
        'DeepInsight is a self-service BI data insight analysis platform independently developed by Ant Group. It is aimed at enterprise analysts, business personnel and developers, and helps Ant Group achieve refined operations. ',
      project_content:
        'The core part of the BI platform tool is report production, which is the process of forming chart materials through data connection and visual configuration, then page layout by dragging and dropping, and finally forming a report page for publishing. \n1. Lead the construction of open capabilities, pull through products, design and build, and expand visual graphics to enhance the richness\n2. Optimize product experience, especially to overcome the stubborn experience of ECharts\n3. Lead the construction of visualization capabilities: business standardized chart library Construction (with rich experience in general component design and development), promotion of visual integration construction such as enhancement of data analysis capabilities',
    },
    {
      project_name: 'G2、G2Plot',
      project_role: 'core developer',
      project_time: '2019 - present',
      project_desc:
        'G2 is a visual rendering engine based on the theory of graphics grammar, and G2Plot is an out-of-the-box statistical visualization chart library packaged on the basis of G2',
      project_content:
        'AntV visualization construction empowers the entire Ant and Ali Group"s statistical visualization analysis related businesses. Responsible for the research and development of AntV series: AntV official website, G rendering engine, G2, G2Plot, ThemeSet theme builder and other open source projects. ',
    },
  ],
  workList: [
    
  ],
  aboutme: {
    aboutme_desc: `🌱 Focus on data visualization and analysis 😈 Ability items: communication and coordination ability, executive ability
    Self-driven front-end engineer, with more than three years of experience in large-scale and complex product development, responsible for the visualization construction of Ant Group's BI product DeepInsight, participated in the integrated construction from chart library to BI product strength, and has rich experience in data visualization construction in the field of business intelligence experience of.
    Participate in the research and development of the AntV team's open source projects G2 and G2Plot, and is currently the main person in charge of G2Plot.
    `,
  },
  locales: {
    'en-US': {
      profile: {
        name: 'Xiaojuan Liao',
        email: '736****86@qq.com',
        mobile: '156********',
        github: 'https://github.com/visiky',
        linkedin: 'https://linkedin.com/people/visiky',
        workExpYear: '2',
        workPlace: 'TP.HCM',
        positionTitle: 'Front-end engineer',
      },
      skillList: [
        { skill_name: 'HTML and CSS', skill_desc: '', skill_level: 89 },
        { skill_name: 'TypeScript / JavaScript', skill_level: 90 },
        {
          skill_name: 'Data Visualization',
          skill_desc: 'Rich visualization engineering practice and open source experience',
          skill_level: 90,
        },
        {
          skill_name: 'React / front-end engineering',
          skill_desc: '大型前端项目经验以及组件库开发经验',
          skill_level: 80,
        },
      ],
      avatar: { hidden: false },
      educationList: [
        {
          edu_time: ['2014.09.01', '2018.06.30'],
          school: 'HCMUTE',
          major: 'Compute Science',
          academic_degree: 'Bachelor’s degree',
        },
      ],
      awardList: [
        { award_info: 'English CET6', award_time: '2015' },
        { award_info: 'Ant Guards Outstanding Individual Award ', award_time: '2018.09' },
        { award_info: 'Front-end Trainee Visualization Lecturer', award_time: '2020.10' },
        {
          award_info:
            'The front end chatted early and shared "How to conceive and develop an out-of-the-box visual chart library G2Plot"',
          award_time: '2021.07',
        },
      ],
      workExpList: [
        {
          company_name: 'Ant Group',
          department_name: 'Experience Technology Department',
          work_time: ['2018.06', null],
          work_desc: `1. Served as the front-end director of Ant’s executive decision-making and management collaboration product “Data War Room”\n2. Responsible for the product capacity building of the visual analysis module of Ant Agile BI product "DeepInsight"\n3. Core member of the data visualization AntV team, responsible for the construction of G2 and G2Plot open source technologies`,  
        },
        {
          company_name: 'Ant Group',
          department_name: 'Big Data Department',
          work_time: ['2017.06', '2017.12'],
          work_desc:
            'Front end intern. Use React to participate in the development of various products: data research and development platform, data decision-making platform, data analysis platform research and development, and also participate in the reconstruction of large-scale BI products, and have good coding habits. ',
        },
      ],
      projectList: [
        {
          project_name: 'Data war room',
          project_role: 'Front end person',
          project_time: '2019.04 - 2020.06',
          project_desc:
            'Digital business decision-making and management collaboration products for presidents and executives and decision-making BI. Provide one-stop data-based business decision-making and management collaboration functions, allowing executives to efficiently obtain decision-making information and improve management efficiency. ',
          project_content:
            '1. Framework design and development of the project from 0 to 1 2. Carefully polished product experience 3. Establish a stability guarantee mechanism. It is still in iteration to help improve the efficiency of executive business decision-making',
        },
        {
          project_name: 'DeepInsight',
          project_role: 'Visual analysis leader',
          project_time: '2018.07 - 2019.04 / 2020.07 - now',
          project_desc:
            'DeepInsight is a self-service BI data insight analysis platform independently developed by Ant Group. It is aimed at enterprise analysts, business personnel and developers, and helps Ant Group achieve refined operations. ',
          project_content:
            'The core part of the BI platform tool is report production, which is the process of forming chart materials through data connection and visual configuration, then page layout by dragging and dropping, and finally forming a report page for publishing. \n1. Lead the construction of open capabilities, pull through products, design and build, and expand visual graphics to enhance the richness\n2. Optimize product experience, especially to overcome the stubborn experience of ECharts\n3. Lead the construction of visualization capabilities: business standardized chart library Construction (with rich experience in general component design and development), promotion of visual integration construction such as enhancement of data analysis capabilities',
        },
        {
          project_name: 'G2、G2Plot',
          project_role: 'core developer',
          project_time: '2019 - present',
          project_desc:
            'G2 is a visual rendering engine based on the theory of graphics grammar, and G2Plot is an out-of-the-box statistical visualization chart library packaged on the basis of G2',
          project_content:
            'AntV visualization construction empowers the entire Ant and Ali Group"s statistical visualization analysis related businesses. Responsible for the research and development of AntV series: AntV official website, G rendering engine, G2, G2Plot, ThemeSet theme builder and other open source projects. ',
        },
      ],
      workList: [],
      aboutme: {
        aboutme_desc: `🌱 Focus on data visualization and analysis 😈 Ability items: communication and coordination ability, executive ability
        Self-driven front-end engineer, with more than three years of experience in large-scale and complex product development, responsible for the visualization construction of Ant Group's BI product DeepInsight, participated in the integrated construction from chart library to BI product strength, and has rich experience in data visualization construction in the field of business intelligence experience of.
        Participate in the research and development of the AntV team's open source projects G2 and G2Plot, and is currently the main person in charge of G2Plot.
        `,
      },
    },
  },
};
