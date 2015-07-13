/**
 * 应用于dim(develop in modularization)框架的弹跳球loading加载组件
 * @author 铁拐李
 * @email JerroldLi@163.com
 * @update 2015.07.12
 */
var LoadingTpl = __inline('loading.handlebars');

var Loading = {
	init: function (options) {
		if (!this.status) {
			this.options = options;
			this.render();
		}
		
	},
	render: function () {
		var LoadingObj = $(LoadingTpl()); 
		this.LoadingObj = LoadingObj;
		this.options.container.append(LoadingObj);
		this.status = 1;
	},
	hide: function () {
		this.LoadingObj.hide();
	},
	show: function () {
		this.LoadingObj.show();
	}
};

module.exports = Loading;