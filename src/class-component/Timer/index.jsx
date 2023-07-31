import { Component, useEffect } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        // all the initialization things you can do
        this.state = {
            timer: 0,
        }
    }
    componentWillMount() {
        console.log('Component Will Mount') 
        // this also use for initilizing things
    }



    

    componentDidMount () {
        console.log('hey I am done') 

        // once mounting is done  than it is calling 
        // useEffect(()=>{

        // } , [])
    }

    shouldComponentUpdate () {
        // this is called before updating state
        // perormance
      return true;
    }

    componentDidUpdate(){     
         console.log('did update')
    }

    componentWillUnmount() {
        // once component unmounted from dom
    }

    updateTimer() {
 // update satte  
 this.setState({timer:  1234})
    }
    render () {
            return  (
                <>
                <div>This First  React Class Component {this.state.timer}</div>
                <button onClick={()=>this.updateTimer()}>Update Timer</button>
                </>
            )
    }
};

export default Timer