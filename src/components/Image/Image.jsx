import React from "react";
import ReactMarkdown from "react-markdown";

function Image(props){
    return(
        <div style={{textAlign: 'center'}}>
            <ReactMarkdown>
                {"![" + props.name + "](" + props.url + ")"}
            </ReactMarkdown>
        </div>
    );
}

export default Image;
