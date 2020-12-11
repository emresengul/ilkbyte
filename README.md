### IlkByte NPM | Node.JS
Ilkbyte dökümantasyonundan yola çıkarak hazırlanan paket sayesinde işlerinizi kolaylaştırabilirsiniz. Dökümantasyonda olan her şey mevcuttur.

# Installation
```
npm install ilkbyte
```



# Usage
````
const IlkByte = require("ilkbyte");

const settings = {
    access: "set", // required
    secret: "set" // required
}
const ilkbyte = new IlkByte(settings);
````
# Example
````
ilkbyte.servers()
.then(data=>{
    // your data here
})
.catch(error=>{
    // error here
})
````
# Functions
### Hesap Bilgileri
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| account |https://apidocs.ilkbyte.com/docs/1.0/account/index#section-1|  |
| accounts |https://apidocs.ilkbyte.com/docs/1.0/account/index#section-2|  |
### Sunucu Listeleme
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| servers |https://apidocs.ilkbyte.com/docs/1.0/server/index#section-1| p  |
| activeServers |https://apidocs.ilkbyte.com/docs/1.0/server/index#section-2| p  |
### Sunucu Oluşturma
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| configInfo |https://apidocs.ilkbyte.com/docs/1.0/server/create#section-1|   |
| createServer |https://apidocs.ilkbyte.com/docs/1.0/server/create#section-2| username,password,name,os_id,app_id,package_id,sshykey  |
### Sunucu Yönetimi
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| serverInfo |https://apidocs.ilkbyte.com/docs/1.0/server/manage#section-1| serverName   |
| serverPower |https://apidocs.ilkbyte.com/docs/1.0/server/manage#section-2| serverName, set   |
| serverIpList |https://apidocs.ilkbyte.com/docs/1.0/server/manage#section-3| serverName  |
| serverIpLogs |https://apidocs.ilkbyte.com/docs/1.0/server/manage#section-4| serverName  |
| serverIpRdns |https://apidocs.ilkbyte.com/docs/1.0/server/manage#section-5| serverName, ip, rdns  |
### Snapshot İşlemleri
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| snapshot |https://apidocs.ilkbyte.com/docs/1.0/server/snapshot#section-1| serverName  |
| createSnapshot |https://apidocs.ilkbyte.com/docs/1.0/server/snapshot#section-2| serverName, name |
| revertSnapshot |https://apidocs.ilkbyte.com/docs/1.0/server/snapshot#section-3| serverName, name |
| updateSnapshot |https://apidocs.ilkbyte.com/docs/1.0/server/snapshot#section-4| serverName, name |
| deleteSnapshot |https://apidocs.ilkbyte.com/docs/1.0/server/snapshot#section-5| serverName, name |
| addCron |https://apidocs.ilkbyte.com/docs/1.0/server/snapshot#section-6| serverName, name, day, hour, min |
| deleteCron |https://apidocs.ilkbyte.com/docs/1.0/server/snapshot#section-7| serverName, name |
### Yedek İşlemleri
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| backupList |https://apidocs.ilkbyte.com/docs/1.0/server/backup#section-1| serverName |
| backupRestore |https://apidocs.ilkbyte.com/docs/1.0/server/backup#section-1| serverName, backup_name |
### Domain Oluşturma
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| domainList |https://apidocs.ilkbyte.com/docs/1.0/domain/index#section-1| p |
| createDomain |https://apidocs.ilkbyte.com/docs/1.0/domain/index#section-2| domain, server, ipv6 |
### DNS Yönetimi
| function                     |   document-link    |       params |
| ------------------------ | :---------: |  ------------: |
| detailDns |https://apidocs.ilkbyte.com/docs/1.0/domain/manage#section-1| domainName |
| addDns |https://apidocs.ilkbyte.com/docs/1.0/domain/manage#section-2| domainName, record_name, record_type, record_content, record_priority |
| updateDns |https://apidocs.ilkbyte.com/docs/1.0/domain/manage#section-3| domainName, record_id, record_content, record_priority |
| deleteDns |https://apidocs.ilkbyte.com/docs/1.0/domain/manage#section-4| domainName, record_id |
| pushDns |https://apidocs.ilkbyte.com/docs/1.0/domain/manage#section-5| domainName |




