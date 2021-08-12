import { FunctionComponent, h } from 'preact';
import clsx from 'clsx';

import { css } from 'goober';
import { mobalyticsLogoSymbol } from '../../../utils/images';
import { Text12x400Mixin, Text12x500Mixin } from '../../../ui/typography';
import { MOBA_HOME_URL } from '../../../config';

interface Props {
  isSmall: boolean;
}

export const BuildFooterSkeleton: FunctionComponent<Props> = props => {
  const { isSmall } = props;
  return (
    <div className={clsx(Wrapper, isSmall && SmallWrapper)}>
      <div className={LinksWrapper}>
        <span/>
        <span/>
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
`;

const SmallWrapper = css`
  flex-direction: column;
  padding: 0;

  & > div{
    width: 100%;
  }
`;

const LinksWrapper = css`
  justify-content: center;
  display: flex;
  padding: 15px 0;

  span {
    display: flex;
    width: 130px;
    height: 10px;
    margin-right: 12px;
    background: #3C385C;
    border-radius: 1px;

    &:last-child{
      margin-right: 0;
      width: 120px;
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
