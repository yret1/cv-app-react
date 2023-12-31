import BaseInfoEditor from "../Editor/BaseInfoEditor"
import WorkInfoEditor from "../Editor/WorkInfoEditor";
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






    return(
        <>
          <section className="Inputs">
             <BaseInfoEditor 
        setName={setNameInfo}
        setEmail={setEmailInfo}
        setPhone={setPhoneInfo}
        setAddress={setAddressInfo}
        setCity={setCityInfo}
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

        <section className="preview__cv">
            <div className="baseInfo">
                <div className="base__name">
                <h2>{nameInfo || "John Doe"}</h2>
                </div>
                <div className="base__contact">
                    <p>{emailInfo || "test1234@email.com"}</p>
                    <p>{phoneInfo || "123456789"}</p>
                    <p>{addressInfo || "1234 Street"}</p>
                    <p>{cityInfo || "Some City"}</p>
                </div>
            </div>
            <div className="workExp">
                <h2 className="title">Work Experiences</h2>
                {workArr.map((item, index) => {
                    return (
                        <div key={index} className="workExp__item">
                            <div className="company_info">
                                <h3>{item.company}</h3>
                                <h4>{item.position}</h4>
                                <p>{item.from} - {item.to}</p>
                            </div>
                            <div className="company__role">
                                <p>{item.city}</p>
                            </div>
                            <div className="company__description">
                                <p>{item.description}</p>
                            </div>

                    </div>
                    )})}
            </div>
            <div className="eduExp">
                <h2 className="title">Education</h2>
                {educationArr.map((item, index) => {
                    return (
                        <div key={index} className="eduExp__item">
                            <div className="edu_info">
                                <h3>{item.school}</h3>
                                <h4>{item.degree}</h4>
                                <p>{item.educationStart} - {item.graduationYear}</p>
                            </div>
                            <div className="edu__description">
                                <p>{item.description}</p>
                            </div>

                    </div>
                    )})}
            </div>
        </section>
       </>
    )
}

export default Content