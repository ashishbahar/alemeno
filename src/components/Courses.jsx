import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import img1 from "../assets/images/png/img1.png";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf08iEXrFAf6cza6w1NrqDq2ih4YchcNA",
  authDomain: "alemeno-4ed1f.firebaseapp.com",
  projectId: "alemeno-4ed1f",
  storageBucket: "alemeno-4ed1f.appspot.com",
  messagingSenderId: "737798205935",
  appId: "1:737798205935:web:385e156564249f3780861a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Courses = () => {
  const [sourceCodeData, setSourceCodeData] = useState(null);

  useEffect(() => {
    const fetchSourceCodeData = async () => {
      try {
        const docRef = doc(db, "sourceCode", "NpMcTW3MogNIy7kXTz5K");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSourceCodeData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSourceCodeData();
  }, [db]);

  return (
    <div className="bg-black">
      <center>
        <h2>Source Code Details</h2>
      </center>

      {sourceCodeData && (
        <div className="">
          <div className="course_box p-2">
            <img className="w-100" src={img1} alt="" />
            <p className="text-white">Name: {sourceCodeData.name}</p>
            <p className="text-white">
              instructor: {sourceCodeData.instructor}
            </p>
            {/* Add more fields as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
