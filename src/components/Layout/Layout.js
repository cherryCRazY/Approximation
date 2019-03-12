//Core
import React, { useReducer, useEffect } from "react";
import { connect } from "react-redux";

//Itils
import { Map } from "immutable";

//Services
import { approData } from "../../services/approximation";
import { interData } from "../../services/interpolation";

//Components
import { Layout } from "antd";
import Plot from "../Plot/Plot";
import Menu from "../Menu";
import Drawer from "../Drawer";
import Header from "../Header";

//Actions
import { setApproData, setInterData } from "../../bus/plot/actions";

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
                case "CHOOSE_MODE": {
                    return state.set("mode", action.mode);
                }
                case "SET_SERVICE": {
                    return state.set("service", action.service);
                }
                case "SET_DATA": {
                    return state.set("data", action.data);
                }
                default: {
                    return state;
                }
            }
        },
        new Map({
            drawer: false,
            menu: false,
            mode: false,
            service: null,
            data: []
        })
    );

    const menu = state.get("menu");
    const drawer = state.get("drawer");
    const mode = state.get("mode");
    const service = state.get("service");
    const data = state.get("data");

    const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" });
    const toggleDrawer = () => dispatch({ type: "TOGGLE_DRAWER" });
    const chooseMode = mode => dispatch({ type: "CHOOSE_MODE", mode });
    const setService = service => dispatch({ type: "SET_SERVICE", service });
    const drawGraphic = () => {
        const data = service(props.points);

        dispatch({ type: "SET_DATA", data: data.data });
        if (mode === "Approximation") {
            props.onAppro(data.appro);
        }
        if (mode === "Interpolation") {
            props.onInter(data.inter);
        }
    };

    useEffect(() => {
        if (mode === "Approximation") {
            setService(approData);
        }
        if (mode === "Interpolation") {
            setService(interData);
        }
    }, [mode]);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Drawer
                visible={drawer}
                handlerClick={drawGraphic}
                mode={mode}
                toggle={toggleDrawer}
            />
            <Sider collapsible collapsed={menu} trigger={null}>
                <Menu toggleDrawer={toggleDrawer} chooseMode={chooseMode} />
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
                    <Plot data={data} />
                </Content>
            </Layout>
        </Layout>
    );
};

const mapStateToProps = ({ plot }) => ({ points: plot.get("points").toJS() });

const mapDispatchToProps = dispatch => ({
    onAppro: appro => dispatch(setApproData(appro)),
    onInter: inter => dispatch(setInterData(inter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutMain);
