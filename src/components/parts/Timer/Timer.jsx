import S from "./Timer.module.scss"
import useTranslation from 'next-translate/useTranslation';
import Countdown from 'react-countdown';

function Timer({StartDate}) {
    const { t, lang } = useTranslation('common')


    const renderer = (props) => {
        if (props.completed) {
            // Render a completed state
            return null;
        }

        // Render a countdown
        return (
            <div className={`${S.timerCellContainer} d-flex mx-auto justify-content-around`}>
                {["days", "hours", "minutes", "seconds"].map(value => (
                    <div className={S.timerCell} key={value}> 
                        <div className={S.value}>{props[value]}</div>
                        <div className={S.label}>{t(`eventCard.status.timer.${value}`)}</div>
                    </div>
                ))}
            </div>
        );
    };
    return (
        <>
            <div>
                <Countdown date={StartDate} renderer={renderer} />
            </div>
        </>
    )
}


export default Timer