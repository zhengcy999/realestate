import { useAuth } from "../context/auth";


export default function Home(){
    const [auth,setAuth]=useAuth();
    return (
        <div>
            <h1 className="display-1 bg-primary text-lgiht p-5">
                Home
                <pre>{JSON.stringify(auth,null,4)}</pre>
            </h1>
        </div>
    );
}