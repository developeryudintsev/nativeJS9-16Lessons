import {IGlobalState} from './state';
//IRootState-это название встроенной типизации в селектор, это название нельзя менять
interface IRootState extends IGlobalState{};
export const selectCurrencies=(state:IGlobalState)=>state.currency.currencies;
export const selectCurrentCurrency=(state:IGlobalState)=>state.currency.currentCurrency;
export const selectIsBuying=(state:IGlobalState)=>state.currency.isBuying;
export const selectAmountOfBYN=(state:IGlobalState)=>state.currency.amountOfBYN;
export const selectAmountOfCurrency=(state:IGlobalState)=>state.currency.amountOfCurrency;

export const selectAll=(state:IGlobalState)=>state.currency;
