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
        displayName: 'School',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'major',
        displayName: 'Major in',
      },
    ],
    projectList: [
      {
        type: 'input',
        attributeId: 'project_time',
        displayName: 'Start and end time',
        formItemProps: { rules: [{ required: true }] },
        cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'project_name',
        displayName: 'Project name',
      },
      {
        type: 'input',
        attributeId: 'project_role',
        displayName: 'Project role"',
      },
      {
        type: 'textArea',
        attributeId: 'project_desc',
        displayName: 'Description',
        cfg: { autoSize: { minRows: 8 }, showCount: true },
      },
      {
        type: 'textArea',
        attributeId: 'project_content',
        displayName: 'Main work',
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
        displayName: 'Start and end time',
        formItemProps: { rules: [{ required: true }] },
        cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'company_name',
        displayName: 'Company name',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'department_name',
        displayName: 'Department',
      },
      {
        type: 'textArea',
        attributeId: 'work_desc',
        displayName: 'Job title or description',
      },
    ],
    workList: [
      {
        type: 'input',
        attributeId: 'work_name',
        displayName: 'Work name',
      },
      {
        type: 'input',
        attributeId: 'work_desc',
        displayName: 'Work description',
      },
      {
        type: 'input',
        attributeId: 'visit_link',
        displayName: 'Work link',
      },
    ],
    skillList: [
      {
        type: 'input',
        attributeId: 'skill_name',
        displayName: 'Skill',
      },
      {
        type: 'number',
        attributeId: 'skill_level',
        displayName: 'Degree of mastery',
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
        displayName: 'Skill description',
      },
    ],
    awardList: [
      {
        type: 'input',
        attributeId: 'award_time',
        displayName: 'Awards time',
        formItemProps: { rules: [{ required: true }] },
        cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'award_info',
        displayName: 'Awards description',
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
