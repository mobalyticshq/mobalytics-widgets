import { FunctionComponent, h } from 'preact';
import { perkIcon } from '../../utils/images';
import { useQuery } from 'graphql-hooks';
import { lolApi } from '../../api/api';
import { STATIC_PERK_BY_RIOT_ID } from '../../api/static/queries/perk-by-riot-id.gql';
import { LolPerkByRiotId, LolPerkByRiotIdVariables } from '../../types/gql-static/LolPerkByRiotId';
import { forwardRef } from 'preact/compat';
import { useEffect } from 'preact/hooks';
import { UniversalGameSubjectTooltip } from '../../../common/components/universal-game-subject-tooltip/universal-game-subject-tooltip.component';
import { GlobalStyle } from '../../ui/global.mixin';

interface Props {
  riotId: number;
  onDataLoaded?(): void;
  className?: string;
}

export const PerkTooltip: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { riotId, onDataLoaded, className } = props;
  const { loading, error, data } = useQuery<LolPerkByRiotId, LolPerkByRiotIdVariables>(STATIC_PERK_BY_RIOT_ID, {
    variables: { filter: `data/riotId/iv eq ${riotId}` },
    client: lolApi.staticDataClient,
  });

  useEffect(() => {
    !loading && !error && !!data && onDataLoaded?.();
  }, [loading, error, data, onDataLoaded]);

  // todo: log error
  if (loading || error || !data) {
    return null;
  }

  const perk = data.perks?.[0]?.flatData;

  return (
    <div ref={ref} className={className}>
      <UniversalGameSubjectTooltip
        name={perk?.name}
        iconName={perk?.name}
        iconUrl={perkIcon(riotId)}
        description={perk?.longDescription || perk?.shortDescription || perk?.customDescription}
        className={GlobalStyle}
      />
    </div>
  );
});
