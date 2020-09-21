import React, { useEffect, useRef } from 'react'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
  }
  const createBox = ({ x = 100, y = 100, z = 100, oneSide = 100 }) => {
    p.push()
    p.translate(x, y, z)
    p.box(oneSide)
    p.pop()
  }
  p.draw = () => {
    p.background(255)
    p.frameRate(20)
    const frame = (p.mouseY / p.mouseX) * 100
    createBox({ x: 320 + frame, y: 300, oneSide: 20 })
    createBox({ x: 310 - frame, y: -200, oneSide: 120 })
    createBox({ x: -400 + frame, y: -150, oneSide: 50 })
    createBox({ x: 0, y: 0 - frame, oneSide: 30 })
    createBox({ x: 100 + frame, z: -120, y: -150, oneSide: 150 })
    createBox({ x: 500 - frame, y: -150, oneSide: 150 })
    createBox({ x: -500 + frame, y: 150, oneSide: 150 })
  }
}

export const Animation = () => {
  const target = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (target && target.current) {
      new p5(sketch, target.current)
    }
  }, [])
  return <div ref={target} />
}
