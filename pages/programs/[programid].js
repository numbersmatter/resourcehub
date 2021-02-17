import { firestore, getProgramWithProgramID, postToJSON } from '../../lib/firebase';
import { useState } from 'react';
import ProgramInfoCard from '../../components/ProgramInfoCard';


export async function getServerSideProps({ query }) {
    const { programid } = query;

    const programIdQuery = firestore
        .collection('programs')
        .where('externalId', '==', programid)
        .limit(1)

    const programs = (await programIdQuery.get()).docs.map(postToJSON);



    //const programDoc = await getProgramWithProgramID(programid);
    
    //If no program, short circuit to 404 page
    if(!programs) {
        return {
            notFound: true,
        };
    }

    // JSON serializable data
    //let program = null;

    //if (programDoc) {
    //    program = programDoc.data();}

    return {
        props: { programs }, // will be passed to the page component as props
    };
}


export default function ProgramProfilePage(props) {
    const [programs, setPrograms] = useState(props.programs);
    const [loading, setLoading] = useState(false);
    return (
        <main>
            <ProgramInfoCard programs={programs} />
        </main>
    )
}




