import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { NString } from '../../types/lang';
import { GameItemTooltipRichText } from '../game-item-rich-text/game-item-tooltip-rich-text.component';
import { Text18x400Mixin } from '../../../lol/ui/typography';

interface Props {
  name: NString;
  iconUrl: NString;
  iconName?: NString;
  description: NString;
  className?: string;
}

export const UniversalGameSubjectTooltip: FunctionComponent<Props> = props => {
  const { iconUrl, name, description, className } = props;
  return (
    <div className={clsx(Wrapper,className)}>
      <div className={ItemHeader}>
        {name && iconUrl ? <img className={ItemHeaderIcon} src={iconUrl} alt={name} /> : null}
        {name && <div className={ItemTitle}>{name}</div>}
      </div>
      {!!description && <GameItemTooltipRichText markdownText={description} />}
    </div>
  );
};

const Wrapper = css`
  padding: 10px;
  background: var(--moba-widget-tooltip-bg);
  border: 1px solid var(--moba-widget-tooltip-border);
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
  line-height: 20px!important;
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: calc(100vw - 20px);
`;

const ItemHeader = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ItemHeaderIcon = css`
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

const ItemTitle = css`
  ${Text18x400Mixin};
  color: var(--moba-widget-link-primary)!important;
  margin-bottom: 5px;
  margin-left: 8px;
  margin-right: 8px;
`;

