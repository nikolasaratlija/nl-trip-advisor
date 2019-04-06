// This script can calculate the distance between two points on a sphere given their longitude and latitude

// Credits to Mike Williams from Stackoverflow
// https://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3

const rad = x => x * Math.PI / 180;

export const calcDistanceBetween = (p1, p2) => {
    const R = 6378137; // Earth’s mean radius in meter
    const dLat = rad(p2.lat - p1.lat);
    const dLong = rad(p2.lng - p1.lng);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // returns the distance in meter
};

export const convertToKm = meters => {
    return Math.round(meters / 1000)
};