import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { mobalyticsLogoSymbol } from '../../utils/images';

import { MiddleDot } from '../../format/symbols';
import { Text12x400Mixin, Text12x500Mixin } from '../../ui/typography';
import { genChampionPath } from '../../utils/links';
import { MOBA_HOME_URL, MOBA_WIDGET_REPO_URL } from '../../config';

interface Props {
  championName: string;
  championSlug: string;
  isSmall: boolean;
}

export const WidgetFooter: FunctionComponent<Props> = props => {
  const { championName, championSlug, isSmall } = props;
  return (
    <div className={clsx(Wrapper, isSmall && SmallWrapper)}>
      <div className={LinksWrapper}>
        <a href={genChampionPath(championSlug)}>See more {championName} builds</a>
        <span>{MiddleDot}</span>
        <a href={MOBA_WIDGET_REPO_URL}>Get blog widget</a>
      </div>
      <div className={LogoWrapper}>
        <span>Powered by</span>
        <a href={MOBA_HOME_URL}>
          <img src={mobalyticsLogoSymbol()} alt="Mobalytics logo" loading="lazy"/>
        </a>
        <a href={MOBA_HOME_URL}>
          <div className={Name}><span>MOB</span>ALYTICS.gg</div>
        </a>
      </div>
    </div>
  );
};


const Wrapper = css`
  background: #252046;
  border-radius: 0 0 5px 5px;
  border: 1px solid #3c2d69;
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
    color: #6B6889!important;
    margin: 0 4px;
  }

  a {
    color: #f2bf43!important;
    transition: color ease .2s;

    &:focus,
    &:hover{
      color: #38C6F4!important;
    }
  }
`;

const LogoWrapper = css`
  ${Text12x500Mixin};
  line-height: 20px!important;
  height: 50px;
  color: #6B6889!important;
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
  color: #fff!important;

  span{
    font-weight: 700;
  }
`;
