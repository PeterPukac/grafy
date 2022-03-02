import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Card = (props) => {
    const object = props.object;
    
    return (
            <div className="card" style={{ backgroundColor: object.color }}>
                <div className="card-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-10 col-md-10">
                                <div className="card-title">
                                    {object.header}
                                </div>
                                <div className="card-text" >
                                    {object.value}
                                </div>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <div className="icon">{object.icon}</div>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <a >Details <FaArrowAltCircleRight /></a>
                    </div>
                </div>
            </div>

    )
}

export default Card;