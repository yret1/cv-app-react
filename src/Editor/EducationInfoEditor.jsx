import {useState, useEffect} from "react"
import "./Form.css"

const EducationInfoEditor = (props) => {


    const {setArr, currentArr ,maxYear, minYear} = props;

    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
    const [educationStart, setEducationStart] = useState("");
    const [educationDescription, setEducationDescription] = useState("");









    const handleSchoolChange = (event) => {
        setSchool(event.target.value)
    }
    const handleDegreeChange = (event) => {
        setDegree(event.target.value)
    }
    const handleGraduationYearChange = (event) => {
        setGraduationYear(event.target.value)
    }
    const handleEducationStartChange = (event) => {
        setEducationStart(event.target.value)
    }
    const handleEducationDescriptionChange = (event) => {
        setEducationDescription(event.target.value)
    }




    const handleSubmit = (event) => {
        event.preventDefault();
        const newEducation = {
            school: school,
            degree: degree,
            graduationYear: graduationYear,
            educationStart: educationStart,
            educationDescription: educationDescription,
        }
        setArr([...currentArr, newEducation])
    }










    return(
        <section className="edu">
            <form className="education__form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Education Information</legend>
                    <label className="form__box">
                        <p>School:</p>
                        <input type="text" name="school" placeholder="School" value={school} required onChange={handleSchoolChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Degree:</p>
                        <input type="text" name="degree" placeholder="Degree" value={degree} required onChange={handleDegreeChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Start Date:</p>
                        <input type="text" name="educationStart" max={maxYear} min={minYear} required placeholder="Start Year..." value={educationStart} onChange={handleEducationStartChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Graduation Year:</p>
                        <input type="number" name="graduationYear" min={minYear} max={maxYear + 6} required placeholder="Graduation Year..." value={graduationYear} onChange={handleGraduationYearChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Description:</p>
                        <textarea name="desc" onChange={handleEducationDescriptionChange}></textarea>
                    </label>
                    <button type="submit" className="add">Add Entry</button>
                </fieldset>
            </form>
        </section>
    )
    

}


export default EducationInfoEditor