import NotesComponent from './notes/NotesComponent';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar'


const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<NotesComponent />} />
            </Routes>
        </>
        
    );
};

export default App;
