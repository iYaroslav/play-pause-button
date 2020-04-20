# play-pause-button

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/play-pause-button.svg)](https://www.npmjs.com/package/play-pause-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add --save @iyaroslav/play-pause-button
# or
npm install --save @iyaroslav/play-pause-button
```

## Usage

```tsx
import React, { Component } from 'react'

import PlayButton from '@iyaroslav/play-pause-button'
import '@iyaroslav/play-pause-button/dist/index.css'

class Example extends Component {
  const buttonRef = useRef(null)

  // buttonRef.play()
  // buttonRef.pause()
  // buttonRef.toggle()
  // buttonRef.isPaused()

  render() {
    return <PlayButton
        ref={buttonRef}
        onPlay={() => {}}
        onPause={() => {}}
        onToggle={() => {}}
    />
  }
}
```

## License

MIT © [iYaroslav](https://github.com/iYaroslav)
