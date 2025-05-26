import React, { createContext, useState, useContext } from 'react';
import { resumeData as enData } from '../data/resumeData.en';
import { resumeData as zhData } from '../data/resumeData.zh';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const resumeData = language === 'en' ? enData : zhData;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, resumeData, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 