/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
	let xor = start ^ goal;
	let flips = 0;
	
	while (xor > 0) {
		flips += xor & 1;
		xor >>= 1;
	}
	
	return flips;
};