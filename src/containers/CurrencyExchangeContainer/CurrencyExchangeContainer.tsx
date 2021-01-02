import React from 'react';
import { connect, useSelector } from 'react-redux';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { IGlobalState } from '../../redux/state';
import { CurrencyState } from '../../redux/currencyReducer';
import { compose, Dispatch } from 'redux';
import {
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  changeCurrentCurrencyAC,
  useDispatch
} from '../../redux/actions';
import {
  selectAll,
  sellectAmontofBYn,
  sellectAmountOfCurrency,
  sellectCurrentCurrency,
  sellectCurrentes,
  sellectIsBuying,
} from '../../redux/selectors';

// interface ICurrencyProps extends CurrencyState {
//   setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void;
//   setAction: (isBuying: boolean) => void;
//   changeCurrency: (currency: string) => void;
// }
// interface ICurrencyProps extends CurrencyState {
//   ChangeCurrencyFieldAC: Function;
//   ChangeActionAC: Function;
//   changeCurrentCurrencyAC: Function;
// }
interface ICurrencyProps extends CurrencyState {

}

// const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = (
//   {
//     currencies,
//     currentCurrency,
//     isBuying,
//     amountOfBYN,
//     amountOfCurrency,
//     // setCurrencyAmount,
//     // setAction,
//     // changeCurrency,
//     ChangeCurrencyFieldAC,
//     ChangeActionAC,
//     changeCurrentCurrencyAC,
//   },
const CurrencyEContainer: React.FunctionComponent = () => {
  let dispatch = useDispatch();
  const {currencies,currentCurrency,isBuying,amountOfBYN,amountOfCurrency}=useSelector(selectAll)
  //выбираются квадратики USD EUR RUR
  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;//+value -т.е. преоразуем в число, return прерывает функцию
    //т.е. если return нет, то не идет на следующую строку
    if (e.currentTarget.dataset.currency) {
      // dataset берет все зачения из data (у нас data-currency="byn", currency-это ключ data )
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === 'byn') { //если 'byn' -поле ввода
        if (value === '') {    //и если пусто в поле- то и передаем пусто
          // setCurrencyAmount(value, value);
          // ChangeCurrencyFieldAC(value, value);
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {  //если не пусто, то в одном поле остается введенное значение, а в другом конвертер
          //toFixed-округляет копейки, но возвращает стригу-поэтому +Number->сначала value-в число, а затем рузультат округления в число
          // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
          // ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
          dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
        }
      } else { //второе полу ввода: USD,EUR,RUR
        if (value === '') {
          // setCurrencyAmount(value, value);//если не пусто...то пусть будет пусто
          // ChangeCurrencyFieldAC(value, value);//если не пусто...то пусть будет пусто
          dispatch(ChangeCurrencyFieldAC(value, value))//если не пусто...то пусть будет пусто
        } else {//если не пусто, то УМНОЖАЕМ
          // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
//          ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
          dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value))
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {//кнопки buy, sell
    // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
    e.currentTarget.dataset.action === 'buy' ?dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    // ели false, то ничего не происходит.
    // и -если справа ок, то выполняется левая часть. Это нужно для скрипта т.к. он не знает что приходит
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: IGlobalState) => {
  return {
    currencies: state.currency.currencies,
    currentCurrency: state.currency.currentCurrency,
    isBuying: state.currency.isBuying,
    amountOfBYN: state.currency.amountOfBYN,
    amountOfCurrency: state.currency.amountOfCurrency,
  };
};
// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
//   return {
//     setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//       dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//     },
//     setAction(isBuying: boolean) {
//       dispatch(ChangeActionAC(isBuying));
//     },
//     changeCurrency(currency: string) {
//       dispatch(changeCurrentCurrencyAC(currency));
//     },
//   };
// };
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps,
//   { ChangeCurrencyFieldAC, ChangeActionAC, changeCurrentCurrencyAC }))(CurrencyEContainer);
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps,
//   {}))
// (CurrencyEContainer);
export default CurrencyEContainer;
