'use strict';

const reactElement = React.createElement;

class LikeButton extends React.Component {
  constructor(anything) {
    super(anything);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return reactElement(
      'div',
      { onClick: () => this.setState({ liked: true }) },
      'Like',
      reactElement(ChildElement)
    );
  }
}

class ChildElement extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return reactElement(
      'h1',
      { onClick: () => console.log('click') },
      'yo'
    )
  }
}

const domContainer = document.querySelector('#react_div');
ReactDOM.render(reactElement(LikeButton), domContainer);