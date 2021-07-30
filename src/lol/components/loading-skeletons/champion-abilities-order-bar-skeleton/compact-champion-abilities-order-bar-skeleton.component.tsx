import { FunctionComponent, h} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';
import { Text10x400Mixin } from '../../../ui/typography';

interface Props {
  className?: string;
}

export const CompactChampionAbilitiesOrderBarSkeleton: FunctionComponent<Props> = props => {
  const { className } = props;
  return (
    <div className={clsx(Wrapper, className)}>
      <div className={SkullWrapper}/>
      <div className={Separator} >→</div>
      <div className={SkullWrapper}/>
      <div className={Separator} >→</div>
      <div className={SkullWrapper}/>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

const Separator = css`
  ${Text10x400Mixin};
  display: flex;
  margin: 0 6px;
  color: #3C385C;
`;

const SkullWrapper = css`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: block;
  background: #3C385C;
`;
