import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import img1 from "../assets/images/png/img1.png";
import img2 from "../assets/images/png/img2.png";
import img3 from "../assets/images/png/img3.png";
import { Link } from "react-router-dom";
import searchicon from "../assets/images/svg/search.svg";

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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSourceCodeData = async () => {
      const documentIds = [
        "NpMcTW3MogNIy7kXTz5K",
        "k6RyIPcbODhfcsjDK9EL",
        "ZsdmbdYRzCsStWULjDKv",
        "amsOlzLZY1htSsSIvyad",
      ];

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

  const filteredData = sourceCodeData.filter(
    (item) =>
      item.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black overflow-x-hidden">
      <div className="nav_input d-flex align-items-center mx-auto">
        <input
          className="input"
          placeholder="Search Course"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img width={20} height={30} src={searchicon} alt="searchicon" />
      </div>
      <div className="container">
        <center className="pt-5">
          <h2 className="text-white pt-4 fw-semibold fs-1 pb-3">
            Latest Courses
          </h2>
        </center>
        <div className="row justify-content-center">
          {filteredData.map((data, index) => (
            <div key={index} className="col-lg-4 py-3 col-sm-6 col-11">
              <div className="course_box d-flex flex-column justify-content-between p-2 h-100">
                <div>
                  {data.img === "img1" && (
                    <img className="w-100" src={img1} alt="" />
                  )}
                  {data.img === "img2" && (
                    <img className="w-100" src={img2} alt="" />
                  )}
                  {data.img === "img3" && (
                    <img className="w-100" src={img3} alt="" />
                  )}
                  {data.img === "img4" && (
                    <img className="w-100" src={img1} alt="" />
                  )}
                </div>
                <p className="text-white mt-4 mb-0 fs-5 fw-semibold">
                  Name: {data.name}
                </p>
                <div className="pt-2">
                  <p className="text-white mb-0">
                    Instructor: {data.instructor}
                  </p>
                  <Link to={data.path}>
                    <button className="button py-2 mt-3 px-4 w-100">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
