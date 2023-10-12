import { controls } from './elements.js'
import { sounds } from './elements.js'
import * as actions from './actions.js'

//exporta uma função dos registros de controle da aplicação, como tudo aquilo que está sendo clicado dentro do id controls
export function registerControls(){
  //verificando os clicks do elemento
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    
    //se o tipo não for uma function para a aplicação
    if (typeof actions[action] != 'function'){
      return
    }
    actions[action]()
  })
}

export function registerSounds(){
  sounds.addEventListener('click', event => {
    const action = event.target.dataset.action

    if (typeof actions[action] != 'function'){
      return
    }
    actions[action]()
  })
}
