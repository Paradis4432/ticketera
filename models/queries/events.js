"use strict";
/**
 * TODO:
 *
 * la funcion para conseguir una fecha random no funciona: NOW() + INTERVAL '1 day' * floor(random() * 5 + 1),
 * arreglar y actualizar todos los eventos para tener fechas reales
 *
 * - delete event by id [x]
 * - update event by id, pedir todos los datos y hacer update, si es igual al viejo no cambia nada, ZOD para argumentos [x]
 * - active events by user id, where event_end_date < now? [x]
 *
 * - sel top events by price [x]
 * select *
 * from events e
 *          join (select distinct on (es.event_id) *
 *                from events_stages es
 *                order by es.event_id) es on es.event_id = e.event_id
 * order by es.price;
 *
 * - sel events by name [x]
 * - sel producers of events [x]
 * select p.*
 * from events e
 *          join producers p on p.producer_id = any (e.rrpps)
 * where event_id = 2;
 *
 * - get all info of event [x]
 * select *
 * from events_stages es
 *          join events e on e.event_id = es.event_id
 *          join producers p on p.producer_id = any (e.rrpps)
 * where e.event_id = 2;
 *
 * // in tickets.ts
 * - get user tickets by email | id [x]
 * select *
 * from users_tickets ut
 * join users u on u.user_id = ut.user_id
 * where u.email = 'random7061@gmail.com'; | TODO add id as well
 *
 * - create | update event [x]
 * - create | update stage [x]
 *
 *
 * - sel events by date or order by date ?? PENDING [x] check
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEventStage = exports.createEventStage = exports.deleteEvents = exports.updateEvents = exports.readEvents = exports.createEvents = void 0;
var db_1 = require("@/app/db/db");
var events_1 = require("@/models/dtos/events");
// [x] USE CRUD DESIGN  create, read, update and delete.
function testing() {
    console.log("test");
}
testing();
// returning avoid a second query to get the inserted row
exports.createEvents = {
    create: function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var rrpps, validators, name, description, location, max_capacity, _a, min_age, cbu, event_start_date, event_end_date, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    events_1.createEventSchema.parse(event);
                    rrpps = event.rrpps, validators = event.validators, name = event.name, description = event.description, location = event.location, max_capacity = event.max_capacity, _a = event.min_age, min_age = _a === void 0 ? 18 : _a, cbu = event.cbu, event_start_date = event.event_start_date, event_end_date = event.event_end_date;
                    return [4 /*yield*/, (0, db_1.qquery)("insert into events (\n                rrpps,\n                validators,\n                name,\n                description,\n                location,\n                max_capacity,\n                min_age,\n                cbu,\n                event_start_date,\n                event_end_date\n            ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)\n            returning *;", [
                            rrpps,
                            validators,
                            name,
                            description,
                            location,
                            max_capacity,
                            min_age,
                            cbu,
                            event_start_date,
                            event_end_date
                        ])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result[0]];
            }
        });
    }); }
};
exports.readEvents = {
    read: function (limit) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events\n             limit $1;", [limit])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    byID: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events\n             where event_id = $1", [id])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    eventStagesByID: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events_stages\n             where event_id = $1", [id])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    eventStagesWithEventByID: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events_stages es\n                      join events e on e.event_id = es.event_id\n             where e.event_id = $1", [id])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    activeEvents: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events\n             where now() between event_start_date and event_end_date;")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    topEventsByPrice: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events e\n             join (\n                 select distinct on (es.event_id) *\n                 from events_stages es\n                 order by es.event_id\n             ) es on es.event_id = e.event_id\n             order by es.price;")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    byName: function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events\n             where name = $1;", [name])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    producersOfEvent: function (event_id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select p.*\n             from events e\n                      join producers p on p.producer_id = any (e.rrpps)\n             where event_id = $1;", [event_id])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    byDate: function (date) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events\n             where $1 between event_start_date and event_end_date\n             order by event_start_date;", [date])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    orderByDate: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("select *\n             from events\n             order by event_start_date;")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); }
};
// coalesce to avoid null values
exports.updateEvents = {
    updateById: function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var event_id, rrpps, validators, name, description, location, max_capacity, min_age, cbu, event_start_date, event_end_date, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    events_1.updateEventSchema.parse(event);
                    event_id = event.event_id, rrpps = event.rrpps, validators = event.validators, name = event.name, description = event.description, location = event.location, max_capacity = event.max_capacity, min_age = event.min_age, cbu = event.cbu, event_start_date = event.event_start_date, event_end_date = event.event_end_date;
                    return [4 /*yield*/, (0, db_1.qquery)("update events set\n                rrpps = coalesce($1, rrpps),\n                validators = coalesce($2, validators),\n                name = coalesce($3, name),\n                description = coalesce($4, description),\n                location = coalesce($5, location),\n                max_capacity = coalesce($6, max_capacity),\n                min_age = coalesce($7, min_age),\n                cbu = coalesce($8, cbu),\n                event_start_date = coalesce($9, event_start_date),\n                event_end_date = coalesce($10, event_end_date)\n            where event_id = $11\n            returning *;", [
                            rrpps,
                            validators,
                            name,
                            description,
                            location,
                            max_capacity,
                            min_age,
                            cbu,
                            event_start_date,
                            event_end_date,
                            event_id
                        ])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result[0]];
            }
        });
    }); }
};
exports.deleteEvents = {
    deleteById: function (event_id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.qquery)("delete from events\n             where event_id = $1;", [event_id])];
                case 1:
                    _a.sent();
                    return [2 /*return*/, { success: true }];
            }
        });
    }); },
};
exports.createEventStage = {
    create: function (stage) { return __awaiter(void 0, void 0, void 0, function () {
        var name, event_id, price, stock, event_stage_start_date, event_stage_end_date, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    events_1.createEventStageSchema.parse(stage);
                    name = stage.name, event_id = stage.event_id, price = stage.price, stock = stage.stock, event_stage_start_date = stage.event_stage_start_date, event_stage_end_date = stage.event_stage_end_date;
                    return [4 /*yield*/, (0, db_1.qquery)("insert into events_stages (\n                name,\n                event_id,\n                price,\n                stock,\n                event_stage_start_date,\n                event_stage_end_date\n            ) values ($1, $2, $3, $4, $5, $6)\n            returning *;", [
                            name,
                            event_id,
                            price,
                            stock,
                            event_stage_start_date,
                            event_stage_end_date
                        ])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result[0]];
            }
        });
    }); }
};
exports.updateEventStage = {
    updateById: function (stage) { return __awaiter(void 0, void 0, void 0, function () {
        var event_stage_id, name, event_id, price, stock, event_stage_start_date, event_stage_end_date, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    events_1.updateEventStageSchema.parse(stage);
                    event_stage_id = stage.event_stage_id, name = stage.name, event_id = stage.event_id, price = stage.price, stock = stage.stock, event_stage_start_date = stage.event_stage_start_date, event_stage_end_date = stage.event_stage_end_date;
                    return [4 /*yield*/, (0, db_1.qquery)("update events_stages set\n                name = coalesce($1, name),\n                event_id = coalesce($2, event_id),\n                price = coalesce($3, price),\n                stock = coalesce($4, stock),\n                event_stage_start_date = coalesce($5, event_stage_start_date),\n                event_stage_end_date = coalesce($6, event_stage_end_date)\n            where event_stage_id = $7\n            returning *;", [
                            name,
                            event_id,
                            price,
                            stock,
                            event_stage_start_date,
                            event_stage_end_date,
                            event_stage_id
                        ])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result[0]];
            }
        });
    }); }
};
