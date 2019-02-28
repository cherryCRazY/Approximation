//Core
import React, { Component } from "react";
import { connect } from "react-redux";

//Inctruments
import Plot from "react-plotly.js";
import { Button, Card, Col, Row } from "antd";

//Services
import { mnkFirst, mnkSecond } from "../../services/approximation/index";

class AppPlot extends Component {
    state = {
        data: [],
        show: false,
        mnk1: {},
        mnk2: {}
    };

    handlerClick = () => {
        const { points } = this.props;

        let x = points.map(point => +point.x);
        let y = points.map(point => +point.y);

        let trace = {
            x,
            y,
            type: "scatter",
            mode: "markers",
            name: "Points",
            marker: { color: "red" }
        };
        let mnk1 = {
            ...mnkFirst(points),
            type: "scatter",
            mode: "line",
            name: "mnk1-1",
            marker: { color: "black" }
        };
        let mnk2 = {
            ...mnkSecond(points),
            type: "scatter",
            mode: "line",
            name: "mnk-2",
            marker: { color: "green" }
        };
        const data = [mnk1, mnk2, trace];
        this.setState({
            data,
            show: true,
            mnk1: mnkFirst(points),
            mnk2: mnkSecond(points)
        });
    };

    render() {
        const { points } = this.props;
        const { A, B, C } = this.state.mnk2;
        const { A: A1, B: B1 } = this.state.mnk1;
        return (
            <>
                <Plot
                    style={{
                        width: "80%",
                        height: "500px"
                    }}
                    data={this.state.data}
                    layout={{
                        hovermode: "closest",

                        title: "Approximation",
                        xaxis: {
                            visible: true,
                            title: "x",
                            font: {
                                size: "32px"
                            }
                        },
                        modebar: {
                            orientation: "",
                            style: {
                                left: "50%",
                                transform: "translate(-50%)"
                            }
                        },

                        yaxis: {
                            visible: true,
                            title: {
                                text: "y"
                            }
                        }
                    }}
                />
                {!this.state.show ? (
                    <Button
                        disabled={!points.length}
                        type="primary"
                        style={{
                            left: "50%",
                            top: "100%",
                            transform: "translate(-50%,100%)"
                        }}
                        onClick={this.handlerClick}
                    >
                        DRAW
                    </Button>
                ) : (
                    <div style={{ background: "#ECECEC", padding: "30px" }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="MNK-1" bordered={false}>
                                    <ul>
                                        <li key="11">A:{A1}</li>
                                        <li key="22"> B:{B1}</li>
                                    </ul>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="MNK-2" bordered={false}>
                                    <ul>
                                        <li key="1">A:{A}</li>
                                        <li key="2"> B:{B}</li>
                                        <li key="3">C:{C}</li>
                                    </ul>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Button
                                    type="primary"
                                    style={{
                                        left: "50%",
                                        top: "100%",
                                        transform: "translate(-50%,100%)"
                                    }}
                                    onClick={this.handlerClick}
                                >
                                    DRAW
                                </Button>
                            </Col>
                        </Row>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    points: state.plot.get("points").toJS()
});

export default connect(mapStateToProps)(AppPlot);
