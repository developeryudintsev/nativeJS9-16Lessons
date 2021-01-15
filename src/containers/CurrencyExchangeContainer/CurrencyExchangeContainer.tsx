// import React from 'react';
// import { connect } from 'react-redux';
// import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
// import { IGlobalState } from '../../redux/state';
// import { CurrencyState } from '../../redux/currencyReducer';
// import { compose, Dispatch } from 'redux';
// import {
//   ChangeActionAC,
//   ChangeCurrencyFieldAC,
//   changeCurrentCurrencyAC,
//   CurrencyReducersTypes,
// } from '../../redux/actions';
//
// // т.к. мы переписываем mapDispatchToProps-то комментим, и пишем по новой
// // interface ICurrencyProps extends CurrencyState {
// //   setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void;
// //   setAction: (isBuying: boolean) => void;
// //   changeCurrency: (currency: string) => void;
// // }
//
// // по новой, вставляем сюда наши криэйторы.В этом случае interface-это тип, но как понятие он значительно шире
// // интерфейсы можно расширять, типы нет. Здесь у нас interface ICurrencyProps наследуется от обычного типа
// interface ICurrencyProps extends CurrencyState {
//   ChangeCurrencyFieldAC: Function//просто указываем Function-т.е. обльше про нее ничего не знаем
//   ChangeActionAC: Function
//   changeCurrentCurrencyAC: Function
// }
//
//
// const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = (
//   {
//     currencies,
//     currentCurrency,
//     isBuying,
//     amountOfBYN,
//     amountOfCurrency,
//     //т.к. этих функций нет
//     // setCurrencyAmount,
//     // setAction,
//     // changeCurrency,
//     // вместо них новые функции:
//     ChangeCurrencyFieldAC,
//     ChangeActionAC,
//     changeCurrentCurrencyAC,
//   }) => {
//   //выбираются квадратики USD EUR RUR
//   let currencyRate: number = 0;
//   const currenciesName = currencies.map((currency) => {
//     if (currency.currencyName === currentCurrency) {
//       currencyRate = isBuying ? currency.buyRate : currency.sellRate;
//     }
//     return currency.currencyName;
//   });
//
//   const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.currentTarget.value;
//     if (!isFinite(+value)) return;//+value -т.е. преоразуем в число, return прерывает функцию
//     //т.е. если return нет, то не идет на следующую строку
//     if (e.currentTarget.dataset.currency) {
//       // dataset берет все зачения из data (у нас data-currency="byn", currency-это ключ data )
//       const trigger: string = e.currentTarget.dataset.currency;
//       if (trigger === 'byn') { //если 'byn' -поле ввода
//         if (value === '') {    //и если пусто в поле- то и передаем пусто
//           // setCurrencyAmount(value, value);     //было
//           ChangeCurrencyFieldAC(value, value);
//         } else {  //если не пусто, то в одном поле остается введенное значение, а в другом конвертер
//           //toFixed-округляет копейки, но возвращает стригу-поэтому +Number->сначала value-в число, а затем рузультат округления в число
//           // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));  //было
//           ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
//         }
//       } else { //второе полу ввода: USD,EUR,RUR
//         if (value === '') {
//           // setCurrencyAmount(value, value);//если не пусто...то пусть будет пусто     //было
//           ChangeCurrencyFieldAC(value, value);//если не пусто...то пусть будет пусто
//         } else {//если не пусто, то УМНОЖАЕМ
//           // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);       //было
//           ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
//         }
//       }
//     }
//   };
//   const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {//кнопки buy, sell
//     // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);      //было
//     e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false);
//   };
//
//   const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
//     // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);     //было
//     e.currentTarget.dataset.currency && changeCurrentCurrencyAC(e.currentTarget.dataset.currency);
//     // ели false, то ничего не происходит.
//     // и -если справа ок, то выполняется левая часть. Это нужно для скрипта т.к. он не знает что приходит
//   };
//
//   return (
//     <React.Fragment>
//       <CurrencyExchange
//         currenciesName={currenciesName}
//         currentCurrency={currentCurrency}
//         currencyRate={currencyRate}
//         isBuying={isBuying}
//         amountOfBYN={amountOfBYN}
//         amountOfCurrency={amountOfCurrency}
//         changeCurrencyField={changeCurrencyField}
//         changeAction={changeAction}
//         changeCurrentCurrency={changeCurrentCurrency}
//       />
//     </React.Fragment>
//   );
// };
//
// // mapStateToProps заменяется хуком useSelector
// const mapStateToProps = (state: IGlobalState) => {
//   return {
//     currencies: state.currency.currencies,
//     currentCurrency: state.currency.currentCurrency,
//     isBuying: state.currency.isBuying,
//     amountOfBYN: state.currency.amountOfBYN,
//     amountOfCurrency: state.currency.amountOfCurrency,
//   };
// };
//старый синтаксис
// mapDispatchToProps-заменяется хуком useDispatch
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
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CurrencyEContainer);

