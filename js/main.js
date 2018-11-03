(function ($) {
    $(document).ready(function () {

        var logo = $(".logo"),
            body = $("body"),
            ul = null;


        /*---------------------
            CREATE MENU
        ---------------------*/

        function createContextMenu(config) {
            var ul = $("<ul></ul>", {
                "id": "contextmenu",
                "class": "contextmenu",
                "css": {
                    "display": "none"
                },
                on: {
                    click: function (e) {
                        e.stopPropagation();
                    }
                }
            });//.ul

            $.each(config, function (key, val) {

                var li = $("<li></li>", {
                    "class": "contextmenu__item"
                });

                var a = $("<a></a>", {
                    "class": "contextmenu__link",
                    "text": key,
                    "href": val
                });

                li.append(a).appendTo(ul)

            });//.each
            
            body.append(ul);
            
            return ul
        }//.createContextMenu 


        /*---------------------
                OPEN MENU
        ---------------------*/
        
        var config = {
            "link-1": "#svg",
            "link-2": "#png",
            "link-3": "#zip"
            };
        
        //contextmenu = dom event
        logo.on("contextmenu", function (e) {
            e.preventDefault();
   
//            var ul = $('ul#contextmenu')
            
            ul = ul || createContextMenu(config);
            
            ul.css({
                display: "",
                top: e.pageY,
                left: e.pageX
            }); //.css

            
                /*---------------------
                    CLOSE MENU
                ---------------------*/
           
            $(document).on("click", function (e) {
            ul.css("display", "none");
            });
       
        });


    }); //ready
})(jQuery);
