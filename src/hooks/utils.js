export const generateRandomNumber = (range) => {
    const netRange = parseInt(range)
    const randomNumber = Math.floor(Math.random() * netRange);
    return randomNumber;
}