import React, { Component } from 'react';
import EnhancedComponent from './EnhancedComponent.jsx' 
class MainCompo extends Component {
    // othercuntion=()=>{ }
    render() {
        console.log("Main Compo called");
        const { clickHnadle } = this.props
        return (
            <div>
                {/* <EnhancedComponent/> */}
                {/* <button onClick={this.props.clickHnadle}>Click</button> */}
                {/* <button onClick={this.othercuntion}>Other Click</button> */}
                <button onClick={clickHnadle}>btn Click Main Compo</button>
            </div>
        );
    }
}
export default EnhancedComponent(MainCompo);



// 1) main compo will be wrapped by Enhanced Component
// 2) Enhanced Component created with class compo and entire class will be wrapped by function
