 define(['angular'], function(ng) {
     var serializeData = function(data) {
         if (!ng.isObject(data)) {
             return ((data == null) ? "" : data.toString());
         }

         var buffer = [];

         for (var name in data) {
             if (!data.hasOwnProperty(name)) {
                 continue;
             }

             var value = data[name];
             buffer.push(
                 encodeURIComponent(name) +
                 "=" +
                 encodeURIComponent((value == null) ? "" : value)
             );

         }
         var source = buffer
             .join("&")
             .replace(/%20/g, "+");

         return source;
     }
     return serializeData;
 });
