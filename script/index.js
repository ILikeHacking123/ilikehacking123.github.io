    function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    function checkCookie() {
        var user=getCookie("username");
         if (user != null) {
            document.getElementById("person").innerHTML =
            "Hello " + user + "!";
        } else {
           user = prompt("What your name?","");
           if (user != "" && user != null) {
               setCookie("username", user, 90);
           }
        }
    }
