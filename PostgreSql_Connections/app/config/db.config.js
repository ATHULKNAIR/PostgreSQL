module.exports = {
    HOST : "localhost",
    USER : "postgres",
    PASSWORD : "Athul@1262",
    DB : "imdb",
    dialect : 'mysql',
    pool : {
        max : 5 ,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
};