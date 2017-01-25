var films = (function() {
	// body...

  var _indietro= function(){
    document.getElementById("table").style.display = 'block';
    document.getElementById("dettaglio").style.display = 'none';
  };

	var _titolo= function(data){
		document.getElementById("input_titolo").value="";
    document.getElementById("data_film").value="";
    var film=data;
    document.getElementById('tb_film').innerHTML="";
    var tr='';
    var number=1;
    for(i=0;i<film.Search.length;i++){
      var img="";
      if(film.Search[i].Poster!='N/A'){
        img=film.Search[i].Poster;
        var id=film.Search[i].imdbID;
        tr +=''+
        "<tr onclick='mostra(id)' class='pointer' id='"+id+"'>"+
        '<td>'+'<b>'+number+'<b>'+'</td>'+
        '<td>'+'<img src="'+img+'" alt="testo" width="150"/>'+'</td>'+
        '<td class="testo">'+film.Search[i].Title+'</td>'+
        '<td class="testo">'+film.Search[i].Type+'</td>'+
        '<td class="testo">'+film.Search[i].Year+'</td>'+
        '</tr>';
        number++;
      }
    }
    document.getElementById("table").style.display="block";
    document.getElementById("tb_film").innerHTML=tr;   
    films.indietro();  
	};

	var _dettaglio= function(data){
		document.getElementById("table").style.display = 'none';
    document.getElementById("dettaglio").style.display = 'block';
    document.getElementById("tb_det").innerHTML="";
    var film=data;
    var tr='';
    var img="";
    if(film.Poster!='N/A'){
      img=film.Poster;
      tr +=''+
      "<tr>"+
      '<td>'+'<img src="'+img+'" alt="testo" />'+'</td>'+
      '<td>'+
      '<p>'+'<b>'+'Titolo: '+'</b>'+film.Title+'</p>'+
      '<p>'+'<b>'+'Anno: '+'</b>'+film.Released+'</p>'+
      '<p>'+'<b>'+'Paese: '+'</b>'+film.Country+'</p>'+
      '<p>'+'<b>'+'Metascore: '+'</b>'+film.Metascore+'</p>'+
      '<p>'+'<b>'+'imdbRating: '+'</b>'+film.imdbRating+'</p>'+
      '<p>'+'<b>'+'imdbVotes: '+'</b>'+film.imdbVotes+'</p>'+
      '</td>'+
      '<td>'+
      '<p>'+'<b>'+'Genere: '+'</b>'+film.Genre+'</p>'+
      '<p>'+'<b>'+'Direttore: '+'</b>'+film.Director+'</p>'+
      '<p>'+'<b>'+'Scrittore: '+'</b>'+film.Writer+'</p>'+
      '<p>'+'<b>'+'Lingua: '+'</b>'+film.Language+'</p>'+
      '<p>'+'<b>'+'Attori: '+'</b>'+film.Actors+'</p>'+
      // '<p>'+'?: '+film.Plot+'</p>'+
      '<p>'+'<b>'+'Premi: '+'</b>'+film.Awards+'</p>'+
      '</td>'+'<td>'+'</td>'+
      '</tr>';
    }                
    document.getElementById("tb_det").innerHTML=tr;                
	};


	return{
		titolo:_titolo,
		dettaglio:_dettaglio,
		indietro:_indietro,
	};
})();