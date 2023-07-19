import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 2px solid ${(props) => props.borderColor};
`;

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

interface CircleProps {
    bgColor:string;
    borderColor?:string; //OPTIONAL
    text?: string;
}

const  Circle = ({ bgColor, borderColor, text = "default text" } : CircleProps) => {
    // const [counter, setCounter] = useState<number | string>(1);
    // setCounter(2);
    // setCounter("hello");
    const [value, setValue] = useState(0);

    return <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
        {text}
        </Container>
}

export default Circle;