import React from 'react';


export default class Images extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
      
        
    }

    render() {
        return <img src={this.props.link}></img>
    }
}






// export default class Images extends React.Component<any, any> {

//     constructor(props: any) {
//         super(props)
        
        
//     }

//     render() {
//         return <img src={this.props} placeholder={this.props.place} value={this.props.input} />
//     }
// }