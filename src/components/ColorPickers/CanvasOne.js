import React, { useState, useEffect } from 'react'
import { SketchPicker } from 'react-color'
import './CanvasOne.scss' 
import { parseColorObject } from '../../utils'

export default function CanvasOne(props) {
    const initialColor = {
        hsl: {h: '0', s: '0', l: '0.2', a: 1},
        hex: '#333',
        rgb: {r: 51, g: 51, b: 51, a: 1},
        hsv: {h: 0, s: 0, v: 0.2, a: 1}
    }
    const [currentColor, setColor] = useState(initialColor)
    const [currentColorFormat, setColorFormat] = useState("hsl")
    const [menuOpened, toggleMenu] = useState(false)

    const showStyleOptions = () => {
        toggleMenu(b => !b)
    }

    const changeColorFormat = (fmt) => {
        setColorFormat(fmt)
    }

    return (
        <div className="canvas__one">
            <SketchPicker 
                color={parseColorObject('hex', currentColor)}
                onChangeComplete={(colorObj) => {
                    const {oldHue, source, ...color} = colorObj
                    setColor(color)
                    props.onColorChange(color, currentColorFormat)
                        
                }}
            />
            <div className="color__detail">This color we now have is 
                <span 
                    style={{'color': parseColorObject(currentColorFormat, currentColor) }}
                > 
                    <p>
                        {
                            parseColorObject(currentColorFormat, currentColor)
                        }
                        <span 
                            className="dropdown" 
                            onClick={showStyleOptions}
                        >
                            &#8595;
                        </span>
                    </p>
                    {menuOpened && <ul>
                        {Object.keys(currentColor).map((c, index) => {
                            return (
                                <li 
                                    onClick={ (e) => {
                                        e.stopPropagation()
                                        changeColorFormat(c)
                                    }}
                                    key={index}
                                >
                                    {c}
                                </li>
                            )
                        })}
                    </ul>}
                </span>
            </div>
        </div>
    )
}