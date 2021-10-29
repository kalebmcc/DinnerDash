import React from 'react'
import 'materialize-css'
import { Tab,Tabs } from 'react-materialize';
import Gallery from './Gallery/Gallery';
import { DataContext } from '../contexts/DataContext';
import {useContext} from 'react'

export default function Categories() {

    const {cat,setCat} = useContext(DataContext)

    return (
        <div>
            <Tabs
  className="tab-demo z-depth-1"
  scope="tabs-22"
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
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Asian"
  >
    Test 2
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
    Test 3
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
    Test 4
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
    Test 4
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
    Test 4
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
    Test 4
  </Tab>

</Tabs>
        </div>
    )
}
