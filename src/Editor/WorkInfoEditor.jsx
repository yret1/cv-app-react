import {useState, useEffect} from "react"
import "./Form.css"

const WorkInfoEditor = (props) => {
    const {setWorkArr, currentArr ,maxYear, minYear} = props;


    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [city, setCity] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [description, setDescription] = useState("");


    const HandleSubmit = (e) => {
        e.preventDefault();
        addNewCompany();
    }

    const addNewCompany = (e) => {

        setWorkArr((prev) => [...prev, {company, position, from, to, description}])
    }
    return (
        <section className="work">
            <form onSubmit={HandleSubmit} className="work__form">
                
                <fieldset>
                    <legend>Work Experience</legend>
                    <label className="form__box">
                        <p>Company:</p>
                        <input type="text" name="company" value={company} required placeholder="What company?" onChange={(e) => setCompany(e.target.value)} />
                    </label>
                    <label className="form__box">
                        <p>Role:</p>
                        <input type="text" name="company" value={position} required placeholder="What was your role?" onChange={(e) => setPosition(e.target.value)} />
                    </label>
                    <label className="form__box">
                        <p>Started:</p>
                        <input type="number" name="company" value={from} min={minYear} max={maxYear} required placeholder="What year did you start?" onChange={(e) => setFrom(e.target.value)} />
                    </label>
                    <label className="form__box">
                        <p>Ended:</p>
                        <input type="text" name="company" min={minYear} max={maxYear} value={to} required placeholder="What year did you quit?" onChange={(e) => setTo(e.target.value)} />
                    </label>
                    <label className="form__box">
                        <p>Description:</p>
                        <textarea name="desc" onChange={(e) => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                    </label>
                    <button className="form__bunumber" type="submit">Add Entry</button>
                </fieldset>
            </form>
        </section>
    )



}



export default WorkInfoEditor
