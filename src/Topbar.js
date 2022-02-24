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
import { addDays, addHours, isSameMonth, parseISO, parseJSON, toDate } from 'date-fns';
const Topbar = (props) => {
    const employeesArray = props.data;
    const orderArrays = props.orders;
    const currentDate = new Date()
    console.log(employeesArray);
    const orderArrayInMonth = orderArrays.filter(order =>
        isSameMonth(parseISO(order.date), currentDate));

    //vyfiltrovanie tych objednavok ktore su v danom mesiaci
    const pricesOrderArrays = orderArrays.filter(order =>
        isSameMonth(parseISO(order.date), currentDate));

    function getSumOfPriceMonth(pPricesOrderArrays) {
        var sum = 0;
        for (let index = 0; index < pPricesOrderArrays.length; index++) {
            sum += pPricesOrderArrays[index].price;
        }
        return sum;
    }

    function getCountOrdersMonth(pArrayOfDates) {
        var counter = 0;
        var currentDate = new Date();
        for (let index = 0; index < pArrayOfDates.length; index++) {
            var time = parseISO(pArrayOfDates[index]);
            if (isSameMonth(currentDate, time)) {
                counter++;
            }
        }
        return counter;
    }

    var sumOrdersOfMonth = getSumOfPriceMonth(pricesOrderArrays);
    //------------------------NAJDENIE ZAMESTNANCA MESIACA---------------
    const arrayHours = [];
    let max = 0;
    //Naplnene pola hodin
    employeesArray.map(emp => {
        arrayHours.push(emp.hours);
    })
    //najdenie maxima v poli
    for (let index = 0; index < arrayHours.length; index++) {
        if (arrayHours[index] > max) {
            max = arrayHours[index];
        }
    }
    var name = ' ';
    var empOfMonth = [];
    empOfMonth = employeesArray.filter(emp => emp.hours === max);
    empOfMonth.map(emp => {
        name=emp.name;
    })
    //-------------------------KONIEC ZAMESTNANCA-----------------
    return (
        <div className="TopBar">
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} lg={3} >
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
                                                {orderArrayInMonth.length}</Card.Text>
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

                    <Col sm={12} md={6} lg={3}>
                        <Card className="card " style={{ backgroundColor: "rgb(255, 179, 26)" }}>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={10}>
                                            <Card.Title className="text-start firstCard" style={{
                                                textTransform: "uppercase",
                                                color: "white", fontSize: "10px"
                                            }}>Suma objednávok za aktuálny mesiac</Card.Title>
                                            <Card.Text className="text-start" style={{ color: "white", fontWeight: "bold" }} >
                                                {sumOrdersOfMonth}€
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
                    <Col sm={12} md={6} lg={3}>
                        <Card className="card " style={{ backgroundColor: "rgb(179, 179, 179)" }}>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={10}>
                                            <Card.Title className="text-start firstCard" style={{
                                                textTransform: "uppercase",
                                                color: "white", fontSize: "10px"
                                            }}>Zamestnanec mesiaca </Card.Title>
                                            <Card.Text className="text-start" style={{color:"white"}}>{name}
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
                    <Col sm={12} md={6} lg={3}>
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
            </Container>
        </div>
    );
}

export default Topbar;