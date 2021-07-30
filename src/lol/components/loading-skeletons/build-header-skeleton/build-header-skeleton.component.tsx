import { FunctionComponent, h } from 'preact';
import { css } from 'goober';

export const BuildHeaderSkeleton: FunctionComponent = () => {
  return (
    <div className={Wrapper}>
      <div className={ChampionImage} />
      <div>
        <div className={Title}/>
        <div className={Text}/>
      </div>
    </div>
  );
};

const Wrapper = css`
  background: #252046;
  border-radius: 5px 5px 0 0;
  border: 1px solid #3c2d69;
  height: 60px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
`;

const ChampionImage = css`
  display: block;
  width: 36px;
  height: 36px;
  background: #3C385C;
  border-radius: 50%;
  margin-right: 8px;
`;

const Title = css`
  height: 10px;
  width: 90px;
  background: #3C385C;
  border-radius: 1px;
  margin-bottom: 12px;
`;

const Text = css`
  height: 10px;
  width: 190px;
  background: #3C385C;
  border-radius: 1px;
`;
