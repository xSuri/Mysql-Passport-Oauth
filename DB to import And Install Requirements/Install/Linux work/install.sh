#!/bin/bash

echo "Install? (y/n) \n"
read install

yes="y"

if [ "$install" = "$yes" ];
    then

    echo "Installing .. \n"
    cd ../main
    
    npm install express --save
    npm install cors --save
    npm install body-parser --save
    npm install mysql --save
    npm install cookie-session --save
    npm install passport --save

    echo "Install sucessfull... \n"
fi

echo "Program stopped."