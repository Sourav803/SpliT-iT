import React,{ Component } from 'react';

class Calculate extends Component{
    constructor(props){
        super(props);
    }

    
    

    render(){          
          
       const call=(names)=>{
            {this.names.map((x,i)=>{
                return(
                    <li key={i}>names</li>
                );
                
             })}
        }
          //alert(amt);
        return(
            <div>
               <ul>
               {call(this.props.names)}
               </ul>
            </div>
        );
    }
}

export default Calculate;