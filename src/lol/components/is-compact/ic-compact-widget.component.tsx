import { FunctionComponent, h } from 'preact';

interface Props<T> {
  componentProps: T;
  CompactWidget: FunctionComponent<T>;
  LargeWidget: FunctionComponent<T>;
  isCompact: boolean;
  className?: string;
}

export const IsCompactBlock = <T,>(props: Props<T>) => {
  const { componentProps, CompactWidget, LargeWidget, isCompact, className } = props;
  const Component = isCompact ? CompactWidget : LargeWidget;

  return (
    <Component {...componentProps} className={className} />
  );
};
