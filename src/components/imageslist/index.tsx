import React from 'react';
import pic1 from './1.jpg';
import pic2 from './2.jpg'; 
import pic3 from './3.jpg'; 
import pic4 from './4.jpg'; 
import pic5 from './5.jpg'; 
import logoJpg from './logo.jpg'; 
import logoPng from './logo.png'; 


const arrayOfImages = [pic1, pic2, pic3, pic4, pic5, logoJpg, logoPng];

export default class ImagesList extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props)
        
        
    }
    
    render() {
        const { height, width, style} = this.props
        return arrayOfImages.map(image => <div>
            <img height={height} width={width} style={style} src={image}></img> 
            </div>
    ) 
        
    }
}