//НОВЫЙ синтаксис
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps, {
//   ChangeCurrencyFieldAC,
//   ChangeActionAC,
//   changeCurrentCurrencyAC,
// }))(CurrencyEContainer);


//========================================================================================================================
//НОВЫЙ синтаксис c хуками


import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from '../../redux/actions';//теперь берем не из react-Redux а из action.tsx
//на этой странице больше никаких изменений.
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { IGlobalState } from '../../redux/state';
import { CurrencyState } from '../../redux/currencyReducer';
import { compose, Dispatch } from 'redux';
import {
  ACTIONS_TYPE,
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  changeCurrentCurrencyAC,
  CurrencyReducersTypes,
} from '../../redux/actions';
import {
  selectAll,
  selectAmountOfBYN,
  selectAmountOfCurrency,
  selectCurrencies,
  selectCurrentCurrency,
  selectIsBuying,
} from '../../redux/selectors';


// для хуков  внутренка не нужна
interface ICurrencyProps extends CurrencyState {
}

// const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = (
//   {
//     currencies,
//     currentCurrency,
//     isBuying,
//     amountOfBYN,
//     amountOfCurrency,
//   }) => {

const CurrencyEContainer: React.FunctionComponent = () => {
  let dispatch = useDispatch();
  // const currencies=useSelector(selectCurrencies);
  // const currentCurrency=useSelector(selectCurrentCurrency);
  // const isBuying=useSelector(selectIsBuying);
  // const amountOfBYN=useSelector(selectAmountOfBYN);
  // const amountOfCurrency=useSelector(selectAmountOfCurrency);

  const{currencies,currentCurrency,isBuying,amountOfBYN,amountOfCurrency}=useSelector(selectAll);

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
          // ChangeCurrencyFieldAC(value, value);//было
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {  //если не пусто, то в одном поле остается введенное значение, а в другом конвертер
          //toFixed-округляет копейки, но возвращает стригу-поэтому +Number->сначала value-в число, а затем рузультат округления в число
          // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));  //было
          // ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));//было
          dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)))
        }
      } else { //второе полу ввода: USD,EUR,RUR
        if (value === '') {
          // setCurrencyAmount(value, value);//если не пусто...то пусть будет пусто     //было
          // ChangeCurrencyFieldAC(value, value);//если не пусто...то пусть будет пусто    //было
           dispatch(ChangeCurrencyFieldAC(value, value));//если не пусто...то пусть будет пусто)
          // бывает что сразу диспатчат без всяких криэтеров
          // dispatch({
          //   type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
          //   payload: { amountOfBYN:value,amountOfCurrency:value }
          // })
        } else {//если не пусто, то УМНОЖАЕМ
          // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);       //было
          // ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);  //было
          dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {//кнопки buy, sell
    // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);      //было
    // e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false); //было
    e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);     //было
    // e.currentTarget.dataset.currency && changeCurrentCurrencyAC(e.currentTarget.dataset.currency);   //было
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

// mapStateToProps заменяется хуком useSelector-selectors.tsx
// const mapStateToProps = (state: IGlobalState) => {
//   return {
//     currencies: state.currency.currencies,
//     currentCurrency: state.currency.currentCurrency,
//     isBuying: state.currency.isBuying,
//     amountOfBYN: state.currency.amountOfBYN,
//     amountOfCurrency: state.currency.amountOfCurrency,
//   };
// };
//старый синтаксис
// mapDispatchToProps-заменяется хуком useDispatch
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
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CurrencyEContainer);

//НОВЫЙ синтаксис
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps, {
//   ChangeCurrencyFieldAC,
//   ChangeActionAC,
//   changeCurrentCurrencyAC,
// }))(CurrencyEContainer);

//НОВЫЙ синтаксис c хуками
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps, {}))(CurrencyEContainer);
export default CurrencyEContainer;

