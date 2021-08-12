import { FunctionComponent, h, Fragment} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { getSkillKeyColor } from '../../format/colors';
import { Ability } from '../champion-abilities-order/types';
import { ChampionAbilityIcon } from '../images/champion-ability.component';
import { Text10x400Mixin, Text12x500Mixin } from '../../ui/typography';

interface Props {
  abilities: Ability[];
  className?: string;
}

export const CompactChampionAbilitiesOrderBar: FunctionComponent<Props> = props => {
  const { abilities, className } = props;
  return (
    <div className={clsx(Wrapper, className)}>
      {abilities.map((it) => {
        return (
          <Fragment key={it.slug}>
            <div className={SkullWrapper}>
              <ChampionAbilityIcon key={it.slug} slug={it.slug} name={it.name} />
              <div className={AbilityKey} style={{ color: getSkillKeyColor(it.activationKey) }}>{it.activationKey}</div>
            </div>
            <div className={Separator}>→</div>
          </Fragment>
        );
      })}
    </div>
  );
};

const Wrapper = css`
  ${Text10x400Mixin};
  display: flex;
  align-items: center;
  color: #8890b5!important;
`;

const AbilityKey = css`
  ${Text12x500Mixin};
  line-height: 16px!important;
  text-align: center;

  position: absolute;
  bottom: 0;
  right: 0;

  margin: 0;
  padding: 0;

  display: block;
  width: 16px;
  height: 16px;
  background: #4C4278;
  border-radius: 4px;
`;

const Separator = css`
  display: flex;
  margin: 0 6px;

  &:last-child {
    display: none;
  }
`;

const SkullWrapper = css`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

