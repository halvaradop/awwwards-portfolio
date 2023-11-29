import { MotionValue, Variants } from "framer-motion"
import { AnimateVariants, EntryInputRange, EntryOutputRange, InViewOptions } from "./types"

export interface CircleProps {
    word: string
}

export interface KnowledgeProps {
    technologies: string[]
}

export interface TextProps extends AnimateVariants {
    className?: string,
    text: string,
}

export interface LayerTextProps  {
    className?: string,
    messages: string[],
    variants?: Variants
}

export interface CardKnowledgeProps {
    knowledge: string
}

export interface LayerIsViewProps extends AnimateVariants {
    className?: string,
    options?: InViewOptions,
    children: React.ReactNode,
}

export interface ParallaxColumnProps {
    className?: string,
    cols: string[],
    y: MotionValue<number>
}

export interface TechnologiesListProps {
    className?: string,
    technologies: string[],
    input: EntryInputRange,
    range: EntryOutputRange
}