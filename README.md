# Debug

Usage :
```javascript
import debug from '@hypertorrent/debug';
import { name } from '../package.json';

export default class Test {
  constructor(options = {}) {
    super();

    this.debug = debug(name, this);
    this.debug('new');
  }
}
```
