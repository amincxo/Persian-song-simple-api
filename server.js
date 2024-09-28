const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;



const  enallsong = require("./enallsong.js");
const  faallsong = require("./faallsong.js");

const  enmohsenlorestani = require("./enmohsen.js");
const  famohsenlorestani = require("./famohsen.js");
const  encoldplay = require("./encoldplay.js");
const  facoldplay = require("./facoldplay.js");
const  enramstin = require("./enramstin.js");
const  faramstin = require("./faramstin.js");

const mimeTypes = {
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'ogg': 'audio/ogg',
    'flac': 'audio/flac'
};
//برای همه اند پوینت ها
app.use(cors());

//میدل ور ها
app.use('/artists', express.static(path.join(__dirname, 'artists')));
app.use('/covers', express.static(path.join(__dirname, 'covers')));

// روت اصلی
app.get('/api/enallsong', (req, res) => {
    res.json(enallsong);
});

app.get('/api/faallsong', (req, res) => {
    res.json(faallsong);
});



// روت برای دریافت اطلاعات آهنگ‌ها
app.get('/api/enartists/mohsenlorestani', (req, res) => {
    res.json(enmohsenlorestani);
});

app.get('/api/faartists/mohsenlorestani', (req, res) => {
    res.json(famohsenlorestani);
});




app.get('/api/enartists/coldplay', (req, res) => {
    res.json(encoldplay);
});

app.get('/api/faartists/coldplay', (req, res) => {
    res.json(facoldplay);
});



app.get('/api/enartists/ramstin', (req, res) => {
    res.json(enramstin);
});

app.get('/api/faartists/ramstin', (req, res) => {
    res.json(faramstin);
});


// Endpoint برای استریم موسیقی
app.get('/stream/:song', (req, res) => {
    const song = req.params.song;
    const songPath = path.join(__dirname, 'music', song);
    
    if (!fs.existsSync(songPath)) {
        return res.status(404).send('Song not found');
    }

    const ext = path.extname(song).slice(1);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    const stat = fs.statSync(songPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': end - start + 1,
            'Content-Type': contentType,
        });

        const stream = fs.createReadStream(songPath, { start, end });
        stream.pipe(res);
    } else {
        res.writeHead(200, {
            'Content-Length': fileSize,
            'Content-Type': contentType,
        });
        fs.createReadStream(songPath).pipe(res);
    }
});

// راه‌اندازی سرور
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});