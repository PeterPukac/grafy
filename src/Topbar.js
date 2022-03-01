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
    const iconsArray = [<FaDesktop size={iconSize} />, <BsLink45Deg size={iconSize} />, <BsPersonFill size={iconSize} />, <GiKnifeFork size={iconSize} />];
    const headersArray = ["Počet objednávok za aktuálny mesiac", "Suma z objednávok za akutálny mesiac", "Zamestnanec mesiaca", "Obed"];
    const colorsArray = ["rgb(255, 77, 77)", "rgb(255, 179, 26)", "rgb(179, 179, 179)", "rgb(89, 89, 89)"];
    const orderArrayInMonth = orderArrays.filter(order => isSameMonth(parseISO(order.date), currentDate));
    employeesArray.map(emp => { arrayHours.push(emp.hours); })
    const pricesOrderArrays = orderArrays.filter(order => isSameMonth(parseISO(order.date), currentDate));

    
    function getArrayOfCards(pHeadersArray, pColorsArray, pIconsArray,pCountOrderOfMonth,pSumOrderMonth,pEmpOfTheMonth) {
        let arrayOfcards = [];
        let valueForInsert;
        for (let index = 0; index < pHeadersArray.length; index++) {
            if(index==0){
                valueForInsert = pCountOrderOfMonth;
            }else if(index==1){
                valueForInsert = pSumOrderMonth;
            }else if(index == 2){
                valueForInsert = pEmpOfTheMonth;
            }else if(index==3){
                valueForInsert = <FcButtingIn />;
            }
            let card = {
                header: pHeadersArray[index],
                color: pColorsArray[index],
                icon: pIconsArray[index],
                value: valueForInsert
            }
            let cardObj = Object.create(card);
            arrayOfcards.push(cardObj);
        }

        return arrayOfcards;
    }

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
    let arrayCards = getArrayOfCards(headersArray, colorsArray, iconsArray,countOrdersOfMonth,sumOrdersOfMonth,employeeOfTheMonth);

    return (
        <div className="TopBar">
            <div className="container-fluid">
                <div className="row">
                    {arrayCards.map(card => {
                        return (
                            <div className=" col-sm-12 col-md-6 col-lg-3" key= {card.color} >
                                <div className="card" style={{ backgroundColor: card.color }}>
                                    <div className="card-body">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="card-title">
                                                        {card.header}
                                                    </div>
                                                    <div className="card-text" >
                                                        {card.value}
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
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