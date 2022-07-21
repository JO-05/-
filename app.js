// display controler
var uiControler = (function(){

})();

//finace controler
var finaceControler = (function(){
    var Orlogo = 0;
    var zarlaga = 0;
  return{
    add_orlogo_zarlaga: function(number, addOrRemove){
          if(addOrRemove== 'inc'){
            Orlogo += number;
            document.querySelector('.budget__income--value').textContent = '+ '+Orlogo;
          }
          else {
            zarlaga += number;
            document.querySelector('.budget__expenses--value').textContent = '- '+ zarlaga;
            // хувилах
            document.querySelector('.budget__expenses--percentage').textContent = Math.round((100/Orlogo)*zarlaga) + '%'
          }
    },
    Niit_dung_haruulah: function(){
        document.querySelector('.budget__value').innerHTML = '+ '+ (Orlogo-zarlaga)
    }
  }
})();


//it's add all controler
var appControler=(function(uiControler, finaceControler){
    var add__btn = function(){
        // Өгөгдлөө олж авна.
        var textO = document.querySelector('.add__description');
        var text = textO.value
        var numberO = document.querySelector('.add__value');
        var number = numberO.value;
        var addOrRemoveO =document.querySelector('.add__type');
        var addOrRemove = addOrRemoveO.value;
        // олсон өгөгдлөө finace controler луу дамжуулна.
        number=Number(number);
        // Нийт өгөгдлөө display гарган.
        finaceControler.add_orlogo_zarlaga(number, addOrRemove);
        // Төсвийг тооцолно.
        finaceControler.Niit_dung_haruulah();
        // Эцсийн өгөгдлөө display гарган.
        //Буцаагаад хэвэндэн оруулна
        textO.value = 'Цалин';
        numberO.value ='0';
        addOrRemoveO.value = 'inc';
    }
    document.querySelector('.add__btn').addEventListener('click', function(){
        add__btn();
    })
    // enter дарах үед Keycode
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13 ) add__btn();
    })
})(uiControler, finaceControler);
