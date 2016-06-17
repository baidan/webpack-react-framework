var reset = require('./../css/common/reset.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Raphael = require('Raphael');

var json = [75, 75, 75, 75, 72, 66, 59, 24, 33, 25, 35, 28, 28, 16, 42, 27, 42, 36, 23, 39, 33, 28, 32, 25, 22, 32, 42, 34, 37, 40, 42, 39, 23, 35, 32, 28, 27, 28, 33, 39, 35, 33, 34, 26, 39, 29, 26, 21, 29, 27, 19, 33, 33, 31, 29, 18, 36, 30, 23, 23, 28, 31, 33, 33, 37, 44, 30, 30, 32, 22, 38, 30, 44, 34, 25, 19, 30, 28, 29, 34, 37, 26, 33, 43, 30, 33, 24, 39, 29, 38, 43, 43, 36, 36, 38, 37, 24, 29, 24, 30, 44, 39, 36, 25, 27, 43, 26, 35, 26, 14, 18, 33, 28, 32, 44, 21, 28, 34, 34, 34, 17, 23, 18, 29, 21, 16, 32, 15, 8, 23, 23, 34, 18, 31, 21, 9, 30, 30, 13, 17, 28, 28, 47, 48, 16, 23, 16, 15, 20, 22, 7, 26, 24, 28, 19, 31, 21, 21, 36, 19, 19, 30, 34, 23, 15, 25, 40, 36, 37, 38, 19, 14, 19, 22, 23, 31, 14, 18, 20, 31, 25, 24, 33, 20, 31, 24, 28, 17, 32, 39, 42, 16, 29, 34, 25, 31, 25, 22, 24, 20, 19, 43, 37, 30, 32, 23, 35, 31, 47, 26, 33, 30, 5, 15, 33, 37, 41, 37, 19, 26, 17, 16, 26, 15, 26, 11, 25, 18, 11, 20, 17, 32, 28, 17, 15, 30, 28, 29, 28, 31, 33, 25, 16, 28, 32, 40, 46, 21, 23, 30, 29, 14, 24, 23, 22, 21, 34, 29, 17, 30, 27, 13, 42, 13, 26, 26, 19, 26, 9, 26, 28, 33, 26, 26, 18, 37, 13, 34, 30, 18, 26, 32, 31, 20, 25, 17, 27, 24, 27, 18, 26, 39, 33, 12, 25, 26, 33, 24, 22, 15, 25, 14, 29, 36, 34, 25, 23, 44, 44, 22, 42, 30, 27, 20, 15, 25, 16, 20, 23, 18, 20, 25, 41, 51, 37, 42, 26, 12, 14, 27, 17, 26, 23, 29, 39, 24, 30, 26, 30, 31, 17, 36, 17, 19, 13, 21, 25, 34, 17, 35, 24, 27, 21, 13, 7, 24, 31, 14, 19, 24, 20, 22, 31, 27, 31, 11, 7, 29, 17, 18, 20, 22, 12, 33, 49, 42, 36, 21, 20, 30, 18, 3, 22, 24, 36, 33, 33, 40, 14, 23, 41, 25, 27, 30, 25, 24, 20, 33, 40, 15, 35, 33, 33, 32, 6, 36, 35, 18, 25, 31, 14, 17, 28, 38, 56, 46, 6, 21, 24, 37, 27, 19, 29, 18, 14, 9, 21, 23, 23, 39, 38, 16, 18, 9, 12, 14, 8, 34, 24, 27, 32, 22, 21, 19, 19, 15, 15, 24, 33, 40, 11, 26, 39, 18, 28, 10, 30, 20, 14, 26, 15, 34, 25, 27, 32, 9, 16, 19, 14, 23, 12, 14, 30, 15, 14, 20, 9, 17, 7, 22, 33, 17, 30, 17, 18, 20, 20, 24, 33, 32, 8, 20, 26, 20, 35, 15, 40, 16, 11, 18, 18, 11, 9, 29, 5, 31, 5, 17, 29, 35, 27, 8, 33, 22, 26, 20, 26, 29, 9, 14, 17, 19, 29, 23, 15, 24, 21, 31, 13, 20, 10, 18, 10, 21, 10, 34, 23, 12, 26, 30, 46, 41, 32, 15, 11, 13, 31, 29, 13, 22, 25, 20, 24, 19, 28, 20, 27, 16, 24, 22, 26, 10, 13, 18, 20, 33, 39, 30, 24, 23, 21, 31, 18, 7, 18, 11, 10, 28, 13, 4, 26, 22, 23, 20, 22, 36, 23, 21, 15, 19, 35, 29, 27, 12, 29, 22, 29, 17, 11, 18, 17, 16, 14, 21, 18, 26, 7, 27, 26, 23, 33, 18, 29, 22, 19, 36, 14, 26, 21, 25, 23, 26, 20, 19, 20, 13, 3, 36, 27, 38, 24, 44, 37, 21, 44, 28, 25, 33, 34, 25, 29, 38, 41, 26, 43, 47, 36, 20, 31, 34, 29, 28, 27, 41, 42, 39, 33, 34, 26, 36, 25, 27, 25, 23, 25, 32, 34, 39, 25, 37, 33, 23, 33, 18, 25, 35, 25, 26, 28, 23, 38, 35, 35, 34, 18, 28, 17, 33, 35, 35, 21, 26, 32, 34, 32, 44, 37, 37, 26, 27, 32, 38, 38, 22, 33, 33, 38, 33, 50, 44, 39, 28, 32, 47, 38, 23, 35, 40, 12, 39, 36, 16, 23, 18, 6, 21, 29, 31, 38, 37, 32, 27, 28, 35, 16, 28, 10, 4, 25, 27, 2, 30, 21, 23, 27, 27, 30, 17, 17, 23, 10, 37, 26, 19, 26, 21, 33, 40, 48, 20, 25, 22, 18, 7, 15, 40, 21, 13, 34, 18, 29, 19, 23, 27, 32, 26, 10, 25, 20, 24, 6, 29, 21, 48, 40, 29, 22, 30, 16, 21, 30, 23, 9, 18, 26, 25, 22, 18, 23, 21, 20, 23, 16, 30, 38, 32, 16, 15, 34, 44, 26, 33, 20, 35, 17, 39, 29, 47, 42, 36, 13, 18, 19, 18, 29, 6, 10, 13, 20, 29, 41, 38, 29, 36, 33, 27, 33, 17, 5, 16, 28, 26, 33, 26, 20, 37, 31, 14, 33, 16, 28, 23, 9, 23, 33, 18, 33, 23, 26, 49, 42, 45, 7, 8, 16, 18, 14, 22, 23, 17, 26, 21, 24, 20, 28, 12, 10, 33, 25, 34, 23, 17, 20, 27, 26, 28, 34, 43, 18, 15, 34, 11, 29, 31, 20, 22, 25, 34, 28, 17, 25, 26, 29, 23, 25, 27, 34, 18, 21, 21, 16, 17, 20, 25, 29, 36, 17, 18, 24, 24, 25, 36, 39, 34, 22, 39, 36, 21, 19, 15, 30, 26, 28, 16, 20, 27, 25, 32, 58, 41, 13, 27, 32, 19, 33, 13, 32, 34, 24, 26, 34, 37, 30, 35, 35, 19, 39, 20, 25, 26, 28, 25, 19, 22, 20, 31, 28, 43, 20, 22, 17, 21, 22, 16, 21, 24, 19, 26, 42, 18, 20, 31, 20, 26, 30, 12, 28, 29, 34, 56, 56, 41, 14, 26, 28, 21, 18, 30, 30, 23, 33, 27, 25, 14, 23, 25, 27, 18, 23, 19, 19, 6, 15, 21, 15, 37, 38, 39, 41, 18, 29, 37, 22, 19, 23, 34, 10, 25, 25, 46, 51, 14, 9, 31, 17, 20, 19, 31, 30, 30, 22, 16, 27, 14, 7, 12, 19, 13, 23, 29, 23, 14, 29, 21, 39, 32, 18, 17, 18, 23, 26, 20, 18, 12, 38, 27, 24, 23, 32, 17, 12, 42, 34, 36, 13, 10, 18, 19, 33, 42, 17, 28, 22, 15, 8, 22, 14, 32, 21, 23, 43, 23, 19, 20, 33, 24, 22, 30, 22, 18, 19, 23, 16, 38, 33, 4, 12, 30, 16, 15, 12, 31, 11, 26, 13, 15, 9, 3, 22, 18, 17, 7, 18, 19, 19, 19, 15, 18, 25, 39, 22, 17, 3, 14, 18, 30, 19, 33, 21, 12, 17, 13, 10, 25, 16, 17, 13, 4, 19, 24, 9, 32, 20, 21, 19, 35, 43, 21, 23, 15, 20, 43, 22, 16, 21, 9, 22, 33, 12, 36, 28, 10, 29, 28, 15, 29, 13, 13, 19, 31, 33, 32, 14, 25, 11, 18, 12, 17, 18, 29, 25, 9, 26, 15, 24, 21, 25, 32, 4, 22, 23, 19, 17, 14, 23, 33, 42, 33, 6, 23, 15, 12, 21, 18, 8, 19, 17, 24, 15, 23, 11, 7, 16, 16, 23, 27, 17, 13, 20, 18, 22, 21, 25, 15, 30, 13, 35, 10, 16, 20, 19, 21, 29, 29, 30, 33, 33, 46, 34, 32, 36, 34, 29, 36, 38, 39, 36, 48, 38, 37, 40, 43, 23, 34, 35, 28, 29, 19, 43, 44, 45, 28, 42, 37, 30, 32, 46, 33, 38, 32, 32, 44, 40, 38, 32, 37, 30, 29, 34, 35, 31, 29, 34, 28, 29, 26, 38, 34, 23, 33, 36, 27, 38, 16, 32, 16, 28, 39, 44, 34, 26, 35, 30, 38, 47, 24, 21, 41, 31, 34, 38, 35, 35, 35, 42, 26, 30, 35, 35, 27, 38, 37, 34, 35, 35, 27, 17, 26, 19, 13, 19, 25, 34, 12, 29, 32, 25, 34, 56, 41, 30, 29, 17, 30, 23, 5, 12, 13, 34, 23, 31, 28, 30, 25, 24, 7, 21, 22, 30, 13, 11, 22, 50, 51, 51, 25, 37, 12, 22, 24, 21, 15, 5, 18, 18, 18, 26, 14, 18, 12, 22, 17, 25, 31, 22, 20, 16, 22, 19, 52, 37, 25, 32, 17, 29, 9, 30, 21, 24, 30, 27, 31, 31, 21, 23, 20, 17, 19, 16, 41, 21, 19, 17, 24, 16, 18, 10, 14, 16, 10, 18, 19, 23, 16, 13, 20, 38, 18, 31, 17, 14, 25, 21, 19, 17, 18, 26, 11, 17, 25, 17, 18, 24, 17, 15, 20, 24, 21, 10, 21, 20, 25, 24, 15, 21, 25, 7, 15, 38, 28, 16, 9, 9, 20, 33, 9, 24, 15, 27, 22, 31, 30, 20, 20, 15, 24, 31, 33, 36, 35, 5, 19, 28, 15, 21, 25, 24, 16, 22, 29, 15, 11, 15, 8, 17, 6, 19, 8, 21, 21, 37, 18, 23, 30, 25, 14, 10, 12, 38, 18, 31, 20, 12, 15, 17, 22, 23, 21, 14, 19, 21, 11, 13, 7, 23, 13, 23, 24, 13, 27, 31, 15, 29, 16, 25, 18, 22, 17, 23, 17, 13, 28, 16, 23, 11, 26, 27, 12, 26, 22, 37, 28, 27, 13, 21, 25, 10, 12, 26, 19, 20, 36, 27, 9, 18, 14, 29, 45, 26, 20, 16, 18, 27, 19, 23, 20, 8, 6, 15, 11, 16, 36, 19, 10, 26, 26, 32, 23, 20, 36, 12, 30, 18, 11, 20, 13, 21, 14, 17, 26, 26, 21, 38, 23, 34, 34, 41, 8, 14, 16, 11, 26, 16, 27, 12, 17, 22, 23, 22, 22, 19, 23, 21, 20, 25, 30, 3, 32, 32, 21, 19, 16, 32, 6, 19, 33, 26, 18, 8, 17, 8, 12, 22, 25, 15, 24, 17, 36, 28, 38, 27, 24, 31, 46, 32, 25, 48, 48, 31, 30, 43, 44, 32, 36, 33, 20, 39, 24, 38, 39, 38, 38, 28, 36, 30, 33, 25, 40, 21, 31, 28, 38, 42, 40, 37, 22, 32, 32, 23, 38, 31, 25, 33, 26, 35, 32, 33, 39, 35, 20, 36, 27, 33, 36, 39, 34, 16, 25, 35, 38, 29, 40, 37, 34, 26, 31, 16, 17, 26, 35, 29, 45, 35, 40, 45, 42, 19, 27, 32, 43, 23, 23, 28, 35, 34, 29, 35, 51, 40, 40, 36, 30, 44, 40, 34, 45, 40, 38, 46, 46, 50, 50, 51, 53, 57, 54, 53, 57, 58, 61, 57, 61, 60, 63, 60, 67, 71, 71, 72, 73, 73, 73, 74, 74, 74, 74, 74, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75];


var MusicWave = React.createClass({
    render: function() {
        return (
            <div>内容</div>
        );
    }
});

//创建画布
var raphael = new Raphael('svg', 1800, 100);
var str = '';
for (var i = 0; i < json.length; i++) {
    str += 'M' + i + ',' + 75 + 'L' + i + ',' + json[i];
}
raphael.path(str);



ReactDOM.render(
    <MusicWave />,
    document.getElementById('root')
);
