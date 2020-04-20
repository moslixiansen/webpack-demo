import _ from 'lodash'
import './style.css'
import icon from './icon.png'
import Data from './data.xml'

function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  const img = new Image()
  img.src = icon
  element.append(img)

  console.log(Data)

  return element;
}

document.body.appendChild(component());
