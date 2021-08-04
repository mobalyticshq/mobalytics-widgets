import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { Nullable } from '../../../common/types/lang';
import { TierLevel } from '../../types/gql-dynamic/globalTypes';
import { championClassIcon, championPosterW400Image } from '../../utils/images';
import { TierIcon } from '../images/tier.component';
import { Text12x500Mixin, Text16x700Mixin } from '../../ui/typography';

interface Props {
  championSlug: string;
  championName: string;
  tier: Nullable<TierLevel>;
  championType: Nullable<{ slug: string; name: string }>;

  className?: string;
}

export const ChampionTooltipStatic: FunctionComponent<Props> = props => {
  const { className } = props;
  const { championName, championSlug, championType, tier } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <img src={championPosterW400Image(championSlug)} alt={championName} className={CardBg} loading="lazy" />
      {tier && <TierIcon name={tier} className={Tier} />}
      {championType && (
        <div className={CardContent}>
          <span>{championName}</span>
          <div className={Row}>
            <img
              className={ChampionType}
              src={championClassIcon(championType.slug)}
              alt={championType.name}
              loading="lazy"
            />
            {championType.name}
          </div>
        </div>
      )}
    </div>
  );
};

const Wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 170px;
  height: 164px;
  overflow: hidden;
  position: relative;
  border-right: 1px solid #141136;

  padding: 14px 12px;

  &:after {
    display: block;
    content: '';
    background-image: radial-gradient(farthest-side, rgba(33, 29, 69, 0.4), #151136);
    position: absolute;
    top: -5%;
    right: -2%;
    width: 130%;
    height: 120%;
  }
`;

const CardBg = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 228px;
  max-width: 228px!important;
  height: 164px;
`;

const Row = css`
  display: flex;
`;

const CardContent = css`
  ${Text12x500Mixin};
  color: #fff;
  position: relative;
  z-index: 2;

  & > span {
    ${Text16x700Mixin};
    display: block;
    color: #fff;
    margin-bottom: 4px;
  }
`;

const ChampionType = css`
  width: 16px;
  height: 16px;
  filter: brightness(0) saturate(100%) invert(43%) sepia(23%) saturate(486%) hue-rotate(206deg) brightness(90%) contrast(88%);
  margin-right: 4px;
`;

const Tier = css`
  width: 20px;
  height: auto;
  position: absolute;
  top: 16px;
  right: 12px;

  z-index: 2;
`;
