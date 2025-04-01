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

/*=================TIME=================*/
var settingDelayLengthNames = ["not enough (1 min - default)", "almost enough (3 min)", "barely enough (5 min)"]
var settingDelayLengthHandler = function () {

	// switch on the theme name to add the requested theme class
	switch (settings.speed) {
    case "not enough (1 min - default)":
         State.variables.speed = 60;
	case "almost enough (3 min)":
		State.variables.speed = 180;
		break;
	case "barely enough (5 min)":
  		State.variables.speed = 300;
		break;
	}
};

Setting.addList("timer", {
    label    : "How much time do I have?",
    default  : "not enough (1 min - default)",
	list     : settingDelayLengthNames,
	onInit   : settingDelayLengthHandler,
	onChange : settingDelayLengthHandler
});
