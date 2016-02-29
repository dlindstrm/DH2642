// A hash to store our routes:
var routes = {};
// The route registering function:
function route (path, templateId, controller) {
  routes[path] = {templateId: templateId, controller: controller};
}

function router () {
    // Current route url (getting rid of '#' in hash as well):
    var url = location.hash.slice(1);
    var urlList = [];
    if(url == "") {
    	urlList[0] = '/';
    }
    else {
    	urlList = url.split('/'); 
    }

    // Get route by url:
    var route = routes[urlList[0]];
    $(".router-view").css("display", "none");
    if(urlList.length > 1) {
    	route.controller.init(urlList[1]);
    }
    else {
    	route.controller.init();
    }
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);