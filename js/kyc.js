
//Start Base 64 
var formActionUrl = 'https://dev.kyc2020.com/'; 
//var formRestUrl="http://192.168.5.81:8081";
var captchaUrlPath='https://dev.kyc2020.com/kyc/captcha/';
var websiteUrl ="https://dev.kyc2020.com/kyc/";
var currentUrl = $(location).attr('href');
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode:function(e){
		var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);
		while(f<e.length){
		n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;
		if(isNaN(r))
		{
		u=a=64
		}else if(isNaN(i)){
		a=64
		}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)
		}return t
		},
		decode:function(e){
		var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");
		while(f<e.length){
		s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64)
		{
			t=t+String.fromCharCode(i)}
		}
		t=Base64._utf8_decode(t);
		return t
		},
		_utf8_encode:function(e){
		e=e.replace(/rn/g,"n");var t="";
		for(var n=0;n<e.length;n++){
		var r=e.charCodeAt(n);
		if(r<128){
			t+=String.fromCharCode(r)
			}else if(r>127&&r<2048){
				t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)
			}else{
			t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)
			}
		}return t
		},
		_utf8_decode:function(e){
		var t="";var n=0;var r=c1=c2=0;
		while(n<e.length){
		r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224)
		{c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2
		}else{
		c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3
		}
		}return t
		}
		};
//End Base 64

