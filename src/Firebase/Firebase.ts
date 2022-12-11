import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { Quiz } from "../Components/types";
import { CreateFirebaseDto, FirebaseDto, ParseFirebaseDto } from "./FirebaseTypeMapper";

const firebaseConfig = {
  apiKey: "AIzaSyCQQD7uieJN4lfWi0AP271B0nT9G46Qmh8",
  authDomain: "hit-me-with-that-song.firebaseapp.com",
  projectId: "hit-me-with-that-song",
  storageBucket: "hit-me-with-that-song.appspot.com",
  messagingSenderId: "257443382902",
  appId: "1:257443382902:web:ae6bbee7960f728dafc157"
};
const firebaseCollection = "quiz";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const GetUserQuizList = async () : Promise<Quiz[]> => {
  if(!auth.currentUser){
    return [];
  }
  const {uid} = auth.currentUser;
  
  const querySnapshot = await getDoc(doc(db, firebaseCollection, uid));
  const data = querySnapshot.data() as FirebaseDto;
  return ParseFirebaseDto(data);  
}

export const SaveUserQuizList = async (quizList: Quiz[]) => {
  if(!auth.currentUser){
    console.error("unable to fetch current user")
    return;
  }
  const {uid} = auth.currentUser;

  const dto = CreateFirebaseDto(quizList, uid)
  
  try {
    await setDoc(doc(db, firebaseCollection, uid), dto);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
