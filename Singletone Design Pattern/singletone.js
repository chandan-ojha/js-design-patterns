let Singletone = (function (){
    let fruit;

    function createFruit(){
        let apple = new Apple("I am the fruit");
        return apple;
        //console.log(apple);
    }
    return {
        getFruit: function (){
            if(!fruit){
                fruit = createFruit();
            }
            return fruit;
        }
    };
})();