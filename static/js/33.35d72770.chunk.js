(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{713:function(n,e,t){!function(n){"use strict";var e="><+-.,[]".split("");n.defineMode("brainfuck",function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(n,t){if(n.eatSpace())return null;n.sol()&&(t.commentLine=!1);var o=n.next().toString();return-1===e.indexOf(o)?(t.commentLine=!0,n.eol()&&(t.commentLine=!1),"comment"):!0===t.commentLine?(n.eol()&&(t.commentLine=!1),"comment"):"]"===o||"["===o?("["===o?t.left++:t.right++,"bracket"):"+"===o||"-"===o?"keyword":"<"===o||">"===o?"atom":"."===o||","===o?"def":void(n.eol()&&(t.commentLine=!1))}}}),n.defineMIME("text/x-brainfuck","brainfuck")}(t(35))}}]);