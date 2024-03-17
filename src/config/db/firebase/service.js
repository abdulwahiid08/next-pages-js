import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

// Insialisasi db firebase yang ada di file app
const firestore = getFirestore(app);

export const retriveData = async (fieldDb) => {
  const snapshot = await getDocs(collection(firestore, fieldDb));

  // Data
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};
