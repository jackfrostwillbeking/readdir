const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
var list = require("./readdir.js");

server.get('*', (req, res) => {
//  console.log(list.readdir("./"));
  const app = new Vue({
    data: {
      url: req.url,
      items: list.result 
      //items:  [
      //{ message: 'Foo' },
      //{ message: 'Bar' }
    //] 
    },
    template: require('fs').readFileSync('./template.html', 'utf-8')
  })

renderer.renderToString(app, (err, html) => {
  res.send(html) // will be the full page with app content injected.
  //console.log(html) // will be the full page with app content injected.
})
});
server.listen(8080)

