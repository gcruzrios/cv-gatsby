import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import profileImage from "../../images/pp.jpeg"
import Social from "./Social";
import "./Profile.scss"

const data = [
    {
        title:"Edad:",
        info:"45"
    },
    {
        title:"Dirección:",
        info:"Cartago, Centro Calle Los Almedros, Casa #5"
    },
    {
        title:"Email:",
        info:"greivin.cruz@progranet.com"
    },
    {
        title:"Teléfono:",
        info:"+ 506 77776666"
    }
    
]


export default function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper"/>
            <div className="dark"/>
            <Container className="box">
                <Row className="info">
                    <Col xs={12} md={4}>
                        <Image src={profileImage} fluid/>
                    </Col>
                    <Col xs={12} md={8} className="info__data">
                        <span>Hola !</span>
                        <p>Greivin Cruz Ríos</p>
                        <p>FrontEnd Developer</p>
                        <hr />
                        <div className="more-info">
                            
                            {data.map((item, index) => (
                                <div key={index} className="item">
                                <p>{item.title}</p>
                                <p>{item.info}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Social />
            </Container>
        </div>
    )
}
