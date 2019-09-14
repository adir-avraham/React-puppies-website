import React from 'react';


export default function Footer(props:any) {
const {title} = props; 
const currentStyle = {color: "red"}
return <div>
    <p style={currentStyle}>{title}</p>
</div>



} 