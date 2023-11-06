export default function toRomanLevel(levelNum: number) {
    return ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'][levelNum - 1] || String(levelNum)
}