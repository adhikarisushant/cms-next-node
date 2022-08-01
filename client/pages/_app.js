import TopNav from '../components/TopNav';
import { ThemeProvider } from '../context/theme';
import '../public/css/styles.css';  
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';    

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider>
            <TopNav />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;