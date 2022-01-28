import { FunctionComponent, h } from 'preact';

import { css } from 'goober';

import { ItemsBuildT } from './types';
import { formatItemsBuildType } from '../../format/texts';
import { ItemIcon } from '../images/item-icon.component';
import { Text12x500Mixin } from '../../ui/typography';

interface Props {
  itemsBuild: ItemsBuildT;
  className?: string;
}

export const ItemsBuild: FunctionComponent<Props> = props => {
  const { itemsBuild, className } = props;
  return (
    <div className={className} >
      <div className={Label}>{itemsBuild.type && formatItemsBuildType(itemsBuild.type)}</div>
      <div className={Row}>
        {itemsBuild.items.map((it, index) => {
          return (
            <ItemIcon
              key={it.riotId + index}
              slug={it.riotId.toString()}
              className={Item}
              {...it}
            />
          );
        })}
      </div>
    </div>
  );
};

const Row = css`
  display: flex;
`;

const Label = css`
  ${Text12x500Mixin};
  color: var(--moba-widget-text-secondary)!important;
  margin-bottom: 4px;
  padding: 0;
  margin-top: 12px;
`;

const Item = css`
  margin: 0 0 0 8px;

  &:first-child{
    margin-left: 0;
  }
`;

