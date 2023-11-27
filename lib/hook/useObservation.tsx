import { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useRef } from 'react'

const defaultOption = {
  threshold: 0.5,
  rootMargin: '-70px 0px -60% 0px',
}

export type ObservationType = Record<string, IntersectionObserverEntry>

const useObservation = (setState: Dispatch<SetStateAction<string>>, headingElements: HTMLElement[]) => {
  // heading element를 담아서 사용하기 위한 ref.
  const headingElementsRef: MutableRefObject<ObservationType> = useRef({})
  
  // IntersectionObserver의 callback에 들어갈 함수 관찰되었을 때 실행될 로직.
  const handleIntersect: IntersectionObserverCallback = useCallback((entry: IntersectionObserverEntry[]) => {
    headingElementsRef.current = {}

    // 헤더 태그의 id를 순회하여 headingElementRef에 키 밸류 형태로 할당.
    headingElementsRef.current = entry.reduce((map: ObservationType, headingElement) => {
      map[headingElement.target.id] = headingElement
      return map
    }, headingElementsRef.current)

    // 화면의 상단에 보여지고 있는 제목을 찾아 visibleHeadings의 배열의 형태로 담아둔다.
    const visibleHeadings: IntersectionObserverEntry[] = []
    Object.keys(headingElementsRef.current).forEach((key) => {
      const headingElement = headingElementsRef.current[key]

      // isIntersecting이 true라면 즉, 관찰상태가 교차가 되었다면 visibleHeadings에 push.
      if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
    })

    // 관찰 영역(ViewPort)에 여러개의 제목이 있을경우 가장 상단에 존재하는 id를 찾는다.
    const getIndexFromId = (id: string) => headingElements.findIndex((heading) => heading.id === id)

    if (visibleHeadings.length === 1) {
      // 화면에 보이고 있는 제목이 1개라면 해당 element의 target.id를 setActiveId로 set해준다.
      setState(visibleHeadings[0].target.id)
    } else if (visibleHeadings.length > 1) {
      // 2개 이상이라면 sort로 더 상단에 있는 제목을 set해준다.
      const sortedVisibleHeadings = visibleHeadings.sort(
        (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
      )
      setState(sortedVisibleHeadings[0].target.id)
    }
  }, [])

  useEffect(() => {
    // IntersectionObserver에 위에서 만든 callback 함수인 handleIntersect 함수를 넘겨주어 새로운 인스턴스 생성.
    const observe = new IntersectionObserver(handleIntersect, defaultOption)

    // 헤더 태그 요소들을 observer로 관찰한다.
    headingElements.map((header) => {
      observe.observe(header)
    })

    // 컴포넌드가 언마운트 되었을 경우 observe의 관찰을 멈춘다.
    return () => observe.disconnect()
  }, [headingElements])
}

export default useObservation