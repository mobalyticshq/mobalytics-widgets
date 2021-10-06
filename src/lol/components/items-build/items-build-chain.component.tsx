import { FunctionComponent, h } from 'preact';

import { css } from 'goober';

import { ItemsBuild } from './items-build.component';
import { ItemsBuildT } from './types';
import { Nullable } from '../../../common/types/lang';
import { WidgetSize } from '../../types/widget-props';

interface Props {
  itemsBuild: ItemsBuildT[];
  widgetSize: Nullable<WidgetSize>;
}

export const ItemsBuildChain: FunctionComponent<Props> = props => {
  const { itemsBuild, widgetSize } = props;
  return (
    <div className={Wrapper(widgetSize)}>
      {itemsBuild.map((it) => <ItemsBuild itemsBuild={it} key={it.type}/>)}
    </div>
  );
};

const Wrapper = (widgetSize: Nullable<WidgetSize>) => css`
  display: flex;
  flex-wrap: wrap;
  margin-top: -8px;

  & > p {
    margin-top: 8px;
  }

  & > div{
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    ${widgetSize === 'small'? 'margin-right: 12px': ''};
    ${widgetSize === 'medium'? 'margin-right: 8px': ''};

    &:last-child{
      margin-right: 0;
    }
  }
`;
