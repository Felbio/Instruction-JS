  // var name = "Felipe";
    // function setarNome(novoNome){
    //     nome = novoNome;
    // }

    // const setarNome = (novoNome) => {
    //     nome = novoNome;
    // }

    // setarNome('João');
    // alert(nome);
 


const setarNomesHtml = () => {
  var nomes = ['João', 'Felipe', 'Guilherme','Fabio'];
  let containerNome = document.querySelector('.nomes');

  for(let i = 0; i < nomes.length; i++){
    containerNome.innerHTML += nomes[i];
    containerNome.innerHTML += '<hr>'
  }
}
setarNomesHtml();

var interval = setInterval(() =>{
  let containerNome = document.querySelector('.nomes');
  containerNome.innerHTML += '<hr>';
}, 1000)

setTimeout(function(){
  clearInterval(interval);
},5000);