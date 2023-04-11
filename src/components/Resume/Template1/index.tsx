import React from 'react';
import { Rate, Tag } from 'antd';
import {
  MobileFilled,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
  TrophyFilled,
  CheckCircleFilled,
  ScheduleFilled,
  CrownFilled,
  EnvironmentFilled,
  HeartFilled,
} from '@ant-design/icons';
import _ from 'lodash-es';
// import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { getDefaultTitleNameMap } from '@/data/constant';
import { Avatar } from '../../Avatar';
import type { ResumeConfig, ThemeConfig } from '../../types';
import './index.less';
import skill from '../../../assets/image/skill.png';
import workExperience from '../../../assets/image/work-experience.png';

type Props = {
  value: ResumeConfig;
  theme: ThemeConfig;
};

const wrapper = ({ id, title, color }) => WrappedComponent => {
  return (
    <section>
      <div className="section-header">
        {id && (
          <img src={id=='skill'?skill:workExperience} alt="" width="26px" height="26px" />
        )}
        <h1 style={{ background: color }}>{title}</h1>
      </div>
      <div className="section-body">{WrappedComponent}</div>
    </section>
  );
};

export const Template1: React.FC<Props> = props => {
  const { value, theme } = props;

  const profile = _.get(value, 'profile');

  const educationList = _.get(value, 'educationList');

  const workExpList = _.get(value, 'workExpList');

  const projectList = _.get(value, 'projectList');

  const skillList = _.get(value, 'skillList');

  const awardList = _.get(value, 'awardList');

  const workList = _.get(value, 'workList');

  const aboutme = _.split(_.get(value, ['aboutme', 'aboutme_desc']), '\n');

  return (
    <div className="template1-resume resume-content">
      <div className="basic-info">
        {!value?.avatar?.hidden && (
          <Avatar
            avatarSrc={value?.avatar?.src}
            className="avatar"
            shape={value?.avatar?.shape}
            size={value?.avatar?.size}
          />
        )}
        <div className="profile">
          {profile?.name && <div className="name">{profile.name}</div>}
          <div className="profile-list">
            {profile?.mobile && (
              <div className="email">
                <MobileFilled style={{ color: theme.color, opacity: 0.85 }} />
                {profile.mobile}
              </div>
            )}
            {profile?.email && (
              <div className="email">
                <MailFilled style={{ color: theme.color, opacity: 0.85 }} />
                {profile.email}
              </div>
            )}
            {profile?.github && (
              <div className="github">
                <GithubFilled style={{ color: theme.color, opacity: 0.85 }} />
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    window.open(profile.github);
                  }}
                >
                  {profile.github}
                </span>
              </div>
            )}
            {profile?.linkedin && (
              <div className="github">
                <LinkedinFilled
                  style={{ color: theme.color, opacity: 0.85 }}
                />
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    window.open(profile.linkedin);
                  }}
                >
                  {profile.linkedin}
                </span>
              </div>
            )}
            {profile?.workExpYear && (
              <div className="work-exp-year">
                <ScheduleFilled style={{ color: theme.color, opacity: 0.85 }} />
                <span>
                {"Work experience"}: {profile.workExpYear}
                </span>
              </div>
            )}
            {profile?.workPlace && (
              <div className="work-place">
                <EnvironmentFilled
                  style={{ color: theme.color, opacity: 0.85 }}
                />
                <span>
                {"Work space"}: {profile.workPlace}
                </span>
              </div>
            )}
            {profile?.positionTitle && (
              <div className="expect-job">
                <HeartFilled style={{ color: theme.color, opacity: 0.85 }} />
                <span>
                {"Position title"}: {profile.positionTitle}
                </span>
              </div>
            )}
          </div>
        </div>
        {!!_.trim(_.join(aboutme, '')) && (
          <section className="section section-aboutme">
            <div className="section-title" style={{ color: theme.color }}>
              {"Introduction"}
            </div>
            {aboutme.map((d, idx) => (
              <div key={`${idx}`}>{d}</div>
            ))}
          </section>
        )}
        {educationList?.length ? (
          <section className="section section-education">
            <div className="section-title" style={{ color: theme.color }}>
              {"Educational background"}
            </div>
            {educationList.map((education, idx) => {
              const [start, end] = education.edu_time;
              return (
                <div key={idx.toString()} className="education-item">
                  <div>
                    <b>{education.school}</b>
                    <span className="sub-info" style={{ float: 'right' }}>
                      {start}
                      {end ? ` ~ ${end}` : " to present"}
                    </span>
                  </div>
                  <div>
                    {education.major && <span>{education.major}</span>}
                    {education.academic_degree && (
                      <span className="sub-info" style={{ marginLeft: '4px' }}>
                        ({education.academic_degree})
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        ) : null}
        {workList?.length ? (
          <section className="section section-work">
            <div className="section-title" style={{ color: theme.color }}>
            {"Personal works"}
            </div>
            {workList.map((work, idx) => {
              return (
                <div key={idx.toString()}>
                  <div>
                    <CrownFilled
                      style={{ color: '#ffc107', marginRight: '8px' }}
                    />
                    <b className="info-name">{work.work_name}</b>
                    <a className="sub-info" href={work.visit_link}>
                      {"link"}
                    </a>
                  </div>
                  {work.work_desc && <div>{work.work_desc}</div>}
                </div>
              );
            })}
          </section>
        ) : null}
        {skillList?.length ? (
          <section className="section section-skill">
            <div className="section-title" style={{ color: theme.color }}>
              {"Professional skills"}
            </div>
            {skillList.map((skill, idx) => {
              return skill ? (
                <React.Fragment key={`${idx}`}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '8px',
                    }}
                    key={`${idx}`}
                  >
                    <b className="info-name">{skill.skill_name}</b>
                    <Rate
                      allowHalf
                      disabled
                      value={skill.skill_level / 20}
                      className="skill-rate"
                    />
                  </div>
                  {_.split(skill.skill_desc, '\n').map((d, idx) =>
                    d ? (
                      <div className="skill-detail-item" key={`${idx}`}>
                        <CheckCircleFilled
                          style={{ color: '#ffc107', marginRight: '8px' }}
                        />
                        {d}
                      </div>
                    ) : null
                  )}
                </React.Fragment>
              ) : null;
            })}
          </section>
        ) : null}
        {awardList?.length ? (
          <section className="section section-award">
            <div className="section-title" style={{ color: theme.color }}>
              {"More information"}
            </div>
            {awardList.map((award, idx) => {
              return (
                <div key={idx.toString()}>
                  <TrophyFilled
                    style={{ color: '#ffc107', marginRight: '8px' }}
                  />
                  <b className="info-name">{award.award_info}</b>
                  {award.award_time && (
                    <span className="sub-info award-time">
                      ({award.award_time})
                    </span>
                  )}
                </div>
              );
            })}
          </section>
        ) : null}
      </div>
      <div className="main-info">
        {workExpList?.length
          ? wrapper({
              id: 'work-experience',
              title: "Work experience",
              color: theme.color,
            })(
              <div className="section section-work-exp">
                {_.map(workExpList, (work, idx) => {
                  const start = work.work_time[0];
                  const end = work.work_time[1] ? work.work_time[1] : null;
                  return work ? (
                    <div className="section-item" key={idx.toString()}>
                      <div className="section-info">
                        <b className="info-name">
                          {work.company_name}
                          <span className="sub-info">
                            {work.department_name}
                          </span>
                        </b>
                        <span className="info-time">
                          {start}
                          {end ? ` ~ ${end}` : " to present"}
                        </span>
                      </div>
                      <div className="work-description">{work.work_desc}</div>
                    </div>
                  ) : null;
                })}
              </div>
            )
          : null}

        {projectList?.length
          ? wrapper({
              id: 'skill',
              title: "Project experience",
              color: theme.color,
            })(
              <div className="section section-project">
                {_.map(projectList, (project, idx) =>
                  project ? (
                    <div className="section-item" key={idx.toString()}>
                      <div className="section-info">
                        <b className="info-name">
                          {project.project_name}
                          <span className="info-time">
                            {project.project_time}
                          </span>
                        </b>
                        {project.project_role && (
                          <Tag color={theme.tagColor}>
                            {project.project_role}
                          </Tag>
                        )}
                      </div>
                      <div className="section-detail">
                        <b>
                        {"Description: "}
                        </b>
                        <span>{project.project_desc}</span>
                      </div>
                      <div className="section-detail">
                        <b>
                        {"Main work: "}
                        </b>
                        <span className="project-content">
                          {project.project_content}
                        </span>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            )
          : null}
      </div>
    </div>
  );
};
