var majorityElement = function(nums) {
    let dict = new Map()
    for (let num of nums) {
        dict.set(num, (dict.get(num) || 0) + 1)
    }

    let half = Math.trunc(nums.length / 2)

    for (let [key, val] of dict) {
        if (val > half) {
            return key
        }
    }
}
