let lastId = 0;

export default (prefix = 'tv_') => {
    lastId++;
    return `${prefix}${lastId}`;
}