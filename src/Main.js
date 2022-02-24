import Topbar from './Topbar';
import Chart from './Chart';
import { useState, useEffect } from 'react';

const Main = () => {
    const [dataEmployees, setDataDb] = useState(null);
    const [dataProjects, setDataProjects] = useState(null);
    const [dataOrders, setDataorders] = useState(null);
    useEffect(() => {
        fetch('./db.json')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data.employees);
                setDataDb(data.employees);
                console.log(data.projects);
                setDataProjects(data.projects);
                console.log(data.orders);
                setDataorders(data.orders);
            });
    }, []);
    return (
        <div className="main">
            {dataEmployees,dataOrders  && <Topbar data={dataEmployees} orders = {dataOrders} />}
            {dataProjects && <Chart data={dataProjects} />}
        </div>
    )
}

export default Main;