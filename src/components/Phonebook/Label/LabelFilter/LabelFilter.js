import React from "react";
import LabelFilterStyle from "./LabelFilter.styled";

const LabelFilter = ({ title, children }) => (
    <LabelFilterStyle>
        <p>{title}</p>
        {children}
    </LabelFilterStyle>
)

export default LabelFilter