var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




var articleone={
    title:'ARTICLE ONE',
    HEADING: 'ARTICLE ONE',
    date: 'feb 15',
    content:  `<p>
                    This is a paragraph which has to be fill by me or any the web server master who is the my boss .This is a paragraph which has to be fill by me or any the web server master who is the my boss .This is a paragraph which has to be fill by me or any the web server master who is the my boss .
          </p>
           <p>
                     This is a paragraph which has to be fill by me or any the web server master who is the my boss .This is a paragraph which has to be fill by me or any the web server master who is the my boss .This is a paragraph which has to be fill by me or any the web server master who is the my boss .
          </p>
          <p>   
                      This is a paragraph which has to be fill by me or any the web server master who is the my boss .This is a paragraph which has to be fill by me or any the web server master who is the my boss .This is a paragraph which has to be fill by me or any the web server master who is the my boss .
            </p>`       
    
};
function createTemplate(data){
    var title = data.title;
    var date= data.date;
    var heading= data.heading;
    var content = data.content;
    var htmlTemplate =`
    <head>
        <title>
            ARTICAL ONE
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class ="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
    
`;
return htmlTemplate;

}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});




app.get('/articleone', function (req, res) {
  res.send(createTemplate(articleone));
});






app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});

app.get('/articlethree', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
