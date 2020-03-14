import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useAppState } from '../../providers/AppProvider';

import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';

const OnBoardingCP: React.FC = () => {
    let { state, nextStep, formSubmit } = useAppState();
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <>
            <div className={`${theme} onBoard-container`}>
                <Helmet>
                    <title>On Boarding</title>
                </Helmet>

                {state.step == 1 && <Step1Form onFormSubmit={nextStep} />}
                {state.step == 2 && <Step2Form onFormSubmit={nextStep} />}
                {state.step == 3 && <Step3Form onFormSubmit={formSubmit} />}
            </div>
        </>
    );
};

export default OnBoardingCP;
