import { h } from 'preact';
import { NString } from '../../types/lang';
import { processInt } from '../../format/number';
import { WinRate } from '../../../lol/components/metrics/win-rate/win-rate.component';
import { InlineChampionIcon } from '../inline-icons/inline-champion-icon.component';
import { InlineChampionAbilityIcon } from '../inline-icons/inline-champion-ability-icon.component';
import { InlineGameItemIcon } from '../inline-icons/inline-game-item-icon.component';
import { InTextSubstitutionFn } from '../rich-text/rich-text.types';

export enum InTextSubsGroup {
  SPELLS = 'spells',
  ITEMS = 'items',
  CHAMPION = 'champion',
  CHAMPION_LEGACY = 'champions',
  CHAMPION_SPELLS = 'championSpells',
  CHAMPION_SPELLS_LEGACY = 'champion_spells',
  PERKS = 'perks',
  WIN_RATE = 'winRate',
}

export const lolRichTextSubstitutionFn: InTextSubstitutionFn = (
  group: string,
  values: NString[]
): any | null => {
  switch (group) {
    case InTextSubsGroup.CHAMPION:
    case InTextSubsGroup.CHAMPION_LEGACY:
      const championSlug = values[0];
      return championSlug ? <InlineChampionIcon slug={championSlug} /> : null;
    case InTextSubsGroup.CHAMPION_SPELLS:
    case InTextSubsGroup.CHAMPION_SPELLS_LEGACY:
      const championSpellSlug = values[0];
      return championSpellSlug ? <InlineChampionAbilityIcon slug={championSpellSlug} /> : null;
    case InTextSubsGroup.ITEMS:
      const itemSlug = values[0];
      return itemSlug ? <InlineGameItemIcon riotId={itemSlug} /> : null;
    case InTextSubsGroup.WIN_RATE:
      const winRate = processInt(values[0]);
      return !!winRate ? <WinRate winRate={winRate} /> : null;
  }
  return null;
};
