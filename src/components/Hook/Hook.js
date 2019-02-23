import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Input = styled.input`
    border: 1px solid black;
    outline: none;
    color: ${props => (props.disabled ? "red" : "black")};
`;

const Hook = props => {
    const [name, setName] = useState("kek");
    const [close, setClose] = useState("kek");

    const changeName = e => setName(e.target.value);

    watchName(name, setName);

    return (
        <Input
            onClick={() => alert("lol")}
            value={name}
            onChange={changeName}
        />
    );
};

function watchName(name, setName) {
    useEffect(() => {
        setName(name);
    }, [name]);
}

const mapStateToProps = state => ({
    app: state.app.get("cord")
});

export default connect(mapStateToProps)(Hook);
