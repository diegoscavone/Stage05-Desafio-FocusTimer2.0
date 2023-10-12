import state from './state.js'
import * as elements from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

import * as events from './events.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function addMinutes() {
  state.minutes = Number(elements.minutes.textContent)

  if (state.minutes > 55) {
    return
  }
  state.minutes += 5
  timer.updateDisplay(state.minutes)
}

export function subMinutes() {
  state.minutes = Number(elements.minutes.textContent)

  if (state.minutes < 10) {
    return
  }
  state.minutes -= 5
  timer.updateDisplay(state.minutes)
}

export function toggleMusicForest() {
  if (elements.buttonForest.classList.contains('selected')) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    elements.buttonForest.classList.remove('selected')
    sounds.buttonForest.pause()
    console.log('parando som de floresta...')
    return
  }

  stopSounds()
  state.isMute = document.documentElement.classList.toggle('music-on')
  elements.buttonForest.classList.add('selected')

  if (state.isMute) {
    sounds.buttonForest.play()
    console.log('iniciando som de floresta')
  }
}

export function toggleMusicRain() {
  if (elements.buttonRain.classList.contains('selected')) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    elements.buttonRain.classList.remove('selected')
    sounds.buttonRain.pause()
    console.log('parando som de chuva...')
    return
  }

  stopSounds()
  state.isMute = document.documentElement.classList.toggle('music-on')
  elements.buttonRain.classList.add('selected')

  if (state.isMute) {
    sounds.buttonRain.play()
    console.log('iniciando som de chuva')
  }
}

export function toggleMusicCoffee() {
  if (elements.buttonCoffee.classList.contains('selected')) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    elements.buttonCoffee.classList.remove('selected')
    sounds.buttonCoffeeShop.pause()
    console.log('parando som de cafeteria...')
    return
  }

  stopSounds()
  state.isMute = document.documentElement.classList.toggle('music-on')
  elements.buttonCoffee.classList.add('selected')

  if (state.isMute) {
    sounds.buttonCoffeeShop.play()
    console.log('iniciando som de cafeteria')
  }
}

export function toggleMusicFireplace() {
  if (elements.buttonFireplace.classList.contains('selected')) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    elements.buttonFireplace.classList.remove('selected')
    sounds.buttonFireplace.pause()
    console.log('parando som de lareira...')
    return
  }

  stopSounds()
  state.isMute = document.documentElement.classList.toggle('music-on')
  elements.buttonFireplace.classList.add('selected')

  if (state.isMute) {
    sounds.buttonFireplace.play()
    console.log('iniciando som de lareira')
  }
}

function stopSounds() {
  console.log('parando musicas...')

  state.isMute = false
  document.documentElement.classList.remove('music-on')

  elements.buttonForest.classList.remove('selected')
  sounds.buttonForest.pause()

  elements.buttonRain.classList.remove('selected')
  sounds.buttonRain.pause()

  elements.buttonCoffee.classList.remove('selected')
  sounds.buttonCoffeeShop.pause()

  elements.buttonFireplace.classList.remove('selected')
  sounds.buttonFireplace.pause()
}
