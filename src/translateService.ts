// import axios from 'axios';

// const API_KEY = 'AIzaSyAjwi59f52tnu8ur0MxcIwvq61zMH-YaTw';

// export const translateText = async (text: string, target: string) => {
//   try {
//     const response = await axios.post(
//       `https://translation.googleapis.com/language/translate/v2`,
//       {},
//       {
//         params: {
//           q: text,
//           target,
//           key: API_KEY,
//         },
//       }
//     );
//     return response.data.data.translations[0].translatedText;
//   } catch (error) {
//     console.error('Error translating text:', error);
//     return text;
//   }
// };

// export const translateContent = async (language: string) => {
//   const elements = document.querySelectorAll('[data-translate]');
//   for (let element of elements) {
//     const originalText = element.textContent;
//     const translatedText = await translateText(originalText || '', language);
//     element.textContent = translatedText;
//   }
// };
