import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';


const Program = (props) => {
    const { match } = props;
    const { params } = match;
    const { program_ID} = params;
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchProgram = async () => {
            const db = firebase.firestore()
            const programRef = db.collection("programs")
            const snapshot = await programRef.where('programID', '==', parseInt(`${program_ID}`) ).get()
            setPrograms(snapshot.docs.map(doc => doc.data()))
        }
        fetchProgram()


    }, [])


    return(
        <>
            <h4> This is {program_ID} </h4>

            <ul>
                {programs.map(program =>(
                    <li>{program.program_name}</li>
                ))}
            </ul>
        </>
    )
}

export default Program;