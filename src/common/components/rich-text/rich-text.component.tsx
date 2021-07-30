import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';
import { Text14x400Mixin } from '../../../lol/ui/typography';

const Markdown = require('preact-markdown');

export interface Props {
  markdown?: string;
  className?: string;
}

export const RichText: FunctionComponent<Props> = props => {
  const { markdown,  className } = props;
  return !!markdown ? (
    <div className={clsx(Wrapper, className)}>
      <Markdown {...props} />
    </div>
  ): null;
};


const Wrapper = css`
  ${Text14x400Mixin};
  font-family: apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  color: #8890b5;
  letter-spacing: 0.25px;
  display: inline-block;
  vertical-align: middle;

  strong {
    color: #ccae70;
    font-weight: 500;
  }

  a {
    color: #4496dd;
  }

  b,
  i,
  u {
    color: #ffffff;
  }

  ul,
  ol {
    margin: 4px 0;
    padding-left: 28px;
  }
`;
