import * as React from "react";
import "./DisplayComponent.css";
import ButtonNumberComponent from "../ButtonNumberComponent/ButtonNumberComponent";

class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "",
            regexPattern : /^[\d+\-*\/.]+$/,
        };
        this.value = this.value.bind(this);
    }

    value(valueInput, allDelete = "") {
        if (allDelete === "AC") {
            this.setState({
                value : ""
            }, () => {
                console.log(this.state.value)
            });
        } else if (allDelete === "DEL") {
            this.setState({
                value : valueInput
            });
        }
        else {
            this.setState({
                value : valueInput
            });
        }
    }

    valueInput(value) {
        if (!this.state.regexPattern.test(value)) {
            value = "";
        }
        this.setState({
            value : value
        });
    }

    render() {
        return (
            <div className="display-input sm:w-full xl:w-9/12 lg:w-9/12 md:w-11/12 w-1/2 mx-auto rounded-xl mt-4 p-2">
                <div className="input w-11/12 mx-auto">
                    <textarea readOnly={true} onChange={(e) => this.valueInput(e.target.value)} value={this.state.value} className="grid items-center border border-slate-300 rounded-md border border-sky-500 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" rows="14" cols="10" wrap="soft"/>
                    <ButtonNumberComponent currentValue={this.state.value} value={this.value} />
                </div>
            </div>
        );
    }
}

export default DisplayComponent;