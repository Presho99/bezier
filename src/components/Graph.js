import React, {useEffect, useRef} from 'react'

function Graph() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const dataPoints = [
            {}
        ]
    })
  return (
    <div>Graph</div>
  )
}

export default Graph