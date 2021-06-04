import React, { Fragment, useState } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import Buttons from './Buttons';

export default function UserDetailsForm({ isApp, user, changeUserData, prevStep, nextStep, errors, validateForm }) {
    const { t } = useTranslation()
    const all = errors.name && errors.email && errors.phone
    const name = (errors.name && !errors.email && !errors.phone) || (errors.name && errors.email && !errors.phone) || (errors.name && !errors.email && errors.phone)
    const email = (errors.email && !errors.phone && !errors.name) || (errors.email && errors.phone && !errors.name)
    const phone = (!errors.email && errors.phone && !errors.name)    

    return (
        <Fragment>
            <div className="heading-container">
            <h2 className="header">{t('BasicInfo')}</h2>
            </div>
            {all ? <label className="validation-error">*</label>
            : name ? <label className="validation-error">*</label>
            : email ? <label className="validation-error">*<span className="validation-text">{t('EmailError')}</span></label>
            : phone && <label className="validation-error">*<span className="validation-text">{t('PhoneError')}</span></label>}
            <div className="form-container">
                <div className="inner-container">
                    <form>                    
                    <input type="text" 
                        className={classNames("inpt1", { "highlight": errors.name})}
                        value={user.name}
                        onChange={changeUserData('name')} 
                        id="name"
                        placeholder="Name"/>                    
                    <input type="email" 
                        className={classNames("inpt1", { "highlight": errors.email})}
                        value={user.email} 
                        onChange={changeUserData('email')} 
                        placeholder={t('Email')}/>
                    <input type="number" 
                        className={classNames("inpt1", { "highlight": errors.phone})}
                        value={user.phone} 
                        onChange={changeUserData('phone')} 
                        placeholder={t('Phone')}/>
                    </form>
                    <Buttons prevStep={prevStep} isApp={isApp} nextStep={nextStep} validateForm={validateForm}/>
                </div>
            </div>
        </Fragment>
    )
}
