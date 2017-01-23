import React from 'react';

module.exports = class extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Tim Erwin 2.0!</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
};
