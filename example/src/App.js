import React, { useRef } from 'react'

import PlayButton from '@iyaroslav/play-pause-button'
import '@iyaroslav/play-pause-button/dist/index.css'

const App = () => {
  /** @type {{ current: YSPlayPauseButton }} */
  const buttonRef = useRef(null)

  return <>
    <PlayButton
      ref={buttonRef}
      style={{
        width: '30rem',
        height: '20rem',
        borderRadius: '5rem',
        background: '#e62117',
        margin: '1.6rem auto'
      }}
      state='playing'
      onPlay={() => console.log('2 Play')}
      onPause={() => console.log('2 Pause')}
      onToggle={() => console.log('2 Toggle')}
    />

    <div>
      <button onClick={() => buttonRef.current.play()}>Play</button>
      <button onClick={() => buttonRef.current.pause()}>Pause</button>
      <button onClick={() => buttonRef.current.toggle()}>Toggle</button>
    </div>
  </>
}

export default App
