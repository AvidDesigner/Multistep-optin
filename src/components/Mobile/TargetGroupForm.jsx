import React, { Fragment, useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import Buttons from '../Buttons';
import ProgressBar from '../ProgressBar'

export default function TargetGroupForm({ prevStep, nextStep, updateAppOptions, values }) {
    const [selectedOptions, setSelectedOptions] = useState(values)
    const { t } = useTranslation()

    useEffect(() => {
        updateAppOptions('target', selectedOptions)
    }, [selectedOptions])

    const options = {
        Choice1: "End Customers(B2C, everyone)",
        Choice2: "Corporate Customers(B2B)",
        Choice3: "Own company/employees"
    }

    const addOption = value => {
        if (selectedOptions.includes(value)) {
            const newOptions = selectedOptions.filter(option => option !== value)
            setSelectedOptions([...newOptions])
        } else {
            setSelectedOptions([...selectedOptions, value])
        }
    }

    return (
        <Fragment>
            <div className="heading-container">
                <h2 className="header">{t('App.TargetGroup.Question')}</h2>
                <h4>{t(`Multiple.Heading`)}</h4>
            </div>
            <label className="validation-error">*<span className="validation-text">{t('Validation.Multi')}</span></label>
            <div className="form-container">
                <div className="inner-container">
                <div className="options">
                {Object.entries(options).map(([key, value], idx) => (
                    <div className={classNames("check-box", {"selected": selectedOptions.includes(value)})} key={idx} onClick={() => addOption(value)}>
                        <h3>{t(`App.TargetGroup.${key}`)}</h3>
                        <BiCheck size={24} color='#000' style={!selectedOptions.includes(value) && { display: 'none' }} />
                    </div>
                ))}
            </div>
            <Buttons prevStep={prevStep} nextStep={nextStep} error={selectedOptions.length < 1 ? true : false}/>
                </div>
            </div>
            <Fragment>
            <ProgressBar value="3" max="11"/>
            </Fragment>
        </Fragment>
    )
}
