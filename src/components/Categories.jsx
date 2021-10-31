import React from 'react'
import 'materialize-css'
import { Tab,Tabs } from 'react-materialize';
import Gallery from './Gallery/Gallery';
import { DataContext } from '../contexts/DataContext';
import {useContext} from 'react'

export default function Categories() {

    const {setCat} = useContext(DataContext)

    function changeCat(event){
        event.preventDefault()

        setCat({category: event.target.innerHTML})
    }

    return (
        <div>
            <Tabs
  className="tab-demo z-depth-1"
  scope="tabs-22"
  onChange={changeCat}
>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Americana"
    
  >
    <Gallery/>
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Asian"
  >
    <Gallery/>
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Italian"
  >
    <Gallery/>
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Mexican"
  >
    <Gallery/>
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Dessert"
  >
    <Gallery/>
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Soup"
  >
    <Gallery/>
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Crockpot"
  >
    <Gallery/>
  </Tab>

</Tabs>
        </div>
    )
}
