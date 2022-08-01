import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const SAVE_ROCKET = gql`
  mutation saveRocket($rocket: RocketInput!) {
    saveRocket(rocket: $rocket) {
      model
    }
  }
`;

interface RocketInventory {
  id: number;
  model: string;
  year: number;
  stock: number;
}

interface NewRocketDetails {
  model: string;
  year: number;
  stock: number;
}

export function NewRocketForm() {
  const [model, setModel] = useState('');
  const [year, setYear] = useState(0);
  const [stock, setStock] = useState(0);

  const [saveRocket, { error, data }] = useMutation<
    { saveRocket: RocketInventory },
    { rocket: NewRocketDetails }
  >(SAVE_ROCKET, {
    variables: { rocket: { model, year: +year, stock: +stock } }
  });

  return (
    <div>
      <h3>Add a Rocket</h3>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.saveRocket ? <p>Saved!</p> : null}
      <form>
        <p>
          <label>Model</label>
          <input
            name="model"
            onChange={e => setModel(e.target.value)}
          />
        </p>
        <p>
          <label>Year</label>
          <input
            type="number"
            name="year"
            onChange={e => setYear(+e.target.value)}
          />
        </p>
        <p>
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            onChange={e => setStock(+e.target.value)}
          />
        </p>
        <button onClick={() => model && year && stock && saveRocket()}>
          Add
        </button>
      </form>
    </div>
  );
}