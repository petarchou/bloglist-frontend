import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'


const Togglable = forwardRef((props, refs) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const buttonDisplay = props.buttonDisplay

    const isInline = buttonDisplay === 'inline'


    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(refs, () => {
        return {
          toggleVisibility
        }
      })

    return (
        <div style={{display: props.buttonDisplay}} >
            <div style={{display: props.buttonDisplay}}>
            <button onClick={toggleVisibility} style={hideWhenVisible}>{props.buttonLabel}</button>
            </div>
            {isInline && 
            <div style={{display: props.buttonDisplay}}>
            <button onClick={toggleVisibility} style={showWhenVisible}>cancel</button>
            </div>
            }
            <div style={showWhenVisible}>
                {props.children}
            </div>
            {!isInline && 
            <div style={{display: props.buttonDisplay}}>
            <button onClick={toggleVisibility} style={showWhenVisible}>cancel</button>
            </div>
            }
        </div>
    )

})

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}
Togglable.displayName = 'Togglable'


export default Togglable