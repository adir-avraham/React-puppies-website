import React from 'react';



export default class Footer extends React.Component<any, any> {

    constructor(props: any) {
        super(props)   
        
    }

    render() {
        const {title, style} = this.props
        return <div>
               <p style={style}>{title}</p>
        </div>
        
    }
}




