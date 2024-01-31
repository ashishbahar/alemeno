import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Accordion from "react-bootstrap/Accordion";
import img1 from "../assets/images/png/img1.png";
import img2 from "../assets/images/png/img2.png";
import img3 from "../assets/images/png/img3.png";

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
const ReactNativeCourse = () => {
  const [sourceCodeData, setSourceCodeData] = useState([]);

  useEffect(() => {
    const fetchSourceCodeData = async () => {
      const documentIds = ["NpMcTW3MogNIy7kXTz5K"];

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
    <div className="bg-black overflow-x-hidden py-3">
      <center>
        <h2 className="text-white fs-1 fw-bold pt-4">Course Details</h2>
      </center>
      <div className="mt-5 container">
        {sourceCodeData.map((data, index) => (
          <div key={index} className="col-12">
            <div className="row p-2 h-100 flex-lg-row flex-column-reverse">
              <div className="col-lg-6">
                <h2 className="text-white ">Course Name: {data.name}</h2>
                <h2 className="text-white mt-3">
                  <span className=" fw-bold pe-2"> Instructor:</span>{" "}
                  {data.instructor}
                </h2>
                <p className="text-white mt-3  pe-2">
                  <span className=" fw-bold pe-2"> Description :</span>
                  {data.description}
                </p>
                <div className="d-flex align-items-center">
                  <p className="mb-0 text-white me-3 fw-bold pe-2">
                    Enrollment Status :
                  </p>
                  <p className="mb-0 text-white me-3">
                    {data.enrollmentStatus}
                  </p>
                </div>
                <p className="mb-0 text-white me-3 mt-2">
                  <span className=" fw-bold pe-2 "> duration :</span> {data.duration}
                </p>
                <p className="mb-0 text-white me-3 mt-2">
                  <span className=" fw-bold pe-2"> schedule :</span> {data.schedule}
                </p>
                <p className="mb-0 text-white me-3 mt-2">
                  <span className=" fw-bold pe-2">location :</span> {data.location}
                </p>
                <div className="d-flex gap-2 mt-2">
                  <p className="text-white mb-0 fw-bold pe-2">prerequisites:</p>
                  <ul className="p-0 m-0 text-white">
                    <li> 1: Basic JavaScript knowledge</li>
                    <li> 2: Familiarity with React</li>
                  </ul>
                </div>
                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                  <p className="text-white fw-bold pe-2">Syllabus:</p>
                  <Accordion className=" set_width">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Week -1 : Introduction to React Native
                      </Accordion.Header>
                      <Accordion.Body>{data.syllabus[0]}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Week -2 : Building Your First App
                      </Accordion.Header>
                      <Accordion.Body>
                        Creating a simple mobile app using React Native
                        components.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-11 pb-4 pb-lg-0 text-center">
                {data.img === "img1" && (
                  <img className="w-75" src={img1} alt="" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactNativeCourse;
