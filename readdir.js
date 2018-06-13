const fs = require('fs');
//TODO ファイル名用パラメータを変数に入れたいができない
const search_list = ".js$|.html$";
console.log('module load!');

//ファイル一覧取得関数
var readdir = function(dir) {
//function readdir(dir) {
  fs.readdir(dir, function (err, files) {
    if (err) {
        throw err;
    }
    var result = files.filter( function( value ) {
        //特定の拡張子を含むものだけ抽出
        //return value.match( /search_list/g );
        return value.match( /.js$|.html$/g );
    })
    //呼び出し用にexportする
    exports.result = result;
    //return result;
  });
}
//module.exports = readdir;
//exports = readdir;
readdir("./");
