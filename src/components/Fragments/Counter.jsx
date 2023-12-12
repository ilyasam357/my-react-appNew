import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        // console.log("constructor");
    }

    // componentDidMount() {
    //     this.setState({count: 0})
    //     console.log("componentDidMount");
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("componentDidUpdate");
    //     if(this.state.count === 5) {
    //         this.setState({count: 0})
    //     }
    // }
    render() {
        return (
            <div>
                <p>  {this.state.count} </p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} className="bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Click me
                </button>
                {/* {console.log("render")} */}
            </div>
        );
    }
}
export default Counter;