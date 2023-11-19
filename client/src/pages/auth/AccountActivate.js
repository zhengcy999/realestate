import { useParams } from "react-router-dom"

export default function AccountActivate(){
    const {token}=useParams();
   

    return <div className="display-1 d-flex display-flex justify-content-center align-items-center vh-100">
        Please wait ...
    </div>
}