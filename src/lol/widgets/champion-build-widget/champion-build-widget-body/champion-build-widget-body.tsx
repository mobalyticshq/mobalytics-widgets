import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { Spells } from '../../../components/spells/spells.component';
import { ItemsBuildChain } from '../../../components/items-build/items-build-chain.component';
import { RunesBuildCompactBlock } from '../../../components/runes/runes-build-compact/runes-build-compact.component';
import { CompactChampionAbilitiesOrder } from '../../../components/champion-abilities-order/compact-champion-abilities-order.component';
import { CompactChampionAbilitiesOrderBar } from '../../../components/champion-abilities-order-bar/compact-champion-abilities-order-bar.component';
import { formatRunesData } from '../../../components/runes/utils';
import { RunesComponentProps } from '../../../components/runes/types';
import { IsCompactBlock } from '../../../components/is-compact/ic-compact-widget.component';
import { RunesBuildBlock } from '../../../components/runes/runes-build/runes-build.component';
import { ChampionAbilitiesOrderBar } from '../../../components/champion-abilities-order-bar/champion-abilities-order-bar.component';
import { ChampionAbilitiesOrder } from '../../../components/champion-abilities-order/champion-abilities-order.component';
import { NString, Nullable } from '../../../../common/types/lang';
import { Ability } from '../../../components/champion-abilities-order/types';
import { ItemsBuildT } from '../../../components/items-build/types';
import { SkillKey, TierLevel } from '../../../types/gql-dynamic/globalTypes';
import { Text12x500Mixin } from '../../../ui/typography';
import { t } from '../../../../common/i18n/i18n';
import { TierIcon } from '../../../components/images/tier.component';
import { MOBA_TIER_LIST_URL } from '../../../config';
import { WidgetSize } from '../../../types/widget-props';

interface Props {
  abilities: Nullable<Ability[]>;
  itemsBuild: Nullable<ItemsBuildT[]>;
  skillOrder: Nullable<SkillKey[]>;
  abilitiesOrder: Nullable<Ability[]>;
  skillMaxOrder: Nullable<SkillKey[]>;
  spells: Nullable<number[]>;
  perks: Nullable<{ IDs: Nullable<number[]>; style: number; subStyle: number; }>;

  tierLevel: Nullable<TierLevel>
  patch: NString;

  isCompact: boolean;
  isSmall: boolean;
  widgetSize: Nullable<WidgetSize>;

  className?: string;
}

