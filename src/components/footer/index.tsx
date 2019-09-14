import React from 'react';


export default class Footer extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
      
        
    }

    render() {
        return <div>
               <p style={this.props.style}>{this.props.title}</p>
        </div>
        
    }
}




