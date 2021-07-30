import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

interface Props{
  className?: string;
}

export const RunesBuildCompactBlockSkeleton: FunctionComponent<Props> = props => {
  const { className } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Row}>
        <div className={Icon} />
        <div className={KeystoneIcon} />
        <div className={Icon}/>
        <div className={Icon}/>
        <div className={Icon}/>
      </div>
      <div className={Row}>
        <div className={Icon}/>
        <div className={Icon}/>
        <div className={Icon}/>
      </div>
      <div className={Row}>
        <div className={PerksIcon}/>
        <div className={PerksIcon}/>
        <div className={PerksIcon}/>
      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -12px;
`;

const Row = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 22px;
  margin-top: 12px;

  &:last-child {
    margin-right: 0;
  }

  & > div{
    background: #3C385C;
    border-radius: 50%;
    margin-left: 16px;

    &:first-child{
      margin-left: 0;
    }
  }
`;

const Icon = css`
  width: 32px;
  height: 32px;
`;

const KeystoneIcon = css`
  width: 48px;
  height: 48px;
  margin-left: 8px!important;
  margin-right: -10px;
`;

const PerksIcon = css`
  width: 24px;
  height: 24px;
`;
