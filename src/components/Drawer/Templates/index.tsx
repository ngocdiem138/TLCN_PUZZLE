import React from 'react';
import { ReactSVG } from 'react-svg';
import cx from 'classnames';
// import { useIntl } from 'gatsby-plugin-intl';
import './index.less';

type Props = {
  template: string;
  onChange: (v: string) => void;
};

const TEMPLATES = [
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg',
    id: 'template1',
    description: 'Default template (for single page)',
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/RGxVcJ2O3q/moban2.svg',
    id: 'template2',
    description: 'Simple template',
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/Kn2jUKcBme/moban2.svg',
    id: 'template3',
    description: 'Simple template (suitable for multiple pages)',
    disabled: false,
  },
];

export const Templates: React.FC<Props> = props => {
  // const intl = useIntl();

  return (
    <div className="templates">
      {TEMPLATES.map(item => {
        return (
          <div
            className={cx('template-item', {
              selected: item.id === props.template,
              disabled: item.disabled,
            })}
            key={`${item.id}`}
            onClick={() => !item.disabled && props.onChange(item.id)}
          >
            <ReactSVG
              src={item.url}
              beforeInjection={svg => {
                svg.setAttribute('class', 'template');
              }}
            />
            <span className="template-id">{item.id}</span>
            <span className="template-description">
              {item.description}
            </span>
          </div>
        );
      })}
    </div>
  );
};
