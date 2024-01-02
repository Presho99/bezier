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

        // Flip y coordinates
        dataPoints.forEach(point => {
            point.y = canvas.height - point.y
        })

        // Draw axes
        context.beginPath()
        context.moveTo(50, canvas.height - 250)
        context.lineTo(50, canvas.height - 50)
        context.lineTo(450, canvas.height - 50)
        context.stroke()

        // Draw data points
        context.fillStyle = 'blue'
        dataPoints.forEach(point => {
            context.beginPath()
            context.arc(point.x, point.y, 5, 0, 2 * Math.PI)
            context.fill()
        })

        // Draw Bezier curve
        context.beginPath()
        context.moveTo(dataPoints[0].x, dataPoints[0].y)

        for(let i = 0; i < dataPoints.length - 1; i++){
            const xc = (dataPoints[i].x + dataPoints[i + 1].x) / 2
            const yc = (dataPoints[i].y + dataPoints[i + 1].y) / 2
            context.quadraticCurveTo(dataPoints[i].x, dataPoints[i].y, xc, yc)
        }

        context.quadraticCurveTo(
            dataPoints[dataPoints.length - 1].x,
            dataPoints[dataPoints.length - 1].y,
            dataPoints[dataPoints.length - 1].x,
            dataPoints[dataPoints.length - 1].y,
        )

        context.strokeStyle = 'green'
        context.lineWidth = 2
        context.stroke()
    }, [])
  return (
    <canvas ref={canvasRef} width="500" height="500" style={{border: '1px solid #000'}}></canvas>
  )
}

export default Graph