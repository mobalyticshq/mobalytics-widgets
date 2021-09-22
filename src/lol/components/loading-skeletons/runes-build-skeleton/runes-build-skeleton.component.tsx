import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

interface Props{
  className?: string;
}

export const RunesBuildBlockSkeleton: FunctionComponent<Props> = props => {
  const { className } = props;
  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Col}>
        <div className={BlockWrapper}>
          <div className={Header}>
            <div className={clsx(RuneRound, PathIcon)} />
            <div className={Name}/>
          </div>
          <div className={Grid}>
            <div className={clsx(GridRow, KeystoneRow)}>
              <div className={KeystoneRound} />
              <div className={KeystoneRound} />
              <div className={KeystoneRound} />
              <div className={KeystoneRound} />
            </div>
            <div className={GridRow}>
              <div className={RuneRound} />
              <div className={RuneRound} />
              <div className={RuneRound} />
            </div>
            <div className={GridRow}>
              <div className={RuneRound} />
              <div className={RuneRound} />
              <div className={RuneRound} />
            </div>
            <div className={GridRow}>
              <div className={RuneRound} />
              <div className={RuneRound} />
              <div className={RuneRound} />
            </div>
          </div>
        </div>
      </div>
      <div className={Col}>
        <div className={BlockWrapper}>
          <div className={Header}>
            <div className={clsx(RuneRound, PathIcon)} />
            <div className={Name}/>
          </div>
          <div className={Grid}>
            <div className={GridRow}>
              <div className={RuneRound} />
              <div className={RuneRound} />
              <div className={RuneRound} />
            </div>
            <div className={GridRow}>
              <div className={RuneRound} />
              <div className={RuneRound} />
              <div className={RuneRound} />
              <div className={RuneRound} />
            </div>
            <div className={GridRow}>
              <div className={RuneRound} />
              <div className={RuneRound} />
              <div className={RuneRound} />
            </div>
          </div>
        </div>
        <div className={Row}>
          <div className={PerksIcon} />
          <div className={PerksIcon} />
          <div className={PerksIcon} />
        </div>
      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  flex-wrap: wrap;
`;

const Row = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 23px;
`;

const Col = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PerksIcon = css`
  width: 24px;
  height: 24px;
  margin: 0 8px;
  background: var(--moba-widget-skeleton-primary);
  border-radius: 50%;
`;

const BlockWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Grid = css`
  display: grid;
  row-gap: 22px;
  position: relative;
`;

const Header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Name = css`
  width: 70px;
  height: 12px;
  background: var(--moba-widget-skeleton-primary);
  text-transform: capitalize;
  margin-left: 8px;
`;

const PathIcon = css`
  width: 36px;
  height: 36px;
`;

const GridRow = css`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-column-gap: 20px;
  position: relative;
`;

const KeystoneRow = css`
  margin-top: -5px;
  margin-bottom: -5px;
`;

const RuneRound = css`
  width: 36px;
  height: 36px;
  background: var(--moba-widget-skeleton-primary);
  border-radius: 50%;
`;

const KeystoneRound = css`
  width: 48px;
  height: 48px;
  background: var(--moba-widget-skeleton-primary);
  border-radius: 50%;
`;
