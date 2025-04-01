// /*=================THEME=================*/
//         // HC = "high contrast"
//         // LC = "low contrast"
// var settingThemeHandler = function () {
//     if (settings.theme) { // is true
//         $("html").addClass("HC");
//         $("html").removeClass("LC");
//     }
//     else { // is false
//         $("html").addClass("LC");
//         $("html").removeClass("HC");
//     }
// };

// Setting.addToggle("theme", {
//     label    : "A more accessible color scheme and timer placement.",
//     default  : false,
//     onInit   : settingThemeHandler,
//     onChange : settingThemeHandler
// });