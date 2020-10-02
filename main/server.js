var port = 3000; // Your App Port

const app = require("./app");

app.set('port', process.env.PORT  || 3000);

const server = app.listen(app.get('port'), () => {
    console.log(`Server listen in port: ${ server.address().port }`);
});