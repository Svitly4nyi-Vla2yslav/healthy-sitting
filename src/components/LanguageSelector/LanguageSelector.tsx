// // TranslateProvider.tsx
// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { translateText } from '../../translateService';

// interface TranslateContextProps {
//   translate: (text: string) => Promise<string>;
//   setLanguage: (language: string) => void;
// }

// const TranslateContext = createContext<TranslateContextProps | undefined>(undefined);

// export const TranslateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [language, setLanguage] = useState<string>('en');

//   const translate = async (text: string) => {
//     if (language === 'en') return text;
//     return await translateText(text, language);
//   };

//   return (
//     <TranslateContext.Provider value={{ translate, setLanguage }}>
//       {children}
//     </TranslateContext.Provider>
//   );
// };

// export const useTranslate = () => {
//   const context = useContext(TranslateContext);
//   if (!context) {
//     throw new Error('useTranslate must be used within a TranslateProvider');
//   }
//   return context;
// };
