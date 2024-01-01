
import React from 'react';

import EduIcon from "../assets/EduIcon.svg"
import WorkIcon from "../assets/WorkIcon.svg"
import PhoneIcon from "../assets/PhoneIcon.svg"
import EmailIcon from "../assets/EmailIcon.svg"
import HomeIcon from "../assets/HomeIcon.svg"
import LocationIcon from "../assets/LocationIcon.svg"

const CVRender = (props) => {

    const {nameInfo, emailInfo, phoneInfo, addressInfo, cityInfo, descInfo, currentRole, workArr, educationArr} = props;



    return (
        <section id="printable" className="preview__cv">
            <div className="baseInfo">
                <div className="base__name">
                    <div className="name__header">
                    <h2>{nameInfo || "John Doe"}</h2>
                    <h3>{currentRole || "Frontend Developer"}</h3>
                    </div>
                <p className="base__desc">{descInfo || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores atque suscipit sed, temporibus magni consequuntur reprehenderit voluptatem, nemo porro modi ipsa aperiam assumenda perferendis omnis laboriosam? Quae unde provident fugiat?"}</p>
                </div>
                <div className="base__contact">
                    
                    <ul>
                        <li className="contact__item">
                            <img className="contact__icon" src={EmailIcon} alt="email" />
                        <p className="contact__text">{emailInfo || "test1234@email.com"}</p>
                        </li>
                        <li className="contact__item">
                            <img className="contact__icon" src={PhoneIcon} alt="PhoneNumber"/>
                            <p className="contact__text">{phoneInfo || "+123456789"}</p>
                        </li>
                        <li className="contact__item">
                            <img src={HomeIcon} alt="Adress" className="contact__icon" />
                            <p className="contact__text">{addressInfo || "1234 Street"}</p>
                        </li>
                        <li className="contact__item">
                            <img src={LocationIcon} alt="" className="contact__icon" />
                            <p className="contact__text">{cityInfo || "Some City"}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Exp">
                <div className="sect__header">
                <h2 className="title">Experience</h2>
                <img src={WorkIcon} alt="Work Section" className="header__icon" />
                </div>
                {workArr.map((item, index) => {
                    return (
                        <div key={index} className="Exp__item">
                            <div className="exp__info">
                                <h3>{item.company} <span>// {item.position}</span></h3>
                                <div className="exp__timeline">
                                    <p>{item.from} - {item.to}</p>
                                </div>
                            </div>
                            <div className="exp__description">
                                <p>{item.description}</p>
                            </div>

                    </div>
                    )})}
            </div>
            <div className="Exp">
            <div className="sect__header">
                <h2 className="title">Education</h2>
                <img src={EduIcon} alt="Edu Section" className="header__icon" />
                </div>
                {educationArr.map((item, index) => {
                    return (
                        <div key={index} className="Exp__item">
                            <div className="exp__info">
                                <h3>{item.school} <span>// {item.degree}</span></h3>
                                <div className="exp__timeline">
                                <p>{item.educationStart} - {item.graduationYear}</p>
                                </div>
                            </div>
                            <div className="exp__description">
                                <p>{item.description}</p>
                            </div>

                    </div>
                    )})}
            </div>
    </section>
    )

}

export default CVRender