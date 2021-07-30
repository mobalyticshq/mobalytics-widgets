import { FunctionComponent, h } from 'preact';

import { css } from 'goober';

import { ItemsBuild } from './items-build.component';
import { ItemsBuildT } from './types';

interface Props {
  itemsBuild: ItemsBuildT[];
}

export const ItemsBuildChain: FunctionComponent<Props> = props => {
  const { itemsBuild } = props;
  return (
    <div className={Wrapper}>
      {itemsBuild.map((it) => <ItemsBuild itemsBuild={it} key={it.type}/>)}
    </div>
  );
};

const Wrapper = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: -8px;

  & > p {
    margin-top: 8px;
  }

  & > div{
    display: flex;
    flex-direction: column;
    margin-right: 12px;

    &:last-child{
      margin-right: 0;
    }
  }
`;
