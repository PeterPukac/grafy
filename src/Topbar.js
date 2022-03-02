import { FaDesktop } from 'react-icons/fa';
import { BsLink45Deg } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';
import { FcButtingIn } from 'react-icons/fc';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isSameMonth, parseISO, } from 'date-fns';


const Topbar = (props) => {
    const employeesArray = props.data;
    const orderArrays = props.orders;
    const currentDate = new Date();
    const arrayHours = [];
    const iconSize = 50;
    const orderArrayInMonth = orderArrays.filter(order => isSameMonth(parseISO(order.date), currentDate));
    employeesArray.map(emp => { arrayHours.push(emp.hours); })
    const pricesOrderArrays = orderArrays.filter(order => isSameMonth(parseISO(order.date), currentDate));


    function getSumOfPriceMonth(pPricesOrderArrays) {
        let sum = 0;
        for (let price of pPricesOrderArrays) {
            sum += price.price;
        }
        return sum;
    }

    function getEmployeeOfTheMonth(pArrayHours, pEmployeesArray) {
        let max = 0;
        for (let hours of pArrayHours) {
            if (hours > max) {
                max = hours;
            }
        }
        let name = ' ';
        let empOfMonth = [];
        empOfMonth = pEmployeesArray.filter(emp => emp.hours === max);
        empOfMonth.map(emp => {
            name = emp.name;
        })

        return name;
    }

    let countOrdersOfMonth = orderArrayInMonth.length;
    let sumOrdersOfMonth = getSumOfPriceMonth(pricesOrderArrays);
    let employeeOfTheMonth = getEmployeeOfTheMonth(arrayHours, employeesArray);
    const cards = [
        {  header: "Počet objednávok za aktuálny mesiac", color:"rgb(255, 77, 77)" , icon:<FaDesktop size={iconSize} />, value: countOrdersOfMonth},
        {  header: "Suma z objednávok za akutálny mesiac", color:"rgb(255, 179, 26)" , icon: <BsLink45Deg size={iconSize} />, value: sumOrdersOfMonth},
        {  header: "Zamestnanec mesiaca", color:"rgb(179, 179, 179)" , icon: <BsPersonFill size={iconSize} />, value: employeeOfTheMonth},
        {  header: "Obed", color:"rgb(89, 89, 89)" , icon: <GiKnifeFork size={iconSize} />, value: <FcButtingIn size={25}/> }
    ];

    return (
        <div className="TopBar">
            <div className="container-fluid">
                <div className="row">
                    {cards.map(card => {
                        return (
                            <div className=" col-sm-12 col-md-6 col-lg-3" key= {card.color} >
                                <div className="card" style={{ backgroundColor: card.color }}>
                                    <div className="card-body">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-sm-10 col-md-10">
                                                    <div className="card-title">
                                                        {card.header}
                                                    </div>
                                                    <div className="card-text" >
                                                        {card.value}
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 col-md-2">
                                                    <div className="icon">{card.icon}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <a >Details <FaArrowAltCircleRight /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Topbar;