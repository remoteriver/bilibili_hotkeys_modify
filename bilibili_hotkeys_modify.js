// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *://www.bilibili.com/video/av*
// @include      *://www.bilibili.com/video/BV*
// @include      *://www.bilibili.com/bangumi/play/ep*
// @include      *://www.bilibili.com/bangumi/play/ss*
// @include      *://m.bilibili.com/bangumi/play/ep*
// @include      *://m.bilibili.com/bangumi/play/ss*
// @include      *://bangumi.bilibili.com/anime/*
// @include      *://bangumi.bilibili.com/movie/*
// @include      *://www.bilibili.com/bangumi/media/md*
// @include      *://www.bilibili.com/blackboard/html5player.html*
// @grant        none
// ==/UserScript==

const log = console.log.bind(console, 'injector:')

const detectScriptEngine = () => {

    var scriptEngine;

    if (typeof GM_info === "undefined") {
        scriptEngine = "plain Chrome (Or Opera, or scriptish, or Safari, or rarer)";
        // See https://stackoverflow.com/a/2401861/331508 for optional browser sniffing code.
    }
    else {
        scriptEngine = GM_info.scriptHandler || "Greasemonkey";
    }
    console.log('This userscript is running on ' + scriptEngine + '.');

}

detectScriptEngine()

const main = () => {
    document.addEventListener('keydown', keyDownHandler, true);
}

const keyDownHandler = (event) => {
    var x = event.keyCode
    // up & down
    if(x == 38 || x==40){
        event.stopPropagation()
    }
    //
    if(x == 13){
        console.log(x + " pressed")
        var fullScreen = document.querySelector('.mode-fullscreen')//webfullscreen
        if(fullScreen) event.stopPropagation()
        var btn = document.querySelector('.bilibili-player-video')
        if(btn) btn.click()
    }
}

main()

