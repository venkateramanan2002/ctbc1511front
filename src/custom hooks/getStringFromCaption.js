const getStringFromCaption = (string, hashtag) => {
    const pattern = new RegExp(`#${hashtag}_(\\w+)`);
    const match = string.match(pattern);
    if (match) {
        const result = match[1]?.replace(/_/g, ' ');
        return result;
    }
    else
        return 'not found'
}

export default getStringFromCaption;