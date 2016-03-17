$(window).load(function()
{
// Define the style variables
var $background_color = "#ffffff";
var $font = "'Roboto Slab',Georgia,Serif";
var $font_weight = "normal";
var $border_color = "#eaeaea";
var $border_radius = "0px";
var $text_color = "#1C1C1C";
var $link_color = "#07319B";
var $name_color = "#07319B";
var $subtext_color = "#939393"; // Colour of any small text
var $sublink_color = "#07319B"; // Colour of smaller links, eg: @user, date, expand/collapse links
var $avatar_border = "0px solid #07319B";
var $avatar_border_radius = "50%";
var $icon_color = "#CAC8C8"; // Color of the reply/retweet/favourite icons
var $icon_hover_color = "#07319B"; // Hover color the reply/retweet/favourite icons
var $header_background = "#fff";
var $header_text_color = "#07319B";
var $follow_button_link_color = "#5ea9dd";
var $footer_background = "#CAC8C8";
var $footer_tweetbox_background = "#fff";
var $footer_tweetbox_textcolor = "#1C1C1C";
var $footer_tweetbox_border ="0px";
var $load_more_background ="#07319B";
var $load_more_text_color = "#CAC8C8";
var $show_summarty_link_text_color = "#CAC8C8";
var $show_summarty_link_text_hover = "#07319B";

// Apply the styles
$("#twitter-widget-0").contents().find('head').append('<style>/*.html, body, h1, h2, h3, blockquote, p, ol, ul, li, img, iframe, button, .tweet-box-button{font-family:'+$font+' !important;*/font-weight:'+$font_weight+' !important;} .timeline {border-radius: ' + $border_radius + '!important;} .thm-dark .retweet-credit,.h-feed, .stats strong{color:' + $text_color + ' !important;}a:not(.follow-button):not(.tweet-box-button):not(.expand):not(.u-url), .load-more{color:' + $link_color + ' ;} .follow-button{color:' + $follow_button_link_color + ' !important;} .timeline-header{background:' + $header_background + '; border-radius:' + $border_radius + ' ' + $border_radius + ' 0px 0px;} .timeline-header h1 a{color:' + $header_text_color + ' !important;} .timeline-footer{border-radius:0px 0px ' + $border_radius + ' ' + $border_radius + ' !important; background:' + $footer_background + ' !important;} .tweet-box-button{background-color:' + $footer_tweetbox_background + ' !important; color:' + $footer_tweetbox_textcolor + ' !important; border:' + $footer_tweetbox_border + ' !important;} .timeline .stream, .tweet-actions{background:' + $background_color + ' !important;} .tweet-actions{box-shadow:0 0 10px 5px' + $background_color + ' !important;} .ic-mask{background-color:' + $icon_color + ' !important;} a:hover .ic-mask, a:focus .ic-mask{background-color:' + $icon_hover_color + ' !important;} .header .avatar{border-radius: '+ $avatar_border_radius + ' !important; border:' + $avatar_border + ' !important;} .p-name{color:'+$name_color+' !important;} .customisable-border{border-color:' + $border_color + ' !important;} span.p-nickname, .u-url, .expand{color:'+$sublink_color+' !important;} .load-more, .no-more-pane {background-color:' + $load_more_background + ' !important; color:' + $load_more_text_color + '!important;} .retweet-credit{color:' + $subtext_color + ' !important;} .customisable-highlight b{color:' + $show_summarty_link_text_color + ' !important;} .customisable-highlight b:hover{color:' + $show_summarty_link_text_hover + ' !important;} .timeline-footer {padding:6px 10px 9px 10px !important;} </style>');
});
