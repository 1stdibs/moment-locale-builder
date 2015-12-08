# `moment-locale-builder`

The locales part of the moment.js api requires the locale config to be passed to the moment instance before each date string is rendered. `moment-locale-builder` returns a function that proxies a specific locale config to a moment instance right before any of its methods are called. This way, the locale can be directly associated with the moment instance.

## example

```js
var moments = momentLocaleBuilder({
    hourBeforeMinute: {
        calendar : {
            sameDay : 'h:mm'
        }
    },
    hourAfterMinute: {
        calendar : {
            sameDay : 'mm:h'
        }
    }
});
moments.hourBeforeMinute('345', 'hhmm').calendar(); // returns 3:45
moments.hourAfterMinute('345', 'hhmm').calendar(); // returns 45:3
```
