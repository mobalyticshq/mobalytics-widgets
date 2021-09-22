import { FunctionComponent, h } from 'preact';
import { useQuery } from 'graphql-hooks';
import { css } from 'goober';
import clsx from 'clsx';

import { DYNAMIC_CHAMPION_BUILD_QUERY_GQL } from '../../../api/dynamic/queries/champion-build-query.gql';
import { lolApi } from '../../../api/api';
import { NNumber, NString, Nullable } from '../../../../common/types/lang';
import { ChampionBuildWidgetError } from '../champion-build-widget-error/champion-build-widget-error';
import { ChampionBuildWidgetLoading } from '../champion-build-widget-loading/champion-build-widget-loading';
import {
  LolChampionWidgetDynamicQuery,
  LolChampionWidgetDynamicQueryVariables,
} from '../../../types/gql-dynamic/LolChampionWidgetDynamicQuery';
import { LolChampionBuildType, Region, Rolename } from '../../../types/gql-dynamic/globalTypes';
import {
  LolChampionWidgetStaticQuery,
  LolChampionWidgetStaticQueryVariables,
} from '../../../types/gql-static/LolChampionWidgetStaticQuery';
import { STATIC_CHAMPION_BUILD_QUERY_GQL } from '../../../api/static/queries/champion-build-query.gql';
import { firstItem } from '../../../../common/utils/list';
import { calcWinRate } from '../../../../common/utils/math';
import { BuildHeader } from '../../../components/build-header/build-header.component';
import { amumuCrying, championSmallPosterImage, emoteImage } from '../../../utils/images';
import { WidgetFooter } from '../../../components/widget-footer/widget-footer.component';
import {
  formatAbilities,
  formatAbilityOrder,
  formatItemsBuild,
  formatSkillMaxOrder,
  formatSkillOrder,
} from '../../../utils/build-data-format.utils';
import { ChampionBuildWidgetBody } from '../champion-build-widget-body/champion-build-widget-body';
import { MOBA_APP_LINK } from '../../../config';
import { genChampionPath } from '../../../utils/links';
import { extractFromFlatList } from '../../../utils/squidex-data.utils';
import { ChampionPageSection } from '../../../../common/types/champions';
import { formatBuildName } from '../../../format/texts';

interface Props {
  champion: string;
  role: Nullable<Rolename>;
  region: Nullable<Region>;
  patch: NString;
  buildType?: Nullable<LolChampionBuildType>;
  buildID?: NNumber;
  compact: boolean;
  widgetWidth: NNumber;
  className?: string;
}

const MIN_WIDGET_WIDTH = 300;
const SMALL_WIDGET_WIDTH = 560;

