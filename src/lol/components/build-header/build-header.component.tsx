import { FunctionComponent, h, Fragment } from 'preact';

import { t } from '../../../common/i18n/i18n';
import { css } from 'goober';
import { championImage, roleNameIcon } from '../../utils/images';
import { Rolename } from '../../types/gql-dynamic/globalTypes';
import { NNumber, NString, Nullable } from '../../../common/types/lang';
import { formatRoleName } from '../../format/texts';
import { MiddleDot } from '../../format/symbols';
import { WinRate } from '../metrics/win-rate/win-rate.component';
import { Text12x400Mixin, Text12x500Mixin } from '../../ui/typography';

interface Props {
  championName: string;
  championSlug: string;
  roleName: Nullable<Rolename>;
  patch: NString;
  winRate: NNumber;
  gamesCount: NNumber;
}

export const BuildHeader: FunctionComponent<Props> = props => {
  const { championName, championSlug } = props;
  const { roleName, patch, winRate, gamesCount } = props;

  return (
    <div className={Wrapper}>
      <img src={championImage(championSlug)} alt={championName} className={ChampionImage} />
      <div>
        <div className={Title}>{championName} build</div>
        <div className={Text}>
          {roleName && (
            <Fragment>
              <img src={roleNameIcon(roleName)} alt={formatRoleName(roleName)} className={RoleIconCss} loading="lazy" />
              {formatRoleName(roleName)}
            </Fragment>
          )}
          {patch && <Fragment>{` ${MiddleDot} `}{t('Patch')}<span>{patch}</span></Fragment>}
          {winRate && <Fragment>{` ${MiddleDot} `}{t('Win Rate')}<WinRate winRate={winRate}/></Fragment>}
          {gamesCount && <Fragment>based on <span>{gamesCount}</span> matches</Fragment>}
        </div>
      </div>
    </div>
  );
};


const Wrapper = css`
  background: #252046;
  border-radius: 5px 5px 0 0;
  border: 1px solid #3c2d69;
  height: 60px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
`;

const Title = css`
  ${Text12x500Mixin};
  color: #fff!important;
  text-transform: uppercase;
`;

const ChampionImage = css`
  display: block;
  width: 36px;
  height: 36px;
  border: 2px solid #F2BF43;
  border-radius: 50%;
  margin-right: 8px;
`;


const RoleIconCss = css`
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 8px;
`;


const Text = css`
  ${Text12x400Mixin};
  color: #6B6889!important;
  min-width: 300px;
  display: flex;
  align-items: center;

  span{
    font-weight: 500;
    color: #fff!important;
    margin: 0 3px;
  }
`;
