import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, PieChart, Pie, Sector } from 'recharts';
const Chart = () => {
    const data = [
        { title: 'Najlepsi projekt', price: '30567.5', id: '1' },
        { title: 'Legendarny projekt ', price: '14894.6', id: '2' },
        { title: 'Zly  projekt ', price: '100000.5', id: '3' },
        { title: 'Usporny projekt ', price: '365959.7', id: '5' },
    ];
    const dataDva = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
    ];

    const COLORS = ['rgb(204, 0, 0)', 'rgb(0, 179, 0)'];



    return (
        <div className="chart">
            <Container fluid width="80%" aspect={3}>
                <div className="textik">
                    <h1 style={{ color: "white", fontSize: "15px" }}>Náklady na projekt</h1>
                    <p style={{ color: "white", fontSize: "10px" }}>Rýchly náhľad nákladov na jednotlivé projekty podľa čísla</p>
                </div>
                <Row>
                    <Col md={8}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="id" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="price" fill="rgb(77, 121, 255)" >
                                <LabelList position="top" fill="white" fontSize={10} className="bar" />
                            </Bar>
                        </BarChart>
                    </Col>
                    <Col md={4}>
                        <PieChart width={800} height={400} >
                            <Pie
                                data={dataDva}
                                cx={120}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {dataDva.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend iconType={'circle'}/>
                        </PieChart>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Chart;