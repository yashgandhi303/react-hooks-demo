import { ref, firebaseAuth } from './database';
import { message } from 'antd';

export const register = (email: string, pw: string) => {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, pw)
}

export const logout = () => {
  return firebaseAuth.signOut();
}

export const login = (email: string, pw: string) => {
  return firebaseAuth.signInWithEmailAndPassword(email, pw);
}

export const saveUserOnBoardingData = async (uid: string, formData: any) => {
  if (!formData) {
    console.error('could not save the data as it is invalid');
    return;
  }
  try {
    await ref.collection("OnBoardingInformation").doc(`${uid}`).set({
      id: uid,
      college: formData.college,
      email: formData.email,
      experienceYear: formData.experienceYear,
      firstName: formData.firstName,
      lastCompany: formData.lastCompany,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      whyInterested: formData.whyInterested,
    });
    message.success('Data saved Successfully.');
    return uid;
  } catch (e) {
    message.error((e) || 'There was problem saving your data, please try again later.');
    throw new Error(e);
  }
}

export const getOnBoardingData = async () => {
  const snapshot = await ref.collection("OnBoardingInformation").get()
  return snapshot.docs.map(doc => doc.data());
}
