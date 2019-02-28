//Core
import React, { useReducer } from "react";

//Itils
import { Map } from "immutable";

//Components
import { Layout } from "antd";
import Plot from "../Plot/Plot";
import Menu from "../Menu";
import Drawer from "../Drawer";
import Header from "../Header";

const { Content, Sider } = Layout;

const LayoutMain = props => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "TOGGLE_MENU": {
                    return state.set("menu", !state.get("menu"));
                }
                case "TOGGLE_DRAWER": {
                    return state.set("drawer", !state.get("drawer"));
                }

                default: {
                    return state;
                }
            }
        },
        new Map({
            drawer: false,
            menu: false
        })
    );

    const menu = state.get("menu");
    const drawer = state.get("drawer");

    const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" });
    const toggleDrawer = () => dispatch({ type: "TOGGLE_DRAWER" });

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Drawer visible={drawer} toggle={toggleDrawer} />
            <Sider collapsible collapsed={menu} trigger={null}>
                <Menu toggle={toggleDrawer} />
            </Sider>
            <Layout>
                <Header menu={menu} toggleMenu={toggleMenu} />
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        background: "#fff",
                        minHeight: "100%"
                    }}
                >
                    <Plot />
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutMain;
