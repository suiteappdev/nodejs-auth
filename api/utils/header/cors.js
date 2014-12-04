var cors = (function(){
	function cors(domain){
		_cors(domain);
	}

	function _cors (domain){
		return 'Access-Control-Allow-Origin', typeof(domain) == String  ? domain : domain.join();
	}

	return {
		cors : cors
	}
})();

module.exports = cors;