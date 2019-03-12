//Core
import React from "react";
import { connect } from "react-redux";

//Actions
import { addDot, changePoint, delatePoint } from "../../bus/plot/actions";

//Components
import { Drawer, Button } from "antd";
import InputPlot from "../Input";
import ApproCards from "../ApproCards";

//rewrite on the Hooks
class DrawerPlot extends React.Component {
    state = {
        childrenDrawer: false,

        x: null,
        y: null
    };

    handlerChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false
        });
    };

    handlerDrawPoints = () =>
        this.props.points.map(({ x, y }, index) => (
            <div
                key={index}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <InputPlot
                    handlerChange={this.props.onChangePoint}
                    accessKey={index}
                    x={x}
                    y={y}
                />
                <Button
                    type="danger"
                    icon="delete"
                    style={{
                        color: "rgb(0, 21, 41)",
                        transform: " translate(25%,25%)"
                    }}
                    onClick={() =>
                        this.props.onDeletePoint({ accessKey: index })
                    }
                />
            </div>
        ));

    render() {
        const { x, y } = this.state;
        const { mode, handlerClick, points } = this.props;
        return (
            <div>
                <Drawer
                    title={`Draw Settings - ${mode}`}
                    width={520}
                    onClose={this.props.toggle}
                    visible={this.props.visible}
                    style={{ zIndex: 10000 }}
                >
                    <Button type="primary" onClick={this.showChildrenDrawer}>
                        Add new points
                    </Button>
                    {mode === "Approximation" ? (
                        <ApproCards
                            length={points.length}
                            handlerClick={handlerClick}
                        />
                    ) : null}
                    <Drawer
                        title="Points"
                        width={320}
                        closable={false}
                        onClose={this.onChildrenDrawerClose}
                        visible={this.state.childrenDrawer}
                        style={{ zIndex: 10001 }}
                    >
                        <InputPlot
                            x={x}
                            y={y}
                            handlerChange={this.handlerChange}
                        />
                        <Button
                            style={{
                                margin: "2vh 0",
                                left: "50%",
                                transform: "translate(-50%)"
                            }}
                            type="normal"
                            icon="plus"
                            size="large"
                            onClick={() => this.props.onAddPoint({ x, y })}
                        >
                            Point
                        </Button>

                        {this.handlerDrawPoints()}
                        <div style={{ width: "100%", height: "100%" }} />
                    </Drawer>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    points: state.plot.get("points").toJS()
});

const mapDispatchToProps = dispatch => ({
    onAddPoint: point => dispatch(addDot(point)),
    onChangePoint: point => dispatch(changePoint(point)),
    onDeletePoint: point => dispatch(delatePoint(point))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerPlot);
