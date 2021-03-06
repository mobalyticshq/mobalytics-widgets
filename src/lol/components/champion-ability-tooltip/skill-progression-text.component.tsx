import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';
import { Text12x400Mixin } from '../../ui/typography';

interface Props {
  text: string;
  className?: string;
}

export const SkillProgressionText: FunctionComponent<Props> = props => {
  const { text, className } = props;
  return (
    <span className={clsx(Wrapper,className)}>
      <span className={Value} >{text}</span>
    </span>
  );
};

 const Wrapper = css`
  ${Text12x400Mixin};
  color: var(--moba-widget-text-primary-dark)!important;
`;

 const Value = css`
  font-weight: 500;
  color: var(--moba-widget-text-primary-light)!important;
`;
