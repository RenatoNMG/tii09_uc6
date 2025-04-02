class Animal{


    emiteSom(){
        console.log("o animal fez barulho!");
    }


}

class Cachorro extends Animal{
    emiteSom(){
        console.log("AU! AU! AU!")
    }

}
class Gato extends Animal{
    emiteSom(){
        super.emiteSom();
        console.log("MIALLL")
    }
    
}





let animal1 = new Cachorro();
let animal2 = new Gato();

animal1.emiteSom();
animal2.emiteSom();