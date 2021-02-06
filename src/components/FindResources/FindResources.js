
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import ResourceGrid from "../ResourceGrid/ResourceGrid";



const FindResource = () => {
    const[resources, setResources] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const fetchResources = async () =>{
            setIsLoading(true)
            const db = firebase.firestore()
            const data = await db.collection("programs").get()
            setResources(data.docs.map(doc => doc.data()))
            setIsLoading(false)

        }
        fetchResources()
    }, [])

    return (
        <ResourceGrid isLoading={isLoading} resources={resources}/>
    )
}

export default FindResource