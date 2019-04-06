export const getJson = async file => {
    return await fetch(file)
        .then(response => response.json());
};