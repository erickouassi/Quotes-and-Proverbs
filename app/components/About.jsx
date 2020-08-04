const React = require('react');
const Link = require('react-router-dom').Link

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <h1>About</h1>

      <p>Maintained by Eric Kouassi</p>

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = About;