function Monster(name,bloodVolume,movementSpeed,defensivePower,distance){
    this.name = name;
    this.bloodVolume= bloodVolume;//血量
    this.movementSpeed = movementSpeed;//移动速度
    this.defensivePower = defensivePower;//防御力
    this.distance = distance;//距离
}
Monster.prototype.move = function(movementSpeed,distance){
    this.totalTime = distance/movementSpeed;
}
Monster.prototype.die = function(){

}