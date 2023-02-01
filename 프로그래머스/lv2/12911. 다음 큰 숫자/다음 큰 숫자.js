function solution(n) {
    var cnt = 0;
    var n_cpy = n;
    while (n_cpy > 0) {
        if (n_cpy % 2 === 1) {
            cnt += 1;
        }
        n_cpy = Math.floor(n_cpy / 2);
    }
    while (true) {
        n += 1;
        var m = n;
        var m_cnt = 0;
        while (m > 0) {
            if (m % 2 === 1) {
                m_cnt += 1;
            }
            m = Math.floor(m / 2);
        }
        if (cnt === m_cnt) {
            return n;
        }
    }
}



