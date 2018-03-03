import riot from 'riot';

const store = {};

const observe = name => {
  if (name in store) {
    return store[name];
  }

  function Observable() {
    riot.observable(this);
  }

  const newObservable = new Observable();
  store[name] = newObservable;

  return newObservable;
}

export {
  observe,
};