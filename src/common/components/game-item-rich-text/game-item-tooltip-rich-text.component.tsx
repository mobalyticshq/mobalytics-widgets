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
  color: var(--moba-widget-text-primary-dark)!important;

  .custom {
    display: inline;
  }

  .stats {
    display: block;
    color: var(--moba-widget-text-secondary)!important;
  }

  .attention {
    font-weight: 500;
    color: var(--moba-widget-text-primary-light)!important;
  }

  i,
  .unique,
  .active,
  .aura,
  .passive,
  .rarityMythic {
    font-weight: 700;
    color: var(--moba-widget-text-primary-light)!important;
  }

  .rarityMythic {
    color: var(--moba-widget-link-primary)!important;
  }

  .magicDamage {
    color: var(--moba-widget-link-hover)!important;
  }

  li {
    list-style-type: none;
  }

  li + li {
    margin-top: 8px;
  }
`;
