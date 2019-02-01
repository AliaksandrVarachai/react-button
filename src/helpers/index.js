let counter = 0;

export function increment() {
  return ++counter;
}

export function decrement() {
  return --counter;
}

export function setCounter(value) {
  counter = value;
}

export function getCounter() {
  return counter;
}


