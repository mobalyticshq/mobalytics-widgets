import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const ItemsBuildSkeleton: FunctionComponent<Props> = props => {
  const { className } = props;
  return (
    <div className={clsx(Wrapper, className)} >
      <div className={Row}>
        <div className={Label} />
        <div className={Chain}>
          <div className={Item}/>
          <div className={Item}/>
          <div className={Item}/>
        </div>
      </div>
      <div className={Row}>
        <div className={Label} />
        <div className={Chain}>
          <div className={Item}/>
          <div className={Item}/>
        </div>
      </div>
      <div className={Row}>
        <div className={Label} />
        <div className={Chain}>
          <div className={Item}/>
          <div className={Item}/>
          <div className={Item}/>
        </div>
      </div>
      <div className={Row}>
        <div className={Label} />
        <div className={Chain}>
          <div className={Item}/>
          <div className={Item}/>
          <div className={Item}/>
        </div>
      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: -8px;
`;

const Row = css`
  display: flex;
  flex-direction: column;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

const Label = css`
  height: 8px;
  width: 80px;
  background: #3C385C;
  border-radius: 2px;
  margin-bottom: 8px;
  margin-top: 18px;
  padding: 0;
`;

const Item = css`
  width: 36px;
  height: 36px;
  display: block;
  background: #3C385C;
  border-radius: 2px;
  margin: 0 0 0 8px;

  &:first-child{
    margin-left: 0;
  }
`;

const Chain = css`
  display: flex;
`;
