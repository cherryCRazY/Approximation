//Core
import React, { useState } from "react";
import { connect } from "react-redux";

//Components
import { Button, Card, Input } from "antd";

//Styled
import styled from "styled-components";

const ContainerCards = styled.div`
    display: grid;
    width: 50%;
    background: "#ECECEC";
    left: 50%;
    transform: translate(50%);
    padding: "30px";
`;

const InterCards = props => {
    const [yLagrange, findYLagrange] = useState(0);
    const [yLinear, findYLinear] = useState(0);

    const { inter, handlerClick, length, points } = props;
    const { linear, lagrange } = inter;

    return (
        <ContainerCards>
            <Card title="Input dot" bordered={true}>
                <Input
                    addonBefore="x:"
                    disabled={!length}
                    onChange={e => {
                        findYLinear(linear(+e.target.value, points));
                        findYLagrange(lagrange(+e.target.value, points));
                    }}
                />
            </Card>
            <Card title="Linear" bordered={true}>
                <div>f(x)={yLinear}</div>
            </Card>

            <Card title="Lagrange" bordered={true}>
                <div>f(x)={yLagrange}</div>
            </Card>

            <Button
                disabled={!length}
                type="primary"
                style={{
                    left: "50%",
                    top: "100%",
                    transform: "translate(-50%,100%)"
                }}
                onClick={() => handlerClick()}
            >
                DRAW
            </Button>
        </ContainerCards>
    );
};
const mapStateToProps = state => ({
    inter: state.plot.get("inter"),
    points: state.plot.get("points").toJS()
});

export default connect(mapStateToProps)(InterCards);
