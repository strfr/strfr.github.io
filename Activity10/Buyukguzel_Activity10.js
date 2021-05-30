window.onload = function(){$(function(){
    $("#birthday").datepicker();
});
var programmingLanguages = [
    "ActionScript", 
    "AppleScript", 
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
    ];
$( "#programmingLanguage" ).autocomplete({
    source: programmingLanguages 
    });}
