export const generateHash = ():string => {
    return Math.random().toString(36).slice(-7)
} 