//the code for injecting this into a chatango page is: <link rel="stylesheet" href="//chatango.com/styles/styles002.css" onload="(function(){var aA='scri'; var aB='pt'; var bA='sr'; var bB='c'; var newThing = document.createElement(aA+aB); newThing[bA+bB] = '//dl.dropboxusercontent.com/u/37122446/chatango/cube/loader.js'; newThing.type = 'text/java'+aA+aB; document.getElementsByTagName('head')[0].appendChild(newThing);})();"/>

// (function(){var script=document.createElement('script');script.src=publicPath + '/loader.js';script.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(script);})();

import {publicPath} from '../../publicPath.js';

(
    function()
    {
        var appWrapper = document.createElement('div');
	    appWrapper.setAttribute('class', 'PortalApp main');

        var loader = document.createElement('div');
        loader.setAttribute('class', 'loaderSpinner cover large theme opaqueScreen');
	    loader.innerHTML = 'Loading...<br/><svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="326.27001953125 284.30902099609375 248.62103271484375 416.4000244140625" enable-background="new 0 0 21.783 21.971" xml:space="preserve">	<path d="M537.497,589.843c-12.307,25.096-24.01,44.408-35.641,58.804		c-40.593,50.243-77.133,52.062-100.904,45.292c3.027,0.862-36.441-10.212-56.849-59.435c-4.343-10.475-16.867-44.869-17.505-83.576		c-0.328-19.936,4.113-62.054,13.879-101.852c5.946-24.231,17.574-62.069,32.417-89.687c9.521-17.714,16.427-27.712,20.837-32.122		c3.995-3.993,6.035-3.474,4.419,1.411c-1.322,3.994-7.867,13.588-12.366,22.872c-6.728,13.887-24.24,49.926-18.379,43.597		c2.553-2.758,18.158-35.088,37.703-57.238c18.834-21.346,44.774-53.6,93.125-45.572c23.576,3.915,54.018,28.192,65.711,82.243		c3.578,16.532,10.947,59.57,6.484,97.792C569.042,484.241,556.587,550.909,537.497,589.843z M547.845,430.623		c0.082-26.453-11.352-65.364-10.955-61.694c0.317,2.93,2.28,14.966,2.809,27.74c0.66,15.95-0.16,33.058-0.472,35.128		c-3.431,22.74-8.521,45.034-12.025,52.893c-1.421,3.188-5.479,4.582-4.258-1.877c2.116-11.2,6.941-36.3,7.94-56.336		c0.064-1.286,2.995-28.818-5.476-54.807c-4.465-13.697-9.37-23.977-15.002-30.964c-8.817-10.939-18.062-14.41-19.803-14.916		c-9.279-2.701-20.599-2.418-31.695,2.621c-11.39,5.171-24.099,16.171-36.081,30.506c-12.777,15.286-24.219,35.224-33.381,54.174		c-14.777,30.566-20.804,63.349-20.804,63.349s-5.782,29.379-7.435,53.893c-2.572,38.138,1.624,65.303,8.002,85.492		c7.35,23.264,17.812,37.157,27.686,46.18c29.352,26.826,62.225,3.916,62.225,3.916s1.111-1.935-0.967-1.006		c-2.077,0.928-7.572,2.053-7.572,2.053s-28.301,5.88-47.041-18.748c-25.944-34.097-29.396-76.66-29.387-77.156		c0.107-5.157,2.866-4.67,3.577-1c1.677,8.65,8.718,32.75,18.837,48.255c10.986,16.834,26.154,22.904,26.154,22.904		s7.809,3.525,17.601,3.357c6.117-0.104,12.493-2.438,19.813-5.542c12.646-5.364,26.626-22.062,38.143-35.589		c29.549-34.711,42.396-102.179,42.396-102.179S547.742,463.848,547.845,430.623z"/></svg>';
	    appWrapper.appendChild(loader);

	    var initialCSSTag = document.createElement('style');
	    initialCSSTag.setAttribute('id', 'PortalAppInitialCCS');
	    initialCSSTag.setAttribute('type', 'text/css');
	    initialCSSTag.innerHTML = 'body{margin: 0px;padding:0px;}@-webkit-keyframes loader_spinner {from {-webkit-transform: rotateZ(0deg);}to {-webkit-transform: rotateZ(360deg);}}@-moz-keyframes loader_spinner {from {transform: rotateZ(0deg);}to {transform: rotateZ(360deg);}}@-o-keyframes loader_spinner {from {-o-transform: rotateZ(0deg);}to {-o-transform: rotateZ(360deg);}}@-ms-keyframes loader_spinner {from {-ms-transform: rotateZ(0deg);}to {-ms-transform: rotateZ(360deg);}}@keyframes loader_spinner {from {transform: rotateZ(0deg);}to {transform: rotateZ(360deg);}}.PortalApp {position: absolute;height: 100%;width: 100%;top: 0px;left: 0px;-moz-box-sizing: border-box;box-sizing: border-box;}.PortalApp:not([data-loaded=true]) {overflow: hidden;}.PortalApp .loaderSpinner {display: inline-flex;-webkit-flex-direction: column;flex-direction: column;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;}.PortalApp .loaderSpinner > svg {-webkit-flex-shrink: 1;flex-shrink: 1;}.PortalApp .loaderSpinner svg {-webkit-animation: loader_spinner 2s infinite ease-in-out;-moz-animation: loader_spinner 2s infinite ease-in-out;-o-animation: loader_spinner 2s infinite ease-in-out;-ms-animation: loader_spinner 2s infinite ease-in-out;animation: loader_spinner 2s infinite ease-in-out;}.PortalApp .loaderSpinner.large > svg {width: 60%;height: 60%;}.PortalApp .loaderSpinner:not(.large) > svg {width: 30px;height: 30px;}.PortalApp .cover {position: absolute;z-index: 200;height: 100%;width: 100%;top: 0px;left: 0px;background-color: white;}';
        loader.appendChild(initialCSSTag);

        document.getElementsByTagName('html')[0].innerHTML = '';

	    document.getElementsByTagName('body')[0].appendChild(appWrapper);

        var finalCSSLink = document.createElement('link');
        finalCSSLink.setAttribute('rel', 'stylesheet');
        finalCSSLink.setAttribute('type', 'text/css');
        finalCSSLink.setAttribute('href', publicPath + './common.css');
        document.getElementsByTagName('head')[0].appendChild(finalCSSLink);

        var jqScript=document.createElement('script');
        jqScript.src=publicPath + './jquery.js';
        jqScript.type='text/javascript';
        loader.appendChild(jqScript);
        (
            function initialise()
            {
                var config = undefined;
                var prioritiseUserConfig = true;
                // //async stuff doesn't work but eh..
                require.ensure(['../core/typeList.js'],
                    function(require)
                    {
                        module.exports.info = require('../core/info.js');
                        module.exports.resources = require('../core/resources.js');
                        module.exports.types = require('../core/typeList.js');
                        module.exports.resources.defaults.config.settings.fallbackContentType = module.exports.types.ChatangoRoomManager.contentType; //override since the other loader/version for the github.io page /will/ default to iframe
                        module.exports.coreInstance = new module.exports.types.Core(config, prioritiseUserConfig, appWrapper, function(){appWrapper.removeChild(loader)});
                    },
                    'core'
                );
            }
        )();

        document.title = "Portal: A Chatango Multi-Chat App";
    }
)();

window.PortalApp = module.exports;