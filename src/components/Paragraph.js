import React from 'react'
import {Typography} from "@material-ui/core";


export default function Paragraph({paragraphs, align, style}){
    return(
        <>
            {paragraphs.map((paragraph, index) => (
                <Typography key={index} align={align} variant="body1" paragraph style={style}>
                    {paragraph}
                </Typography>
            ))}
        </>
    )
};
