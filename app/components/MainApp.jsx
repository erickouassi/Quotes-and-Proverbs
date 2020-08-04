const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');
const ProverbsArray = require('./DataProverbs');
const QuotesArray = require('./DataQuotes');


/* the main page for the index route of this app (MainApp) */
const MainApp = function(){
  return (
    <div>
      <p><span style={{color: "Blue"}}>{QuotesArray.length}</span> Quotes</p>

      <UnorderedList items={QuotesArray} />
      
      <p><span style={{color: "Blue"}}>{ProverbsArray.length}</span> Proverbs</p>

      <UnorderedList items={ProverbsArray} />
      
      <p> Visit this link: <Link to='/about'>To learn  more</Link> </p> 

    </div>
  );
}

module.exports = MainApp;