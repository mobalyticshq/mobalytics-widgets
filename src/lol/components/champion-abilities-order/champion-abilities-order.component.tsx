import { FunctionComponent, h} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { SkillKey } from '../../types/gql-dynamic/globalTypes';
import { getSkillKeyColor } from '../../format/colors';
import { SkillKeyOrder } from '../../format/order';
import { Ability } from './types';
import { ChampionAbilityIcon } from '../images/champion-ability.component';
import { Text12x500Mixin, Text12x700Mixin } from '../../ui/typography';

interface Props {
  abilities?: Ability[];
  skillOrder: SkillKey[];
  className?: string;
}

export const ChampionAbilitiesOrder: FunctionComponent<Props> = props => {
  const { abilities, skillOrder, className } = props;
  return (
    <div className={clsx(Wrapper, className)}>
      <div className={SkillsWrapper}>
        {
          abilities?.map(it => <ChampionAbilityIcon key={it.slug} slug={it.slug} name={it.name} className={SkillIcon} />)
        }
      </div>

      <div className={SkillsOrderWrapper}>
        {skillOrder.map((key: SkillKey, index: number) => {
          const offset = `${25 * (SkillKeyOrder[key] - 1)}%`;
          return (
            <div className={Col} key={index}>
              <div className={Index}>{index + 1}</div>
              <div className={Line}>
                <div className={AbilityKeySymbol} style={{ color: getSkillKeyColor(key), top: offset }}>
                  {key}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const Wrapper = css`
  display: flex;
`;

const SkillsWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 8px;
`;

const SkillIcon = css`
  width: 24px;
  height: 24px;
  margin-top: 8px;
`;

const SkillsOrderWrapper = css`
  display: flex;
`;

const Col = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3px;
  height: 144px;
`;

const Index = css`
  ${Text12x700Mixin};
  color: var(--moba-widget-text-secondary)!important;
  cursor: default;
  height: 20px;
  margin-bottom: 2px;
`;

const Line = css`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const AbilityKeySymbol = css`
  ${Text12x500Mixin};
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: var(--moba-widget-bg-primary-light);
  cursor: default;

  line-height: 20px!important;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  transform: translate(0, 8px);

  &:before {
    display: block;
    content: '';
    width: 1px;
    height: 200px;
    background-color: var(--moba-widget-border-primary-light);
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    opacity: 0.5;
  }
`;
