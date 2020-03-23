import React from 'react';
import { Redirect } from 'react-router-dom';

import './Profile.css';

const Profile = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <section className="Profile">
                <div className="container">
                    <div className="row profile-top">
                        <div className="col-md-4">
                            <div className="profile-img"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="profile-content">
                                <div className="profile-title">John Dou</div>
                                <p><b>Age</b> 12 y.o.</p>
                                <p><b>Position:</b> Designer</p>
                                <p><b>Experiance:</b> 6 years</p>
                                <p><b>Motto in life:</b> Damet consectetur adipisicing elit. Dolores ipsum, repudiandae dolor possimus</p>
                                <button className="btn btn-primary">Connect</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="profile-content">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ipsum, repudiandae dolor possimus necessitatibus, soluta at tempore, eveniet consectetur itaque incidunt? Ipsa, ducimus perferendis, autem facilis repellendus omnis natus obcaecati quia aliquam ipsam voluptates, reiciendis incidunt eveniet quibusdam mollitia nihil.</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-text">
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ipsum, repudiandae dolor possimus necessitatibus, soluta at tempore, eveniet consectetur itaque incidunt? Ipsa, ducimus perferendis, autem facilis repellendus omnis natus obcaecati quia aliquam ipsam voluptates, reiciendis incidunt eveniet quibusdam mollitia nihil.
                        </p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ipsum, repudiandae dolor possimus necessitatibus, soluta at tempore, eveniet consectetur itaque incidunt? Ipsa, ducimus perferendis, autem facilis repellendus omnis natus obcaecati quia aliquam ipsam voluptates, reiciendis incidunt eveniet quibusdam mollitia nihil.
                        </p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ipsum, repudiandae dolor possimus necessitatibus, soluta at tempore, eveniet consectetur itaque incidunt? Ipsa, ducimus perferendis, autem facilis repellendus omnis natus obcaecati quia aliquam ipsam voluptates, reiciendis incidunt eveniet quibusdam mollitia nihil.
                        </p>
                    </div>
                </div>
            </section>
            
        )
    }

    return <Redirect to="/login" />
    
}

export default Profile