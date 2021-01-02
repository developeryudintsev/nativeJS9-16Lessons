import { IGlobalState } from './state';
interface IRootState extends IGlobalState{}
export const sellectCurrentes=(state:IRootState)=>state.currency.currencies
export const sellectCurrentCurrency=(state:IRootState)=>state.currency.currentCurrency
export const sellectIsBuying=(state:IRootState)=>state.currency.isBuying
export const sellectAmontofBYn=(state:IRootState)=>state.currency.amountOfBYN
export const sellectAmountOfCurrency=(state:IRootState)=>state.currency.amountOfCurrency

export const selectAll=(state:IRootState)=>state.currency
