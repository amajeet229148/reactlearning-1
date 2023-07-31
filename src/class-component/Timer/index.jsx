import { Component, useEffect } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        // all the initialization things you can do
        this.state = {
            timer: 0,
            name:'Watch',
            lastName: 'Chimachom'
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
        // here you call any api or any subscribed
    }

    // if this is child component parent  state  => child props
    shouldComponentUpdate (nextProps , nextState) {
        console.log(nextState , this.state)
        // if(2*this.state.timer === nextState.timer) {
        //     return true
        // }
        // this is called before updating state
        // perormance
        // if this will reture return than only component re-render happen
        // it will call just before component updated
      return true;
    }

    callApi () {
        alert('calling api....')
    }

    componentDidUpdate(nextProps , nextState){  
        // USE OF THIS METHOD IS GENERALLY CALLING SIDE EFFECT ON UPDATING ANY STATE
        // API CALL   
        
         console.log('did update')
         if(nextState.timer+1 === this.state.timer) {
            this.callApi()
        }

        //  useEffect(()=>{

        //  } ,[timer])
        
         // when state updated immediately it will call
         // this will call once component updated and re-render happen
    }

    componentWillUnmount() {
        // once component unmounted from dom
    }

    updateTimer() {
     this.setState({timer:  this.state.timer+1} , ()=> {
    console.log('callback' ,this.state.name)
     })
     console.log('outside' ,this.state.timer)
    }
    render () {
        console.log(this.state.lastName)
            return  (
                <>
                <div>This First  React Class Component {this.state.timer}</div>
                <button onClick={()=>this.updateTimer()}>Update Timer</button>
                </>
            )
    }
};

export default Timer