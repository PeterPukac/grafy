
import Topbar from './Topbar';
import Chart from './Chart';
import { useState, useEffect } from 'react';


const Main = () => {
    const [dataEmployees, setDataDb] = useState(null);
    const [dataProjects, setDataProjects] = useState(null);
    const [dataOrders, setDataOrders] = useState(null);


    useEffect(() => {
        fetch('./db.json')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setDataDb(data.employees);
                setDataProjects(data.projects);
                setDataOrders(data.orders);
            });
    }, []);
    return (
        <div className="main">
            {dataEmployees && dataOrders  &&  <Topbar data={dataEmployees} orders = {dataOrders} />}
            {dataProjects && <Chart data={dataProjects} />}
        </div>
    )
}

export default Main;