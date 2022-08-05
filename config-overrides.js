const rewireAliases = require('react-app-rewire-aliases')
const path = require('path')

module.exports = function override(config, env){
    config = rewireAliases.aliasesOptions({
        '@src':path.resolve(__dirname,'src')
    })(config, env)

    return config
}