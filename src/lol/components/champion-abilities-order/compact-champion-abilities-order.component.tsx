import { FunctionComponent, h} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { SkillKey } from '../../types/gql-dynamic/globalTypes';
import { getSkillKeyColor } from '../../format/colors';
import { Text12x500Mixin, Text12x700Mixin } from '../../ui/typography';

interface Props {
  skillOrder: SkillKey[];
  className?: string;
}

export const CompactChampionAbilitiesOrder: FunctionComponent<Props> = props => {
  const { skillOrder, className } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      {skillOrder.map((key, index) => {
        return (
          <div key={index} className={Item}>
            <div className={Index}>{index + 1}</div>
            <div className={AbilityKeySymbol} style={{ color: getSkillKeyColor(key)}} key={index}>
              {key}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Wrapper = css`
  display: flex;
`;

const Item = css`
  margin-left: 4px;

  &:first-child{
    margin: 0;
  }
`;

const AbilityKeySymbol = css`
  ${Text12x500Mixin};
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: rgba(76, 66, 120, 0.4);
  cursor: default;

  line-height: 20px!important;
  text-transform: uppercase;
  text-align: center;
  position: relative;
`;

const Index = css`
  ${Text12x700Mixin};
  color: #6B6889!important;
  text-align: center;
  height: 20px;
  margin-bottom: 2px;
`;
