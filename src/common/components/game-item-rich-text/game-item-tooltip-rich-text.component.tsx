import { FunctionComponent, h } from 'preact';
import { css } from 'goober';

import { processCustomHtmlTags } from './game-item-rich-text.utils';
import { RichText } from '../rich-text/rich-text.component';

interface Props {
  markdownText?: string;
  className?: string;
}

export const GameItemTooltipRichText: FunctionComponent<Props> = props => {
  const { markdownText } = props;
  const processedMarkdown = markdownText ? processCustomHtmlTags(markdownText) : undefined;
  return (
    <div className={StyledLolRichText}>
      <RichText markdown={processedMarkdown}/>
    </div>
  );
};

const StyledLolRichText = css`
  position: relative;
  color: #b3b4d0;

  .custom {
    display: inline;
  }

  .stats {
    display: block;
    color: #6b6889;
  }

  .attention {
    font-weight: 500;
    color: #ffffff;
  }

  i,
  .unique,
  .active,
  .aura,
  .passive,
  .rarityMythic {
    font-weight: 700;
    color: #ffffff;
  }

  .rarityMythic {
    color: #fec205;
  }

  .magicDamage {
    color: #84d0fe;
  }

  li {
    list-style-type: none;
  }

  li + li {
    margin-top: 8px;
  }
`;
