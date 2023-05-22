import { Menubar } from 'primereact/menubar';

// import logo from src/assets/logo.svg
import Logo from '../assets/logo.svg';
import SearchBar from './SearchBar';

export default function Navbar() {
    // const items = [
    //     {
    //         label: 'File',
    //         items: [
    //             { label: 'New', icon: 'pi pi-fw pi-plus' },
    //             { label: 'Open', icon: 'pi pi-fw pi-download' }
    //         ]
    //     },
    //     {
    //         label: 'Edit',
    //         items: [
    //             { label: 'Undo', icon: 'pi pi-fw pi-undo' },
    //             { label: 'Redo', icon: 'pi pi-fw pi-redo' }
    //         ]
    //     }
    // ];

    const start = <img
        alt="logo" src={Logo}
        height="100"
        width="100"
        className="p-mr-2">

    </img>;

    const end = <SearchBar />;

    return (
        <div className="flex align-items-center justify-content-center ">

            <div className="logo-container flex align-items-center justify-content-center ">
                <img
                    alt="logo" src={Logo}
                    height="100"
                    width="100"
                    className="p-mr-2">
                </img>
            </div>

            {/* <Menubar
                start={start}
                // start={start}
                end={end}
                className='p-d-flex p-jc-center  p-ai-center'



            /> */}
        </div>
    );
}
