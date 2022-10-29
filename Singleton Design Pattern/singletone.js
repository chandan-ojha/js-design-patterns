/*
let Singleton = (function (){
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
})();*/

/*Another Design Pattern*/
var singleton = (function (){
    var instance;

    function createInstance(){
        var object = new Object("I am the instance");
        return object;
    }
    return{
        getInstance: function (){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run(){
    var instance1 = singleton.getInstance();
    var instance2 = singleton.getInstance();
    console.log("Same instance? " + (instance1 === instance2));
}
run();
