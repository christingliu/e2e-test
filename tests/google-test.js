/*
* @Author: hui
* @Date:   2018-02-09 15:01:32
* @Last Modified by:   hui
* @Last Modified time: 2018-02-09 16:42:02
*/
module.exports={
	'Demo test Google':function(browser){
		browser
		.url('http://www.google.com')
		.waitForElementVisible('body',1000)
		.setValue('input[type=text]','nightwatch')
		.waitForElementVisible('button[name=btnG]',10000)
		.click('button[name=btnG]')
		.pause(1000)
		.assert.containsText('#main','Night Watch')
		.end();
	}
}