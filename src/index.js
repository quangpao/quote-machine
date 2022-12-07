import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
// import bootstrap from 'bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import font-awesome from node_modules
import '/node_modules/font-awesome/css/font-awesome.min.css';


const quotesData = [
  {
    quote: 'There is crack inside everything, that how the light get in.',
    author: 'Leonard Cohen',
  },
  {
    quote: 'We all prevent our success by making excuses',
    author: 'Quang Bao'
  },
  {
    quote: 'If I love myself, I love you. If I love you, I love myself.',
    author: 'Rumi'
  },
  {
    quote: 'Life is in ourselves and not in the external.',
    author: 'Fyodor Dostoevsky'
  },
  {
    quote: 'You can’t depend on your eyes when your imagination is out of focus.',
    author: 'Mark Twain'
  },
  {
    quote: 'Could I have been anyone other than me?',
    author: 'Dave Matthews'
  },
  {
    quote: 'Life is not a problem to be solved, but a reality to be experienced.',
    author: 'Soren Kierkegaard'
  },
  {
    quote: 'Knowing what must be done does away with fear.',
    author: 'Rosa Parks'
  },
  {
    quote: 'When things go wrong, don’t go with them.',
    author: 'Elvis Presley'
  },
  {
    quote: 'Every saint has a past, and every sinner has a future.',
    author: 'Oscar Wilde'
  }
]

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotesData.length)
  const randomQuote = quotesData[randomIndex]
  return randomQuote
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuoteBox />
);

function QuoteBox() {

  const [randomQuote, setRandomQuote] = useState(getRandomQuote)

  var { quote, author } = randomQuote;

  const newQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length)
    const randomQuote = quotesData[randomIndex]
    setRandomQuote(randomQuote)
  }

  var href = 'https://twitter.com/intent/tweet?text=' + quote + ' - ' + author;

  return (
    <div id='wrapper'>
      <div id='quote-box'>

        <div className='quote-content'>
          <i className='fa fa-quote-left'></i>
          <span id='text'>{quote}</span>

        </div>

        <div className='quote-author'>

          <span id='author'>- {author}</span>

        </div>

        <div id='share'>
          <a
            href={href}
            className='btn btn-secondary'
            id='tweet-quote'
            title='Tweet this quote!'
          ><i className="fa fa-brands fa-twitter"></i></a>


          <button className='btn btn-secondary' id='new-quote' onClick={() => newQuote()}>
          <i className="fa fa-sharp fa-solid fa-angle-right"></i>
          </button>
        </div>

      </div>
    </div>
  )

}
reportWebVitals();
