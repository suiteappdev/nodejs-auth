// controller base


var ctrlName = function (server){
    			
       function get(req, res, next){
       	// code
       }

       function del(req, res, next){
       	// code
       }

       function put(req, res, next){
       	// code
       }

       function update(req, res, next){
       	// code
       }


       server.get('api/ctrlName',get);
       server.post('api/ctrlName',put);
       server.put('api/ctrlName',put);
       server.del('api/ctrlName',del);

}


module.exports = ctrlName;