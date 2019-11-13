import debug from 'debug';

export default (name, self) => (...msg) => {
  const args = msg;
  if (self.debugId) {
    args[0] = `[${self.debugId}] ${args[0]}`;
  }
  debug([...name.replace('@', '').split('/'), typeof self === 'string' ? self : self.constructor.name].join(':'))(...args);
};
