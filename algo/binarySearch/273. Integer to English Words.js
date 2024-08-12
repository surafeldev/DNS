function minimumPushes(word) {
    const frequency = {};

    // Count the frequency of each letter
    for (const char of word) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Get an array of frequencies and sort it in descending order
    const sortedFrequencies = Object.values(frequency).sort((a, b) => b - a);

    let totalPushes = 0;
    let currentPushCost = 1;
    let index = 0;

    while (index < sortedFrequencies.length) {
        // Process up to 8 letters at the current push cost
        for (let i = 0; i < 8 && index < sortedFrequencies.length; i++, index++) {
            totalPushes += sortedFrequencies[index] * currentPushCost;
        }
        // Increase push cost after processing 8 letters
        currentPushCost++;
    }

    return totalPushes;
}
