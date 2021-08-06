import { FunctionComponent, h, Fragment} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { SkillKey } from '../../types/gql-dynamic/globalTypes';
import { getSkillKeyColor } from '../../format/colors';
import { Text10x400Mixin, Text12x500Mixin } from '../../ui/typography';

interface Props {
  skillsKeys: SkillKey[];
  className?: string;
}

export const ChampionAbilitiesOrderBar: FunctionComponent<Props> = props => {
  const { skillsKeys, className } = props;
  return (
    <div className={clsx(Wrapper, className)}>
      {skillsKeys.map((key) => {
        return (
          <Fragment key={key}>
            <div className={AbilityKey(getSkillKeyColor(key))}>{key}</div>
            <div className={Separator} >→</div>
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
  height: 14px;
`;

 const AbilityKey = (color: string) => css`
  ${Text12x500Mixin};
  color: ${color};
`;

 const Separator = css`
  display: flex;
  margin: 0 6px;

  &:last-child {
    display: none;
  }
`;
