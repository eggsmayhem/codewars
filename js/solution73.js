String.prototype.capitalize = function () {
  const capital = {a:"A",b:"B",c:"C",d:"D",e:"E",f:"F",g:"G",h:"H",i:"I",j:"J",k:"K",l:"L",m:"M",n:"N",o:"O",p:"P",q:"Q",r:"R",s:"S",t:"T",u:"U",v:"V",w:"W",x:"X",y:"Y",z:"Z"}
  return capital[this[0]] ? capital[this[0]] + this.slice(1) : this.toString()
}

