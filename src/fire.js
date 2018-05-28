export const config = {
  apiKey: JSON.parse(process.env.REACT_APP_API_KEY) || "",
  authDomain: JSON.parse(process.env.REACT_APP_AUTH_DOMAIN) || "",
  databaseURL: JSON.parse(process.env.REACT_APP_DATABASE_URL) || "",
  projectId: JSON.parse(process.env.REACT_APP_PROJECT_ID) || "",
  storageBucket: JSON.parse(process.env.REACT_APP_STORAGE_BUCKET) || "",
  messagingSenderId: JSON.parse(process.env.REACT_APP_MESSAGING_SENDER_ID) || "",
};

console.log('fire config: ', config);