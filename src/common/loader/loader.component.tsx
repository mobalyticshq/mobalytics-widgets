import { FunctionComponent, h } from 'preact';
import { css, keyframes } from 'goober';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const Loader: FunctionComponent<Props> = props => {
  const { className } = props;
  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Dot} />
      <div className={Dot} />
      <div className={Dot} />
    </div>
  );
};

const fade = keyframes`
  0% {
    opacity: 0.1;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.1;
  }
`;

const Wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Dot = css`
  background-color: var(--moba-widget-bg-primary-light)!important;
  border-radius: 100%;
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  opacity: 0.8;
  animation: ${fade} 1.4s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;
