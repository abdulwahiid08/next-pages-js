import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "./init";

/* Insialisasi db firebase yang ada di file app */
const firestore = getFirestore(app);

/* Get All Data */
export const retriveData = async (fieldDb) => {
  const snapshot = await getDocs(collection(firestore, fieldDb));

  // Data
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

/* Get Data by Id */
export const retriveDataById = async (fieldDb, id) => {
  // Jika ambil cuma satu data, maka menggunakan getDoc bukan getDocs dan juga tidak pakai collection tetapi doc
  const snapshot = await getDoc(doc(firestore, fieldDb, id));
  const data = snapshot.data();

  return data;
};
