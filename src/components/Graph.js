import React, {useEffect, useRef} from 'react'

function Graph() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const dataPoints = [
            {x:50, y:200},
            {x:150, y:50},
            {x:250, y:150},
            {x:350, y:100},
            {x:450, y:250}
        ]

        // Draw axes
        context.beginPath()
        context.moveTo(50, 250)
        context.lineTo(50, 50)
        context.lineTo(450, 50)
        context.stroke()

        // Draw data points
        context.fillStyle = 'blue'
        dataPoints.forEach(point => {
            context.beginPath()
            context.arc(point.x, point.y, 5, 0, 2 * Math.PI)
            context.fill()
        })
    }, [])
  return (
    <canvas ref={canvasRef} width="500" height="500" style={{border: '1px solid #000'}}></canvas>
  )
}

export default Graph