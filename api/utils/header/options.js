var options = (function(){
	var _options = ['PUT', 'DELETE', 'OPTIONS', 'POST', 'GET'];

	
	//todos los metodos _ estan encapsulados con un wrap
	function readOnly(){
		_readOnly();
	}

	function _readOnly(){
		return _options.filter(function(option){
			return option  == 'GET';
		}).toString();
	}

	function grant(){
		_grant();
	}

	function _grant() {
		return _options.join();
	}

	function readAndWrite(){
		_readAndWrite();
	}

	function _readAndWrite(){
		return _options.filter(function(option){
			return option == 'POST' || option == 'DELETE' || option == 'PUT';
		}).join();
	}

	function checkMethods(){
		_checkMethods();
	}

	function _checkMethods (){
		return _options.filter(function(option){
			return option == 'OPTIONS';
		}).toString();
	}

	return {
		readOnly : readOnly,
		grant : grant,
		readAndWrite : readAndWrite,
		checkMethods : checkMethods 
	}
})();

module.exports = options;