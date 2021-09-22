import { FunctionComponent, h, Fragment } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { ChampionTooltipFooter } from './champion-tooltip-footer.component';
import { ChampionTooltipStatic } from './champion-tooltip-static.component';
import { ChampionTooltipDynamicData } from './champion-tooltip-dynamic.component';
import { NNumber, Nullable } from '../../../common/types/lang';
import { TierLevel } from '../../types/gql-dynamic/globalTypes';
import { Loader } from '../../../common/loader/loader.component';

interface Props {
  championSlug: string;
  championName: string;
  tier?: Nullable<TierLevel>;
  championType?: Nullable<{ slug: string; name: string }>;

  winRate?: Nullable<{ value: number; isDown: boolean }>;
  pickRate?: Nullable<{ value: number; isDown: boolean }>;
  banRate?: Nullable<{ value: number; isDown: boolean }>;
  counterChampions?: Nullable<{ championSlug: string; winRate: NNumber }[]>;

  isLoading: boolean;
  className?: string;
}

export const ChampionTooltip: FunctionComponent<Props> = props => {
  const { className, isLoading } = props;
  const { championName, championSlug } = props;
  const { counterChampions, winRate, pickRate, banRate, championType, tier } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Row}>
        {!isLoading && (
          <Fragment>
            <ChampionTooltipStatic
              championSlug={championSlug}
              championName={championName}
              championType={championType}
              tier={tier}
            />
            <ChampionTooltipDynamicData
              winRate={winRate}
              pickRate={pickRate}
              banRate={banRate}
              counterChampions={counterChampions}
            />
          </Fragment>
        )}
        {isLoading && <Loader />}
      </div>
      <ChampionTooltipFooter championSlug={championSlug} />
    </div>
  );
};

const Wrapper = css`
  width: 420px;
  background: var(--moba-widget-bg-secondary-dark);
  border: 1px solid var(--moba-widget-border-primary-light);
  box-shadow: 0 4px 20px rgba(29, 21, 70, 0.8);
  border-radius: 6px;
  overflow: hidden;
`;

const Row = css`
  display: flex;
  height: 164px;
  justify-content: center;
  align-items: center;
`;
