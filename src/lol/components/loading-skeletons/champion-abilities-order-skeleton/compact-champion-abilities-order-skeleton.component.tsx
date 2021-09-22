import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const CompactChampionAbilitiesOrderSkeleton: FunctionComponent<Props> = props => {
  const { className } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
      <div className={Item}><div className={Index}/><div className={AbilityKeySymbol}/></div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
`;

const Item = css`
  margin-left: 4px;

  &:first-child{
    margin: 0;
  }
`;

const AbilityKeySymbol = css`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: var(--moba-widget-skeleton-primary);
  cursor: default;
  position: relative;
`;

const Index = css`
  background: var(--moba-widget-skeleton-primary);
  height: 20px;
  margin-bottom: 4px;
`;
