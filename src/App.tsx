import React from 'react';

import './App.css';
import { Label } from './Component/Label';
//import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  const data = [
    {
      id: '1',
      name: 'Bulbasaur',
      height: '7',
      weight: '69',
      types: ['grass', 'poison'],
      baseExperience: '64',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '45',
      attack: '49',
      defense: '49',
      specialattack: '65',
      specialdefense: '65',
      speed: '45',
    },
    {
      id: '2',
      name: 'Ivysaur',
      height: '10',
      weight: '130',
      types: ['grass', 'poison'],
      baseExperience: '142',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '60',
      attack: '62',
      defense: '63',
      specialattack: '80',
      specialdefense: '80',
      speed: '60',
    },
    {
      id: '3',
      name: 'Venusaur',
      height: '20',
      weight: '1000',
      types: ['grass', 'poison'],
      baseExperience: '236',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '80',
      attack: '82',
      defense: '83',
      specialattack: '100',
      specialdefense: '100',
      speed: '80',
    },
    {
      id: '4',
      name: 'Charmander',
      height: '6',
      weight: '85',
      types: ['fire'],
      baseExperience: '62',
      abilities: ['blaze', 'solar-power'],
      hp: '39',
      attack: '52',
      defense: '43',
      specialattack: '60',
      specialdefense: '50',
      speed: '65',
    },
    {
      id: '5',
      name: 'Charmeleon',
      height: '11',
      weight: '190',
      types: ['fire'],
      baseExperience: '142',
      abilities: ['blaze', 'solar-power'],
      hp: '58',
      attack: '64',
      defense: '58',
      specialattack: '80',
      specialdefense: '65',
      speed: '80',
    },
    {
      id: '6',
      name: 'Charizard',
      height: '17',
      weight: '905',
      types: ['fire', 'flying'],
      baseExperience: '240',
      abilities: ['blaze', 'solar-power'],
      hp: '78',
      attack: '84',
      defense: '78',
      specialattack: '109',
      specialdefense: '85',
      speed: '100',
    },
    {
      id: '7',
      name: 'Squirtle',
      height: '5',
      weight: '90',
      types: ['water'],
      baseExperience: '63',
      abilities: ['torrent', 'rain-dish'],
      hp: '44',
      attack: '48',
      defense: '65',
      specialattack: '50',
      specialdefense: '64',
      speed: '43',
    },
    {
      id: '8',
      name: 'Wartortle',
      height: '10',
      weight: '225',
      types: ['water'],
      baseExperience: '142',
      abilities: ['torrent', 'rain-dish'],
      hp: '59',
      attack: '63',
      defense: '80',
      specialattack: '65',
      specialdefense: '80',
      speed: '58',
    },
    {
      id: '9',
      name: 'Blastoise',
      height: '16',
      weight: '855',
      types: ['water'],
      baseExperience: '239',
      abilities: ['torrent', 'rain-dish'],
      hp: '79',
      attack: '83',
      defense: '100',
      specialattack: '85',
      specialdefense: '105',
      speed: '78',
    },
    {
      id: '10',
      name: 'Caterpie',
      height: '3',
      weight: '29',
      types: ['bug'],
      baseExperience: '39',
      abilities: ['shield-dust', 'run-away'],
      hp: '45',
      attack: '30',
      defense: '35',
      specialattack: '20',
      specialdefense: '20',
      speed: '45',
    },
  ];

  return (
    <div className="App">
      <div className="nav-bar">
        <h2 id="title">Pokemon List</h2>
      </div>
      <div className="main">
        <div className="labels">
          {data.map((item, id) => (
            <Label item={item}></Label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
