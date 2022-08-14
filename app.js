// var controler
var VC = (function(){
    return{
        get_var : function(){
            var number = document.querySelector('.add__value').value;
            number =Number(number);
            return{
            text : document.querySelector('.add__description').value,
            addOrRemove : document.querySelector('.add__type').value,
            number : number,
        }
        },
     }
})();

// Do controler
var DC = (function(VC){ 
    var inc = document.querySelector('.income__list');
    var expenses = document.querySelector('.expenses__list');
    var Orlogo=0,zarlaga=0;
    var add_orlogo_zarlaga = function(number, addOrRemove){
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
    }
    var Niit_dung_haruulah = function(){
        document.querySelector('.budget__value').innerHTML = '+ '+ (Orlogo-zarlaga)
    }
    var inc_exp =  function(number, addOrRemove, text){ 
        var html = '<div class="item clearfix" id="income-0"><div class="item__description">'+text+'</div><div class="right clearfix"><div class="item__value">+'+ number+'</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        if(addOrRemove== 'inc') {inc.insertAdjacentHTML("afterbegin", html);}
        else {expenses.insertAdjacentHTML("afterbegin", html);}
    }

    return{
        add__btn : function(){
            // il gargah 
            add_orlogo_zarlaga(VC.get_var().number, VC.get_var().addOrRemove);
            // niit dung haruulah
            Niit_dung_haruulah();
            // barimt gargah
            inc_exp(VC.get_var().number, VC.get_var().addOrRemove, VC.get_var().text)
        }
    }
})(VC);

// Add controler and Display contorler
var AC = (function(DC){
    document.querySelector('.add__btn').addEventListener('click', function(){DC.add__btn()})
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13 ) DC.add__btn();
    })
})(DC);
