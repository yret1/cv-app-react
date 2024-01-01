import "./Form.css"
export default function BaseInfoEditor(props) {
    const {setName, setPhone, setEmail, setAddress, setCity, setDesc, setRole} = props;

   const handleNameChange = (event) => {
    setName(event.target.value)
   }
   const handlePhoneChange = (event) => {
    setPhone(event.target.value)
   }
   const handleRoleChange = (event) => {
    setRole(event.target.value)
   }
   const handleEmailChange = (event) => {
    setEmail(event.target.value)
   }
   const handleAddressChange = (event) => {
    setAddress(event.target.value)
   }
   const handleCityChange = (event) => {
    setCity(event.target.value)
   }
   const handleDescChange = (event) => {
    setDesc(event.target.value)
   }


   const resetForm = (e) => {
    e.preventDefault();
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setCity("");
    setDesc("");
   }


    return (
        <section className="base">
            <form className="base__form">
                
                <fieldset>
                    <legend>Personal Information</legend>
                    <label className="form__box">
                        <p>Name:</p>
                        <input type="text" name="name" placeholder="Name" onChange={handleNameChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Phone:</p>
                        <input type="text" name="phone" placeholder="Phone" onChange={handlePhoneChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Email:</p>
                        <input type="text" name="email" placeholder="Email" onChange={handleEmailChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Adress:</p>
                        <input type="text" name="Address" placeholder="Adress" onChange={handleAddressChange}></input>
                    </label>
                    <label className="form__box">
                        <p>City:</p>
                        <input type="text" name="City" placeholder="City" onChange={handleCityChange}></input>
                    </label>
                    <label className="form__box">
                        <p>Role:</p>
                        <input type="text" name="City" placeholder="Current Role" onChange={handleRoleChange}></input>
                    </label>
                    <label className="form__box">
                        <p>About me:</p>
                        <textarea type="text" name="about" placeholder="Describe yourself" onChange={handleDescChange}></textarea>
                    </label>
                    <button onClick={resetForm}>Reset</button>
                </fieldset>
            </form>

        </section>
    )
}