# Next.js Banking System GRIP TSF task

This task is to create a banking management system, where we use mongodb as database to store user's information.

It has several pages that includes

/ ---> path to home

/:id ---> path to user information

/transferMoney ---> path to tranfer money page

/createUser ---> path to create demo user

## How to install and use

Download this repo using following command and do following process

```bash
1: git clone https://github.com/RajVadeghar/banking-system-grip-tsf.git
2: cd banking-system-grip-tsf

3: yarn install
# or
3: yarn
```

Now that after using the above commands the required packages get installed.. You can now use the app using below command

```bash
yarn dev
```

Navigate now to [localhost](http://localhost:3000)

## Backend setup

If you also want to add backend in this project you just need to create mongodb atlas cluster and add connection endpoint on .env.local file at root folder of this project using variable name as below

```
MONGO_URL= // your mongo url
```
