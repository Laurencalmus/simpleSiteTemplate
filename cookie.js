function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile + ".css");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

var createCookie = function(name, value, days) {
    var domain = 'http://127.0.0.1/';
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    if(document.domain === 'localhost') {
        document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';path=/;' ;
    } else {
        document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';domain=.' + document.domain + ';path=/;';
    }
    alert("Your Cookie : " + document.cookie);
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

$('#white').click(function () {
    changeCSS('style', 0);
    createCookie('cookie','white',3);
  });
  $('#black').click(function () {
    changeCSS('styleBlackHeader', 0);
    createCookie('cookie','black',3);
  }); 
  

  $(document).ready(function(){
    updateResult();
  });

  function updateResult() {
    var cookieValue = getCookie('cookie');
    if (cookieValue.length) {
      $('#link').attr('href', cookieValue + '.css');
    }
  }