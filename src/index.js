import React from 'react';
import ReactDOM from 'react-dom';


const title = React.createElement('h1', {}, "An Awesome Person")
const text = React.createElement('p', {}, "Who is learning React")

let lis = ['JavaScript', 'React', 'Movies', 'Ice cream'];
let ls = [];
for (let li of lis){
  ls.push(React.createElement('li', {}, li))
}

const list = React.createElement('ul', {'className': 'my-interests'}, ls)
const meInReact = React.createElement('div', {'className': "me"}, [title, text, list])
// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
