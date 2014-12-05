var sha256 = (function(){
	var cryptolib = require('crypto');
	var _hmac;

	function _initialize(key){
		_hmac = cryptolib.createHmac('sha256', key);
	}

	function Initialize(key){
		_initialize(key);
	}

	function _generate(value, callback){
		try{
			_hmac.update(value);
			return callback(_hmac.digest('hex'));
		}catch(e){
			return callback(e)
		}
	}

	function Generate (value, callback){
		return _generate(value, callback);
	}

	return {
		Initialize : Initialize,
		Generate : Generate
	}

})();

module.exports = sha256;