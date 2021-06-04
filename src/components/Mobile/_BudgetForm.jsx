import React, { useState, useEffect, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import Buttons from '../Buttons'
import ProgressBar from '../ProgressBar'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default function BudgetForm({ prevStep, nextStep, updateAppOptions, values }) {
    const [value, setValue] = useState(19000)
    const [upper, setUpper] = useState(250000)
    const [error1, setError1] = useState(true)
    const [error2, setError2] = useState(true)
    const { t } = useTranslation()

    useEffect(() => {
        const budget = [value, upper]
        updateAppOptions('budget', budget)
    }, [value, upper])

    return (
        <Fragment>
            <div className="heading-container">
                <h2 className="header">{t('App.Budget.Question')}</h2>
            </div>
            <label className="validation-error">*<span className="validation-text">{t('Validation.Value')}</span></label>
            <div style={{textAlign: 'center', marginBlock: 20}}>
            <h4 style={{fontWeight: 300, marginBottom: 20}}>{value}€ - {upper}€</h4>
            <h4 style={{fontWeight: 400, marginBottom: 20}}>{t('App.Budget.Answer')}</h4>
            </div>
            <div className="form-submit">
            <div className="slider-parent">
                <input style={{zIndex: 999}} type="range" value={value} min="19000" max="250000" step="10000" className="duration-slider" onChange={({ target: { value: radius } }) => {
                    setValue(numberWithCommas(radius))
                    setError1(false)
                }}/>
                <input type="range" value={upper} min="19000" max="250000" step="10000" className="duration-slider" onChange={({ target: { value: radius } }) => {
                    setUpper(numberWithCommas(radius))
                    setError2(false)
                }}/>
            </div>
            <div className="slider-range">
                    <h4>19,000€</h4>
                    <h4>250,000€</h4>
                </div>
                <Buttons prevStep={prevStep} nextStep={nextStep} error={(error1 || error2) ? true : false}/>
            </div>
            <ProgressBar value="10" max="11"/>
        </Fragment>
    )
}
