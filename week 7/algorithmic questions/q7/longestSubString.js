function lengthOfLongestSubstringWithoutRepeat(s) {

    set = new Set();
    let maxlen = 0;
    let r = 0;
    let l = 0;
    let len = 0;
    while (r < s.length) {

        if (set.has(s.charAt(r))) {
            set.delete(s.charAt(l));
            len--;
            l++;
        } else {
            len++;
            set.add(s.charAt(r));
            r++;
            maxlen = Math.max(len, maxlen);

        }

    }
    return maxlen
}
console.log(lengthOfLongestSubstringWithoutRepeat("communicate"))