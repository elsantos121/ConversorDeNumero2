document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('resultModal');
    const closeBtn = document.querySelector('.close-btn');
    const resultText = document.getElementById('resultText');
    const input = document.getElementById('numberInput');

    document.getElementById('toRoman').addEventListener('click', () => {
        if(!input.value) return;
        const number = parseInt(input.value);
        if(isNaN(number) || number < 1 || number > 3999) {
            showResult('Por favor ingrese un número entre 1 y 3999');
            return;
        }
        showResult(`${number} en números romanos es: ${toRoman(number)}`);
    });

    document.getElementById('toArabic').addEventListener('click', () => {
        if(!input.value) return;
        const romanNum = input.value.toUpperCase();
        if(!/^[MDCLXVI]+$/.test(romanNum)) {
            showResult('Por favor ingrese un número romano válido (I, V, X, L, C, D, M)');
            return;
        }
        showResult(`${romanNum} en números arábigos es: ${toArabic(romanNum)}`);
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if(e.target === modal) modal.style.display = 'none';
    });

    function showResult(text) {
        resultText.textContent = text;
        modal.style.display = 'flex';
    }
});

function toRoman(num) {
    const valores = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],
                    [50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    let result = '';
    for(let [val, rom] of valores) {
        while(num >= val) {
            result += rom;
            num -= val;
        }
    }
    return result;
}

function toArabic(rom) {
    const vals = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let sum = 0;
    for(let i = 0; i < rom.length; i++) {
        vals[rom[i+1]] > vals[rom[i]] ? (sum += vals[rom[i+1]] - vals[rom[i]], i++) : sum += vals[rom[i]];
    }
    return sum;
}
