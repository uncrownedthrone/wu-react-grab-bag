import React, { Component } from 'react'

const StartGrabBag = () => {
  const getInput = document.getElementById('stringList')
  const userInput = document.getElementById('input').value
  const createElement = document.createElement('li')
  createElement.appendChild(document.createTextNode(userInput))
  getInput.appendChild(createElement)
  document.querySelector('.search').addEventListener('click', StartGrabBag)
}

export default StartGrabBag
