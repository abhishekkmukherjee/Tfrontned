
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './MyComponents/Header';

import './App.css';
import Rating from './MyComponents/Rating';
import ReviewCard from './MyComponents/ReviewCard';



function App() {
  return (
    <>
      <Header/>
      <ReviewCard />
      <Rating />

    </>
  );


}

export default App;
