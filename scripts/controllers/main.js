!function(){"use strict";function e(){var e=this;e.one="Please type your name here",e.two="Pelase type your email address",e.oneVal="Hichem ben chaabene",e.twoVal="benchaaben.hichem@live.fr",e.tip="You should type your full name including special characters",e.tipTwo="Your email should not be more than 10 characters",e.isError=!0,e.flErrors="This is an error message",e.simpleNumber="123",e.validateNumber=function(e){e||(e=""),console.log(e),e.length>10&&console.log("too long")}}angular.module("app").controller("MainCtrl",e),e.$inject=["$scope"]}();