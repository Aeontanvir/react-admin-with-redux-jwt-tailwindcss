import client from '../config/client';

const ROOT = 'costs';

export const getAll = (opts = {}) => {
    return client.get(ROOT);
};
export const getById = ({ id }) => {
    return client.get(`${ROOT}/${id}`);
};
export const create = ({ payload }) => {
    return client.post(ROOT, payload);
};
export const replace = ({ id, payload }) => {
    return client.put(`${ROOT}/${id}`, payload);
};
export const update = ({ id, payload }) => {
    return client.patch(`${ROOT}/${id}`, payload);
};
export const removeById = ({ id }) => {
    return client.delete(`${ROOT}/${id}`);
};