(function() {
    document.addEventListener('DOMContentLoaded', function() {
        function getCookie(name) {
            var cookieArray = document.cookie.split(';');
            var cookieName = name + "=";
            console.log("Checking cookies", document.cookie);
            for(var i = 0; i < cookieArray.length; i++) {
                var cookie = cookieArray[i].trim();
                if (cookie.indexOf(cookieName) == 0) {
                    console.log("Cookie found", cookie); // Debug: Cookie found
                    return cookie.substring(cookieName.length, cookie.length);
                }
            }
            console.log("Cookie not found", name);
            return null;
        }

        function insertCookieValueIntoElement() {
            var eidCookieValue = getCookie("eidCookie");
            console.log("Cookie value", eidCookieValue);

            if(eidCookieValue) {
                var element = document.getElementById("eid");
                console.log("Element found", element);

                if(element) {
                    element.value = eidCookieValue;
                } else {
                    console.log("Element not found");
                }
            }
        }

        insertCookieValueIntoElement();
    });
})();
