import React, { useState} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { register } from "./UserProfileManager"; 
import portfoliostaxlogo from '../Images/portfoliostaxlogo.png';



export default function Register({setIsLoggedIn}) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isReviewer, setIsReviewer] = useState(false);


  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
    } else {
      const userProfile = { userName, email, isReviewer };
      register(userProfile, password)
        .then(() => {
          setIsLoggedIn(true)
          navigate('/')
        });
    }
 };

 return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ backgroundColor: '#86C232', flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={portfoliostaxlogo} alt="Portfoliostax Logo" />
        <div style={{ padding: '20px' }}>
        </div>
      </div>
      <div style={{ flex: '1', backgroundColor: '#fff', padding: '20px' }}>
        {/* Right side with registration form */}
        <Form onSubmit={registerClick}>
        <h3>Complete the following fields to Register</h3>
          <fieldset>
            <FormGroup>
              <Label htmlFor="userName">User Name</Label>
              <Input id="userName" type="text" onChange={e => setUserName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
  <Label for="confirmPassword">Confirm Password</Label>
  <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
</FormGroup>
           
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={() => setIsReviewer(!isReviewer)} />{' '}
                Register as a reviewer
              </Label>
            </FormGroup>

            <FormGroup>
              <Button>Register</Button>
            </FormGroup>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}

//this code handles the assignment of the GUID from the client side. IF the user selectes the Reviewer checkbox they are assigned a GUID
// import React, { useState } from "react";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { useNavigate } from "react-router-dom";
// import { register } from "./UserProfileManager";
// import portfoliostaxlogo from '../Images/portfoliostaxlogo.png';

// // Function to generate a GUID
// function generateGUID() {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }

// export default function Register({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();
//   const [isReviewer, setIsReviewer] = useState(false);
//   const [guid, setGuid] = useState(null); // State to store GUID

//   const registerClick = (e) => {
//     e.preventDefault();
//     if (password && password !== confirmPassword) {
//       alert("Passwords do not match. Please try again.");
//     } else {
//       const userProfile = { userName, email, isReviewer };

//       // If the user is registering as a reviewer, generate and attach a GUID
//       if (isReviewer) {
//         const generatedGuid = generateGUID();
//         setGuid(generatedGuid);
//         userProfile.guid = generatedGuid;
//       }

//       register(userProfile, password)
//         .then(() => {
//           setIsLoggedIn(true)
//           navigate('/')
//         });
//     }
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <div style={{ backgroundColor: '#86C232', flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <img src={portfoliostaxlogo} alt="PortfoliosTax Logo" />
//         <div style={{ padding: '20px' }}>
//         </div>
//       </div>
//       <div style={{ flex: '1', backgroundColor: '#fff', padding: '20px' }}>
//         {/* Right side with registration form */}
//         <Form onSubmit={registerClick}>
//           <h3>Complete the following fields to Register</h3>
//           <fieldset>
//             <FormGroup>
//               <Label htmlFor="userName">User Name</Label>
//               <Input id="userName" type="text" onChange={e => setUserName(e.target.value)} />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmPassword">Confirm Password</Label>
//               <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
//             </FormGroup>

//              {/* when selected the checkbox calls the function to genereate a GUID for the Reviewer */}
//             <FormGroup check>
//               <Label check>
//                 <Input type="checkbox" onChange={() => setIsReviewer(!isReviewer)} />{' '}
//                 Register as a reviewer
//               </Label>
//             </FormGroup>

//             <FormGroup>
//               <Button>Register</Button>
//             </FormGroup>
//           </fieldset>
//         </Form>
//       </div>
//     </div>
//   );
// }


