import { useContext } from 'react';
import {Button} from 'antd';
import {AuthContext} from '../context/auth'

function Home () {
    // context
    const [auth, setAuth] = useContext(AuthContext);

    return(
        <div>
        <h1>Hello World</h1>
        <br />
        <br />
        <pre>{JSON.stringify(auth, null, 4)}</pre>
        </div>
    );
}

export default Home;