function submitSignUpForm(){
	var email 		= $("#regEmail").val();
	var pwd 		= $("#regpwd").val();
	var vrfypwd 	= $("#regcpass").val();
	var captcha     = $("#captcha").val();
	var captchaKey =$("#captchaKey").val();
	if(email.indexOf("'")!=-1){
		$('#emailError').html('Please enter a valid email address.');
		return false;
	}
	if(!isEmailAddressValid(email)){
		$('#emailError').html('Please enter a valid email address.');
		$("#regEmail").focus();
		return false;
	}
	var re = "";
    re = /[0-9]/;
    if(!re.test(pwd)) {
    	$('#passError').html('1. Password should be between 8 to 16 characters only.<br>2. It should contain atleast 1 upper case letter,1 lower case letter, 1 numeric value and special characters(!@#$^&).');
		$("#regpwd").focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(pwd)) {
    	$('#passError').html('1. Password should be between 8 to 16 characters only.<br>2. It should contain atleast 1 upper case letter,1 lower case letter, 1 numeric value and special characters(!@#$^&).');
		$("#regpwd").focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(pwd)) {
    	$('#passError').html('1. Password should be between 8 to 16 characters only.<br>2. It should contain atleast 1 upper case letter,1 lower case letter, 1 numeric value and special characters(!@#$^&).');
		$("#regpwd").focus();
      return false;
    }
	re =/[~`|•√π÷×¶∆£€¢^°={}\%©®™✓>>:?]/;
	if(re.test(pwd)) {
    	$('#passError').html('1. Password should be between 8 to 16 characters only.<br>2. It should contain atleast 1 upper case letter,1 lower case letter, 1 numeric value and special characters(!@#$^&).');
		$("#regpwd").focus();
      return false;
    }
    if((parseInt(pwd.length)<8) || (parseInt(pwd.length)>16)) {
    	$('#passError').html('1. Password should be between 8 to 16 characters only.<br>2. It should contain atleast 1 upper case letter,1 lower case letter , 1 numeric value and special characters(!@#$^&).');
		$("#regpwd").focus();
      return false;
    }
   if((parseInt(vrfypwd.length)<8) || (parseInt(vrfypwd.length)>16)) {
	   $('#passError').html('1. Password should be between 8 to 16 characters only.<br>2. It should contain atleast 1 upper case letter,1 lower case letter, 1 numeric value and special characters(!@#$^&).');
	   $("#regpwd").focus();
      return false;
    }
	if(pwd!=vrfypwd){
		$('#passError').html('Password and Confirm Password must be same.');
		$("#regpwd").focus();
		return false;	
	}
	/*if(captcha != captchaKey){
		$('#captchaError').html('You have entered wrong captcha.');
		return false;
	}*/
	return true;
	
	
  }
 
function isEmailAddressValid(email)
{
var str = email;
 var at="@";
 var dot=".";
 var lat=str.indexOf(at);
 var lstr=str.length;
 var ldot=str.indexOf(dot);
	   if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
	  	 return false;
	   }
	   if (str.indexOf(at,(lat+1))!=-1){ 
		 return false;
	   } 
	   if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		 return false;
	   }
	   if (str.indexOf(dot,(lat+2))==-1){
	   	 return false;
	   }
	   if (str.indexOf(" ")!=-1){
		 return false;
	   }
	   if (!ValidateEmail(str) ){
			return false;
        }
    return true;     
 }
 function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
   }
/* var captchaStatus="";
 var respCaptcha="";
var verifyCallback = function(response) {
		respCaptcha = response;
		console.log(respCaptcha); 
		 $.get('https://jsonip.com/', function(r){            
			var url=formActionUrl+"AuthUser?jsonp=callback";
			var data = "Action=verifyCaptcha&captchaResponse="+respCaptcha+"&remoteip="+r.ip+"&sid="+Math.random();
			var methodType="GET";
			var jsonpCallSuccess = callbackCaptchaVf;
			var jsonpCall ="callback";
			var error="errorfunction";
			ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
           });
		   console.log(captchaStatus);
      };
function callbackCaptchaVf(json){
	captchaStatus = json.success;
}*/


function recaptchaCallback() {
	var response = grecaptcha.getResponse();
	jQuery("#hidden-grecaptcha").val(response);
	
}
function recaptchaExpired() {
	$button = jQuery("#signupSubmit");
	jQuery("#hidden-grecaptcha").val("");
}


$(document).ready(function() {
	var captchaStatus="";
	add_chatinline();

$("#smartListForm").submit(function(event){
	event.preventDefault();
	submitSmartListForm();
	//$('#resultLoading').css('display', 'block');
});	
	//Login Form Submit
$("#loginForm").submit(function(event){
event.preventDefault();
submitForm();
});	

//Forgot Password Form Submit
$("#forgotForm").submit(function(event){
event.preventDefault();
submitForgotForm();
$('#resultLoading').css('display', 'block');
});
$("#consultingFrom").submit(function(event){
	event.preventDefault();
	submitBookMeeting();
});	

//For Signup Form Submit
$("#signupForm").submit(function(event){
	event.preventDefault();
	
	if($("#hidden-grecaptcha").val() == ""){		
       $("#captchaError").html("Please verify the captcha");
	   $("#captchaError").show();
	   $("#captchaError").delay(3000).fadeOut();
       $("#captchaError").focus();
		return false;
	}
	
	if(!submitSignUpForm()){
		return false;
	}else{
		submitSignUpFreeForm();
	}
	$('#resultLoading').css('display', 'block');
});	

//Signup For Paid User
$("#signupPriceForm").submit(function(event){
	event.preventDefault();
	
	if($("#hidden-grecaptcha").val() == ""){
       $("#captchaError").html("Please verify the captcha");
	   $("#captchaError").show();
	   $("#captchaError").delay(3000).fadeOut();
       $("#captchaError").focus();
		return false;
	}
	if(!submitSignUpForm()){
		return false;
	}else{
	submitSignUpPaidForm();
	}
	$('#resultLoading').css('display', 'block');
});	


$("#dialog_contact").submit(function(event){
event.preventDefault();
var contactEmail = $('#contactEmail').val();
     if(contactEmail.indexOf("'")!=-1){
		$('#mailError').html('Please enter a valid email address.');
		return false;
	 }
	if(!isEmailAddressValid(contactEmail)){
		$('#mailError').html('Please enter a valid email address.');
		return false;
	}
submitContactForm();
$('#successDiv').css('display', 'none');
$('#resultLoading').css('display', 'block');
});

//Start, Get Email Password from Cookies
/*var remember = $.cookie('remember');
    if (remember == 'true') 
    {
		
        var email = $.cookie('email');
        var password = Base64.decode($.cookie('pstoken'));
        // autofill the fields
        //$('#username').val(email);
        //$('#password').val(password);
    }*/
	
//End, Get Email Password from Cookies	

$('#login').on('shown.bs.modal', function () {
  var remember = $.cookie('remember');
    if (remember == 'true') 
    {
        var email = $.cookie('email');
        var password = Base64.decode($.cookie('pstoken'));
        // autofill the fields
        $('#username').val(email);
        $('#password').val(password);
		$('#remember_me').attr('checked','checked');
	}
});

$('#sign-up').on('shown.bs.modal', function () {
  grecaptcha.reset();
  $("#hidden-grecaptcha").val("");
});


$( "#login" ).mouseup(function() {
  $('#errorMsg').html('');
});

$( "#forgot-modal" ).mouseup(function() {
  $('#forgoterr').html('');
});
$(".ft-newsletter").mouseup(function() {
  $('#mailMsg').html('');
});
$( "#signupPriceForm" ).mouseup(function() {
  $('#emailError').html('');
  $('#passError').html('');
  $('#signup-err').html('');
  $('#captchaError').html('');
});

$( "#dialog_contact" ).mouseup(function() {
  $('#mailError').html('');
});
$("#consultingFrom").mouseup(function() {
	//alert(">>>"+$('#meetingMsg'));
	  $('#meetingMsg').html('');
	  
  });

function submitForm(){
	    $("#errorMsg").html('');
		var loginEmail = $("#username").val();
		var loginPassword =  $("#password").val();
		if(loginEmail ==""){
			$("#username").focus();
			$("#username").val("This field can't be empty.");
			return false;
		}
		if(loginPassword ==""){
			$("#password").val("This field can't be empty.");
			return false;
		}
        $('#resultLoading').css('display', 'block');
		//alert("loginPassword>>>>"+loginPassword);
		var url=formActionUrl+"AuthUser?jsonp=callback";
		loginPassword = Base64.encode(loginPassword);
		var data = "Action=userAuthenticate&UserProf_Pwd="+loginPassword+"&UserProf_Email="+loginEmail+"&sid="+Math.random();
		var methodType="GET";
		var jsonpCallSuccess = callback;
		var jsonpCall ="callback";
		var error="errorfunction";
		ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
	}
	
function submitForgotForm(){
		
		var forgotEmail = $("#forgotEmail").val();
		var url=formActionUrl+"AuthUser?jsonp=callback";
		var data = "Action=resetPassword&UserProf_Email="+forgotEmail+"&sid="+Math.random();
		var methodType="GET";
		var jsonpCallSuccess = callbackForgatePass;
		var jsonpCall ="callback";
		var error="errorfunction";
		ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
	}

function submitSignUpFreeForm(){
           /* var respCaptcha = $("#hidden-grecaptcha").val();
            $.get('https://jsonip.com/', function(r){            
			var url=formActionUrl+"AuthUser?jsonp=callback";
			var data = "Action=verifyCaptcha&captchaResponse="+respCaptcha+"&remoteip="+r.ip+"&sid="+Math.random();
			var methodType="GET";
			var jsonpCallSuccess = callbackCaptchaVerFree;
			var jsonpCall ="callback";
			var error="errorfunction";
			console.log("submitSignUpFreeForm:"+data);
			ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
           });*/
		   var UserProf_Pwd= $('[name=UserProf_Pwd]').val();
           $('[name=UserProf_Pwd]').val(Base64.encode(UserProf_Pwd));
			
		    var data = $("#signupForm").serialize();
			//console.log("callbackCaptchaVerFree:"+data);
			var url=formActionUrl+"Servlet?jsonp=callback";
			var methodType="GET";
			var jsonpCallSuccess = callbackSignUp;
			var jsonpCall ="callback";
			var error="errorfunction";
			ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
	}
function submitSignUpPaidForm(){
           /* var respCaptcha = $("#hidden-grecaptcha").val();
            $.get('https://jsonip.com/', function(r){   			
			var url=formActionUrl+"AuthUser?jsonp=callback";
			var data = "Action=verifyCaptcha&captchaResponse="+respCaptcha+"&remoteip="+r.ip+"&sid="+Math.random();
			var methodType="GET";
			var jsonpCallSuccess = callbackCaptchaVf;
			var jsonpCall ="callback";
			var error="errorfunction";
			ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
           });	*/
		   var userSignType = $("#SignupType").val();
		   if(userSignType == 'free'){
				$("#UserProf_paidamount").val('0');
				$("#UserProf_plan").val('Free');
				$("#UserProf_SubId").val('1');
				$("#UserProf_period").val('30');
				$("#UserProf_Type").val('2');
				
			}
			if(userSignType == 'payper249'){
				$("#UserProf_paidamount").val('$249');
				$("#UserProf_plan").val('$249');
				$("#UserProf_SubId").val('1');
				$("#UserProf_period").val('30');
				$("#UserProf_Type").val('2');
				$("#action").val('paidRegister');
			}
			if(userSignType == 'payper149'){
				$("#UserProf_paidamount").val('$149');
				$("#UserProf_plan").val('$149');
				$("#UserProf_SubId").val('1');
				$("#UserProf_period").val('30');
				$("#UserProf_Type").val('2');
				$("#action").val('paidRegister');
			}
			if(userSignType == 'payper99'){
				$("#UserProf_paidamount").val('$99');
				$("#UserProf_plan").val('$99');
				$("#UserProf_SubId").val('1');
				$("#UserProf_period").val('30');
				$("#UserProf_Type").val('2');
				$("#action").val('paidRegister');			
			}
			if(userSignType == 'standard'){
				$("#UserProf_paidamount").val('$1499');
				$("#UserProf_plan").val('$1499');
				$("#UserProf_SubId").val('1');
				$("#UserProf_period").val('30');
				$("#UserProf_Type").val('2');
				$("#action").val('paidRegister');		
			}
			if(userSignType == 'enhanced'){
				$("#UserProf_paidamount").val('$1999');
				$("#UserProf_plan").val('$1999');
				$("#UserProf_SubId").val('1');
				$("#UserProf_period").val('30');
				$("#UserProf_Type").val('2');
				$("#action").val('paidRegister');		
			}
			if(userSignType == 'premium'){				
				$("#UserProf_paidamount").val('$2999');
				$("#UserProf_plan").val('$2999');
				$("#UserProf_SubId").val('1');
				$("#UserProf_period").val('30');
				$("#UserProf_Type").val('2');
				$("#action").val('paidRegister');		
			}
		   var respCaptcha = $("#hidden-grecaptcha").val();
		    var subType = $("#UserProf_plan").val();
			var regEmail = $("#regEmail").val();
			var UserProf_Pwd= $('[name=UserProf_Pwd]').val();
            $('[name=UserProf_Pwd]').val(Base64.encode(UserProf_Pwd));
			if(subType == 'Free'){
				//submitSignUpFreeForm();
				var data = $("#signupPriceForm").serialize();
				var url=formActionUrl+"Servlet?jsonp=callback";
				var methodType="GET";
				var jsonpCallSuccess = callbackSignUp;
				var jsonpCall ="callback";
				var error="errorfunction";
				ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
			}else{
				 var data = "Action=getuserprof&UserProf_Email="+regEmail+"&plan="+subType+"&captchaResponse="+respCaptcha+"&sid="+Math.random();
				 var url=formActionUrl+"Servlet?jsonp=callback";
				 var methodType="POST";
				 var jsonpCallSuccess = callbackSignupAuth;
				 var jsonpCall ="callback";
				 var error="errorfunction";
				 ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
			}
}
/*function callbackCaptchaVf(json){
      if(json.success){
        var subType = $("#UserProf_plan").val();
		var regEmail = $("#regEmail").val();
		if(subType == 'Free'){
			//submitSignUpFreeForm();
        var data = $("#signupPriceForm").serialize();
		var url=formActionUrl+"Servlet?jsonp=callback";
		var methodType="GET";
		var jsonpCallSuccess = callbackSignUp;
		var jsonpCall ="callback";
		var error="errorfunction";
		ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
		}else{
	     var data = "Action=getuserprof&UserProf_Email="+regEmail+"&plan="+subType+"&sid="+Math.random();
		 var url=formActionUrl+"Servlet?jsonp=callback";
		 var methodType="GET";
		 var jsonpCallSuccess = callbackSignupAuth;
		 var jsonpCall ="callback";
		 var error="errorfunction";
		 ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
        }
       }else{
         $('#resultLoading').css('display', 'none');
          grecaptcha.reset();
       }
   
}*/
/*function callbackCaptchaVerFree(json){
       if(json.success){
        var data = $("#signupForm").serialize();
		console.log("callbackCaptchaVerFree:"+data);
		var url=formActionUrl+"Servlet?jsonp=callback";
		var methodType="GET";
		var jsonpCallSuccess = callbackSignUp;
		var jsonpCall ="callback";
		var error="errorfunction";
		ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
       }else{
          $('#resultLoading').css('display', 'none');
         grecaptcha.reset();
       }
   
}*/
function submitContactForm(){
		var name = $("#fullname").val();
		var contactEmail = $("#contactEmail").val();
		var contactWebsite = $("#contactWebsite").val();
		var contactPhone = $("#contactPhone").val();
		var contactSub = $("#contactSub option:selected").text();
		var contactMsg = $("#contactMsg").val();
	     var data = "Action=contactUsMail&name="+name+"&email="+contactEmail+"&companyWebsite="+contactWebsite+"&phone="+contactPhone+"&subject="+contactSub+"&message="+contactMsg+"&sid="+Math.random();
		 var url=formActionUrl+"AuthUser?jsonp=callback";
		 var methodType="GET";
		 var jsonpCallSuccess = callbackContactUs;
		 var jsonpCall ="callback"
		 var error="errorfunction";
		 ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
	
}	
function callback(json) {		 
	 var loginEmail = $("#username").val();
	 var loginPassword =  $("#password").val();
	 //alert(">"+loginPassword);
	 loginPassword = Base64.encode(loginPassword);
	// alert(">>"+loginPassword);
	 var stat = json.status;
	  $('#loginSubmit').val('Login');
	  $('#loginSubmit').removeAttr('disabled');
	  $('#loginSubmit').html('');
	 if(stat == 'Success' && json.show_catlist == "1" && (json.dialogbox_status =='1' || json.dialogbox_status =='0')){
		 setCookies();
		 $('<form action='+formActionUrl+'Servlet id="myForm" method="POST">'+
		   '<input type="hidden" name="Action" value="listSearch"/>'+
		  '<input type="hidden" name="UserProf_Email" value="'+loginEmail+'"/>'+
		  '<input type="hidden" name="UserProf_Pwd"  	value="'+loginPassword+'"/>'+
		   '<input type="hidden" name="addcat_lst" value="yes"/>'+
		   '<input type="hidden" name="rememberDialog" value="true"/>'+
		   '</form>').appendTo($(document.body)).submit();
	 }else if(stat == 'Success' && json.dialogbox_status == "1" && json.show_catlist=="0"){
		 setCookies();
		 $('<form action='+formActionUrl+'Servlet id="myForm" method="POST">'+
		   '<input type="hidden" name="Action" value="listSearch"/>'+
		  '<input type="hidden" name="UserProf_Email" value="'+loginEmail+'"/>'+
		  '<input type="hidden" name="UserProf_Pwd"  	value="'+loginPassword+'"/>'+
		   '<input type="hidden" name="addcat_lst" value="no"/>'+
		   '<input type="hidden" name="rememberDialog" value="true"/>'+
		   '</form>').appendTo($(document.body)).submit();
	 }else if(stat == 'Success' && (json.dialogbox_status == "0" || json.dialogbox_status == "" || json.show_catlist == "")){
		 $('#resultLoading').css('display', 'none');
		 $('#login').modal('hide');
		 $('#pepmsg').html(json.pepMessage);
		 $('#dailogMessage').modal('show');
	 }else if(json.userSignupType != '0' && stat.indexOf('Your account has expired') != -1 ){
         $('#resultLoading').css('display', 'none');
		 $('#login').modal('hide');
		 $('#pepmsg').html(json.pepMessage);
		 $('#dailogMessage').modal('show'); 
	 }else{
		 $('#resultLoading').css('display', 'none');
		 $("#errorMsg").html(json.status);
	 }
 }
 function setCookies(){
	 //Remember Password
		if ($('#remember_me').is(':checked')) {
			var email = $('#username').val();
			var password = Base64.encode($('#password').val());

			// set cookies to expire in 14 days
			$.cookie('email', email, { expires: 14 });
			$.cookie('pstoken', password, { expires: 14,secure: true });
			$.cookie('remember', true, { expires: 14 });                
		}else{
			// reset cookies
			$.cookie('email', null);
			$.cookie('pstoken', null);
			$.cookie('remember', null);
        }
		
 }
 

 
function callbackForgatePass(json) {		 
	$('#passworReset').val('Submit');
	$('#passworReset').removeAttr('disabled');
	$('#passworReset').html('');
	if(json.status =="error"){
		$('#resultLoading').css('display', 'none');
		$('#forgoterr').html('Server error');
	}else if(json.PwdReset_ErrorId != '-1'){
		$('#resultLoading').css('display', 'none');
		$('#forgoterr').html(json.PwdReset_ErrorDesc);
	}else{
		$('#resultLoading').css('display', 'none');
		$('#forgoterr').html(json.PwdReset_ErrorDesc);
	}

 }
 function callbackSignUp(json) {	
  $('#successDialogMsg').html("");
  var desc = json.UserErrorDesc;
  if(jQuery.trim(desc) != ""){
     var msg = desc.split("#")
     $('#resultLoading').css('display', 'none'); 
    if(msg[1] == "-1"){	
	    $('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');  
		$('#signup-err').html(msg[0]);	
		grecaptcha.reset();
		$("#hidden-grecaptcha").val("");
		var UserProf_Pwd= $('[name=UserProf_Pwd]').val();
		$('[name=UserProf_Pwd]').val(Base64.decode(UserProf_Pwd));
    }else{ 
        $('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');    
        $('#signupSubmit').attr('data-target','#successSignup');
        $('#sign-up').modal('hide'); 
        $('#successDialogMsg').html(msg[0]);
        $('#successSignup').modal('show'); 
        $('#successSignup').focus();
      
    }
}
 }
 $('#login').on('show.bs.modal', function () {
	 $("#username").val('');
	 $("#password").val('');
	 $('#errorMsg').html('');
});

 $('#forgot-modal').on('show.bs.modal', function () {
	 $("#forgotEmail").val('');
	 $('#forgoterr').html('');
});


// $('#sign-up').on('show.bs.modal', function () {
	//$("#signupFreeForm")[0].reset();
//});

function callbackSignupAuth(json){
	    var UserProf_Email= $('[name=UserProf_Email]').val();
		var UserProf_FName= $('[name=UserProf_FName]').val();
		var UserProf_LName= $('[name=UserProf_LName]').val();
		var UserProf_Pwd= $('[name=UserProf_Pwd]').val();
		var verPassword= $('[name=verPassword]').val();
		var UserProf_Company= $('[name=UserProf_Company]').val();
		var UserProf_City= $('[name=UserProf_City]').val();
		var UserProf_State= $('[name=UserProf_State]').val();
		var UserProf_Country= $('[name=UserProf_Country]').val();
		var UserProf_WrkPhn= $('[name=UserProf_WrkPhn]').val();
		var UserProf_HmPhn= $('[name=UserProf_HmPhn]').val();
		var UserProf_address= $('[name=UserProf_address]').val();
		var UserProf_CellPhn= $('[name=UserProf_CellPhn]').val();
		var UserProf_Zip= $('[name=UserProf_Zip]').val();
		var UserProf_Type= $('[name=UserProf_Type]').val();
		var UserProf_period= $('#UserProf_period').val();
		var UserProf_paidamount= $('#UserProf_paidamount').val();
		var UserProf_SubId= $('#UserProf_SubId').val();
		var newsletter= $('#newsletter').val();
		var UserProfile_Tmzn= $('#timezone').val();
		var UserProf_plan= $('#UserProf_plan').val();
	    var msg_id = json.msg.split('#');
	  if(msg_id[1] == '-1'){
		  $('#resultLoading').css('display', 'none');
		  $("#signup-err").html(msg_id[0]);
		  grecaptcha.reset();
		  $("#hidden-grecaptcha").val("");
		  return false;
	  }else if(msg_id[1] == '1'){
		     //UserProf_Pwd = Base64.encode(UserProf_Pwd);
			 $('<form action='+formActionUrl+'Servlet id="myForm" method="POST">'+
      			'<input type="hidden" name="Action" value="paidRegister"/>'+
      			'<input type="hidden" name="UserProf_Email" value="'+UserProf_Email+'"/>'+
      			'<input type="hidden" name="UserProf_FName"  	value="'+UserProf_FName+'"/>'+
      			'<input type="hidden" name="UserProf_LName"  	value="'+UserProf_LName+'"/>'+
      			'<input type="hidden" name="UserProf_Pwd"  	value="'+UserProf_Pwd+'"/>'+
				'<input type="hidden" name="verPassword"  	value="'+verPassword+'"/>'+
				'<input type="hidden" name="UserProf_Company"  	value="'+UserProf_Company+'"/>'+
				'<input type="hidden" name="UserProf_City"  	value="'+UserProf_City+'"/>'+
				'<input type="hidden" name="UserProf_State"  	value="'+UserProf_State+'"/>'+
				'<input type="hidden" name="UserProf_Country"  	value="'+UserProf_Country+'"/>'+
				'<input type="hidden" name="UserProf_WrkPhn"  	value="'+UserProf_WrkPhn+'"/>'+
				'<input type="hidden" name="UserProf_HmPhn"  	value="'+UserProf_HmPhn+'"/>'+
				'<input type="hidden" name="UserProf_address"  	value="'+UserProf_address+'"/>'+
				'<input type="hidden" name="UserProf_CellPhn"  	value="'+UserProf_CellPhn+'"/>'+
				'<input type="hidden" name="UserProf_Zip"  	value="'+UserProf_Zip+'"/>'+
				'<input type="hidden" name="UserProf_Type"  	value="'+UserProf_Type+'"/>'+
				'<input type="hidden" name="UserProf_period"  	value="'+UserProf_period+'"/>'+
				'<input type="hidden" name="UserProf_paidamount"  	value="'+UserProf_paidamount+'"/>'+
				'<input type="hidden" name="UserProf_SubId"  	value="'+UserProf_SubId+'"/>'+
				'<input type="hidden" name="newsletter"  	value="'+newsletter+'"/>'+
				'<input type="hidden" name="UserProfile_Tmzn"  	value="'+UserProfile_Tmzn+'"/>'+
				'<input type="hidden" name="UserProf_plan"  	value="'+UserProf_plan+'"/>'+
		        '</form>').appendTo($(document.body)).submit();	
			
	  }else{
		  $('#resultLoading').css('display', 'none');		   
		   $('#signupDialogMsg').html(msg_id[0]);
           $('#signupSubmit').attr('data-target','#dailogSignupMessage');		   
		   $('#sign-up').modal('hide');	
           $('.modal').modal('hide');		   
		   $('#dailogSignupMessage').modal('show');
		   $('#dailogSignupMessage').focus();
					 
	  }
}
function callbackContactUs(json){
	 $('#resultLoading').css('display', 'none');
     if(json.response == 250){
		 $('#successDiv').css('display', 'block');
		 $('#contactMessage').css('display', 'none');
		 $('#contactSucessMessage').html(json.status);
         $(window).scrollTop(0);	 
		 $('#successDiv').focus();
	 }else{
		 $('#contactSucessMessage').html(json.status);
		 $('#successDiv').focus();
	 }
}

});
function dialogSignupSubmit(){
	    $('#resultLoading').css('display', 'block');
	    var UserProf_Email= $('[name=UserProf_Email]').val();
		var UserProf_FName= $('[name=UserProf_FName]').val();
		var UserProf_LName= $('[name=UserProf_LName]').val();
		var UserProf_Pwd= $('[name=UserProf_Pwd]').val();
		var verPassword= $('[name=verPassword]').val();
		var UserProf_Company= $('[name=UserProf_Company]').val();
		var UserProf_City= $('[name=UserProf_City]').val();
		var UserProf_State= $('[name=UserProf_State]').val();
		var UserProf_Country= $('[name=UserProf_Country]').val();
		var UserProf_WrkPhn= $('[name=UserProf_WrkPhn]').val();
		var UserProf_HmPhn= $('[name=UserProf_HmPhn]').val();
		var UserProf_address= $('[name=UserProf_address]').val();
		var UserProf_CellPhn= $('[name=UserProf_CellPhn]').val();
		var UserProf_Zip= $('[name=UserProf_Zip]').val();
		var UserProf_Type= $('[name=UserProf_Type]').val();
		var UserProf_period= $('#UserProf_period').val();
		var UserProf_paidamount= $('#UserProf_paidamount').val();
		var UserProf_SubId= $('#UserProf_SubId').val();
		var newsletter= $('#newsletter').val();
		var UserProfile_Tmzn= $('#timezone').val();
		var UserProf_plan= $('#UserProf_plan').val();
		UserProf_Pwd = Base64.encode(UserProf_Pwd);
		verPassword = Base64.encode(verPassword);
	    $('<form action='+formActionUrl+'Servlet id="myForm" method="POST">'+
      			'<input type="hidden" name="Action" value="paidRegister"/>'+
      			'<input type="hidden" name="UserProf_Email" value="'+UserProf_Email+'"/>'+
      			'<input type="hidden" name="UserProf_FName"  	value="'+UserProf_FName+'"/>'+
      			'<input type="hidden" name="UserProf_LName"  	value="'+UserProf_LName+'"/>'+
      			'<input type="hidden" name="UserProf_Pwd"  	    value="'+UserProf_Pwd+'"/>'+
				'<input type="hidden" name="verPassword"  	    value="'+verPassword+'"/>'+
				'<input type="hidden" name="UserProf_Company"  	value="'+UserProf_Company+'"/>'+
				'<input type="hidden" name="UserProf_City"  	value="'+UserProf_City+'"/>'+
				'<input type="hidden" name="UserProf_State"  	value="'+UserProf_State+'"/>'+
				'<input type="hidden" name="UserProf_Country"  	value="'+UserProf_Country+'"/>'+
				'<input type="hidden" name="UserProf_WrkPhn"  	value="'+UserProf_WrkPhn+'"/>'+
				'<input type="hidden" name="UserProf_HmPhn"  	value="'+UserProf_HmPhn+'"/>'+
				'<input type="hidden" name="UserProf_address"  	value="'+UserProf_address+'"/>'+
				'<input type="hidden" name="UserProf_CellPhn"  	value="'+UserProf_CellPhn+'"/>'+
				'<input type="hidden" name="UserProf_Zip"  	    value="'+UserProf_Zip+'"/>'+
				'<input type="hidden" name="UserProf_Type"  	value="'+UserProf_Type+'"/>'+
				'<input type="hidden" name="UserProf_period"  	value="'+UserProf_period+'"/>'+
				'<input type="hidden" name="UserProf_paidamount"  	value="'+UserProf_paidamount+'"/>'+
				'<input type="hidden" name="UserProf_SubId"  	value="'+UserProf_SubId+'"/>'+
				'<input type="hidden" name="newsletter"  	value="'+newsletter+'"/>'+
				'<input type="hidden" name="UserProfile_Tmzn"  	value="'+UserProfile_Tmzn+'"/>'+
				'<input type="hidden" name="UserProf_plan"  	value="'+UserProf_plan+'"/>'+
		        '</form>').appendTo($(document.body)).submit();
}
function dialogSignupClose(){
	$('#dailogSignupMessage').modal('hide');
}
function closeDialog(){
	$('#resultLoading').css('display', 'block');
	 var loginEmail = $("#username").val();
	 var loginPassword =  $("#password").val();
	 loginPassword = Base64.encode(loginPassword);
	 var checkBox = $("#donotshow").is(':checked');
		 $('<form action='+formActionUrl+'Servlet id="myForm" method="POST">'+
      			'<input type="hidden" name="Action" value="listSearch"/>'+
      			'<input type="hidden" name="UserProf_Email" value="'+loginEmail+'"/>'+
      			'<input type="hidden" name="UserProf_Pwd"  	value="'+loginPassword+'"/>'+
      			'<input type="hidden" name="addcat_lst"  	value="no"/>'+
      			'<input type="hidden" name="rememberDialog"  	value="'+checkBox+'"/>'+
		        '</form>').appendTo($(document.body)).submit();	       
  }
 function dialogCancel(){
	 $('#resultLoading').css('display', 'block');
	 var loginEmail = $("#username").val();
	 var loginPassword =  $("#password").val();
     var checkBox = $("#donotshow").is(':checked');
     loginPassword = Base64.encode(loginPassword);
		 $('<form action='+formActionUrl+'Servlet id="myForm" method="POST">'+
      			'<input type="hidden" name="Action" value="listSearch"/>'+
      			'<input type="hidden" name="UserProf_Email" value="'+loginEmail+'"/>'+
      			'<input type="hidden" name="UserProf_Pwd"  	value="'+loginPassword+'"/>'+
      			'<input type="hidden" name="addcat_lst"  	value="no"/>'+
      			'<input type="hidden" name="rememberDialog"  	value="'+checkBox+'"/>'+
		        '</form>').appendTo($(document.body)).submit();	    
 }
  function dialogSubmit(){
	  $('#resultLoading').css('display', 'block');
	 var loginEmail = $("#username").val();
	 var loginPassword =  $("#password").val();
	 loginPassword = Base64.encode(loginPassword);
     var checkBox = $("#donotshow").is(':checked');
		 $('<form action='+formActionUrl+'Servlet id="myForm" method="POST">'+
      			'<input type="hidden" name="Action" value="listSearch"/>'+
      			'<input type="hidden" name="UserProf_Email" value="'+loginEmail+'"/>'+
      			'<input type="hidden" name="UserProf_Pwd"  	value="'+loginPassword+'"/>'+
      			'<input type="hidden" name="addcat_lst"  	value="yes"/>'+
      			'<input type="hidden" name="rememberDialog"  	value="'+checkBox+'"/>'+
		        '</form>').appendTo($(document.body)).submit();	    
 }
 function submitPaidForm(subType){
	if(subType == 'free'){
		//getCaptcha();
		$('#free').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#headerfree').attr('data-target','#sign-up');
		$('#comparefree').attr('data-target','#sign-up');
		$('#signupFromLog').attr('data-target','#sign-up');
		$('#frstwhitelable').attr('data-target','#sign-up');
		$('#whitelable').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('0');
		$("#UserProf_plan").val('Free');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('30');
		$("#UserProf_Type").val('2');
		
	}
	if(subType == 'payper249'){
		//getCaptcha();
		$('#pay249').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#comparepay249').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('$249');
		$("#UserProf_plan").val('$249');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('30');
		$("#UserProf_Type").val('2');
		$("#action").val('paidRegister');
	}
	if(subType == 'payper149'){
		//getCaptcha();
		$('#pay149').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#comparepay149').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('$149');
		$("#UserProf_plan").val('$149');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('30');
		$("#UserProf_Type").val('2');
		$("#action").val('paidRegister');
	}
	if(subType == 'payper99'){
		//getCaptcha();
		$('#pay99').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#comparepay99').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('$99');
		$("#UserProf_plan").val('$99');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('30');
		$("#UserProf_Type").val('2');
		$("#action").val('paidRegister');			
	}
	if(subType == 'standard'){
		//getCaptcha();
		$('#standard').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#comparestandard').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('$1499');
		$("#UserProf_plan").val('$1499');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('30');
		$("#UserProf_Type").val('2');
		$("#action").val('paidRegister');		
	}
	if(subType == 'enhanced'){
		getCaptcha();
		$('#enhanced').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#compareenhanced').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('$1999');
		$("#UserProf_plan").val('$1999');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('30');
		$("#UserProf_Type").val('2');
		$("#action").val('paidRegister');		
	}
	if(subType == 'premium'){
		//getCaptcha();
		$('#premium').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#comparepremium').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('$2999');
		$("#UserProf_plan").val('$2999');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('30');
		$("#UserProf_Type").val('2');
		$("#action").val('paidRegister');		
	}
	if(subType == 'ultimate'){
		//getCaptcha();
		$('#ultimate').attr('data-target','#sign-up');
		//$('#signupPriceForm')[0].reset();
		$('#signupPriceForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
		$('#compareultimate').attr('data-target','#sign-up');
		$("#UserProf_paidamount").val('$7499');
		$("#UserProf_plan").val('$7499');
		$("#UserProf_SubId").val('1');
		$("#UserProf_period").val('365');
		$("#UserProf_Type").val('2');
		$("#action").val('paidRegister');		
	}
}
function refreshCaptchaB(){
	getCaptcha();
}
function signupfree(){
	//$('#signupForm')[0].reset();
	
	$('#signupForm').find("input[type=text],input[type=checkbox],input[type=radio],input[type=email],input[type=password],input[type=number],textarea, select").val('');
	
	//getCaptcha();
	$('#signupheader').attr('data-target','#sign-up');
	$('#signupmdl').attr('data-target','#sign-up');
	$('#signupfoot').attr('data-target','#sign-up');
	$('#signupFromLog').attr('data-target','#sign-up');
	$('#sign-up').focus();

}
function getCaptcha(){
	//alert("In Captcha")
	 /*var captchaContainer = null;
    var loadCaptcha = function() {
      captchaContainer = grecaptcha.render('captcha_container', {
        'sitekey' : '6LfBuC4UAAAAAC4T_FDwJyq-Tdp3zb4fsRzCFtIk',
        'callback' : function(response) {
          console.log(response);
        }
      });
    };*/
	/*var captchaToken = $('#captchaToken').val();
	 var data = "Action=getCaptcha&captchaToken="+captchaToken+"&sid="+Math.random();
		 var url=formActionUrl+"AuthUser?jsonp=callback";
		 var methodType="GET";
		 var jsonpCallSuccess = callbackCaptcha;
		 var jsonpCall ="callback";
		 var error="errorcaptcha";
		 ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);*/
	
}

function callbackCaptcha(json){
	$('#captchaToken').val(json.token);
	$('#captchaimg').attr('src',captchaUrlPath+''+json.token+'.jpg')
	$('#captchaimg').css('padding-top', '15px');
	$('#captchaKey').val(json.capKey);
}

function getsmartSearch(){
	     if($("#searchDtls").val() == ""){
			 //$('#dialogResultLoading').css('display', 'none');
			 $("#searchDtls").focus();
			 $("#smartSearchMsg").html("This field can't be empty.");
			 return false;
		 }
		 $('#myModal1').modal('show');
	         $('#dialogResultLoading').css('display', 'block');
		 $("#smartSearchresult").html("");
		 $("#searchCriteriaHitsMsg").html("");
		 $('.searchButton').attr('data-target','#myModal1');
		 $("#searchCriteria").html($("#searchDtls").val());
		 $("#searchCriteria1").html($("#searchDtls").val());
         var smartSearchData = $("#searchDtls").val();
         var data = "Action=getSmartSearchResult&smartSearchData="+smartSearchData+"&sid="+Math.random();
		 var url=formActionUrl+"AuthUser?jsonp=callback";
		 var methodType="GET";
		 var jsonpCallSuccess = callbackSmartSearch;
		 var jsonpCall ="callback";
		 var error="errorfunction";
		 $("#searchCriteriaMsg").html("Searching");
		 ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
	
}
			
function ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error){
	     //data = encodeURIComponent(data);
		$.ajax(
		     {
		      url:url,
		      type: methodType,	
			  headers: { 'Access-Control-Allow-Origin': '*' },			  
			  data:data,		 
			  crossDomain: true,
			  dataType: "jsonp",
			  timeout: 60000, // adjust the limit. currently its 15 seconds
			  jsonpCallback: jsonpCall,
		      async: true,
			  global: false,
			  success: jsonpCallSuccess,
		      error:error
		     }
		    ).fail(function (jqXHR, textStatus, errorThrown) {
               if(jqXHR.readyState==0 ||jqXHR.readyState==1 || jqXHR.readyState==2 || jqXHR.readyState==3){
				   $('#resultLoading').css('display', 'none');
					$('#loginSubmit').attr('data-target','#successSignup');
					$('#login').modal('hide');
                    $("#headerMsg").html("Failure");					
					$("#successDialogMsg").html("Currently we are experiencing  some issues with our website, it will be back up shortly. Please try after sometime or contact our support team via email at <a href='mailto:support@kyc2020.com'>support@kyc2020.com</a>");
					$('.modal').modal('hide');
					$('#successSignup').modal('show'); 
					$('#successSignup').focus();
				}
           });
		
}
 function errorfunction(){
	 alert("Somthing Wrong! please try again later.");
	 $('#resultLoading').css('display', 'none');
 } 

function callbackSmartSearch(json){
	 var hitName="";
	 var i = 1;
	 $("#searchCriteriaMsg").html("Search");
	 $('#dialogResultLoading').css('display', 'none');
	 if(json.Error =="No Search Hits"){
		$('#dialogResultLoading').css('display', 'none');
		$("#smartSearchresult").html("Can't find who you're looking for? Search our entire database in the members area.");
	}else{
		$.each(json,function(key,value){
			if(key=="smartSearchHits")
				{
			  var status=true;
			  var label = "";
				  $.each(value,function(key2,value2){
					  status=true;
					  label = "<b>List Name :</b> ";
					  hitName+="<div class='panel panel-default'>";
					  hitName+="<a class='collapsed' data-parent='#accordion' >";
					  $.each(value2,function(key3,value3){
						  if(status==true)
							  {
								  hitName+="<div class='panel-heading'>";
								  hitName+="<h4 class='panel-title'>";
								  hitName+="<span class='marg' style='font-size: 16px; color: #000;margin-top: 0; margin-bottom: 0;'> "+value3+"</span>";
								  hitName+="<i id='sign"+i+"' class='fa gray-plus' aria-hidden='true'></i>";
								  hitName+="</h4>";
								  hitName+="</div>";
								  hitName+="</a>";
								  hitName+="<div id='collap"+i+"'>";
								  hitName+="<div class='panel-body' class='collapse show'>";
								  status=false;
							  }else{
								  hitName+="<ul>";
								  hitName+="<li>"+label+value3+"</li>";
								  hitName+="</ul>";
								  label = "<b>Score :</b> ";
							  }
					  });
					  
					  hitName+="</div></div></div>";
					   i++;
				  });
				  	$("#smartSearchresult").html(hitName);
				} else if(key=="summary"){
					$("#searchCriteriaHitsMsg").html(value);
				}
		});
	}
}

function submitSmartListForm(){
	$('#smartListResultLoading').css('display', 'block');
	$("#listSearchOut").html('');
	$("#mainSerach").html('');
	// var catType = $("#smartListType").text();
	 var catType ="All";
	 var smartSearch = $("#smartText").val();
	 var url = formActionUrl+'rest/kyc/searchlist';
	 var smartList="";
	 if(smartSearch==""){
		 var catTypeVal = "";
		 	if($.trim(catType)=="All")
				catTypeVal ="All List";
			else if($.trim(catType)=="Sanction List")
				catTypeVal ="Sanction List";
			else if($.trim(catType)=="Criminal List")
				catTypeVal ="Criminal List";
			else if($.trim(catType)=="NoFly")
				catTypeVal ="NoFly";
			else
				catTypeVal ="PEP List";
	     $("#smartSearchCriteria").removeClass("name-list").addClass("name-list-normal");
	     $("#smartSearchCriteria").html(catTypeVal);
	 }else
		 $("#smartSearchCriteria").html(smartSearch);
	 $("#smartlist").attr('data-target','#myModal');
	 if(jQuery.trim(catType) == 'Filter by'){
		 $('#resultLoading').css('display', 'none');
		 $('#smartListMsg').text("Please select value from dropdown");
		 return false;
	 }
	 $("#myModal #result").hide();
	   $.ajax(
		     {
		      url:url,
		      type: "POST",	
			  data:JSON.stringify({listType:jQuery.trim(catType),smartListSearch:smartSearch}),		 
			  contentType:"application/json; charset=utf-8",
			  dataType:"json",
			  success: function(data) {
				  $('#smartListResultLoading').css('display', 'none');
				  if(smartSearch==""){
					  console.log(catType);
					if($.trim(catType)=="All")
						smartSearch ="All List";
					else if($.trim(catType)=="Sanction List")
						smartSearch ="Sanction List";
					else if($.trim(catType)=="Criminal List")
						smartSearch ="Criminal List";
					else if($.trim(catType)=="NoFly")
						smartSearch ="NoFly";
					else
						smartSearch ="PEP List";
					}
				  var search = "<span>Search : \""+smartSearch+"\" </span>";
					$("#mainSerach").html(search);
					var result  = "<span><b>Results : "+catType +"</b></span>";
					$(data).each(function(index, element) {        
						
						smartList+="<div class='panel-group' id='accordion'>";
					    smartList+="<div class='panel panel-default'>";
					        smartList+="<a class='collapsed' data-parent='#accordion'>";
					            smartList+="<div class='panel-heading'>";
					                smartList+="<h4 class='panel-title'><span class='marg' style='font-size: 16px; color: #000;margin-top: 0; margin-bottom: 0;'> <b>"+element.catName+"</b>: "+element.catDesc+" </span><i id='sign1' class='fa gray-plus' aria-hidden='true'></i></h4>";
					            smartList+="</div>";
					        smartList+="</a>";
					        smartList+="<div id='collap1'>";
					            smartList+="<div class='panel-body'>";
					                smartList+="<ul>";
					                    smartList+="<li><b>List Type :</b> "+element.listType+" </li>";
					                smartList+="</ul>";
					                smartList+="<ul>";
					                    smartList+="<li><b>Country &nbsp;:</b> "+element.country+"</li>";
					                smartList+="</ul>";
					            smartList+="</div>";
					        smartList+="</div>";
					    smartList+="</div>";
					smartList+="</div>";
					
                     });
					 $("#listSearchOut").html(smartList);
					 if(data==""){
						$("#listSearchOut").html("No Records for the Search<br/> <b>please try different search</b>"); 
						result ="";
					 }
					 $("#myModal #result").show();
					 $("#myModal #result").html(result);
			   },
		      error:function() {
					 alert("Somthing Wrong! please try again later.");
				  
			   }
		     }
		    );

}
	 var setupAutoComplete = function () { 
		   var catType = $("#smartListType").text();
	       var smartSearch = $("#smartText").val();
	       var url = formActionUrl+'rest/kyc/searchlist';
		   //var url = formRestUrl+'rest/kyc/searchlist';
		 $("#smartText" ).autocomplete({
		    source: function( request, response ) {
				var maxResults = 5;
				 $.ajax(
					 {
					  url:url,
					  type: "POST",	
					  data:JSON.stringify({listType:jQuery.trim(catType),smartListSearch:smartSearch}),		 
					  contentType:"application/json; charset=utf-8",
					  dataType:"json",
					  success: function(data) {
							//console.log("Success :"+data);
							 response($.map(data.slice(0, maxResults), function (value, key) { 
								  return {
									label: value.catDesc,
									value: value.catDesc
								   };
							 }));
					
					   },
					  error:function() {
							
						  
					   }
					 }
					);
      
            },
			 minLength: 5,
		  });
     };

function removeErrorMsg(){
	$("#smartSearchMsg").html("");
}

function closeallDialog(){
$('.modal').modal('hide');
}


function toggleList(idx){
	/*$("#sign").removeClass("fa fa-plus gray-plus");
	$("#sign").addClass("fa fa-minus gray-plus");*/
	
	$("#sign"+idx).toggleClass("fa fa-plus gray-plus fa fa-minus gray-plus");
}

function setLocalSession(key,value,redirectPage){
	try{
		if (typeof(Storage) !== "undefined") {
		  sessionStorage.setItem(key, value);		  
		}else{
		  //$('#contactSub').val('1');
		}
	}catch(err){}
	window.location.href = redirectPage;
}
function displayMailMsg(){
	var email = $("#email").val();
	$("#mailMsg").show();
	if(email.indexOf("'")!=-1){
		$("#mailMsg").html("Please enter a valid email address.");
		return false;
	}
	if(!isEmailAddressValid(email)){
		$("#mailMsg").html("Please enter a valid email address.");
		return false;
	}
	$("#mailMsg").html("We have sent an email. Please click on verify link to subscribe.");
	
}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103265348-1', 'auto');
  ga('send', 'pageview');
/*function onBodyLoad(){
	
	if(currentUrl == websiteUrl){
		$('#alertPopup').modal('show');
	}
}*/

/*
function toggleList(){
    $('#accordion .panel-collapse').collapse('toggle');
	
$('#accordion').on('hidden.bs.collapse', toggleSign);
$('#accordion').on('shown.bs.collapse', toggleSign);

}
	function toggleSign(e) {
	  $(e.target)
		.prev('.panel-heading')
		.find('i')
		.toggleClass('fa fa-plus fa fa-minus');
    }
*/
/*function closeAlertDialog(){ 
$('#alertPopup').modal('hide');
}*/
function subScriptionPlan(){
  var SignupType=$("#SignupType").val();
   if(SignupType == 'free'){
		  $("#UserProf_address").removeAttr("required");
		  $("#UserProf_address").attr("type","hidden");
		  $("#UserProf_City").removeAttr("required");
		  $("#UserProf_City").attr("type","hidden");
		  $("#UserProf_State").removeAttr("required");
		  $("#UserProf_State").attr("type","hidden");
		  
    }else{
          $("#UserProf_address").attr("required","true");
		  $("#UserProf_address").attr("type","text");
		  $("#UserProf_City").attr("required","true");
		  $("#UserProf_City").attr("type","text");
		  $("#UserProf_State").attr("required","true");
		  $("#UserProf_State").attr("type","text");
    }
}

function submitBookMeeting(){
       $('#resultLoading').css('display', 'block');
		var name = $("#name").val();
		var contactEmail = $("#email").val();
		var contactWebsite = $("#company").val();
		var contactPhone = $("#phone").val();
		var contactSub = "Just about everything.  Let's Book a Meeting";
		var contactMsg = "Let’s Book a Meeting";
	     var data = "Action=contactUsMail&name="+name+"&email="+contactEmail+"&companyWebsite="+contactWebsite+"&phone="+contactPhone+"&subject="+contactSub+"&message="+contactMsg+"&sid="+Math.random();
		 var url=formActionUrl+"AuthUser?jsonp=callback";
		 var methodType="GET";
		 var jsonpCallSuccess = callbackMeeting;
		 var jsonpCall ="callback"
		 var error="errorfunction";
		 ajaxCall(url, data, methodType,jsonpCall,jsonpCallSuccess,error);
         $("#name").val('');
		 $("#email").val('');
		 $("#company").val('');
		 $("#phone").val('');

	
}	
function callbackMeeting(json){
	 $('#resultLoading').css('display', 'none');
	 $('html, body').animate({scrollTop: $("#meetingMsg").offset().top}, 1000);
     if(json.response == 250){
		 $('#successDiv').css('display', 'block');
		 $('html, body').animate({scrollTop: $("#meetingMsg").offset().top}, 1000);
		 $('#meetingMsg').html('Thank you for your interest!');	
	 }else{
		 $('#meetingMsg').html(json.status);
		 $('html, body').animate({scrollTop: $("#meetingMsg").offset().top}, 1000);
	 }
}
 function add_chatinline(){
	 var hccid=23148499;
     var nt=document.createElement("script");nt.async=true;
     nt.src="https://mylivechat.com/chatinline.aspx?hccid="+hccid;
     var ct=document.getElementsByTagName("script")[0];
	 ct.parentNode.insertBefore(nt,ct);
}
