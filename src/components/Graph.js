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
    })
  return (
    <div>Graph</div>
  )
}

export default Graph