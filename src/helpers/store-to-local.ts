// import { useIntl } from 'gatsby-plugin-intl';
import { message } from 'antd';
import type { ResumeConfig } from '../components/types';
import { customAssign } from '../helpers/customAssign';
import _ from 'lodash-es';
import { RESUME_INFO } from '../data/resume';
import { fetchResume } from './fetch-resume';
import { UserServiceIml } from '../actions/user-actions';
// import { intl } from '../i18n';

export const LOCAL_KEY = user => `${user ?? ''}resume-config`;

export async function getConfig(
  lang: string,
  branch: string,
  user: string
): Promise<ResumeConfig> {
  if (typeof localStorage !== 'undefined') {
    let userEmail = user;
    try {
      const response = await UserServiceIml.getUserProfile();
      if (response.data?.data?.email) {
        userEmail = response.data.data.email;
      }
    } catch (error) {
      // Handle any errors that occurred during getUserProfile()
      console.error('Error:', error);
    }
    const config = localStorage.getItem(LOCAL_KEY(userEmail));
    let result;
    try {
      result = JSON.parse(config || undefined);
    } catch (e) {}
    if (result) {
      return result;
    }
  }

  return fetchResume(lang, branch, user).catch(() => {
    // message.warn(intl.formatMessage({ id: '从模板中获取' }), 1);
    return _.omit(
      customAssign({}, RESUME_INFO, _.get(RESUME_INFO, ['locales', lang])),
      ['locales']
    );
  });
}

export const saveToLocalStorage = _.throttle(
  (user: string, config: ResumeConfig) => {
    // const intl = useIntl();

    if (typeof localStorage !== 'undefined') {
      UserServiceIml.getUserProfile().then((response)=>{
        if(response.data.data) {
          let userEmail = '';
          userEmail = response.data.data.email;
          localStorage.setItem(LOCAL_KEY(userEmail), JSON.stringify(config));
        }
      })
      // message.success(intl.formatMessage({ id: '已缓存在本地' }), 0.65);
    }
  },
  5000
);
