import { FunctionComponent, h} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { championPosterImage } from '../../../utils/images';
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
import { Nullable } from '../../../../common/types/lang';
import { Ability } from '../../../components/champion-abilities-order/types';
import { ItemsBuildT } from '../../../components/items-build/types';
import { SkillKey } from '../../../types/gql-dynamic/globalTypes';
import { Text12x500Mixin } from '../../../ui/typography';
import { t } from '../../../../common/i18n/i18n';

interface Props {
  abilities: Nullable<Ability[]>;
  itemsBuild: Nullable<ItemsBuildT[]>;
  skillOrder: Nullable<SkillKey[]>;
  abilitiesOrder: Nullable<Ability[]>;
  skillMaxOrder: Nullable<SkillKey[]>;
  spells: Nullable<number[]>;
  perks: Nullable<{ IDs: Nullable<number[]>; style: number; subStyle: number; }>;

  isCompact: boolean;
  isSmall: boolean;
  className?: string;
}

export const ChampionBuildWidgetBody: FunctionComponent<Props> = props => {
  const { abilities, itemsBuild, skillOrder, abilitiesOrder, skillMaxOrder, spells, perks } = props;
  const { isCompact, isSmall, className } = props;

  return (
    <div className={clsx(Content, className)}>
      <div className={clsx(Row, !isCompact && FlexEnd)}>
        <div className={clsx(isSmall && CompactRunesWrapper, Col)}>
          <h3 className={Title}>{t('Runes')}</h3>
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
          <h3 className={Title}>{t('Spells')}</h3>
          <div>
            {spells && <Spells spells={spells} className={SpellsStyle} />}
          </div>
        </div>
      </div>

      <div className={Col}>
        <h3 className={Title}>{t('Items')}</h3>
        <div>
          {itemsBuild && <ItemsBuildChain itemsBuild={itemsBuild}/>}
        </div>
      </div>

      <div className={clsx(Col, SkillOrderRow)}>

        {!isCompact && abilities && skillOrder && (
          <div>
            <div className={TitleWrapper}>
              <h3 className={Title}>{t('Skill Order')}</h3>
              {skillMaxOrder && <ChampionAbilitiesOrderBar skillsKeys={skillMaxOrder}/>}
            </div>
            <ChampionAbilitiesOrder abilities={abilities} skillOrder={skillOrder}/>
          </div>
        )}

        {isCompact && (
          <div className={SkillPriority}>
            <h3 className={Title}>{t('Skill Priority')}</h3>
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
            <h3 className={Title}>{t('Skill Order')}</h3>
            {skillOrder && <CompactChampionAbilitiesOrder skillOrder={skillOrder}/>}
          </div>
        )}
      </div>
    </div>
  );
};


const Content = css`
  width: 100%;
  overflow: hidden;
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

const Title = css`
  ${Text12x500Mixin};
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 8px 0;
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
