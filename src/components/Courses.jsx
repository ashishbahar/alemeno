import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import img1 from "../assets/images/png/img1.png";
import img2 from "../assets/images/png/img2.png";

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
  const [sourceCodeData, setSourceCodeData] = useState([]);

  useEffect(() => {
    const fetchSourceCodeData = async () => {
      const documentIds = ["NpMcTW3MogNIy7kXTz5K", "k6RyIPcbODhfcsjDK9EL"];

      try {
        const promises = documentIds.map(async (documentId) => {
          const docRef = doc(db, "sourceCode", documentId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            return docSnap.data();
          } else {
            console.log(`No such document for ID ${documentId}`);
            return null;
          }
        });

        const data = await Promise.all(promises);
        setSourceCodeData(data.filter((item) => item !== null));
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

      {sourceCodeData.map((data, index) => (
        <div key={index} className="">
          <div className="course_box p-2">
            {/* Use dynamic image source based on fetched data */}
            {data.img === "img1" && <img className="w-100" src={img1} alt="" />}
            {data.img === "img2" && <img className="w-100" src={img2} alt="" />}
            {/* Add more image cases as needed */}

            <p className="text-white">Name: {data.name}</p>
            <p className="text-white">Instructor: {data.instructor}</p>
            {/* Add more fields as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
