// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
function showRegisterForm(){$(".loginBox").fadeOut("fast",function(){$(".registerBox").fadeIn("fast"),$(".login-footer").fadeOut("fast",function(){$(".register-footer").fadeIn("fast")}),$(".modal-title").html("Register with")}),$(".error").removeClass("alert alert-danger").html("")}function showLoginForm(){$("#loginModal .registerBox").fadeOut("fast",function(){$(".loginBox").fadeIn("fast"),$(".register-footer").fadeOut("fast",function(){$(".login-footer").fadeIn("fast")}),$(".modal-title").html("Login with")}),$(".error").removeClass("alert alert-danger").html("")}function openLoginModal(){showLoginForm(),setTimeout(function(){$("#loginModal").modal("show")},230)}function openRegisterModal(){showRegisterForm(),setTimeout(function(){$("#loginModal").modal("show")},230)}function loginAjax(){shakeModal()}function shakeModal(){$("#loginModal .modal-dialog").addClass("shake"),$(".error").addClass("alert alert-danger").html("Invalid email/password combination"),$('input[type="password"]').val(""),setTimeout(function(){$("#loginModal .modal-dialog").removeClass("shake")},1e3)}