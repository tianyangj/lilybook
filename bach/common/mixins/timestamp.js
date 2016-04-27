module.exports = function(Bookmark, options) {
    Bookmark.defineProperty('createdAt', { type: Date, default: '$now' });
}