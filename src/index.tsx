import React, {
  forwardRef,
  useLayoutEffect,
  useRef,
  useEffect,
  useState,
  useCallback,
  Ref,
  CSSProperties
} from 'react'
import styles from './styles.module.css'

export interface Props {
  state?: 'playing' | 'paused'
  onPlay?: () => void
  onPause?: () => void
  onToggle?: (state: string) => void
  className?: string
  style?: CSSProperties
}

export interface YSPlayPauseButton extends HTMLDivElement {
  play: () => void
  pause: () => void
  toggle: () => void
  isPaused: () => boolean
}

const ExampleComponent = (
  {
    className,
    style,
    state: defaultState = 'paused',
    onPause,
    onPlay,
    onToggle
  }: Props,
  ref: Ref<YSPlayPauseButton>
) => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState(defaultState)

  const toggle = useCallback(() => {
    setState((s) => (s === 'paused' ? 'playing' : 'paused'))
  }, [])

  useEffect(() => {
    setState(defaultState)
  }, [defaultState])

  useEffect(() => {
    if (onToggle) {
      onToggle(state)
    }
    if (state === 'paused') {
      if (onPause) {
        onPause()
      }
    } else {
      if (onPlay) {
        onPlay()
      }
    }
  }, [state])

  useLayoutEffect(() => {
    if (!ref || !buttonRef.current) {
      return
    }

    const el: Partial<YSPlayPauseButton> = buttonRef.current

    el.isPaused = () => state === 'paused'
    el.play = () => setState('playing')
    el.pause = () => setState('paused')
    el.toggle = () => toggle()

    if (typeof ref === 'function') {
      ref(el as YSPlayPauseButton)
    } else {
      ;(ref as any).current = el as YSPlayPauseButton
    }
  }, [ref, state, toggle])

  return (
    <div
      ref={buttonRef}
      onClick={toggle}
      className={[styles.button, styles[state], className].join(' ')}
      style={style}
    >
      <svg height='100%' version='1.1' viewBox='0 0 36 36' width='100%'>
        <use className='ytp-svg-shadow' />
        <path
          id='ytp-id-110'
          className='ytp-svg-fill'
          d='M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z'
        />
      </svg>
    </div>
  )
}

export default forwardRef(ExampleComponent)
