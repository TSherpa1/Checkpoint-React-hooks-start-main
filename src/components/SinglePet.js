import React from 'react';

function SinglePet(props) {
  const [status, setStatus] = React.useState(false);

  props.pet.species =
    props.pet.species[0].toUpperCase() + props.pet.species.substring(1);

  return (
    <div className={status ? `single-pet` : 'single-pet ' + 'adopted'}>
      <h1>{props.pet.name}</h1>
      <h2>{props.pet.species}</h2>
      <h3>{status ? 'Adopted!' : 'Available!'}</h3>
      <p>{props.pet.description}</p>
      <button
        className="Toggle Status Button"
        onClick={() => setStatus(!status)}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default SinglePet;
