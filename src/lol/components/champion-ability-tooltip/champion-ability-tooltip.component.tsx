import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';
import { NString, Nullable } from '../../../common/types/lang';
import { useCallback, useState } from 'preact/hooks';
import { t } from '../../../common/i18n/i18n';
import { CdnVideo } from '../../../common/types/video';
import { championAbilityVideo } from '../../../common/format/video';
import { getSkillKeyColor } from '../../format/colors';
import { validateStrEnumValue } from '../../../common/utils/lang';
import { SkillKey } from '../../types/gql-dynamic/globalTypes';
import { SkillProgressionText } from './skill-progression-text.component';
import { RichText } from '../../../common/components/rich-text/rich-text.component';
import { Text12x400Mixin, Text12x500Mixin } from '../../ui/typography';

interface Props {
  slug: string;
  name: string;
  description?: NString;
  abilityKey?: NString;
  cooldown?: NString;
  cost?: NString;
  range?: NString;
  className?: string;
}

export const ChampionAbilityTooltip: FunctionComponent<Props> = props => {
  const { slug, name, description } = props;
  const { abilityKey, range, cost, cooldown, className } = props;
  const key = validateStrEnumValue<SkillKey>(SkillKey,abilityKey)
  const color = key ? getSkillKeyColor(key) : null;

  const [video, setVideo] = useState<Nullable<CdnVideo>>(championAbilityVideo(slug));
  const style = { marginTop: !!video ? undefined : '0' };
  const onVideoError = useCallback(() => setVideo(null), [setVideo]);

  return (
    <div className={clsx(Wrapper,className)}>
      {!!video && (
        <video className={VideoStyled} loop={true} autoPlay={true} muted={true} placeholder={video.placeholder} onError={onVideoError}>
          <source src={video.webm} type="video/webm" />
          <source src={video.mp4} type="video/mp4" />
        </video>
      )}
      <div className={Content} style={style}>
        <div className={Title}>
          {name}
          {color && key && <div className={ChampionAbilityKeySymbolStyled} style={{ color }}>{key}</div>}
        </div>
        {!!description && <RichText className={Description} markdown={description} />}
        {!!range && (
          <p className={AbilityMetric}>
            <em>{t('Range')}:</em>
            &nbsp;
            <span className={AbilityMetricValue}>{range}</span>
          </p>
        )}
        {!!cost && cost !== '0' && (
          <p className={AbilityMetric}>
            <em>{t('Cost')}:</em>
            &nbsp;
            <SkillProgressionText text={cost} />
          </p>
        )}
        {!!cooldown && (
          <p className={AbilityMetric}>
            <em>{t('Cooldown')}:</em>
            &nbsp;
            <SkillProgressionText text={cooldown} />
            &nbsp;
            <span>{t('seconds')}</span>
          </p>
        )}
      </div>
    </div>
  );
};

const Wrapper = css`
  width: 280px;
  background-color: #19133d;
  border: 1px solid #221843;
  border-radius: 5px;
`;

const VideoStyled = css`
  max-width: 100%;
  min-height: 192px;
  border-radius: 5px 5px 0 0;
`;

const Content = css`
  position: relative;
  margin-top: -60px;
  padding: 8px 12px;
  background-image: linear-gradient(to bottom, rgba(25, 19, 61, 0), #19133d 60px, #19133d 100%);

  > * + * {
    margin-top: 4px;
  }
`;

const Title = css`
  ${Text12x500Mixin};
  display: flex;
  align-items: center;
  color: #fff;
`;

const ChampionAbilityKeySymbolStyled = css`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  cursor: default;

  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-left: 4px;
`;

const Description = css`
  color: #aaabca;
  line-height: 1.5;
  ${Text12x400Mixin};
`;

const AbilityMetric = css`
  ${Text12x400Mixin};
  color: #8890b5;
`;

const AbilityMetricValue = css`
  ${Text12x500Mixin};
  color: #ffffff;
`;

