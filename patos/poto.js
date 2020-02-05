
class Duck {
  
  quackBehavior;
  FlyBehavior;
  display() {
    document.write('estoy mostrandomen')
    console.log('estoy mostrandomen');
  }
  performQuack(){
this.quackBehavior.quack();
  }
  performFly(){
this.FlyBehavior.fly();
  }
  setQuackBehavior(elQuaco){
    this.quackBehavior=elQuaco;
  }
  setFlyBehavior(elvolado){
this.FlyBehavior=elvolado;
  }
}
class MallarDuck extends Duck{
// display(){
//   console.log("este es  PAto Real");
// }
}
class RedHeadDuck extends Duck{

}
class DecoyFuck extends Duck{

}
class RubberFuck extends Duck{

}
// class QuackBehaviors {
//   quack(){
//     console.log('Quackeando ando')
//   }
// }
// class FlyBehaviors {
// fly(){
//   console.log('Volando ando')
// }
// }
class FlyWithWings{
fly(){
  console.log('Este Pato vuelva con alas')
}
}
class FlyNoWay{
  fly(){
    console.log('Este Pato no vuelva ni')
  }
}
class Quack{
  quack(){
    console.log('Quack')
  }
}
class MuteQuack{
  quack(){
    console.log('SSSHH tu no hablas')
  }
}
class Squeak{
  quack(){
    console.log('Squeak')
  }
}
class ElevateConChohetes{
  fly(){
    console.log('Elevate hermano');
  }
}