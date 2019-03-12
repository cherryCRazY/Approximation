//Core
import React from "react";
import { connect } from "react-redux";

//Components
import { Button, Card } from "antd";

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

const ApproCards = props => {
    const { appro, handlerClick, length } = props;
    const { mnk1, mnk2 } = appro;

    return (
        <ContainerCards>
            <Card title="MNK-1" bordered={false}>
                <ul>
                    <li key="11">A:{mnk1.A}</li>
                    <li key="22"> B:{mnk2.B}</li>
                </ul>
            </Card>

            <Card title="MNK-2" bordered={false}>
                <ul>
                    <li key="1">A:{mnk2.A}</li>
                    <li key="2"> B:{mnk2.B}</li>
                    <li key="3">C:{mnk2.C}</li>
                </ul>
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
    appro: state.plot.get("appro")
});

export default connect(mapStateToProps)(ApproCards);
