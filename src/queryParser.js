function parseQuery(query) {
    const selectRegex = /SELECT (.+?) FROM (.+?)(?: WHERE (.*))?$/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table, whereClauses] = match;
        return {
            fields: fields.split(',').map(field => field.trim()),
            table: table.trim(),
            whereClauses: whereClauses ? whereClauses.trim() : null
        };
    } else {
        throw new Error('Invalid query format');
    }
}

module.exports = parseQuery;