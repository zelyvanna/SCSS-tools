function accordion(clickedItem) {
    // Ajoute / enlève la classe active
    clickedItem.classList.toggle("active");

    // p panel
    var panel = clickedItem.nextElementSibling;

    //Div image circle
    var img = clickedItem.firstElementChild;

    if (panel.style.display === "block") {
        // désaffichage du contenu
        // panel.style.display = "none";
        $(panel).slideUp();

        //changer le div circle circle-ul--gradient -> circle-ul
        img.classList.remove("circle-ul--gradient");
        img.classList.add("circle-ul");

    } else {
        // affichage du contenu
        // panel.style.display = "block";
        $(panel).slideDown();


        //changer le div circle circle-ul -> circle-ul--gradient
        img.classList.remove("circle-ul");
        img.classList.add("circle-ul--gradient");
    }
}


function accordionGradient(clickedItem) {
    // Ajoute / enlève la classe active
    clickedItem.classList.toggle("active");

    // p panel
    var panel = clickedItem.nextElementSibling;

    //Div image circle
    var img = clickedItem.firstElementChild;

    if (panel.style.display === "block") {
        // désaffichage du contenu
        // panel.style.display = "none";
        $(panel).slideUp();

        //changer le div circle circle-ul--gradient -> circle-ul
        img.classList.remove("circle-ul--active");
        img.classList.add("circle-ul");


    } else {
        // affichage du contenu
        // panel.style.display = "block";
        $(panel).slideDown();

        //changer le div circle circle-ul -> circle-ul--gradient
        img.classList.remove("circle-ul");
        img.classList.add("circle-ul--active");
    }
}


function tabsHandler() {
    console.log("La fonction tabsHandler est lancée");

    var component = $('.grid'),
        componentNav = component.find('.tabs-nav'),
        componentNavItems = componentNav.find('li'),
        componentContents = component.find('.tabs-contents');

    componentNavItems.on('click', function () {
        var targetID = $(this).data('id');

        console.log('Je clique sur ' + targetID);

        if (!$('#' + targetID).hasClass('active') ) {
            console.log('Mon élément est masqué');

            // Gestion de l'affichage du contenu
            componentContents.addClass('tabs-contents--inactive');
            $('#' + targetID).removeClass('tabs-contents--inactive');

            // Gestion de l'affichage du menu
            componentNavItems.removeClass('active');
            $(this).addClass('active');
        } else {
            console.log("Mon élément est visible");
        }

    });
}

$(document).ready(function () {
    var tabsComponent = $('.tabs');
    console.log('Le DOM est prêt');

    if (tabsComponent.length > 0) {
        console.log("Mon composant tabs est bien présent");
        tabsHandler();
    } else {
        console.log("Mon composant tabs n'est pas chargé");
    }
});