//Core
import React, { memo } from "react";

//Components
import { Input } from "antd";

const InputPlot = props => {
    const { handlerChange, accessKey, x, y } = props;

    return (
        <Input.Group
            style={{
                width: "90%",
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            <Input
                addonBefore="X:"
                size="large"
                type="number"
                value={x}
                accessKey={accessKey}
                onChange={e =>
                    handlerChange({
                        value: e.target.value,
                        name: "x",
                        x: e.target.value,
                        y,
                        accessKey
                    })
                }
            />
            <Input
                addonBefore="Y:"
                size="large"
                type="number"
                value={y}
                accessKey={accessKey}
                onChange={e =>
                    handlerChange({
                        value: e.target.value,
                        name: "y",
                        y: e.target.value,
                        x,
                        accessKey
                    })
                }
            />
        </Input.Group>
    );
};

export default memo(InputPlot);
