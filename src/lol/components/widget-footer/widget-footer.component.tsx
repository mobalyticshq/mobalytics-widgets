import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { mobalyticsLogoSymbol } from '../../utils/images';

import { MiddleDot } from '../../format/symbols';
import { Text12x400Mixin, Text12x500Mixin } from '../../ui/typography';
import { MOBA_HOME_URL, MOBA_WIDGET_REPO_URL } from '../../config';

interface Props {
  championName: string;
  buildUrl: string;
  isSmall: boolean;
}

export const WidgetFooter: FunctionComponent<Props> = props => {
  const { championName, buildUrl, isSmall } = props;

  return (
    <div className={clsx(Wrapper, isSmall && SmallWrapper)}>
      <div className={LinksWrapper}>
        <a href={buildUrl} target="_blank">See more {championName} builds</a>
        <span>{MiddleDot}</span>
        <a href={MOBA_WIDGET_REPO_URL} target="_blank">Get this widget</a>
      </div>
      <div className={LogoWrapper}>
        <span>Powered by</span>
        <a href={MOBA_HOME_URL} target="_blank">
          <img src={mobalyticsLogoSymbol()} alt="Mobalytics logo" loading="lazy"/>
        </a>
        <a href={MOBA_HOME_URL} target="_blank">
          <div className={Name}><span>MOB</span>ALYTICS.gg</div>
        </a>
      </div>
    </div>
  );
};


const Wrapper = css`
  background: var(--moba-widget-bg-primary-dark);
  border-radius: 0 0 5px 5px;
  border-top: 1px solid var(--moba-widget-border-primary-light);
  min-height: 50px;
  padding: 0 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 auto;
`;

const SmallWrapper = css`
  flex-direction: column;
  padding: 0;

  & > div{
    width: 100%;
  }
`;

const LinksWrapper = css`
  ${Text12x500Mixin};
  line-height: 20px!important;
  justify-content: center;
  display: flex;
  padding: 10px 0;

  span {
    color: var(--moba-widget-text-secondary)!important;
    margin: 0 4px;
  }

  a {
    color: var(--moba-widget-link-primary)!important;
    transition: color ease .2s;

    &:focus,
    &:hover{
      color: var(--moba-widget-link-hover)!important;
    }
  }
`;

const LogoWrapper = css`
  ${Text12x500Mixin};
  line-height: 20px!important;
  height: 50px;
  color: var(--moba-widget-text-secondary)!important;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    display: block;
    width: 22px;
    margin: 0 8px;
  }
`;

const Name = css`
  ${Text12x400Mixin};
  line-height: 20px!important;
  color: var(--moba-widget-text-primary-light)!important;

  span{
    font-weight: 700;
  }
`;
