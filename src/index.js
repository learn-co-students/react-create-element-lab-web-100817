import React from 'react';
import ReactDOM from 'react-dom';

// const title = React.createElement('h1', {}, 'An Awesome Person');
// const description = React.createElement('p', {}, 'Who is learning React')
//
// const list = React.createElement('ul', {className: 'my-interests'},
//   [
//     React.createElement('li', {}, 'Javascript'),
//     React.createElement('li', {}, 'React'),
//     React.createElement('li', {}, 'Movies'),
//     React.createElement('li', {}, 'Ice Cream'),
//   ]
// );
//
// const me = React.createElement('div', {className: 'me'}, [title, description, list])

// const meInReact = React.createElement('div', {}, [me]);

const meInReact =
  React.createElement('div', { className: 'me' },
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', { className: 'my-interests' }, [
      React.createElement('li', {}, 'JavaScript'),
      React.createElement('li', {}, 'React'),
      React.createElement('li', {}, 'Movies'),
      React.createElement('li', {}, 'Ice cream')
    ])
  );



// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
