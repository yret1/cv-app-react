import BaseInfoEditor from "../Editor/BaseInfoEditor"
import WorkInfoEditor from "../Editor/WorkInfoEditor";
import CVRender from "./Printable";
import html2pdf from 'html2pdf.js';


import EduIcon from "../assets/EduIcon.svg"
import WorkIcon from "../assets/WorkIcon.svg"
import PhoneIcon from "../assets/PhoneIcon.svg"
import EmailIcon from "../assets/EmailIcon.svg"
import HomeIcon from "../assets/HomeIcon.svg"
import LocationIcon from "../assets/LocationIcon.svg"

import {useState, useEffect} from "react"

import "./Content.css"
import EducationInfoEditor from "../Editor/EducationInfoEditor";
const Content = (props) => {


    //Year Limitations

    
    const [year, setYear] = useState("");
    const [minYear, setMinYear] = useState("");


    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
        setMinYear(currentYear - 100);
    },[])


    //personal info

    const [nameInfo, setNameInfo] = useState("");
    const [emailInfo, setEmailInfo] = useState("");
    const [phoneInfo, setPhoneInfo] = useState("");
    const [addressInfo, setAddressInfo] = useState("");
    const [cityInfo, setCityInfo] = useState("");
    const [descInfo, setDescInfo] = useState("");
    const [currentRole, setCurrentRole] = useState("");



    //work experience
    const [workArr, setWorkArr] = useState([]);

    const deleteWorkEntry = (index) => {
        const newArr = [...workArr];
        newArr.splice(index, 1);
        setWorkArr(newArr);
    }


    //education
    const [educationArr, setEducationArr] = useState([]);

    const deleteEduEntry = (index) => {
        const newArr = [...educationArr];
        newArr.splice(index, 1);
        setEducationArr(newArr);
    }

    const handlePrint = () => {
        const content = document.getElementById('printable');
        content.style.padding = '0';
        content.style.margin = '0';
        content.style.width = "100%";
        content.style.height = "100%";
        const options = {format: 'a4', orientation: 'portrait', filename: "CV.pdf" };

        html2pdf(content, options);

        setTimeout(() => {
            resetStyle();
        }, 500);

    }

    const resetStyle = () => {
        const content = document.getElementById('printable');
        content.style.padding = '';
        content.style.margin = '';
        content.style.width = "";
        content.style.height = "";

    }



    return(
        <>
            <section className="Inputs">
                    <BaseInfoEditor 
                setName={setNameInfo}
                setEmail={setEmailInfo}
                setPhone={setPhoneInfo}
                setAddress={setAddressInfo}
                setCity={setCityInfo}
                setDesc={setDescInfo}
                setRole={setCurrentRole}
                />
                    <WorkInfoEditor 
                setWorkArr={setWorkArr} 
                currentArr={workArr} 
                maxYear={year}
                minYear={minYear}
                />

                <EducationInfoEditor
                setArr={setEducationArr}
                currentArr={educationArr}
                maxYear={year}
                minYear={minYear} />

            </section>

            <section className="edit__delete">
                <div className="workstuff">
                    {workArr.length > 0 && <h2>Edit Work Experience</h2>}
                    {workArr.length > 0 && workArr.map((item) => (
                        <div className="appended" key={item.company}>
                            <h3>{item.company +" " + "/" + " " + item.position}</h3>
                            <button onClick={deleteWorkEntry} className="remove">Delete Entry</button>
                        </div>
                    ))}
                </div>
                <div className="edustuff">
                    {educationArr.length > 0 && <h2>Edit Education</h2>}
                    {educationArr.length > 0 && educationArr.map((item) => (
                        <div className="appended" key={item.school}>
                            <h3>{item.school +" " + "/" + " " + item.degree}</h3>
                            <button onClick={deleteEduEntry} className="remove">Delete Entry</button>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h1>Check Out Your CV Below</h1>
            </section>

            <div>
                <div className="renderBox">
                    <button onClick={handlePrint}>Print As PDF</button>
                        <CVRender
                        nameInfo={nameInfo}
                        emailInfo={emailInfo}
                        phoneInfo={phoneInfo}
                        addressInfo={addressInfo}
                        cityInfo={cityInfo}
                        descInfo={descInfo}
                        currentRole={currentRole}
                        workArr={workArr}
                        educationArr={educationArr}
                        />
                
                </div>
        </div>

           
       </>
    )
}

export default Content