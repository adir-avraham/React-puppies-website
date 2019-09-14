import React from 'react';


export default class Header extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
      
        
    }

    render() {
        return <div>
               <h1 style={this.props.style}>{this.props.title}</h1>
        </div>
        
    }
}

