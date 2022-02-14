import "./ButtonNumberComponent.css";
import React, {useEffect, useState} from "react";

function ButtonNumberComponent(props) {
    const [value, getValue] = useState("");

    useEffect(() => {
        props.value(value);
    },[value]);

    function removeValue() {
        props.value("","AC");
        getValue("");
    }

    function delValue() {
        let currentValue = props.currentValue;
        if (typeof currentValue === "number") {
            currentValue = currentValue.toString();
        }
        let removeValueFromLast = currentValue.substring(0, currentValue.length - 1);
        props.value(removeValueFromLast, "DEL");
        getValue(removeValueFromLast);
    }

    function result() {
        let currentValue = props.currentValue;
        let resultNumber = eval(currentValue);
        props.value(resultNumber);
        getValue(resultNumber);
    }

    return (
        <div className={"grid gap-2 grid-cols-4 justify-items-center mt-2 2xl:text-2xl text-lg"}>
            <button onClick={removeValue} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>AC</button>
            <button onClick={delValue} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>DEL</button>
            <button value={"/"} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>/</button>
            <button value={"*"} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-28 h-28 border border-sky-500 rounded-lg"} type={"button"}>*</button>

            <button value={7} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>7</button>
            <button value={8} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>8</button>
            <button value={9} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>9</button>
            <button value={"-"} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-28 h-28 border border-sky-500 rounded-lg"} type={"button"}>-</button>

            <button value={4} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>4</button>
            <button value={5} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>5</button>
            <button value={6} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>6</button>
            <button value={"+"} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 w-28 lg:w-5/6 md:w-5/6 border border-sky-500 rounded-lg w-28 row-span-2"} type={"button"}>+</button>

            <button value={1} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>1</button>
            <button value={2} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>2</button>
            <button value={3} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 lg:w-5/6 md:w-5/6 w-32 h-28 border border-sky-500 rounded-lg"} type={"button"}>3</button>

            <button value={0} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-5/6 sm:h-14 w-32 lg:w-5/6 md:w-5/6 h-28 border border-sky-500 rounded-lg col-span-1"} type={"button"}>0</button>
            <button value={"."} onClick={(event) => getValue(value + event.currentTarget.value)} className={"sm:w-33 sm:h-14 w-11/12 lg:w-5/6 xl:w-5/6 md:w-5/6 h-28 border border-sky-500 rounded-lg col-span-2"} type={"button"}>.</button>
            <button onClick={result} className={"sm:w-5/6 sm:h-14 w-28 lg:w-5/6 md:w-5/6 h-28 border border-sky-500 rounded-lg"} type={"button"}>=</button>

        </div>
    )
}

export default ButtonNumberComponent