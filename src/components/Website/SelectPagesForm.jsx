import React, { Fragment, useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import Buttons from '../Buttons';
import ProgressBar from '../ProgressBar';

export default function SelectPagesForm({ prevStep, nextStep, updateWebsiteOptions, values }) {
    const [selectedOption, setSelectedOption] = useState(values)
    const { t } = useTranslation()

    useEffect(() => {
        updateWebsiteOptions('numberOfPages', selectedOption)
    }, [selectedOption])

    const options = {
        Ans1: "Onepager",
        Ans2: "Up to 3 pages", 
        Ans3: "Up to 6 pages", 
        Ans4: "Up to 12 pages", 
        Ans5: "More than 12 pages"
    }

    return (
        <Fragment>
            <div className="heading-container">
                <h2 className="header">{t('Website.Pages.Question')}</h2>
                <h5>({t('Website.Pages.Heading')})</h5>
            </div>
            <label className="validation-error">*<span className="validation-text">{t('Validation.One')}</span></label>
            <div className="form-container">
                <div className="inner-container">
                    {Object.entries(options).map(([key, value], idx) => (
                        <div className={classNames("check-box", {"selected": selectedOption === value})} key={idx} onClick={() => setSelectedOption(value)}>
                            <h4>{t(`Website.Pages.${key}`)}</h4>
                            <BiCheck size={24} color='#000' style={selectedOption !== value && { display: 'none' }} />
                        </div>
                    ))}
                <Buttons prevStep={prevStep} nextStep={nextStep} error={values === '' ? true : false}/>
                </div>
            </div>
            <ProgressBar value="1" max="5"/>
        </Fragment>
    )
}
