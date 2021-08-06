import { FunctionComponent, h } from 'preact';
import { BuildHeaderSkeleton } from '../../../components/loading-skeletons/build-header-skeleton/build-header-skeleton.component';
import { RunesBuildCompactBlockSkeleton } from '../../../components/loading-skeletons/runes-build-compact-skeleton/runes-build-compact-skeleton.component';
import { css } from 'goober';
import { SpellsSkeleton } from '../../../components/loading-skeletons/spells-skeleton/spells-skeleton.component';
import { ItemsBuildSkeleton } from '../../../components/loading-skeletons/items-build-skeleton/items-build-skeleton.component';
import { CompactChampionAbilitiesOrderBarSkeleton } from '../../../components/loading-skeletons/champion-abilities-order-bar-skeleton/compact-champion-abilities-order-bar-skeleton.component';
import { CompactChampionAbilitiesOrderSkeleton } from '../../../components/loading-skeletons/champion-abilities-order-skeleton/compact-champion-abilities-order-skeleton.component';
import { BuildFooterSkeleton } from '../../../components/loading-skeletons/build-footer-skeleton/build-footer-skeleton.component';
import { RunesBuildBlockSkeleton } from '../../../components/loading-skeletons/runes-build-skeleton/runes-build-skeleton.component';
import { ChampionAbilitiesOrderSkeleton } from '../../../components/loading-skeletons/champion-abilities-order-skeleton/champion-abilities-order-skeleton.component';
import clsx from 'clsx';

interface Props {
  isCompact: boolean;
  isSmall: boolean;
  className?: string;
}

export const ChampionBuildWidgetLoading: FunctionComponent<Props> = props => {
  const { isCompact, isSmall, className } = props;
  return (
    <div className={className}>
      <BuildHeaderSkeleton />
      <div className={Content}>
        <div className={clsx(Row, !isCompact && FlexEnd)}>
          <div className={clsx(isSmall && CompactRunesWrapper, Col)}>
            <div className={Title} />
            {isCompact ? <RunesBuildCompactBlockSkeleton /> : <RunesBuildBlockSkeleton />}
          </div>
          <div className={Col}>
            <div className={Title} />
            <div>
              <SpellsSkeleton />
            </div>
          </div>
        </div>
        <div className={Col}>
          <div className={Title} />
          <ItemsBuildSkeleton />
        </div>

        <div className={clsx(Col, SkillOrderRow)}>
          {!isCompact && (
            <div>
              <div className={Title} />
              <ChampionAbilitiesOrderSkeleton/>
            </div>
          )}
          {isCompact && (
            <div>
              <div className={Title} />
              <CompactChampionAbilitiesOrderBarSkeleton className={clsx(isCompact && !isSmall && AbilitiesOrder)}/>
            </div>
          )}
          {isCompact && !isSmall && (
            <div>
              <div className={Title} />
              <CompactChampionAbilitiesOrderSkeleton />
            </div>
          )}
        </div>
      </div>
      <BuildFooterSkeleton isSmall={isSmall}/>
    </div>
  );
};


const Content = css`
  width: 100%;
  overflow: hidden;
`;

const Title = css`
  height: 10px;
  width: 90px;
  background: #3C385C;
  border-radius: 1px;
  margin: 3px 0 10px 0;
`;

const Col = css`
  padding: 20px;
  border-top: 1px solid #3c2d69;

  &:first-child {
    border: none;
  }
`;

const Row = css`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;

  & > div {
    border: none;
    padding: 10px 0;
    margin-right: 20px;

    &:last-child{
      margin-right: 0;
    }
  }
`;

const FlexEnd = css`
  align-items: flex-end;
`;

const CompactRunesWrapper = css`
  margin-right: 0!important;
`;

const AbilitiesOrder = css`
  margin-bottom: 20px;
`;

const SkillOrderRow = css`
  display: flex;
  flex-wrap: wrap;
`;
