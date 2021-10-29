import React from 'react'
import 'materialize-css'
import { Button, Modal, TextInput } from 'react-materialize'

export default function SignIn() {
    return (
        <div>
            <Modal
  actions={[
    <Button flat modal="close" node="a" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Sign In"
  id="Modal-10"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={<Button node="a">Sign In</Button>}
>
  <form>
    <TextInput
        email
        id="TextInput-207"
        label="Email"
        validate
        /><br/>
        <TextInput
        id="TextInput-210"
        label="Password"
        password
        />
<Button node='a'>SUBMIT</Button>

      
  </form>
</Modal>
        </div>
    )
}
