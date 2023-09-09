export function snakeToCamel(s: string): string {
    return s.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

export function mapKeysToCamelCase(obj: { [key: string]: any }): { [key: string]: any } {
    const newObj: { [key: string]: any } = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = snakeToCamel(key);

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                newObj[newKey] = mapKeysToCamelCase(obj[key]);
            } else {
                newObj[newKey] = obj[key];
            }
        }
    }

    return newObj;
}


