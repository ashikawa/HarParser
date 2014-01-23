/*jslint node:true, plusplus: true, unparam: true, nomen: true, stupid: true*/
(function () {
    'use strict';

    var _     = require('underscore'),
        fs    = require('fs'),
        input = fs.readFileSync('/dev/stdin', 'utf8'),
        entries,
        filtered;

    input    = JSON.parse(input);
    entries  = input.log.entries;

    // todo フィルターをコマンドラインオプションにする
    filtered = _(entries).filter(function (entry) {
        return entry.request.url.match(/^http:\/\/example\.com\//)
            && (entry.response.status === 200);
    });

    _(filtered).each(function (value, key, list) {
        console.log(value.request.url + ',', value.response.bodySize);
    });
}());