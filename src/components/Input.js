import React, {memo} from "react";

const Input = (type = "text", value, onChange, ...input) => {
    return <input type={type} value={value} onChange={onChange} {...input} />;
};

export default memo(Input);
