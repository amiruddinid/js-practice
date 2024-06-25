// ekspectasi calculator
// 1. menyimpan angka yang kita tulis di parameter (a, b)
// TODO : Tambahkan test supaya coverage menjadi 100%

import Calculator from "./calculator";

describe('Calculator', () => {
    const calc = new Calculator(50, 20)
    it("Should save 50 on a and 20 on b", () => {
        expect(calc).toHaveProperty("a", 50)
        expect(calc).toHaveProperty("b", 20)
    })
    

})
