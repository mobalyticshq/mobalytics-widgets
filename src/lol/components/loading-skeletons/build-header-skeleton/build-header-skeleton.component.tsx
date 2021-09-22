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
  background: var(--moba-widget-bg-primary-dark);
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid var(--moba-widget-border-primary-light);
  height: 60px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
`;

const ChampionImage = css`
  display: block;
  width: 36px;
  height: 36px;
  background: var(--moba-widget-skeleton-primary);
  border-radius: 50%;
  margin-right: 8px;
`;

const Title = css`
  height: 10px;
  width: 90px;
  background: var(--moba-widget-skeleton-primary);
  border-radius: 1px;
  margin-bottom: 12px;
`;

const Text = css`
  height: 10px;
  width: 190px;
  background: var(--moba-widget-skeleton-primary);
  border-radius: 1px;
`;
