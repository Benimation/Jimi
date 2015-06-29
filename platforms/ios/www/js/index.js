/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("Device ready.");
		
    }
};



// First screen
window.scrollTo(0, 0);

$(document).ready(function(e) {
	setTimeout(function() {
		$("#splash").css("opacity", "0");
		
		setTimeout(loadScreen1, 100);
		
	}, 2000);
	
	
	
	function loadScreen1() {
		$("#container").load("pages/screen1.html", function() {
			$("#splash").css("display", "none");
			
		});
		
		$("#container").css("opacity", "1");
		
	}
    
});

// menu knoppen
function menuin() {
	$("#menu").addClass("open");
	
}

function menuout() {
	$("#menucontainer").css("opacity", "0");
	$("#menucontainer").css("display", "none");
	
}

$("#homeknop").click(function(e) {
	$("#container").css("opacity", "0");
	
    setTimeout(function() {
		$("#container").load("pages/screen2.html", function() {
			$("#container").css("opacity", "1");
			
		});
	}, 100);
	
	setTimeout(function() {
		$("#menu").removeClass("open");
		setTimeout(menuout, 501);
		
	}, 201);
    
});

$("#tutknop").click(function(e) {
	$("#container").css("opacity", "0");
	
    setTimeout(function() {
		$("#container").load("pages/screen1.html", function() {
			$("#container").css("opacity", "1");
			
		});
	}, 100);
	
	setTimeout(function() {
		$("#menu").removeClass("open");
		setTimeout(menuout, 501);
		
	}, 201);
    
});

$("#loginknop").click(function(e) {
	$("#container").css("opacity", "0");
	
    setTimeout(function() {
		$("#container").load("pages/login.html", function() {
			$("#container").css("opacity", "1");
			
		});
	}, 100);
	
	setTimeout(function() {
		$("#menu").removeClass("open");
		setTimeout(menuout, 501);
		
	}, 201);
    
});

$("#infoknop").click(function(e) {
	$("#container").css("opacity", "0");
	
    setTimeout(function() {
		$("#container").load("pages/info.html", function() {
			$("#container").css("opacity", "1");
			
		});
	}, 100);
	
	setTimeout(function() {
		$("#menu").removeClass("open");
		setTimeout(menuout, 501);
		
	}, 201);
    
});



function loadApp(page) {
	$("#container").css("opacity", "0");
	
    setTimeout(function() {
		$("#container").load("pages/screen" + page + ".html", function() {
			$("#container").css("opacity", "1");
			
		});
	}, 100);
	
}



// feedback messages
function feedback(message, delay) {
	$("#feedback").html(message);
	$("#feedbackcontainer").css("display", "block");
	setTimeout(function() {$("#feedbackcontainer").css("opacity", "1");}, 1);
	
	setTimeout(function() {
		$("#feedback").empty();
		$("#feedbackcontainer").css("opacity", "0");
		setTimeout(function() {$("#feedbackcontainer").css("display", "none");}, 101);
		
	}, delay);
	
}



// Android back button
document.addEventListener("backbutton", backKeyDown, true); 


function backKeyDown() {
    $("#back").trigger("click");
	
}



// user
var theuser = "";
var theuserid;
var thepass = "";

var rememberpage = "";
var voteupdater;