export const ChampionBuildWidgetBody: FunctionComponent<Props> = props => {
  const { abilities, itemsBuild, skillOrder, abilitiesOrder, skillMaxOrder, spells, perks } = props;
  const { isCompact, isSmall, tierLevel, patch, widgetSize, className } = props;

  return (
    <div className={clsx(Content(isSmall), className)}>
      <div className={clsx(Row, !isCompact && FlexEnd)}>
        <div className={clsx(isSmall && CompactRunesWrapper, Col)}>
          <div className={Title}>{t('Runes')}</div>
          <div>
            {perks?.IDs && (
              <IsCompactBlock<RunesComponentProps>
                componentProps={{
                  keystone:perks.IDs[0],
                  runes:formatRunesData(perks.IDs),
                  style:perks?.style,
                  subStyle:perks?.subStyle,
                }}
                CompactWidget={RunesBuildCompactBlock}
                LargeWidget={RunesBuildBlock}
                isCompact={isCompact}
              />
            )}
          </div>
        </div>

        <div className={Col}>
          <div className={Title}>{t('Spells')}</div>
          <div>
            {spells && <Spells spells={spells} className={SpellsStyle} />}
          </div>
        </div>

        {tierLevel && patch && widgetSize &&(
          <span className={clsx(TierListLinkWrapper, TierListLinkWrapperPosition(widgetSize))}>
            <span>Click to see the Tier List</span>
            <div className={Title}>{t('Tier')}</div>
            <a href={MOBA_TIER_LIST_URL} target="_blank">
              <TierIcon alt={`LoL tier list for every role in ${patch} patch`} name={tierLevel} />
            </a>
          </span>
        )}
      </div>

      <div className={Col}>
        <div className={Title}>{t('Items')}</div>
        <div>
          {itemsBuild && <ItemsBuildChain itemsBuild={itemsBuild} widgetSize={widgetSize}/>}
        </div>
      </div>

      <div className={clsx(Col, SkillOrderRow)}>

        {!isCompact && abilities && skillOrder && (
          <div>
            <div className={TitleWrapper}>
              <div className={Title}>{t('Skill Order')}</div>
              {skillMaxOrder && <ChampionAbilitiesOrderBar skillsKeys={skillMaxOrder}/>}
            </div>
            <ChampionAbilitiesOrder abilities={abilities} skillOrder={skillOrder}/>
          </div>
        )}

        {isCompact && (
          <div className={SkillPriority}>
            <div className={Title}>{t('Skill Priority')}</div>
            {abilitiesOrder && (
              <CompactChampionAbilitiesOrderBar
                abilities={abilitiesOrder}
                className={clsx(isCompact && !isSmall && AbilitiesOrder)}
              />
            )}
          </div>
        )}

        {isCompact && !isSmall && (
          <div>
            <div className={Title}>{t('Skill Order')}</div>
            {skillOrder && <CompactChampionAbilitiesOrder skillOrder={skillOrder}/>}
          </div>
        )}
      </div>
    </div>
  );
};



const Content = (isSmall: boolean) => css`
  width: 100%;
  overflow: hidden;

  --moba-widget-col-h-p: ${isSmall ? '12px' : '20px'};
`;

const Col = css`
  padding: 20px var(--moba-widget-col-h-p);
  border-top: 1px solid var(--moba-widget-border-primary-light);

  &:first-child {
    border: none;
  }
`;

const Row = css`
  display: flex;
  flex-wrap: wrap;
  padding: 10px var(--moba-widget-col-h-p);
  position: relative;

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

const Title = css`
  ${Text12x500Mixin};
  color: var(--moba-widget-text-primary-light)!important;
  text-transform: uppercase;
  margin: 0 8px 8px 0;
`;

const SpellsStyle = css`
  margin-top: 12px;
`;

const SkillPriority = css`
  margin-right: 40px;
`;

const AbilitiesOrder = css`
  margin-bottom: 20px;
`;

const TitleWrapper = css`
  display: flex;
  margin: 0 0 8px 0;

  h3{
    margin: 0 12px 0 0;
  }
`;

const SkillOrderRow = css`
  display: flex;
  flex-wrap: wrap;
`;

  // top: 20px;
  // right: 20px;
const TierListLinkWrapper = css`
  display: block;
  width: 27px;
  margin: 0;
  padding: 0;

  position: absolute;

  span {
    ${Text12x500Mixin};
    color: var(--moba-widget-text-secondary)!important;
    display: block;
    position: absolute;

    bottom: 10px;
    right: calc(100% + 2px);
    word-break: unset;
    width: 148px;

    visibility: hidden;
    opacity: 0;

    transition: opacity ease .2s;
  }

  &:hover{
    span{
      visibility: visible;
      opacity: 1;
    }
  }
`;

const TierListLinkWrapperPosition = (widgetSize: WidgetSize) => {

  switch (widgetSize) {
    case 'small':
      return css`
        bottom: 20px;
        right: 20px;

        &:hover{
          span{
            visibility: hidden;
            opacity: 0;
          }
        }
      `;
    case 'medium':
      return css`
        bottom: 20px;
        right: 20px;
      `;
    case 'large':
      return css`
        bottom: 20px;
        right: 20px;
      `;
    case 'x-large':
      return css`
        top: 20px;
        right: 20px;

        & > div {
          display: none;
        }
      `;
  }
}

