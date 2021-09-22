import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { Nullable } from '../../../common/types/lang';
import { Text14x400Mixin, Text14x500Mixin, Text16x500Mixin } from '../../ui/typography';

interface Props {
  imgSrc: string;
  title: string;
  text: string;
  link: Nullable<{ text:string, url: string }>
  className?: string;
}

export const ErrorMessage: FunctionComponent<Props> = props => {
  const { imgSrc, title, text, link, className } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <img className={Img} src={imgSrc} alt="" role="presentation" />
      <div className={Title}>{title}</div>
      <div className={Text}>{text}</div>
      {link && <a href={link.url} className={Link}>{link.text}</a>}
    </div>
  );
};

const Wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = css`
  width: 90px;
  height: 90px;
  display: block;
  mix-blend-mode: luminosity;
`;

const Title = css`
  ${Text16x500Mixin};
  text-align: center;
  color: var(--moba-widget-text-primary-light)!important;
  margin: 4px 0 8px 0;
`;

const Text = css`
  ${Text14x400Mixin};
  text-align: center;
  color: var(--moba-widget-text-primary-dark)!important;
  margin: 0;
`;

const Link = css`
  ${Text14x500Mixin};
  text-align: center;
  color: var(--moba-widget-link-primary)!important;
  margin: 20px 0 0 0;

  transition: color ease .2s;

  &:focus,
  &:hover{
    color: var(--moba-widget-link-hover)!important;
  }
`;
