export const formatMoney = (value: number) =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
    .format(value)
    .replace(/\s+/, ' ')
