
$(document).ready(function(){
    //国内 省 选择
    $("#china-city-select-ul > li[class!=disabled]").click(function(){
        $.ajax({
            type: 'POST',
            url: 'http://tv.wijicn.com/nk-try/city_list.php' ,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({'letter': $(this).text()}) ,
            success: (function(jsonResult){
                for(var i=0;i<jsonResult.length;i++){
                    if(i!=0){
                    var result = result + '<li><a href="#">'+jsonResult[i]+'</a></li>' ;
                    }else{
                    var result = '<li><a href="#">'+jsonResult[i]+'</a></li>' ;
                    }
                }

                $("#china-city-select-content-list").html(result);

                //国内 大学 选择
                $("#china-city-select-content-list > li").click(function(){
                    $.ajax({
                        type: 'POST',
                        url: 'http://tv.wijicn.com/nk-try/university_list.php' ,
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify({'province': $(this).text()}) ,
                        success: (function(jsonResult){
                            for(var i=0;i<jsonResult.length;i++){
                                if(i!=0){
                                    if ( jsonResult[i]['engine'] == 1 ){
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 2 ){
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 3 ){
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span><br/><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else{
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }
                                }else{
                                    if ( jsonResult[i]['engine'] == 1 ){
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 2 ){
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 3 ){
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span><br/><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else{
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }
                                }
                            }

                        $("#china-university-list-content").html(result);
                        }),
                    });
                });
            }),
        });

    });
});

//默认省市选择
$(document).ready(function(){
    $("#china-city-select-content-list > li").click(function(){
        $.ajax({
            type: 'POST',
            url: 'http://tv.wijicn.com/nk-try/university_list.php' ,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({'province': $(this).text()}) ,
                        success: (function(jsonResult){
                            for(var i=0;i<jsonResult.length;i++){
                                if(i!=0){
                                    if ( jsonResult[i]['engine'] == 1 ){
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 2 ){
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 3 ){
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span><br/><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else{
                                        var result = result + '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }
                                }else{
                                    if ( jsonResult[i]['engine'] == 1 ){
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 2 ){
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else if ( jsonResult[i]['engine'] == 3 ){
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td><span class="badge">985</span><br/><span class="badge">211</span></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }else{
                                        var result = '<tr><td>'+jsonResult[i]['name']+'</td><td><img src="./schoollogo/'+jsonResult[i]['logo']+'" height="70px"/></td><td><a href="'+jsonResult[i]['url']+'"target="_blank">'+jsonResult[i]['url']+'</a></td><td></td><td>'+jsonResult[i]['description']+'</td></tr>';
                                    }
                                }
                            }

                        $("#china-university-list-content").html(result);
            }),
        });
    });
});




