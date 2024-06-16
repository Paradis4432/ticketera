interface animal {
    name: string
}

interface dog extends animal {
    bred: string
}

function test({a}: { a: dog }) {
    a.name
    a.bred
}