/**
 * 应用于dim(develop in modularization)框架的弹跳球loading加载组件
 * @author 铁拐李
 * @email JerroldLi@163.com
 * @update 2015.07.12
 */
var BounderTpl = __inline('loading-bounder.handlebars');

var LoadingBounder = {
	init: function (options) {
		if (!this.status) {
			this.options = options;
			this.render();
		}
		
	},
	render: function () {
		var BounderObj = $(BounderTpl()); 
		this.BounderObj = BounderObj;
		this.options.container.append(BounderObj);
		this.status = 1;
	},
	hide: function () {
		this.BounderObj.hide();
	},
	show: function () {
		this.BounderObj.show();
	}
};

module.exports = LoadingBounder;