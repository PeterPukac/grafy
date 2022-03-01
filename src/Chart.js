import { Label, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, PieChart, Pie, ResponsiveContainer } from 'recharts';
import { isAfter, parseISO, isBefore } from 'date-fns';
import React from 'react';


const Chart = (props) => {
    const data = props.data;
    data.sort((a, b) => (a.price < b.price) ? 1 : -1);
    const arrayProjectsEndDate = [];
    data.map(proj => { arrayProjectsEndDate.push(proj.endDate) });
    const COLORS = ['rgb(0, 179, 0)', 'rgb(204, 0, 0)'];
    const RADIAN = Math.PI / 180;

    function getAfterDeadline(pArrayProjectEndDate) {
        let currentDate = new Date();
        let counterAfterDeadLine = 0;
        for(let date of pArrayProjectEndDate ){
            let timeToCompare = parseISO(date);
            if (isAfter(currentDate, timeToCompare)) {
                counterAfterDeadLine++;
            }
        }
        return counterAfterDeadLine;
    }

    function getBeforeDeadline(pArrayProjectEndDate) {
        let currentDate = new Date();
        let counterBeforeDeadLine = 0;
        for(let date of pArrayProjectEndDate ){
            let timeToCompare = parseISO(date);
            if (isBefore(currentDate, timeToCompare)) {
                counterBeforeDeadLine++;
            }
        }
        return counterBeforeDeadLine;
    }

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
        const radius = 20 + innerRadius + (outerRadius - innerRadius);
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text
                x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {dataDva[index].name}
            </text>
        );
    };

    let projectsAfterDeadline = getAfterDeadline(arrayProjectsEndDate);
    let projectsBeforeDeadline = getBeforeDeadline(arrayProjectsEndDate);
    const dataDva = [
        { name: 'V termíne', value: projectsBeforeDeadline },
        { name: 'Meškajúce', value: projectsAfterDeadline },
    ];

    return (
        <div className="chart">
            <div className="container-fluid" width="80%" aspect={3}>
                <div className="h">Náklady na projekt</div>
                <div className="podNadpisGrafu">Rýchly náhľad nákladov na jednotlivé projekty podľa čísla</div>
                <div className="row">
                    <div className = "col-sm-12 col-md-7 col-lg-9">
                        <ResponsiveContainer>
                            <BarChart
                                width={600}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="id">
                                    <div>Cislo projektu</div>
                                    <Label value="Číslo projektu" offset={0} position="insideBottom"  fill="white"  />
                                </XAxis>
                                <YAxis />
                                <Tooltip />

                                <Bar dataKey="price" fill="rgb(77, 121, 255)" >
                                    <LabelList position="top" fill="white" fontSize={10} className="bar"></LabelList>
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-3">
                        <div className="textik">
                            <div id="pomer">
                                {projectsBeforeDeadline}  / {projectsAfterDeadline}
                            </div>
                            Pomer projektov
                        </div>
                        <PieChart width={800} height={400} fill="red">
                            <Pie
                                data={dataDva}
                                cx={141}
                                cy={200}
                                innerRadius={50}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={false}
                                label={renderCustomizedLabel}>
                                {dataDva.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className="podGrafom">
                            <div id="green"><strong> {projectsBeforeDeadline}</strong>V termíne</div>
                            <div id="red"><strong> {projectsAfterDeadline}</strong> Meškajúce</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Chart;