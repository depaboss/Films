var films = (function() {
	// body...
	var _titolo= function(valore){
		var endpoint='http://www.omdbapi.com/?s=';
        var url=endpoint;
        var titolo=valore
        $.ajax({
          url: url + titolo,
          method: 'GET'
        }).then(function(data) {/*successo*/
          console.log(data);
          var film=data;
          document.getElementById('tb_film').innerHTML="";
          //$("#tb_film").html("");
          var tr='';
          console.log(film.Search.length);
          for(i=0;i<film.Search.length;i++){
            var img="";
            if(film.Search[i].Poster=='N/A'){
                img="http://placehold.it/300x450";
            }else{
                img=film.Search[i].Poster;
            }
            var id=film.Search[i].imdbID;
            tr +=''+
            "<tr class='dettaglio' id='"+id+"'>"+
            '<td>'+'<b>'+(i+1)+'<b>'+'</td>'+
            '<td>'+'<img src="'+img+'" alt="testo" />'+'</td>'+
            '<td>'+film.Search[i].Title+'</td>'+
            '<td>'+film.Search[i].Type+'</td>'+
            '<td>'+film.Search[i].Year+'</td>'+
            'tr>';
            console.log(film.Search[i].imdbI
          }
          document.getElementById("tb_film").innerHTML=tr;
          // $("#tb_film").html(tr);
        },function(err){/*errore 400*/
            console.log(err);
        }).catch(function(err){/*errore 500*/
            console.log(err);
        });
	};

	var _dettaglio= function(id){
		var endpoint='http://www.omdbapi.com/?i=';
        var url=endpoint;
        var ricevuto=this.

        $.ajax({
          url: url + ricevuto,
          method: 'GET'
        }).then(function(data) {
        	document.getElementById("table").style.display = 'none';
            // $("#table").hide();
            document.getElementById("dettaglio").style.display = 'block';
            // $("#dettaglio").show();
            console.log(data);
            
            $("#tb_det").html("");
            var film=data;
            var tr='';
            var img="";
            if(film.Poster=='N/A'){
                img="http://placehold.it/300x450";
            }else{
                img=film.Poster;
            }
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
          document.getElementById("tb_det").innerHTML=tr;
          // $("#tb_det").html(tr);
        });
	};


	return{
		titolo:_titolo,
		dettaglio:_dettaglio
	};
})();