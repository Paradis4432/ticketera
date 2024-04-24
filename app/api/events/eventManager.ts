



export function getEventById(id: number) {
    return db.query(`SELECT * FROM events WHERE id = ?`, [id]);
}