import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Button, Affix, Upload, Spin, message, Alert, Modal } from 'antd';
import type { RcFile } from 'antd/lib/upload';
import _ from 'lodash-es';
import qs from 'query-string';
import jsonUrl from 'json-url';
// import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
// import { getLanguage } from '../i18n';
import { useModeSwitcher } from '../hooks/useModeSwitcher';
import { getDefaultTitleNameMap } from '../data/constant';
import { getSearchObj } from '../helpers/location';
import { customAssign } from '../helpers/customAssign';
import { copyToClipboard } from '../helpers/copy-to-board';
import { getDevice } from '../helpers/detect-device';
import { exportDataToLocal } from '../helpers/export-to-local';
import { getConfig, saveToLocalStorage } from '../helpers/store-to-local';
import { fetchResume } from '../helpers/fetch-resume';
import { Drawer } from './Drawer';
import { Resume } from './Resume';
import type { ResumeConfig, ThemeConfig } from './types';
import { useTranslation } from 'react-i18next';
import './index.less';
import { UserServiceIml } from '../actions/user-actions';

const codec = jsonUrl('lzma');

export const Page: React.FC = () => {
  const lang = 'zh-CN';
  const { t, i18n } = useTranslation();
  // const intl = useIntl();

  const [, mode, changeMode] = useModeSwitcher({});
  const [user, setUser] = useState('');

  const originalConfig = useRef<ResumeConfig>();
  const query = getSearchObj();
  const [config, setConfig] = useState<ResumeConfig>();
  const [loading, updateLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<ThemeConfig>({
    color: '#2f5785',
    tagColor: '#8bc34a',
  });

  useEffect(() => {
    const {
      pathname,
      hash: currentHash,
      search: currentSearch,
    } = window.location;
    const hash = currentHash === '#/' ? '' : currentHash;
    const searchObj = qs.parse(currentSearch);
    if (!searchObj.template) {
      const search = qs.stringify({
        template: config?.template || 'template1',
        ...qs.parse(currentSearch),
      });
      window.location.href = `${pathname}?${search}${hash}`;
    }
  }, [config]);

  const updateTemplate = (value: string) => {
    const {
      pathname,
      hash: currentHash,
      search: currentSearch,
    } = window.location;
    const hash = currentHash === '#/' ? '' : currentHash;
    const search = qs.stringify({
      ...qs.parse(currentSearch),
      template: value,
    });

    window.location.href = `${pathname}?${search}${hash}`;
  };

  const changeConfig = (v: Partial<ResumeConfig>) => {
    setConfig(
      _.assign({}, { titleNameMap: {} }, v)
    );
  };

  useEffect(() => {
    let user = '';
    UserServiceIml.getUserProfile().then((response)=>{
      if (response.data.data) {
        user = response.data.data.email;
      }
    })
    const branch = (query.branch || 'master') as string;
    const mode = query.mode;

    function store(data) {
      originalConfig.current = data;
      changeConfig(
        _.omit(customAssign({}, data, _.get(data, ['locales', lang])), [
          'locales',
        ])
      );
      updateLoading(false);
    }

    if (!mode) {
      fetchResume(lang, branch, user)
        .then(data => store(data))
        .catch(() => {
          Modal.info({
            title: "",
            content: (
              <div>
                You want to create a new resume
              </div>
            ),
            okText: "Enter online editor",
            onOk: () => {
              changeMode('edit');
            },
          });
        });
    } else {
      if (query.data) {
        codec.decompress(query.data).then(data => {
          store(JSON.parse(data));
        });
      } else {
        getConfig(lang, branch, user).then(data => {
          store(data);
        });
      }
    }
  }, [lang, query.user, query.branch, query.data]);

  const onConfigChange = useCallback(
    (v: Partial<ResumeConfig>) => {
      const newC = _.assign({}, config, v);
      changeConfig(newC);
      saveToLocalStorage(query.user as string, newC);
    },
    [config, lang]
  );

  const onThemeChange = useCallback(
    (v: Partial<ThemeConfig>) => {
      setTheme(_.assign({}, theme, v));
    },
    [theme]
  );

  useEffect(() => {
    if (getDevice() === 'mobile') {
      message.info(
        "{ t('cv.errorDevice') }"
      );
    }
  }, []);

  const [box, setBox] = useState({ width: 0, height: 0, left: 0 });

  useEffect(() => {
    const targetNode = document.querySelector('.resume-content');
    if (!targetNode) return;

    const observer = new MutationObserver(() => {
      setBox(targetNode.getBoundingClientRect());
    });
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    const interval = setInterval(() => {
      setBox(targetNode.getBoundingClientRect());
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const importConfig = (file: RcFile) => {
    const { t, i18n } = useTranslation();
    if (window.FileReader) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          if (reader.result) {
            // @ts-ignore
            const newConfig: ConfigProps = JSON.parse(reader.result);
            onThemeChange(newConfig.theme);
            onConfigChange(_.omit(newConfig, 'theme'));
          }
          message.success("The upload configuration has been applied");
        } catch (err) {
          message.error("The file upload is incorrect. Please upload again.");
        }
      };
      reader.readAsText(file);
    } else {
      message.error(
        "Your current browser does not support FileReader. We recommend using Google Chrome browser"
      );
    }
    return false;
  };

  function getConfigJson() {
    let fullConfig = config;
    if (lang !== 'zh-CN') {
      fullConfig = customAssign({}, originalConfig?.current, {
        locales: { [lang]: config },
      });
    }
    return JSON.stringify({ ...fullConfig, theme });
  }

  const copyConfig = () => {
    copyToClipboard(getConfigJson());
  };

  const exportConfig = () => {
    exportDataToLocal(getConfigJson(), `resume info`);
  };

  const handleSharing = () => {
    const fullConfig = getConfigJson();
    codec.compress(fullConfig).then(data => {
      const url = new URL(window.location.href);
      url.searchParams.set('data', data);

      console.log('sharing url', url.toString());
      copyToClipboard(url.toString());
    });
  };

  return (
    <React.Fragment>
      <Spin spinning={loading}>
        <div className="page">
          {config && (
            <Resume
              value={config}
              theme={theme}
              template={query.template || 'template1'}
            />
          )}
          {mode === 'edit' && (
            <React.Fragment>
              <Affix offsetTop={0}>
                <Button.Group className="btn-group">
                  <Drawer
                    value={config}
                    onValueChange={onConfigChange}
                    theme={theme}
                    onThemeChange={onThemeChange}
                    // @ts-ignore
                    template={query.template || 'template1'}
                    onTemplateChange={updateTemplate}
                  />
                  <Button type="primary" onClick={copyConfig}>
                    {'Copy config'}
                  </Button>
                  <Button type="primary" onClick={exportConfig}>
                    {'Save Resume'}
                  </Button>
                  <Upload
                    accept=".json"
                    showUploadList={false}
                    beforeUpload={importConfig}
                  >
                    <Button className="btn-upload">
                      {'Import config'}
                    </Button>
                  </Upload>
                  <Button type="primary" onClick={() => window.print()}>
                    {'Download pdf'}
                  </Button>
                  <Button type="primary" onClick={handleSharing}>
                    {'Share'}
                  </Button>
                </Button.Group>
              </Affix>
              <div
                className="box-size-info"
                style={{
                  top: `${box.height + 4}px`,
                  left: `${box.width + box.left}px`,
                }}
              >
                ({box.width}, {box.height})
              </div>
            </React.Fragment>
          )}
        </div>
      </Spin>
    </React.Fragment>
  );
};

export default Page;
