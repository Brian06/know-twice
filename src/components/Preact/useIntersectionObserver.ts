import { useEffect, useRef } from 'preact/hooks'
import type { RefObject } from 'preact'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  onIntersect?: () => void
}

export function useIntersectionObserver<T extends HTMLElement>(
  options: UseIntersectionObserverOptions = {},
): RefObject<T> {
  const { threshold = 0, rootMargin = '200px', onIntersect } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onIntersect) {
          onIntersect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, onIntersect])

  return ref
}
