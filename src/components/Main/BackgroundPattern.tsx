import auroraRight from "../../assets/icons/aurora-right.svg"
import auroraLeft from "../../assets/icons/aurora-left.svg"
import auroraLeftDesktop from "../../assets/icons/aurora-left-desktop.svg"
import auroraRightDesktop from "../../assets/icons/aurora-right-desktop.svg"

const BackgroundPattern = () => {

    return (
        <>
            <picture>
                <source media="(min-width: 1024px)" srcSet={auroraRightDesktop} />
                <img className="absolute top-0 right-0 -z-10" src={auroraRight} alt="aurora" loading="lazy" draggable="false" />
            </picture>
            <picture>
                <source media="(min-width: 1024px)" srcSet={auroraLeftDesktop} />
                <img className="absolute bottom-0 left-0 -z-10" src={auroraLeft} alt="aurora" loading="lazy" draggable="false" />
            </picture>
        </>
    )
}

export { BackgroundPattern }