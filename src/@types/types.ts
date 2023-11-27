import { Variants } from "framer-motion"
import { RefObject } from "react"

export interface PositionAxis {
    x: number,
    y: number
}

export interface InViewOptions {
    root?: RefObject<Element>,
    margin?: string,
    once?: boolean,
    amount?: "some" | "all" | number
}

export interface AnimateVariants {
    variants?: Variants,
    animate?: string,
    initial?: string,
    exit?: string
}

