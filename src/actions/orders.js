import http from "../utils/http";
/**
 * Send the order to API
 * @param {Number} broth id
 * @param {Number} protein id
 */
export function placeNewOrder(brothId, proteinId) {
    try {
        if (!brothId && proteinId)
            throw 'Insufficient data to place a new order';

        return http.post('/orders', { brothId, proteinId });
    } catch (e) {
        console.warn(e);
        return false
    }
}

export function getIngredientsOrder(type) {
    try {
        if (!type)
            throw 'Insufficient data to search for ingredients';

        const validTypes = ['broth', 'protein'];
        if (!validTypes.includes(type))
            throw `${type} is not a valid ingredient type`;

        return http.get(`/${type}s`);
    } catch (error) {
        console.error(`Failed to fetch options for ${type}:`, error);
        return false;
    }
}