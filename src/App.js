import './App.css';
import GalleryReact from './components/GalleryReact';
import Menu from './components/Menu';

function App() {
  return (
    <>
    <GalleryReact/>
    </>
  );
}

export default App;

{/* <div className='menu-tab d-flex justify-content-evenly'>
            <button className='btn btn-warning' onClick={() => filterItems('breakfast')}>Breakfast</button>
            <button className='btn btn-warning' onClick={() => filterItems('lunch')}>Lunch</button>
            <button className='btn btn-warning' onClick={() => filterItems('evening')}>Evening</button>
            <button className='btn btn-warning' onClick={() => filterItems('dinner')}>Dinner</button>
            <button className='btn btn-warning' onClick={() => setItems(Menu)}>All</button>
        </div> */}