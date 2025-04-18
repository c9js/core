Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
console.clear();

let total = ((table) => table
// Удаляем точку
    .replace(/\./g, '')
    
// Разбиваем таблицу на строки
    .split('\n')
    
// Получаем число
    .map((line) => {
    // Ищем последнее число в строке
        const number = line.match(/(\d+)$/);
        
    // Проверяем число
        if (number) {
            return parseInt(number[0], 10); // Возвращаем найденное число
        }
    })
    
// Удаляем пустые строки
    .filter(line => line)
    
// Складываем все числа
    .reduce((total, number) => total + number, 0)
)(`
2025-01 | 375
2025-02 | 329
2025-03 |  82
2025-04 |  73
2025-05 | 215
2025-06 |  78
2025-07 | 173
2025-09 | 632
2025-10 | 111
2025-11 | 434
2025-12 | 491
`);

__=total
