import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useAppState } from '../../providers/AppProvider';
import * as H from 'history';
import Step1 from './OnBoardingStep1';
import Step2 from './OnBoardingStep2';
import Step3 from './OnBoardingStep3';
interface IProps {
    history: H.History;
}

const STEPS = {
    STEP1: 1,
    STEP2: 2,
    STEP3: 3
}

const OnBoardingCP = (props: IProps) => {
    let { state, nextStep, formSubmit, currentStep } = useAppState();
    const [theme, setTheme] = useContext(ThemeContext);
    const { match }: any = props;

    useEffect(() => {
        currentStep(Number(match.params.onStep))
    }, []);

    console.log(state);
    return (
        <>
            <div className={`${theme} onBoard-container`}>
                <Helmet>
                    <title>On Boarding</title>
                </Helmet>

                {
                    STEPS.STEP1 === state.step &&
                    <Step1
                        onFormSubmit={nextStep}
                        routing={props}
                    />
                }
                {
                    STEPS.STEP2 === state.step &&
                    <Step2
                        onFormSubmit={nextStep}
                        routing={props}
                    />
                }
                {
                    STEPS.STEP3 === state.step &&
                    <Step3
                        onFormSubmit={formSubmit}
                        routing={props}
                    />
                }
            </div>
        </>
    );
};

export default OnBoardingCP;
