import React from 'react';


const Program = (props) => {
    const { match } = props;
    const { params } = match;
    const { program_ID} = params;


    return(
        <div>
            This is the program information page for {program_ID}
        </div>
    )
}

export default Program;