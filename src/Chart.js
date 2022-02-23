import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Text, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { isAfter, parseISO, isBefore } from 'date-fns';
const Chart = (props) => {
    document.querySelectorAll(" p * div ");
    const data = props.data;
    data.sort((a, b) => (a.price < b.price) ? 1 : -1);

    const arrayProjectsEndDate = [];
    data.map(proj => { arrayProjectsEndDate.push(proj.endDate) });
    console.log(arrayProjectsEndDate);

    function getAfterDeadline(pArrayProjectEndDate) {
        var currentDate = new Date();
        var counterAfterDeadLine = 0;
        for (let index = 0; index < pArrayProjectEndDate.length; index++) {
            let timeToCompare = parseISO(pArrayProjectEndDate[index]);
            if (isAfter(currentDate, timeToCompare)) {
                counterAfterDeadLine++;
            }

        }
        return counterAfterDeadLine;
    }

    function getBeforeDeadline(pArrayProjectEndDate) {
        var currentDate = new Date();
        var counterBeforeDeadLine = 0;
        for (let index = 0; index < pArrayProjectEndDate.length; index++) {
            let timeToCompare = parseISO(pArrayProjectEndDate[index]);
            if (isBefore(currentDate, timeToCompare)) {
                counterBeforeDeadLine++;
            }
        }
        return counterBeforeDeadLine;
    }

    var projectsAfterDeadline = getAfterDeadline(arrayProjectsEndDate);
    console.log(projectsAfterDeadline);
    var projectsBeforeDeadline = getBeforeDeadline(arrayProjectsEndDate);
    console.log(projectsBeforeDeadline);


    const dataDva = [
        { name: 'V termíne', value: projectsBeforeDeadline },
        { name: 'Meškajúce', value: projectsAfterDeadline },
    ];

    const COLORS = ['rgb(0, 179, 0)', 'rgb(204, 0, 0)'];

    return (
        <div className="chart">
            <Container fluid width="80%" aspect={3}>
                <div className="textik">
                    <h1 style={{ color: "white", fontSize: "15px" }}>Náklady na projekt</h1>
                    <div style={{ color: "white", fontSize: "10px" }}>Rýchly náhľad nákladov na jednotlivé projekty podľa čísla</div>
                </div>
                <Row>
                    <Col sm={12} md={8} lg={10}>
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
                                <XAxis dataKey="id" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="price" fill="rgb(77, 121, 255)" >
                                    <LabelList position="top" fill="white" fontSize={10} className="bar" />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <div className="textik">
                            <div className="pomer">
                                {projectsBeforeDeadline}  / {projectsAfterDeadline}
                            </div>
                            <h1 style={{ color: "lightsteelblue", fontSize: "15px", fontWeight: "lighter" }}>Pomer projektov</h1>
                        </div>
                        <PieChart width={800} height={400}>
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
                        </PieChart>

                        <div className="podGrafom">
                            <div style={{ color: "white", fontSize: "30px" }}>
                                <strong>V termíne: </strong>{projectsBeforeDeadline}
                            </div>
                            <div style={{ color: "white", fontSize: "30px" }}>
                                <strong className="cervene">Meškajúce: </strong>{projectsAfterDeadline}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default Chart;