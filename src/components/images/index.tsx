import React from 'react';
import pic1 from '..//images/1.jpg';
import pic2 from '..//images/2.jpg'; 
import pic3 from '..//images/3.jpg'; 
import pic4 from '..//images/4.jpg'; 
import pic5 from '..//images/5.jpg'; 
import logoJpg from '..//images/logo.jpg'; 
import logoPng from '..//images/logo.png'; 


export default class Images extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
      
        
    }

    render() {
        return <div>
            <img height={this.props.height} width={this.props.width} src={pic1}></img>       
  

        </div>
    }
}




