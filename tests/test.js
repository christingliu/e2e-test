/*
* @Author: hui
* @Date:   2018-01-30 15:46:43
* @Last Modified by:   hui
* @Last Modified time: 2018-01-31 18:20:28
*/
module.exports = {
    'Search by baidu': function (client) {
        // 定义页面元素
        const searchInput = '#kw';
        const searchBtn = '#su';
        const resultContainer = '#container';
        // 启动浏览器并打开www.baidu.com
        client.url('https://www.baidu.com').maximizeWindow()
            // 确保输入框可以使用.
            .waitForElementVisible(searchInput, 50000)
            // 输入"nightwatch"然后搜索.
            .setValue(searchInput, 'nightwatch')
            .click(searchBtn)
            .waitForElementVisible(resultContainer, 10000)
            // 截屏 
            .saveScreenshot('reports/answers.png')
            .end()
            
    }
}