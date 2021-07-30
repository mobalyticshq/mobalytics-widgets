import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { ErrorMessage } from '../../../components/error-message/error-message.component';
import { Nullable } from '../../../../common/types/lang';

interface Props {
  imgSrc: string;
  title: string;
  text: string;
  link: Nullable<{ text:string, url: string }>
  className?: string;
}

export const ChampionBuildWidgetError: FunctionComponent<Props> = props => {
  const { className } = props;
  const { imgSrc, title, text, link } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <ErrorMessage
        imgSrc={imgSrc}
        title={title}
        text={text}
        link={link}
        className={Error}
      />
    </div>
  );
};

const Wrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d2652;
  border-radius: 5px;
  padding: 20px;
`;

const Error = css`
  width: 100%;
  max-width: 400px;
`;