export const ChampionBuildWidgetContent: FunctionComponent<Props> = props => {
  const { champion, role, compact, widgetWidth, region, patch, buildID, buildType, className } = props;

  const isSmall = !!(widgetWidth && widgetWidth < SMALL_WIDGET_WIDTH);
  const isCompact = compact || isSmall;

  const {
    loading: dynamicLoading,
    error: dynamicError,
    data: dynamicData,
  } = useQuery<LolChampionWidgetDynamicQuery, LolChampionWidgetDynamicQueryVariables>(
    DYNAMIC_CHAMPION_BUILD_QUERY_GQL,
    {
      variables: { champion, role, region, patch, buildID, buildType },
      client: lolApi.dynamicDataClient,
    }
  );

  const {
    loading: staticLoading,
    error: staticError,
    data: staticData,
  } = useQuery<LolChampionWidgetStaticQuery, LolChampionWidgetStaticQueryVariables>(STATIC_CHAMPION_BUILD_QUERY_GQL, {
    variables: { filter: `data/slug/iv eq '${champion}'` },
    client: lolApi.staticDataClient,
  });

  const loading = dynamicLoading || staticLoading;
  const error = dynamicError || staticError;

  if (loading) {
    return (
      <ChampionBuildWidgetLoading
        className={clsx(Wrapper, className)}
        isCompact={isCompact}
        isSmall={isSmall}
      />
    );
  }

  if (error || (!staticData)) {
    return (
      <ChampionBuildWidgetError
        imgSrc={amumuCrying()}
        title={'Something Went Wrong'}
        text={'Sorry, but it appears that this widget or Mobalytics is experiencing some problems at the moment.'}
        link={{
          text: 'Check Mobalytics Status',
          url: MOBA_APP_LINK,
        }}
        className={clsx(Wrapper, className)}
      />
    );
  }

  const championStats = firstItem(staticData?.champion)?.flatData;
  const championBuild = dynamicData?.lol?.champion?.build;
  const gameItems =  extractFromFlatList([...(staticData.itemsChunk1 || []), ...(staticData.itemsChunk2 || [])])?.filter(it => !!it.riotId);

  // build props
  const { id, type, vsChampionSlug, proPlayer, spells, items, skillOrder: rawSkillOrder, skillMaxOrder: rawSkillMaxOrder, stats, patch: buildPatch, perks, role: buildRole} = championBuild || {};

  // stats props
  const { abilities: rawAbilities, name: championName } = championStats || {};

  // header props
  const winRate = stats && stats.wins && stats.matchCount ? calcWinRate(stats.wins, stats.matchCount - stats.wins) : null
  const abilities = rawAbilities && formatAbilities(rawAbilities);

  // build props
  const itemsBuild = gameItems && items && formatItemsBuild(items, gameItems);
  const skillOrder = rawSkillOrder && formatSkillOrder(rawSkillOrder);
  const abilitiesOrder = rawSkillMaxOrder && abilities && formatAbilityOrder(rawSkillMaxOrder, abilities);
  const skillMaxOrder = rawSkillMaxOrder && formatSkillMaxOrder(rawSkillMaxOrder);

  const isBuildAvailable = !!itemsBuild || !!skillOrder || !!abilitiesOrder || !!skillMaxOrder;
  const bgClass = !isSmall && !isCompact ? Background(championSmallPosterImage(champion)) : '';

  const buildUrl = genChampionPath(champion, ChampionPageSection.BUILDS, {
    region: region || undefined,
    patch: patch || undefined,
    buildID: id,
  });

  if(championName){
    const buildName = formatBuildName(championName, type, vsChampionSlug, proPlayer?.name);
    return (
      <div className={clsx(Wrapper, className)}>
        <BuildHeader
          championName={championName} championSlug={champion}
          buildName={buildName}
          roleName={buildRole}
          patch={buildPatch}
          winRate={winRate}
          gamesCount={!isSmall ? stats?.matchCount : null}
          region={region}
        />
        {
          isBuildAvailable ? (
            <ChampionBuildWidgetBody
              abilities={abilities}
              itemsBuild={itemsBuild}
              skillOrder={skillOrder}
              abilitiesOrder={abilitiesOrder}
              skillMaxOrder={skillMaxOrder}
              spells={spells}
              perks={perks}
              isCompact={isCompact}
              isSmall={isSmall}
              className={bgClass}
            />
          ) : (
            <ChampionBuildWidgetError
              imgSrc={emoteImage('blitzcrank.png')}
              title={'Not Enough Data'}
              text={`We need more game data to show a reliable build. This may be because a new patch just started or because there aren't enough players playing ${championName} as ${role}.`}
              link={{
                text: `Check other ${championName} builds on Mobalytics`,
                url: buildUrl,
              }}
              className={clsx(Wrapper, bgClass)}
            />
          )
        }
        <WidgetFooter championName={championName} buildUrl={buildUrl} isSmall={isSmall}/>
      </div>
    );
  }

  return null;
};


const Wrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: ${MIN_WIDGET_WIDTH}px;
  background-color: var(--moba-widget-bg-secondary-light)!important;
  border-radius: 6px;
`;

const Background = (bg: string) => css`
  background: radial-gradient(98% 40% at 117% 10%, rgba(0, 0, 0, 0.6) 0%, var(--moba-widget-bg-secondary-light) 100%), url('${bg}');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 300px;
`;
