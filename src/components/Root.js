import React from 'react';
import PetList from './PetList';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';
import axios from 'axios';

const Root = () => {
  const [petList, setPetList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      getPets();
    }, 3000);
  }, []);

  async function getPets() {
    const { data } = await axios.get('/api/pets');
    //console.log(data);
    setPetList(data);
    setLoading(false);
    //console.log(petList);
    // console.log('getPets');
  }

  //console.log(petList);

  return (
    <>
      <h1>Adoption Center</h1>
      {/* <h1>{petList.map((pet) => pet.name)}</h1> */}
      <h3>{loading ? 'Loading...' : ''}</h3>
      <PetList pets={petList} />
    </>
  );
};

export default Root;
