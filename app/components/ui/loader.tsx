// of is list, children is components
const LoadingWrapper = ({of, children}: { of: any | boolean, children: any }) => {
    if ((Array.isArray(of) && of.length === 0) || of === true) {
        return <Loading/>
    }
    return children
}

function Loading() {
    // anim of loading?
    return <h2>loading...</h2>
}

export {
    LoadingWrapper
}