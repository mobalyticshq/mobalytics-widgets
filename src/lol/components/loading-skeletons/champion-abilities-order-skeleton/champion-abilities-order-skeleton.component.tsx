import { FunctionComponent, h} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const ChampionAbilitiesOrderSkeleton: FunctionComponent<Props> = props => {
  const { className } = props;
  return (
    <div className={clsx(Wrapper, className)}>

      <div className={SkillsWrapper}>
        <div className={SkillIcon} />
        <div className={SkillIcon} />
        <div className={SkillIcon} />
        <div className={SkillIcon} />
      </div>

      <div className={SkillsOrderWrapper}>
        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '0%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '50%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '75%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '0' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '25%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '50%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '75%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '50%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '25%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '25%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '75%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '50%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '25%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '50%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '75%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '50%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '0%' }}/>
          </div>
        </div>

        <div className={Col} >
          <div className={Index}/>
          <div className={Line}>
            <div className={AbilityKeySymbol} style={{ top: '25%' }}/>
          </div>
        </div>

      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
`;

const SkillsWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 8px;
`;

const SkillIcon = css`
  width: 24px;
  height: 24px;
  margin-top: 8px;
  background: #3C385C;
`;

const SkillsOrderWrapper = css`
  display: flex;
`;

const Col = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3px;
  height: 144px;
`;

const Index = css`
  background: #3C385C;
  border-radius: 1px;
  cursor: default;
  height: 20px;
  width: 20px;
  margin-bottom: 2px;
`;

const Line = css`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const AbilityKeySymbol = css`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: #3C385C;
  position: relative;
  transform: translate(0, 8px);

  &:before {
    display: block;
    content: '';
    width: 1px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.05);
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
  }
`;
