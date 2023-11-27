import { useState, useEffect } from "react"
import { PositionAxis } from './../@types/types';

const useMousePosition = () => {
    const [position, setPosition] = useState<PositionAxis>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (event: globalThis.MouseEvent) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }
        window.addEventListener("mousemove", handleMove)

        return () => window.removeEventListener("mousemove", () => {})
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setPosition({
                ...position,
                y: position.y + window.scrollY
            })
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [position])

    return position
}

export { useMousePosition }