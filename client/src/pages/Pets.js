import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import PetsList from "../components/PetsList";
import NewPetModal from "../components/NewPetModal";
import Loader from "../components/Loader";

const GET_ALL_PETS = gql`
  query getAllPets {
    pets {
      name
      id
      type
      img
    }
  }
`;

const ADD_PET = gql`
  mutation createPet($newPetInput: NewPetInput!) {
    addPet(input: $newPetInput) {
      id
      name
      type
      img
    }
  }
`;
<<<<<<< HEAD
=======

export default function Pets() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(GET_ALL_PETS);
  const [addPet, newData = { data }] = useMutation(ADD_PET, {});
>>>>>>> fbce6dc... feat(site): read and write to apollo db

export default function Pets() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(GET_ALL_PETS);
  const [addPet, newData = { data }] = useMutation(ADD_PET, {});
  console.log(newData);
  const onSubmit = input => {
    addPet({ variables: { newPetInput: input } });
    setModal(false);
  };

  if (loading || error) {
    return <Loader />;
  }

  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />;
  }

  return (
    <div className='page pets-page'>
      <section>
        <div className='row betwee-xs middle-xs'>
          <div className='col-xs-10'>
            <h1>Pets</h1>
          </div>

          <div className='col-xs-2'>
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <PetsList pets={data.pets} />
      </section>
    </div>
  );
}
