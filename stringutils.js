// Fix strings

var stfx = {

	isEncoded : function(string){
		if (string === escape(string)) return null;
		return  unescape(string) !== string
	},

	ensureEscaped : function(string){
		if (!stfx.isEncoded(string)){
			return escape(string)
		}
		return string;
	},

	ensureUnescaped: function(string){
		if (stfx.isEncoded(string)){
			return unescape(string)
		}
	}

}

module.exports = stfx;




