import React from 'react';
import '../../sassStyles/layouts/_terms-layout.scss';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Terms = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;

  return (
    <div className="terms">
      <section className="terms__section">
        <h1>{t.terms.title}</h1>
        <p>
          {t.terms.responsible}
          <br /> Shed Hotel
          <br /> Shed Hotels sarl
          <br /> Tel: +41 77 269 97 95
          <br /> Email: info@shedhotels.com
          <br /> Website: www.shedhotels.com
          <br /> VAT/uniform identification number: CHE-305.511.172
        </p>
        <h3>{t.terms.legalDisclaimer}</h3>
        <p>{t.terms.legalDisclaimerText}</p>
        
        <h3>{t.terms.liabilityLinks}</h3>
        <p>{t.terms.liabilityLinksText}</p>

        <h2>{t.terms.privacyPolicy}</h2>
        
        <h3>{t.terms.introduction}</h3>
        <p>{t.terms.introductionText}</p>
        
        <h3>{t.terms.processingData}</h3>
        <p>{t.terms.processingDataText}</p>
        
        <h3>{t.terms.purpose}</h3>
        <p>{t.terms.purposeText}</p>
        
        <h3>{t.terms.transfer}</h3>
        <p>{t.terms.transferText}</p>
        
        <h3>{t.terms.protection}</h3>
        <p>{t.terms.protectionText}</p>
        
        <h3>{t.terms.storage}</h3>
        <p>{t.terms.storageText}</p>
        
        <h3>{t.terms.cookies}</h3>
        <p>{t.terms.cookiesText}</p>
        
        <h3>{t.terms.rights}</h3>
        <p>{t.terms.rightsText}</p>
        
        <h3>{t.terms.exercising}</h3>
        <p>
          {t.terms.exercisingText}
          <br /> Website: www.shedhotels.com
          <br /> VAT/uniform identification number: CHE-305.511.172
        </p>
        
        <h3>{t.terms.copyrights}</h3>
        <p>{t.terms.copyrightsText}</p>
      </section>
    </div>
  );
};

export default Terms;
