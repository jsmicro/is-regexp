# JSMicro - Is RegExp

### **`isRegExp(object)`**

Check does the given Javascript Object (array, object, string, etc) is a regexp.

### **`isNotRegExp(object)`**

Check does the given Javascript RegExp (array, object, string, etc) is not a regexp.

## Browser Usage

```bash
bower install --save jsmicro-is-regexp
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-regexp/index.js">
<script type="text/javascript">
    var obj = /[a-z]+/g;
    var nbr = 200;

    // Available in the window object.
    isRegExp(obj);      // true
    isRegExp(nbr);      // false
    isNotRegExp(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro-is-regexp
```

```js
const obj = require('jsmicro-is-regexp');

// Available in the global object.
isRegExp(/[a-z]+/g); // true
isRegExp(23322333); // false
isNotRegExp(23234); // true

// Also available in the export object.
obj.isRegExp(/[a-z]+/g); // true
obj.isRegExp(23322333); // false
obj.isNotRegExp(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
