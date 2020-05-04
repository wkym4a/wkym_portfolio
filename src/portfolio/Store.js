import { createStore } from 'redux';

const max_num = 3;

const initData = {
  num:0,
  data:[{num:1, memo:''},{num:2, memo:''},{num:3, memo:''}],
  message:''
};

// レデューサー
export function portReducer(state = initData, action) {
  // return state;
  switch (action.type) {
    case 'NEXT':
      return nextReduce(state, action);

    case 'BEFORE':
      return beforeReduce(state, action);

    case 'CHANGE':
      return changeReduce(state, action);

    default:
      return state;
  }
}

// レデュースアクション
// 「次へ」のレデュース処理
function nextReduce(state, action){

  if (state.num === max_num - 1){
    return {
      num:state.num,
      data:state.data,
      message:'最後のポートフォリオです。'
    };
  }else{
    return {
      num:state.num + 1,
      data:state.data,
      message:''
    };
  }
}

// 「前へ」のレデュース処理
function beforeReduce(state, action){

  if (state.num === 0){
    return {
      num:state.num,
      data:state.data,
      message:'最初のポートフォリオです。'
    };
  }else{
    return {
      num:state.num - 1,
      data:state.data,
      message:''
    };
  }
}

// 「メモ書き変更」のレデュース処理
function changeReduce(state, action){

  let newdata = state.data.slice();
  newdata[state.num].memo = action.memo;

  return {
    num:state.num,
    data:newdata,
    message:state.message
  };

}

// アクションクリエーター

// 「次へ」のアクション
export function nextPortfolio() {
  return {
    type: 'NEXT'
  }
}

// 「前へ」のアクション
export function beforePortfolio() {
  return {
    type: 'BEFORE'
  }
}

// 「メモ書き変更」のアクション
export function changeMemo(text) {
  return {
    type: 'CHANGE',
    memo:text
  }
}
export function clearMemo(text) {
  return {
    type: 'CHANGE',
    memo:""
  }
}

// ストアを作成
export default createStore(portReducer);