function ver_1()
{
    var hd = document.getElementById('hd');
    document.body.style.background = "url('bg.jpg') center center fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    hd.style.background = "linear-gradient(rgba(25,25,25,0.6),rgba(22,22,22,1.0))";
}
function ver_2()
{
    var hd = document.getElementById('hd');
    document.body.style.background = "black";
    hd.style.background = "black";

}
function faduj()
{
    var showinfo = document.getElementById("showinfo");

    style = window.getComputedStyle(showinfo),
    disp = style.getPropertyValue('display');
    
    if(disp == "block")
    {
        showinfo.style.opacity = 0;
        $(showinfo).animate({opacity: 1});
    }
    
    $(showinfo).animate({ width: 'show' },450); 
    
    showinfo.style.display = "block";
}
function eksport(titlep, txtp)
{
        var title=document.getElementById("headh");
	var txt=document.getElementById("info");
        title.innerHTML="<h2>"+titlep+"</h2>";
	txt.innerHTML=txtp;
        
        faduj();
}
function about()
{
    var title = "O Nas";
    var txt = "Symphony Theme jest szablonem stworzonym przez <a href=\"http://a.test10.besaba.com\">Vertigo Project</a>, bazującym na najnowszych rozwiązaniach i trendach w sieci oferujących nowoczesny wygląd strony.";
    
    eksport(title,txt);
}
function contact()
{
    var title = "Kontakt";
    var txt = "E-mail: <a href=\"mailto:formoza@autistici.org\">formoza@autistici.org</a><br />Właściciel: Kamil Wiśniewski (<a href=\"http://a.test10.besaba.com\">A.Test10</a>)<br />Cena: Do negocjacji";
    
    eksport(title,txt);  
}
function offer()
{
    var title = "Oferta";
    var txt = "- Przejrzytość strony<br />- Intuicyjna nawigacja<br />- Łatwość edycji kodu<br />- Nowoczesny wygląd<br />- Szybkość wczytywania<br />- Zgodnośc wyświetlania na różnych platformach";
    
    eksport(title,txt);  
}
function start()
{
    var showinfo = document.getElementById("showinfo");
    
    $(showinfo).animate({ width: 'hide' },450); 
}