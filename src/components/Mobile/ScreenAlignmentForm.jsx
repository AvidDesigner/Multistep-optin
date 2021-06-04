import React, { Fragment, useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import Buttons from '../Buttons';
import ProgressBar from '../ProgressBar'

export default function ScreenAlignmentForm({ prevStep, nextStep, updateAppOptions, values }) {
    const [selectedOptions, setSelectedOptions] = useState(values)
    const { t } = useTranslation()

    useEffect(() => {
        updateAppOptions('alignment', selectedOptions)
    }, [selectedOptions])

    const options = {
        Choice1: "Landscape",
        Choice2: "Potrait",
        Choice3: "Both"
    }

    return (
        <Fragment>
            <div className="heading-container">
                <h2 className="header">{t('App.Alignment.Question')}</h2>
            </div>
            <label className="validation-error">*<span className="validation-text">{t('Validation.One')}</span></label>
            <div className="form-container">
            <div className="inner-container">
                {Object.entries(options).map(([key, value], idx) => (
                    <div className={classNames("check-box", {"selected": selectedOptions === value})} key={idx} onClick={() => setSelectedOptions(value)}>
                        <h3>{t(`App.Alignment.${key}`)}</h3>
                        <BiCheck size={24} color='#000' style={selectedOptions !== value && { display: 'none' }} />
                    </div>
                ))}
                <Buttons prevStep={prevStep} nextStep={nextStep} error={selectedOptions === '' ? true : false}/>
            </div>
            </div>
            <ProgressBar value="6" max="11"/>
        </Fragment>
    )
}
