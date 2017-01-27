var films = (function() {

/*Funzione per tornare alla tabella con elenco dei film*/
  var _indietro= function(){
    document.getElementById("table").style.display = 'block';
    document.getElementById("dettaglio").style.display = 'none';
  };
/*Fine funzione indietro*/

/*Funzione che permette di trovare elenco dei film dal titolo + filtri*/
	var _titolo= function(data){
  //Azzero gli input e la precedente ricerca
		document.getElementById("input_titolo").value="";
    document.getElementById("data_film").value="";
    document.getElementById('tb_film').innerHTML="";
  //Prendo i film e gli inserisco in una variabile solo se hanno un'immagine 
    var film=data;   
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
  //Mostro a schermo tutti i film trovati
    document.getElementById("tb_film").innerHTML=tr; 
  //Azioni la funzione indietro in modo da visualizzare la tabella giusta  
    films.indietro();  
	};
/*Fine funzione titolo + filtri*/

/*Funzione per vedere dettaglio del film selezionato*/
	var _dettaglio= function(data){
  //Nascondo la tabella con elenco dei film e molto la tabella con la descrizione
		document.getElementById("table").style.display = 'none';
    document.getElementById("dettaglio").style.display = 'block';
    document.getElementById("tb_det").innerHTML="";
  //Prendo e assegno i valori della descrizione del film selezionato
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
      '<p>'+'<b>'+'Premi: '+'</b>'+film.Awards+'</p>'+
      '</td>'+'<td>'+'</td>'+
      '</tr>';
    }
  //visualizzo la descrizione su schermo           
    document.getElementById("tb_det").innerHTML=tr;                
	};
/*Fine funzione descrizione*/

/*Funzione per animazione del menù*/
  function _menu(nav_id, pad_in, pad_out, tempo, molt) {
  // Salvo gli elementi su variabili
        var li_ele = nav_id + " li.move-element";
        var link_ele = li_ele + " a";    
  // Effettivo timer
        var timer = 0;  
  // Crea il movimento non appena viene tutto caricato
        $(li_ele).each(function(i) {
          $(this).css("margin-left","-180px");
  // Aggiorno il timer
          timer = (timer*molt + tempo);
          $(this).animate({ marginLeft: "0" }, timer);
          $(this).animate({ marginLeft: "15px" }, timer);
          $(this).animate({ marginLeft: "0" }, timer);
        });
  // Crea il mouse over sugli elementi 
        $(link_ele).each(function(i) {
          $(this).hover( function(){
            $(this).stop().animate({ paddingLeft: pad_out }, 150);
          }, function(){
            $(this).stop().animate({ paddingLeft: pad_in }, 150);
          });
        });
      }
/*Fine funzione del menù*/

/*Ritorno la le mie funzioni*/
	return{
		titolo:_titolo,
		dettaglio:_dettaglio,
		indietro:_indietro,
    menu:_menu
	};
/*Fine ritorno*/
})();