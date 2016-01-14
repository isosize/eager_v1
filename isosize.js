(function () {

    // Localize jQuery variable
    var jQuery;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined) {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "http://www.isosize.com/api/v2/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else {
            script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        main();
    }

    /******** Our main function ********/
    function main() {

        /******* Load widget animation *****/
        /*!--Floating clothing size Widget by www.isosize.com (c) START-->*/
        /*<![CDATA[*/
        jQuery(document).ready(
            function () {
                jQuery(".isosize").hover(
                    function () {
                        jQuery(this).stop().animate({ right: "-95px" }, "medium");
                    }
                    ,
                    function () {
                        jQuery(this).stop().animate({ right: "-440px" }, "medium");
                    }
                    ,
                    500);
            });
        /*]]>*/

        jQuery(document).ready(function ($) {
            
            /******* Load js *******/
            var js_file = $("<script>", {
                type: "text/javascript",
                src: "http://www.isosize.com/js/jquery.min.js"
            });
            js_file.appendTo('head');
           

            /******* Load CSS *******/
            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "http://www.isosize.com/api/v2/isosize.css"
            });
            css_link.appendTo('body');

            /******* Load DIV & iFrame *******/
            var thediv = $("<div>", {
                class: "isosize",
                id: "div_two"

            });


            var theframe = $("<iframe>", {
                src: "http://www.isosize.com/sizer/widget.aspx?api=116220116912341371971631151481635987",
                id: "frame_two",
                scrolling: "no",
                frameborder: "0",
                style: "position:relative; left:-70px; overflow: hidden; height: 400px; width: 100%;"

            });
            thediv.append(theframe);

            thediv.appendTo('body');

            /*******  *******/
           
            
        });

       
        

    }

})(); // We call our anonymous function immediately

/*!--Floating clothing size Widget by www.isosize.com (c) START-->*/
/*<![CDATA[*/ jQuery(document).ready(function () { jQuery(".isosize").hover(function () { jQuery(this).stop().animate({ right: "-95px" }, "medium"); }, function () { jQuery(this).stop().animate({ right: "-440px" }, "medium"); }, 500); }); /*]]>*/
