import { createStore } from 'redux';

const increment = ({ by = 1 } = {}) => ({ type: 'INCREMENT', by });
const decrement = ({ by = 1 } = {}) => ({ type: 'DECREMENT', by });
const set = (amount) => ({ type: 'SET', amount });
const reset = () => ({ type: 'RESET' });


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.by };
      break;
    case 'DECREMENT':
      return { count: state.count - action.by };
      break;
    case 'SET':
      return { count: action.amount };
      break;
    case 'RESET':
      return { count: 0 };
      break;
    default:
      return state;
  }
};


const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

let iterations = Math.floor(Math.random() * 100) + 1;

let i = 0;

while (i < iterations) {
  store.dispatch(increment({ by: 5 }));  

  i++;
}

//unsubscribe();
iterations = Math.floor(Math.random() * 100) + 1;

let j = 0;

while (j < iterations) {
  store.dispatch(decrement());

  j++;
}

console.log('RESET!');

store.dispatch(set(1337));

store.dispatch(reset());

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , price] = item;

console.log(`A medium ${name} costs ${price}`);


