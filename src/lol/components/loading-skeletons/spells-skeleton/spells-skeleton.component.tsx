import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const SpellsSkeleton: FunctionComponent<Props> = props => {
  const { className } = props;
  return (
    <div className={clsx(Wrapper, className)} >
      <div className={Icon} />
      <div className={Icon} />
    </div>
  );
};

const Wrapper = css`
  display: flex;
  padding-top: 5px;
`;

const Icon = css`
  width: 36px;
  height: 36px;
  display: block;
  background: var(--moba-widget-skeleton-primary);
  border-radius: 2px;
  margin: 0 8px 0 0;
`;

