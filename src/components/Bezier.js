import React, {useEffect} from 'react'

function Bezier() {
    useEffect(() => {
        const canvas = document.getElementById('myCanvas')
        const context = canvas.getContext('2d')

        // Draw a cubic bezier curve
        context.beginPath()
        context.moveTo(50, 250)
        context.bezierCurveTo(150, 50, 350, 50, 450, 250)
        context.lineWidth = 2
        context.strokeStyle = 'blue'
        context.stroke()



    }, [])
  return (
    <canvas id="myCanvas" width='500' height='500'></canvas>
  )
}

export default Bezier