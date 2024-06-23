var result = prompt("please check your result")

if (result >= Math.floor(80.75)) {
    document.write('<center>' + '<h1> ' + 'Mark sheet' + '<br>'  + '<br>'+ 'Total Marks:' + ' 100 ' + '<br>' + 'marks obtained:' + '80' + '<br>'+'persentage:' + result+ '%' + '<br>'+'greade:' + 'A+' + '</h1>' + '</center>')
}
else if (result >= Math.floor(70.65)) {
    document.write('<center>' + '<h1> ' + 'Mark sheet' + '<br>'  + '<br>'+ 'Total Marks:' + ' 100 ' + '<br>' + 'marks obtained:' + '70' + '<br>'+'persentage:' + result + '%'+ '<br>'+'greade:' + 'A' + '</h1>' + '</center>')
}
else if (result >= Math.floor(60.55)) {
    document.write('<center>' + '<h1> ' + 'Mark sheet' + '<br>'  + '<br>'+ 'Total Marks:' + ' 100 ' + '<br>' + 'marks obtained:' + '60' + '<br>'+'persentage:' + result + '%'+'<br>'+'greade:' + 'B' + '</h1>' + '</center>')
}
else if (result >=Math.floor(50-45)) {
    document.write('<center>' + '<h1> ' + 'Mark sheet' + '<br>'  + '<br>'+ 'Total Marks:' + ' 100 ' + '<br>' + 'marks obtained:' + '50' + '<br>'+'persentage:' + result + '%'+ '<br>'+'greade:' + 'c' + '</h1>' + '</center>')
}