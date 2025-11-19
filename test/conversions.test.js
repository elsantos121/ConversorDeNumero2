const { toRoman, toArabic } = require('../conversions');

describe('Conversions', () => {
    test('toRoman: basic numbers', () => {
        expect(toRoman(1)).toBe('I');
        expect(toRoman(4)).toBe('IV');
        expect(toRoman(9)).toBe('IX');
        expect(toRoman(58)).toBe('LVIII');
        expect(toRoman(1994)).toBe('MCMXCIV');
    });

    test('toRoman: invalid inputs return null', () => {
        expect(toRoman(0)).toBeNull();
        expect(toRoman(4000)).toBeNull();
        expect(toRoman(-5)).toBeNull();
        expect(toRoman(3.14)).toBeNull();
        expect(toRoman('100')).toBeNull();
    });

    test('toArabic: basic romans', () => {
        expect(toArabic('I')).toBe(1);
        expect(toArabic('IV')).toBe(4);
        expect(toArabic('IX')).toBe(9);
        expect(toArabic('LVIII')).toBe(58);
        expect(toArabic('MCMXCIV')).toBe(1994);
    });

    test('toArabic: accepts lowercase and trims', () => {
        expect(toArabic('mm')).toBe(2000);
        expect(toArabic('  ix  '.trim())).toBe(9);
    });

    test('toArabic: invalid inputs return null', () => {
        expect(toArabic('')).toBeNull();
        expect(toArabic('ABCD')).toBeNull();
        expect(toArabic(123)).toBeNull();
        expect(toArabic(null)).toBeNull();
    });
});