import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaDesktop } from 'react-icons/fa';
import { BsLink45Deg } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';
import { FcButtingIn, FcEmptyFilter } from 'react-icons/fc';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const Topbar = (props) => {
    const employeesArray = props.data;
    const arrayHours = [];
    let max =0;
    //Naplnene pola hodin
    employeesArray.map(emp => {
        arrayHours.push(emp.hours);
    })
    //najdenie maxima v poli
    for (let index = 0; index < arrayHours.length; index++) {
        if(arrayHours[index] > max){
            max = arrayHours[index];
        }
        
    }
    const empOfMonth = employeesArray.filter(emp => emp.hours === max);
    console.log(empOfMonth.name);
    console.log(max);
    return (
        <div className="TopBar">
            <Container fluid>
                <Row>
                    <Col sm={12} md={3} >
                        <Card className="card " style={{ backgroundColor: "rgb(255, 77, 77)" }}>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={10}>
                                            <Card.Title className="text-start firstCard" style={{
                                                textTransform: "uppercase",
                                                color: "white", fontSize: "10px"
                                            }}>Počet objednávok za aktuálny mesiac</Card.Title>
                                            <Card.Text className="text-start" style={{ color: "white", fontWeight: "bold" }} >
                                                26
                                            </Card.Text>
                                        </Col>
                                        <Col md={2}>
                                            <FaDesktop size={50} style={{ color: "rgb(38, 38, 38)", opacity: "0.3" }} />
                                        </Col>
                                    </Row>
                                </Container>
                                <Card.Text className="text-end" style={{
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginTop: "10px",
                                    opacity: "0.5", marginLeft: "-17px", marginRight: "-17px", marginBottom: "-18px"
                                }}>
                                    <a style={{ color: "white", fontSize: "12px", paddingRight: "5px" }}>Details <FaArrowAltCircleRight /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3}>
                        <Card className="card " style={{ backgroundColor: "rgb(255, 179, 26)" }}>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={10}>
                                            <Card.Title className="text-start firstCard" style={{
                                                textTransform: "uppercase",
                                                color: "white", fontSize: "10px"
                                            }}>Suma objednávok ua aktuálny mesiac</Card.Title>
                                            <Card.Text className="text-start" style={{ color: "white", fontWeight: "bold" }} >
                                                4789,15 €
                                            </Card.Text>
                                        </Col>
                                        <Col md={2}>
                                            <BsLink45Deg size={50} style={{ color: "rgb(38, 38, 38)", opacity: "0.3" }} />
                                        </Col>
                                    </Row>
                                </Container>
                                <Card.Text className="text-end" style={{
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginTop: "10px",
                                    opacity: "0.5", marginLeft: "-17px", marginRight: "-17px", marginBottom: "-18px"
                                }}>
                                    <a style={{ color: "white", fontSize: "12px", paddingRight: "5px" }}>Detail <FaArrowAltCircleRight /></a>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3}>
                        <Card className="card " style={{ backgroundColor: "rgb(179, 179, 179)" }}>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={10}>
                                            <Card.Title className="text-start firstCard" style={{
                                                textTransform: "uppercase",
                                                color: "white", fontSize: "10px"
                                            }}>Zamestnanec mesiaca </Card.Title>
                                            <Card.Text className="text-start" style={{ color: "white", fontWeight: "bold" }} >
                                                {empOfMonth.name}
                                            </Card.Text>
                                        </Col>
                                        <Col md={2}>
                                            <BsPersonFill size={50} style={{ color: "rgb(38, 38, 38)", opacity: "0.3" }} />
                                        </Col>
                                    </Row>
                                </Container>
                                <Card.Text className="text-end" style={{
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginTop: "10px",
                                    opacity: "0.5", marginLeft: "-17px", marginRight: "-17px", marginBottom: "-18px"
                                }}>
                                    <a style={{ color: "white", fontSize: "12px", paddingRight: "5px" }}>Detail <FaArrowAltCircleRight /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3}>
                        <Card className="card " style={{ backgroundColor: "rgb(89, 89, 89)" }}>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={10}>
                                            <Card.Title className="text-start firstCard" style={{
                                                textTransform: "uppercase",
                                                color: "white", fontSize: "10px"
                                            }}>Obed</Card.Title>
                                            <Card.Text className="text-start" >
                                                <FcButtingIn />
                                            </Card.Text>
                                        </Col>
                                        <Col md={2}>
                                            <GiKnifeFork size={50} style={{ color: "rgb(38, 38, 38)", opacity: "0.3" }} />
                                        </Col>
                                    </Row>
                                </Container>
                                <Card.Text className="text-end" style={{
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginTop: "10px",
                                    opacity: "0.5", marginLeft: "-17px", marginRight: "-17px", marginBottom: "-18px"
                                }}>
                                    <a style={{ color: "white", fontSize: "12px", paddingRight: "5px" }}>Detail <FaArrowAltCircleRight /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>{employeesArray.map(emp => {
                            <div className="bla" key={emp.id}>
                                <h2>{emp.name}</h2>
                                <p>{emp.hours}</p>
                            </div>
                        })}
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Topbar;