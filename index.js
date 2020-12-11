const axios = require("axios")
class IlkByte {
    constructor (options) {
        this.baseUrl = "https://api.ilkbyte.com"
        this.access = options.access || null
        this.secret = options.secret || null
        this.serverName = options.serverName || null
    }
    async account () {
        try {
            const results = await this.request("get","/account")
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async accounts () {
        try {
            const results = await this.request("get","/account/users")
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    setServerName (value) {
        this.serverName = value
    }
    async request (method,path,data,params) {
        let aParams = ""
        if ( params && typeof params == 'object') {
            Object.keys(params).forEach(element => {
                aParams += `&${element}=${params[element]}`
            })
        }

        const url = this.baseUrl + path + "?access="+this.access+"&secret="+this.secret + aParams
        let result = null
        try {
            if (method === "get") {
                result = await axios.get(url)
            }
            else {
                throw "request fail"
            }
            if (result && result.data.status != false) 
                return result
            else {
                throw result.data ? result.data : result
            }
        }
        catch (error) {
            throw error.response ? error.response.data : error
        }
    }
    async servers (p) {
        try {
            const results = await this.request("get","/server/list/all",null, p ? {p} : null)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async activeServers (p) {
        try {
            const results = await this.request("get","/server/list",null, p ? {p} : null)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async configInfo () {
        try {
            const results = await this.request("get","/server/create")
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async createServer (username, password, name, os_id, app_id, package_id, sshkey) {
        try {
            const results = await this.request("get","/server/create/config",null, {
                username,
                password,
                name,
                os_id,
                app_id,
                package_id,
                sshkey
            })
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async serverInfo (serverName) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/show`)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async serverPower (serverName,set) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/power`,null,{set})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async serverIpList (serverName) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/ip/list`)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async serverIpLogs (serverName) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/ip/logs`)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async serverIpRdns (serverName,ip,rdns) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/ip/rdns`,null,{ip,rdns})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async snapshot (serverName) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/snapshot`)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async createSnapshot (serverName,name) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/snapshot/create`,null,{name})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async revertSnapshot (serverName, name) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/snapshot/revert`,null,{name})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async updateSnapshot (serverName, name) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/snapshot/update`,null,{name})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async deleteSnapshot (serverName, name) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/snapshot/delete`,null,{name})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async addCron (serverName, name, day, hour, min) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/snapshot/cron/add`,null,{name,day,hour,min})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async deleteCron (serverName, name) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/snapshot/cron/delete`,null,{name})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async backupList (serverName) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/backup`)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async backupRestore (serverName, backup_name) {
        try {
            const results = await this.request("get",`/server/manage/${serverName || this.serverName}/backup/restore`,null,{backup_name})
            return results.data
        }
        catch (error) {
            throw error
        }   
    }
    async domainList (p) {
        try {
            const results = await this.request("get","/domain/list",null, p ? {p} : null)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async createDomain (domain,server,ipv6) {
        try {
            const results = await this.request("get","/domain/create",null, {domain,server,ipv6})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async detailDns (domainName) {
        try {
            const results = await this.request("get",`/domain/manage/${domainName}/show`)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async addDns (domainName,record_name, record_type, record_content, record_priority) {
        try {
            const results = await this.request("get",`/domain/manage/${domainName}/add`,null,{record_name,record_type,record_content,record_priority})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async updateDns (domainName,record_id, record_content, record_priority) {
        try {
            const results = await this.request("get",`/domain/manage/${domainName}/update`,null,{record_id,record_content,record_priority})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async deleteDns (domainName, record_id) {
        try {
            const results = await this.request("get",`/domain/manage/${domainName}/delete`,null,{record_id})
            return results.data
        }
        catch (error) {
            throw error
        }
    }
    async pushDns (domainName) {
        try {
            const results = await this.request("get",`/domain/manage/${domainName}/push`)
            return results.data
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = IlkByte;