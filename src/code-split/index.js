// import _ from 'lodash'
//
// function component() {
//   let element = document.createElement('div');
//
//   // lodash（目前通过一个 script 引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello')
//
//   return element;
// }
//
// document.body.appendChild(component());




// 动态导入 lodash

// async function getComponent() {
//   let element = document.createElement('div');
//
//   const { default: _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');
//
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//   return element;
// }
//
// getComponent().then(component => {
//   document.body.append(component)
// })

// 懒加载

import _ from 'lodash'
// import Print from './print'

function component() {
  let element = document.createElement('div');
  const button = document.createElement('button')
  const br = document.createElement('br')

  button.innerHTML = 'Click me and look at the console!'
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // element.onclick = Print.bind(null, 'Hello webpack!');

  element.append(br)
  element.append(button)


  // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default
  //   print()
  // })

  return element;
}

document.body.appendChild(component());

