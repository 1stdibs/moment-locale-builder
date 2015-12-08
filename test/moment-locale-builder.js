var momentLocaleBuilder = require('../moment-locale-builder');
var assert = require('assert');
describe('momentLocaleBuilder', function () {
    it('should instantiate a moment instance configured for a particular locale', function () {
        var moments = momentLocaleBuilder({
            testing1: {
                calendar : {
                    sameDay : 'h:mm'
                }
            },
            testing2: {
                calendar : {
                    sameDay : 'mm:h'
                }
            }
        });
        assert.equal(moments.testing1("0345", "hhmm").calendar(), "3:45");
        assert.equal(moments.testing2("0345", "hhmm").calendar(), "45:3");
    });
});
