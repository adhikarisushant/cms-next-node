import ToggleTheme from '../components/ToggleTheme';
import {Button} from 'antd';

function Home () {
    return(
        <div>
        <h1>Hello World</h1>
        <Button type="primary">Click Me</Button>
        <br />
        <br />
        <ToggleTheme />
        </div>
    );
}

export default Home;