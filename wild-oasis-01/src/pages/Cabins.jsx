import {useState} from 'react'

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from '../ui/Button'
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from '../features/cabins/CreateCabinForm'

function Cabins() {
  const[showform,setShowForm] = useState(false)
 
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>filter / sort</p>
    </Row>
    <Row>
        <CabinTable/>
        <Button onClick={() => setShowForm(show => !show)} variations ='primary' size='medium'>
          Add new Cabin
        </Button>
        {showform &&  <CreateCabinForm/>}
    </Row>
  </>
  );
}

export default Cabins;
