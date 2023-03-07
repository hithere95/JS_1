




var mojaFunk = () => {
    var broj = prompt("Unesite broj od 1 do 5",0);
    var x = parseInt(broj); 
    
    if (x > 0 && x <= 5) {
      
      document.write("<p>Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge. </p>");
    } else if (isNaN(x)) { 
      alert("Niste uneli broj!"); 
    } else { 
      alert("Unesen broj mora biti između 1 i 5!");
    }
  }
  