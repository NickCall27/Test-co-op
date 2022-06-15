export const getUrl = (base, dynamic, value) => {
    return base.replace(`:${dynamic}`, value);
}