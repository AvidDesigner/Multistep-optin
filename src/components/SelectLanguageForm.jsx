import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import EngFlag from '../images/eng.svg'
import GermanFlag from '../images/de.svg'

export default function SelectLanguageForm({ nextStep }) {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        nextStep();
    }

    return (
        <Fragment>
            <h2 className="header midheader">Choose your preferred language</h2>
            
            <div class="lang_container">
			<div class="lang_holder">
				<div class="lang_box">
					<div class="language">
                    <img src={GermanFlag} alt="German" srcset="" className="langflag" onClick={() => changeLanguage('de')}/>
					</div>
				</div>
				<div class="lang_box">
					<div class="language">
                    <img src={EngFlag} className="langflag" alt="English" srcset="" onClick={() => changeLanguage('en')}/>
					</div>
				</div>
			</div>
		</div>

        </Fragment>
    )
}
