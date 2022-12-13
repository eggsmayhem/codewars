// LC 278
//
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
     //we have a boolean array and we want the first bad, gggbb
    return function(n) {
        //why are we setting left to 1 and not 0? 
        let left = 1;
        while (left < n) {
            const mid = left + Math.floor((n-left)/2);
            if (isBadVersion(mid)) {
                n = mid
            }
            else {
                left = mid + 1;
            }

        }
        return left;
    }
};
