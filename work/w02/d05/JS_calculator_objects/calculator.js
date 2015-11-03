var Calculator = function(){
  this.memory = [];
  this.lastButton = "";
}

Calculator.prototype.clear= function(){
  this.memory = [];
}

Calculator.prototype.equals = function(){
  if(this.memory.length === 1){
    return
  }
  this.memory.push(parseInt(display.innerHTML))
  this.lastButton = "equals";
  this.performCalculation();
  display.innerHTML = this.memory[0]
}

Calculator.prototype.operate = function(operand){
  if(this.lastButton !== "equals"){
    this.memory.push(parseInt(display.innerHTML))
  }
  
  this.lastButton = "operator";

  if(this.memory.length === 3){
    this.performCalculation()
  }

  this.memory.push(operand);
  display.innerHTML = this.memory[0]
}

Calculator.prototype.performCalculation = function(){
  if(this.memory[1] === "+"){
    this.memory = [this.memory[0] + this.memory[2]];
  } else if(this.memory[1] === "-"){
    this.memory = [this.memory[0] - this.memory[2]];
  } else if(this.memory[1] === "*"){
    this.memory = [this.memory[0] * this.memory[2]];
  } else if(this.memory[1] === "/"){
    this.memory = [this.memory[0] / this.memory[2]];
  } 
}

Calculator.prototype.renderInDisplay = function(buttonHTML){
  if(this.lastButton === "operator"){
    display.innerHTML = ""
    this.lastButtonWasOperator = false;
  }
  display.innerHTML += buttonHTML;
}






