interface IQueryRes<T> {
    message: string,
    code: number | 0,
    data: T
}