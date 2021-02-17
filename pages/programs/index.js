import ProgramGridCard from '../../components/ProgramGridCard';
import { firestore, fromMillis, postToJSON } from '../../lib/firebase';

import { useState } from 'react';

// Pull the resources from firestore

export async function getServerSideProps(){
    const programsQuery = firestore
        .collection('programs')
        .orderBy('name', 'asc');
    
    const programs = (await programsQuery.get()).docs.map(postToJSON);

    return {
        props: { programs }, // will be passed to the page component as props
    }


}

export default function Programs(props) {
    const [programs, setPrograms] = useState(props.programs);
    const [loading, setLoading] = useState(false);

    
  return (
    <main>
        <h1>Welcome to Programs page</h1>
        <ProgramGridCard programs={programs} />
    </main>
  )
}