import { client } from '../config/client'
const ROOT_URL = 'costs'

const getAll = function (opts = {}) {
    return client().get(`${ROOT_URL}`)
};
const getById = function ({ id }) {
    return client().get(`${ROOT_URL}/${id}`)
};
const create = function ({ payload }) {
    return client().post(ROOT_URL, payload)
};
const replace = function ({ id, payload }) {
    return client().put(`${ROOT_URL}`, payload)
};
const update = function ({ id, payload }) {
    return client().patch(`${ROOT_URL}/${id}`, payload)
};
const removeById = function ({ id }) {
    return client().delete(`${ROOT_URL}/${id}`)
};

export {
    getAll,
    getById,
    create,
    update,
    removeById,
}
