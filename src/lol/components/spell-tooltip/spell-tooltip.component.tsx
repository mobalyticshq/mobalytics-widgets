import { FunctionComponent, h } from 'preact';
import { gameItemIcon, summonerSpellIcon } from '../../utils/images';
import { useQuery } from 'graphql-hooks';
import { lolApi } from '../../api/api';
import { forwardRef } from 'preact/compat';
import { useEffect } from 'preact/hooks';
import { UniversalGameSubjectTooltip } from '../../../common/components/universal-game-subject-tooltip/universal-game-subject-tooltip.component';
import { firstItem } from '../../../common/utils/list';
import { STATIC_SPELL_FRAGMENT } from '../../api/static/queries/summoner-spell-by-slug.gql';
import { LolSummonerSpellBySlug, LolSummonerSpellBySlugVariables } from '../../types/gql-static/LolSummonerSpellBySlug';

interface Props {
  riotId: string;
  onDataLoaded?(): void;
  className?: string;
}

export const SpellTooltip: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { riotId, onDataLoaded, className } = props;
  const { loading, error, data } = useQuery<LolSummonerSpellBySlug, LolSummonerSpellBySlugVariables>(STATIC_SPELL_FRAGMENT, {
    variables: { filter: `data/riotId/iv eq '${riotId}'` },
    client: lolApi.staticDataClient,
  });

  useEffect(() => {
    !loading && !error && !!data && onDataLoaded?.();
  }, [loading, error, data, onDataLoaded]);

  // todo: log error
  if (loading || error || !data) {
    return null;
  }

  const item = firstItem(data.spells)?.flatData;

  return (
    <div ref={ref} className={className}>
      <UniversalGameSubjectTooltip
        name={item?.name}
        iconName={item?.name}
        iconUrl={summonerSpellIcon(riotId)}
        description={item?.description}
      />
    </div>
  );
});
