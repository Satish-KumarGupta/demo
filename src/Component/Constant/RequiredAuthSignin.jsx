import { Navigate } from "react-router-dom";
const RequiredAuthSignIn = ({children}) => {
    const token=localStorage.getItem('Success') 
  return token ?<Navigate to='/' replace/> :   children;

}
export default RequiredAuthSignIn