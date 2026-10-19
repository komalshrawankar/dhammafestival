# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses Oxc
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses SWC

## अभिप्राय Google Sheet शी जोडणे

1. तुमची Google Sheet उघडा आणि **Extensions → Apps Script** निवडा. या Sheet शी जोडलेला Apps Script प्रोजेक्ट तयार होईल.
2. संपादकातील `Code.gs` मधील मजकूर काढून `google-apps-script/Code.gs` मधील कोड पेस्ट करा आणि सेव्ह करा.
3. **Deploy → New deployment → Web app** निवडा.
4. **Execute as** मध्ये `Me` आणि **Who has access** मध्ये `Anyone` निवडा. सार्वजनिक वेबसाइटवरून अभिप्राय स्वीकारण्यासाठी ही परवानगी आवश्यक आहे; Web App URL सार्वजनिक समजा.
5. **Deploy** करा, Google परवानगीची प्रक्रिया पूर्ण करा आणि दिसणारा Web app URL कॉपी करा. URL चा शेवट `/exec` असा असतो.
6. प्रोजेक्टच्या मुख्य फोल्डरमध्ये `.env.local` नावाची फाइल तयार करा आणि पुढील ओळीत तुमचा URL भरा:

   ```text
   VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/तुमचा_DEPLOYMENT_ID/exec
   ```

7. Vite सर्व्हर पुन्हा सुरू करा (`npm run dev`). फॉर्म भरून पाठवल्यानंतर Sheet मध्ये `अभिप्राय` नावाचा टॅब तयार होईल आणि नवीन नोंद त्यात दिसेल.

Apps Script नाव, दहा अंकी मोबाईल क्रमांक, होय/नाही उत्तर आणि अभिप्राय तपासतो. मोबाईल क्रमांक गोळा करण्यापूर्वी तुमच्या गोपनीयता धोरणात याचा उल्लेख करा.

`.env.local` मध्ये URL जोडल्यानंतरही फॉर्म जोडला नसेल तर Apps Script मध्ये नवीन deployment तयार करून नवीन `/exec` URL `.env.local` मध्ये ठेवा.
# dhammafestival
