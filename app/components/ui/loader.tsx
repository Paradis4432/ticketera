function Loadable<T extends any[]>(values: T) {
    if (values.length == 0) {
        return <Loading></Loading>
    } else {

    }
}

function Loading() {
    return <h2>loading</h2>
}

export {
    Loadable
}