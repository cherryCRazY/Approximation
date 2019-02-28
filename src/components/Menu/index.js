import React from "react";
import { Menu, Icon } from "antd";

const MenuPlot = props => {
    return (
        <Menu theme="dark" mode="inline">
            <Menu.Item onClick={props.toggle} key="1">
                <Icon type="dot-chart" />
                <span>Approximation</span>
            </Menu.Item>
            <Menu.Item onClick={props.toggle} key="2">
                <Icon type="line-chart" />
                <span>Interpolation</span>
            </Menu.Item>
        </Menu>
    );
};

export default MenuPlot;
