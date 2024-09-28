simple Music api
persian song

nodejs , expressjs

how to use 
git init https://github.com/amincxo/Persian-song-simple-api.git
cd Persian-song-simple-api
npm install
npm start   


simple reponde 
{

            {  
                id:1 ,name: 'Bache Sosol',artist: 'Mohsen 
                Lorestani',src: "mohsenBachesosol.mp3" ,
                format: 'mp3' ,cover: 'covers/mohsenBachesosol.jpg'
                },
            {  
                id:2 , name: 'Bache Gherti', artist: 'Mohsen Lorestani', src: "MohsenLorestaniBacheGherti.mp3" , format: 'mp3' , cover: 'covers/mohsenBachegherti.jpg' 
                },

}


stream :
    {url}/stream/{apiSrc}

api :
    allsong:
        english: {url}/api/enallsong
        persian: {url}/api/faallsong

    by artists: 
        english: {url}/api/enartists/{artist}
        persian: {url}/api/faartists/{artist}

        artist para = mohsenlorestani , coldplay , ramstin
