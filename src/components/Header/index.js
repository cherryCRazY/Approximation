//Core
import React from "react";

//styled
import styled from "styled-components";

//Components
import { Layout, Icon } from "antd";

const { Header } = Layout;

const HeaderIcon = styled(Icon).attrs(props => ({
    type: props.menu ? "menu-unfold" : "menu-fold"
}))`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #1890ff;
    }
`;

const HeaderPlot = props => {
    return (
        <Header style={{ background: "#fff", padding: 0 }}>
            <HeaderIcon onClick={props.toggleMenu} />
        </Header>
    );
};

export default HeaderPlot;
