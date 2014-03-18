var should = require('should')
var stringutils = require('../stringutils.js')
var _ = require('underscore')


var TestStrings = [
	'SimpleStringNoSpaces',
	'String with spaces',
	'!210:]#%1 gews',
	'20% deal',
	'40-60% better'
]




describe('encoding detection:', function(){

	_.each(TestStrings, function(s){
		it(' "' + s + '"\t should not be encoded', function(){
			var x = stringutils.isEncoded(s)
			if (x!==null && x!==false){
				throw 'did not return null or false'
			}
		})
	})

	_.each(TestStrings, function(s){
		it(' escape("' + s + '")\t should be encoded', function(){
			var x = stringutils.isEncoded(escape(s))
			if (x!==null && x!==true){
				throw 'did not return null or true'
			}
		})
	})


})

