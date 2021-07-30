import { FunctionComponent, h } from 'preact';
import { gameItemIcon } from '../../utils/images';
import { useQuery } from 'graphql-hooks';
import { lolApi } from '../../api/api';
import { forwardRef } from 'preact/compat';
import { useEffect } from 'preact/hooks';
import { UniversalGameSubjectTooltip } from '../../../common/components/universal-game-subject-tooltip/universal-game-subject-tooltip.component';
import { STATIC_GAME_ITEM_BY_RIOT_ID } from '../../api/static/queries/game-item-by-riot-id.gql';
import { LolGameItemByRiotId, LolGameItemByRiotIdVariables } from '../../types/gql-static/LolGameItemByRiotId';
import { firstItem } from '../../../common/utils/list';
import { GlobalStyle } from '../../ui/global.mixin';

interface Props {
  riotId: string;
  onDataLoaded?(): void;
  className?: string;
}

export const ItemTooltip: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { riotId, onDataLoaded, className } = props;
  const { loading, error, data } = useQuery<LolGameItemByRiotId, LolGameItemByRiotIdVariables>(STATIC_GAME_ITEM_BY_RIOT_ID, {
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

  const item = firstItem(data.items)?.flatData;

  return (
    <div ref={ref} className={className}>
      <UniversalGameSubjectTooltip
        name={item?.name}
        iconName={item?.name}
        iconUrl={gameItemIcon(riotId)}
        description={item?.effectDescription}
        className={GlobalStyle}
      />
    </div>
  );
});
