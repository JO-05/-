// display controler
var uiControler = (function(){

})();

//finace controler
var finaceControler = (function(){

})();


//it's add all controler
var appControler=(function(uiControler, finaceControler){
    var add__btn = function(){
        // Өгөгдлөө олж авна.
        var text = document.querySelector('.add__description').value;
        var number = document.querySelector('.add__value').value;
        var addOrRemove =document.querySelector('.add__type').value;
        console.log(addOrRemove);
        // олсон өгөгдлөө finace controler луу дамжуулна.

        // Нийт өгөгдлөө display гарган.

        // Төсвийг тооцолно.

        // Эцсийн өгөгдлөө display гарган.
    }
    document.querySelector('.add__btn').addEventListener('click', function(){
        add__btn();
    })
    // enter дарах үед Keycode
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13 ) add__btn();
    })
})(uiControler, finaceControler);
