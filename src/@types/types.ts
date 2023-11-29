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

export type EntryOutputRange = [start: string, end: string]
export type EntryInputRange = [start: number, end: number]

export interface ExperienceWork {
    role: string,
    company: string,
    date: string,
    technologies: string[]
}