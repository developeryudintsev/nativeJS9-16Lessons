import React from 'react';
import { connect } from 'react-redux';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { IGlobalState } from '../../redux/state';
import { CurrencyState } from '../../redux/currencyReducer';
import { compose, Dispatch } from 'redux';
import {
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  changeCurrentCurrencyAC,
  CurrencyReducersTypes,
} from '../../redux/actions';

interface ICurrencyProps extends CurrencyState {
  setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void;
  setAction: (isBuying: boolean) => void;
  changeCurrency: (currency: string) => void;
}

const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = ({
  currencies,
  currentCurrency,
  isBuying,
  amountOfBYN,
  amountOfCurrency,
  setCurrencyAmount,
  setAction,
  changeCurrency,
}) => {
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
          setCurrencyAmount(value, value);
        } else {  //если не пусто, то в одном поле остается введенное значение, а в другом конвертер
          //toFixed-округляет копейки, но возвращает стригу-поэтому +Number->сначала value-в число, а затем рузультат округления в число
          setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
        }
      } else { //второе полу ввода: USD,EUR,RUR
        if (value === '') {
          setCurrencyAmount(value, value);//если не пусто...то пусть будет пусто
        } else {//если не пусто, то УМНОЖАЕМ
          setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {//кнопки buy, sell
    e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
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
// @ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
  return {
    setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
      dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
    },
    setAction(isBuying: boolean) {
      dispatch(ChangeActionAC(isBuying));
    },
    changeCurrency(currency: string) {
      dispatch(changeCurrentCurrencyAC(currency));
    },
  };
};
// @ts-ignore
export const CurrencyExchangeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CurrencyEContainer);
