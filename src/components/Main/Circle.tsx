import { CircleProps } from "../../@types/props"


const Circle = ({ word }: CircleProps) => {
    const wordsSplit = word.split("")
    
    return (
        <div className="w-6 h-6 mx-auto mt-10 relative">
            {wordsSplit.map((item, key) => (
                <div className="flex items-center justify-center absolute inset-0 translate-x-10" key={key} style={{
                    rotate: `calc(360deg / ${word.length} * ${key})` }}>
                    <span style={{ rotate: `calc(360deg / ${word.length} * ${-key})` }}>{item}</span>
                </div>
            ))}
        </div>
    )
}

export { Circle }