export function dateFormat(date: string): string {
    return date.replace('T', " ").split('.')[0]
}