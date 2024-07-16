/**
 * TODO:
 * NOTES: validator_id es el usuario con la camara escaneando codigos
 * user_id es el otro usuario con el codigo
 *
 * - buy ticket with ins into users_tickets
 *
 * after any of this operations:
 * - select by user_id and ticket_id -> if null ticket is invalid
 * else if used ticket is duplicated
 * ^ return the select, let front handle that
 * - user has perms to scan ticket -> sel * from events where event_id = ? return true if validators contains user_id
 * as atomic:
 * - validate ticket, set used to true
 * do: insert into validations with ticket id and state, join events to get name?
 *
 * - get ser validations -> return validations where validator_id = ? para historial
 *
 */
