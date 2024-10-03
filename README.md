<h1>🌟simple Music api🌟</h1>
<h2>persian song</h2>

## Librarty using
```
 nodejs , expressjs
```
## how to use 
    git init https://github.com/amincxo/Persian-song-simple-api.git
    cd Persian-song-simple-api
    npm install
    npm start   


## simple reponde 
```
            {  
                id:1 ,name: 'Bache Sosol',artist: 'Mohsen 
                Lorestani',src: "mohsenBachesosol.mp3" ,
                format: 'mp3' ,cover: 'covers/mohsenBachesosol.jpg'
                },
            {  
                id:2 , name: 'Bache Gherti', artist: 'Mohsen Lorestani', src: "MohsenLorestaniBacheGherti.mp3" , format: 'mp3' , cover: 'covers/mohsenBachegherti.jpg' 
                },
```



## stream music :
    {url}/stream/{apiSrc}


## api by all :
    allsong:
        english: {url}/api/enallsong
        persian: {url}/api/faallsong
            

## api by artists: 
        english: {url}/api/enartists/{name}
        persian: {url}/api/faartists/{name}

        name para = mohsenlorestani , coldplay , ramstin
