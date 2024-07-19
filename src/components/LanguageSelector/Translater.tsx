// // YourComponent.tsx
// import React, { useEffect, useState } from 'react';
// import { useTranslate } from './LanguageSelector';

// const Translator: React.FC = () => {
//   const { translate, setLanguage } = useTranslate();
//   const [translatedText, setTranslatedText] = useState<string>('');
//   const [textToTranslate, setTextToTranslate] = useState<string>('Hello, World!');

//   useEffect(() => {
//     const fetchTranslation = async () => {
//       const result = await translate(textToTranslate);
//       setTranslatedText(result);
//     };
//     fetchTranslation();
//   }, [textToTranslate, translate]);

//   return (
//     <div>
//       <h1>{translatedText}</h1>
//       <button onClick={() => setLanguage('es')}>Translate to Spanish</button>
//       <button onClick={() => setLanguage('en')}>Translate to English</button>
//     </div>
//   );
// };

// export default Translator;
