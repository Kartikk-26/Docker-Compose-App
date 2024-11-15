import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>All Reviews</h1>
        {reviews && reviews.map(review => (
          <div key={review.id}>{review.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
