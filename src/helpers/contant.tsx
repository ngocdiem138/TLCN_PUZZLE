import React from 'react';
import {
  ProfileTwoTone,
  ContactsTwoTone,
  SmileTwoTone,
  TrophyTwoTone,
  TagsTwoTone,
  RocketTwoTone,
  ProjectTwoTone,
  ToolTwoTone,
  ScheduleTwoTone,
} from '@ant-design/icons';
import _ from 'lodash-es';
import type { ResumeConfig } from '../components/types';

/**
 * ① 内置的简历模块
 * ② 后续支持添加自定义模块
 */
export const MODULES = ({
  // intl,
  titleNameMap,
}: {
  // intl: any;
  titleNameMap?: ResumeConfig['titleNameMap'];
}) => {
  return [
    {
      name: 'Avatar',
      icon: <ContactsTwoTone />,
      key: 'avatar',
    },
    {
      name: 'Personal information',
      icon: <ProfileTwoTone />,
      key: 'profile',
    },
    {
      name: 'Educational background',
      icon: <ScheduleTwoTone />,
      key: 'educationList',
    },
    {
      name: 'Introduction',
      icon: <SmileTwoTone />,
      key: 'aboutme',
    },
    {
      name: 'More information',
      icon: <TrophyTwoTone />,
      key: 'awardList',
    },
    {
      name: 'Personal works',
      icon: <ToolTwoTone />,
      key: 'workList',
    },
    {
      name: 'Professional skills',
      icon: <RocketTwoTone />,
      key: 'skillList',
    },
    {
      name: 'Work experience',
      icon: <TagsTwoTone />,
      key: 'workExpList',
    },
    {
      name: 'Project experience',
      icon: <ProjectTwoTone />,
      key: 'projectList',
    },
  ]
  // .map(d => {
  //   const name = _.get(titleNameMap, d.key);
  //   return { ...d, name: _.isNil(name) ? d.name : name };
  // })
  ;
};

/**
 * 模块对应配置内容
 */
export const CONTENT_OF_MODULE = () => {
  return {
    avatar: [
      {
        type: 'checkbox',
        attributeId: 'hidden',
        displayName: "Hide avatar",
        formItemProps: {
          valuePropName: 'checked',
        },
        cfg: {
          checked: false,
        },
      },
      {
        type: 'select',
        attributeId: 'shape',
        displayName: "Avatar shape",
        cfg: {
          defaultValue: 'circle',
          options: [
            { value: 'circle', label: "circle" },
            { value: 'square', label: "square" },
          ],
        },
      },
    ],
    profile: [
      {
        type: 'input',
        attributeId: 'name',
        displayName: 'Fullname',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'mobile',
        displayName: 'Mobile',
        formItemProps: {
          rules: [
            { required: true, message: 'Please input your phone number!' },
          ],
        },
      },
      {
        type: 'input',
        attributeId: 'email',
        displayName: 'Email',
        formItemProps: {
          rules: [{ required: true, message: 'Please input your email!' }],
        },
      },
      {
        type: 'input',
        attributeId: 'github',
        displayName: 'Github',
        cfg: {
          placeholder: 'Please input your github account, optional',
        },
      },
      {
        type: 'input',
        attributeId: 'linkedin',
        displayName: 'Linkedin',
        cfg: {
          placeholder:
            'Please input the link to visit your linkedin account, optional',
        },
      },
      {
        type: 'input',
        attributeId: 'workExpYear',
        displayName: 'Work experience',
      },
      {
        type: 'input',
        attributeId: 'workPlace',
        displayName: 'Work space',
      },
      {
        type: 'input',
        attributeId: 'positionTitle',
        displayName: 'Position title',
      },
    ],
    educationList: [
      {
        type: 'input',
        attributeId: 'edu_time',
        displayName: 'Start time',
        formItemProps: { rules: [{ required: true }] },
        cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'school',
        // displayName: intl.formatMessage({ id: '学校' }),
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'major',
        // displayName: intl.formatMessage({ id: '专业' }),
      },
    ],
    projectList: [
      {
        type: 'input',
        attributeId: 'project_time',
        // displayName: intl.formatMessage({ id: '起止时间' }),
        formItemProps: { rules: [{ required: true }] },
        // cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'project_name',
        // displayName: intl.formatMessage({ id: '项目名称' }),
      },
      {
        type: 'input',
        attributeId: 'project_role',
        // displayName: intl.formatMessage({ id: '担任角色' }),
      },
      {
        type: 'textArea',
        attributeId: 'project_desc',
        // displayName: intl.formatMessage({ id: '项目描述' }),
        cfg: { autoSize: { minRows: 8 }, showCount: true },
      },
      {
        type: 'textArea',
        attributeId: 'project_content',
        // displayName: intl.formatMessage({ id: '主要工作' }),
        cfg: {
          autoSize: { minRows: 8 },
          showCount: true,
        },
        formItemProps: {
          style: { marginTop: 25 },
        },
      },
    ],
    workExpList: [
      {
        type: 'input',
        attributeId: 'work_time',
        // displayName: intl.formatMessage({ id: '起止时间' }),
        formItemProps: { rules: [{ required: true }] },
        // cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'company_name',
        // displayName: intl.formatMessage({ id: '公司名称' }),
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'department_name',
        // displayName: intl.formatMessage({ id: '部门' }),
      },
      {
        type: 'textArea',
        attributeId: 'work_desc',
        // displayName: intl.formatMessage({ id: '职位或描述' }),
      },
    ],
    workList: [
      {
        type: 'input',
        attributeId: 'work_name',
        // displayName: intl.formatMessage({ id: '作品名称' }),
      },
      {
        type: 'input',
        attributeId: 'work_desc',
        // displayName: intl.formatMessage({ id: '作品描述' }),
      },
      {
        type: 'input',
        attributeId: 'visit_link',
        // displayName: intl.formatMessage({ id: '作品链接' }),
      },
    ],
    skillList: [
      {
        type: 'input',
        attributeId: 'skill_name',
        // displayName: intl.formatMessage({ id: '技能项' }),
      },
      {
        type: 'number',
        attributeId: 'skill_level',
        // displayName: intl.formatMessage({ id: '掌握程度' }),
        cfg: {
          step: 20,
          min: 0,
          max: 100,
          formatter: value => `${value}%`,
          // parser: value => _.replace(value, '%', ''),
        },
      },
      {
        type: 'textArea',
        attributeId: 'skill_desc',
        // displayName: intl.formatMessage({ id: '技能描述' }),
      },
    ],
    awardList: [
      {
        type: 'input',
        attributeId: 'award_time',
        // displayName: intl.formatMessage({ id: '获奖时间' }),
        formItemProps: { rules: [{ required: true }] },
        // cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'award_info',
        // displayName: intl.formatMessage({ id: '奖项内容' }),
        formItemProps: { rules: [{ required: true }] },
      },
    ],
    aboutme: [
      {
        type: 'textArea',
        attributeId: 'aboutme_desc',
        cfg: { autoSize: { minRows: 4 }, showCount: true },
      },
    ],
  };
};
