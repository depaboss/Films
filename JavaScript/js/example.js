var films = (function() {
	// body...

    var _indietro= function(){
    	document.getElementById("table").style.display = 'block';
      	document.getElementById("dettaglio").style.display = 'none';
    };

	var _titolo= function(data){
		document.getElementById("input_titolo").value="";
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
              "<tr onclick='mostra(id)' class='dettaglio' id='"+id+"'>"+
              '<td>'+'<b>'+number+'<b>'+'</td>'+
              '<td>'+'<img src="'+img+'" alt="testo" />'+'</td>'+
              '<td>'+film.Search[i].Title+'</td>'+
              '<td>'+film.Search[i].Type+'</td>'+
              '<td>'+film.Search[i].Year+'</td>'+
              '</tr>';
              number++;
          }
        }
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
            '<p>'+'Titolo: '+film.Title+'</p>'+
            '<p>'+'Genere: '+film.Genre+'</p>'+
            '<p>'+'Anno: '+film.Released+'</p>'+
            '<p>'+'Metascore: '+film.Metascore+'</p>'+
            '<p>'+'imdbRating: '+film.imdbRating+'</p>'+
            '<p>'+'imdbVotes: '+film.imdbVotes+'</p>'+
            '</td>'+
            '<td>'+
            '<p>'+'Direttore: '+film.Director+'</p>'+
            '<p>'+'Scrittore: '+film.Writer+'</p>'+
            '<p>'+'Attori: '+film.Actors+'</p>'+
            '<p>'+'?: '+film.Plot+'</p>'+
            '<p>'+'Lingua: '+film.Language+'</p>'+
            '<p>'+'Paese: '+film.Country+'</p>'+
            '<p>'+'Premi: '+film.Awards+'</p>'+
            '</td>'+
            '</tr>';
        }                
        document.getElementById("tb_det").innerHTML=tr;                
	};


	return{
		titolo:_titolo,
		dettaglio:_dettaglio,
		indietro:_indietro
	};
})();