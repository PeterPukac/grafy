import Topbar from './Topbar';
import Chart from './Chart';
import {useState,useEffect} from 'react';

const Main = ()=>{

    const [dataDb,setDataDb] = useState(null);

    useEffect(() => {
        fetch('./db.json')
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            console.log(data.employees);
            setDataDb(data.employees);  
    
        });
    },[]);
    return(
        <div className="main">    
        {dataDb && <Topbar data={dataDb}/>}
        <Chart/>
        </div>
    )
}

export default Main;