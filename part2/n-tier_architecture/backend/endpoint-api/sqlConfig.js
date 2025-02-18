var dbconfig = {
    development: {
        server: '192.168.81.128',
        database:'team1_engce301_db',
        user:'team1',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.81.128'  // SQL Server instance name
        }
    },
    production: {
        server: '192.168.81.128', //SE Lab Server
        database:'team1_engce301_db',
        user:'team1',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.81.128'  // SQL Server instance name
        }
    },

};

module.exports = dbconfig;
