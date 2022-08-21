import React from 'react';
import SinglePet from './SinglePet';
import axios from 'axios';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  //issue with setting state to props.pets with real data, props.pets is equal to the data, but list is just an empty array
  //const [list, setList] = React.useState(props.pets);
  const [option, setOption] = React.useState('all');
  //const [initialData, setInitialData] = React.useState([]);

  //console.log('props.pets:', props.pets);
  // console.log('list', list);

  //Grabbing in the component when I want to set it to some state (when I tried this in Root and then tried passing it down as props, I could render the data on the initial render, only after I interacted with the select)
  // React.useEffect(() => {
  //   getPets();
  // }, []);

  // async function getPets() {
  //   const { data } = await axios.get('/api/pets');
  //   //console.log(data);
  //   setInitialData(data);
  //   //console.log(initialData);
  //   setList(data);
  //   //console.log(list);
  //   // console.log('getPets');
  // }

  // React.useEffect(() => {
  //   console.log('render');
  // }, [list]);

  //console.log('props.pets:', props.pets);
  // function handleChange(event) {
  //console.log(initialData);
  // let initialData = props.pets;
  // let newList = initialData;
  // let newList = list;
  // setOption(event.target.value);
  // if (event.target.value === 'all') {
  //   setList(newList);
  // } else {
  //   let filteredList = newList.filter((pet) => {
  //     return `${pet.species}s` === event.target.value;
  //   });
  //   setList(filteredList);
  // }
  // }

  function handleChange(event) {
    setOption(event.target.value);
  }
  function filterList() {
    if (option === 'all') {
      return props.pets;
    } else {
      let filteredList = props.pets.filter((pet) => {
        return `${pet.species}s` === option;
      });
      return filteredList;
    }
  }
  return (
    <>
      <select name="species" value={option} onChange={handleChange}>
        <option value="all">All</option>
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
      </select>
      <div className="pet-list">
        {filterList().map((pet) => (
          <SinglePet key={pet.id} pet={pet} />
        ))}
      </div>
    </>
  );
}

export default PetList;
