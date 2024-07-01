const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assests/Quran/001.mp3',
        displayName: 'سورة الفَاتِحَة | المنشاوي',
        cover: 'assests/Photos/1.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/002.mp3',
        displayName: 'سورة البَقَرَة | المنشاوي',
        cover: 'assests/Photos/2.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/003.mp3',
        displayName: 'سورة آل عِمرَان | المنشاوي',
        cover: 'assests/Photos/3.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/004.mp3',
        displayName: 'سورة النِّسَاء | المنشاوي',
        cover: 'assests/Photos/4.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/005.mp3',
        displayName: 'سورة المَائدة | المنشاوي',
        cover: 'assests/Photos/5.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/006.mp3',
        displayName: 'سورة الأنعَام | المنشاوي',
        cover: 'assests/Photos/6.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/007.mp3',
        displayName: 'سورة الأعرَاف | المنشاوي',
        cover: 'assests/Photos/7.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/008.mp3',
        displayName: 'سورة الأنفَال | المنشاوي',
        cover: 'assests/Photos/8.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/009.mp3',
        displayName: 'سورة التوبَة | المنشاوي',
        cover: 'assests/Photos/9.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/010.mp3',
        displayName: 'سورة يُونس | المنشاوي',
        cover: 'assests/Photos/10.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/011.mp3',
        displayName: 'سورة هُود | المنشاوي',
        cover: 'assests/Photos/11.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/012.mp3',
        displayName: 'سورة يُوسُف | المنشاوي',
        cover: 'assests/Photos/12.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/013.mp3',
        displayName: 'سورة الرَّعْد | المنشاوي',
        cover: 'assests/Photos/13.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/014.mp3',
        displayName: 'سورة إبراهِيم | المنشاوي',
        cover: 'assests/Photos/14.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/015.mp3',
        displayName: 'سورة الحِجْر | المنشاوي',
        cover: 'assests/Photos/15.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/016.mp3',
        displayName: 'سورة النَّحْل | المنشاوي',
        cover: 'assests/Photos/16.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/017.mp3',
        displayName: 'سورة الإسْرَاء | المنشاوي',
        cover: 'assests/Photos/17.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/018.mp3',
        displayName: 'سورة الكهْف | المنشاوي',
        cover: 'assests/Photos/18.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/019.mp3',
        displayName: 'سورة مَريَم | المنشاوي',
        cover: 'assests/Photos/19.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/020.mp3',
        displayName: 'سورة طه | المنشاوي',
        cover: 'assests/Photos/20.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/021.mp3',
        displayName: 'سورة الأنبيَاء | المنشاوي',
        cover: 'assests/Photos/21.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/022.mp3',
        displayName: 'سورة الحَج | المنشاوي',
        cover: 'assests/Photos/22.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/023.mp3',
        displayName: 'سورة المُؤمنون | المنشاوي',
        cover: 'assests/Photos/23.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/024.mp3',
        displayName: 'سورة النُّور | المنشاوي',
        cover: 'assests/Photos/24.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/025.mp3',
        displayName: 'سورة الفُرْقان | المنشاوي',
        cover: 'assests/Photos/25.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/026.mp3',
        displayName: 'سورة الشُّعَرَاء | المنشاوي',
        cover: 'assests/Photos/26.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/027.mp3',
        displayName: 'سورة النَّمْل | المنشاوي',
        cover: 'assests/Photos/27.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/028.mp3',
        displayName: 'سورة القَصَص | المنشاوي',
        cover: 'assests/Photos/28.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/029.mp3',
        displayName: 'سورة العَنكبوت | المنشاوي',
        cover: 'assests/Photos/29.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/030.mp3',
        displayName: 'سورة الرُّوم | المنشاوي',
        cover: 'assests/Photos/30.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/031.mp3',
        displayName: 'سورة لقمَان | المنشاوي',
        cover: 'assests/Photos/31.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/032.mp3',
        displayName: 'سورة السَّجدَة | المنشاوي',
        cover: 'assests/Photos/32.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/033.mp3',
        displayName: 'سورة الأحزَاب | المنشاوي',
        cover: 'assests/Photos/33.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/034.mp3',
        displayName: 'سورة سَبَأ | المنشاوي',
        cover: 'assests/Photos/34.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/035.mp3',
        displayName: 'سورة فَاطِر | المنشاوي',
        cover: 'assests/Photos/35.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/036.mp3',
        displayName: 'سورة يس | المنشاوي',
        cover: 'assests/Photos/36.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/037.mp3',
        displayName: 'سورة الصَّافات | المنشاوي',
        cover: 'assests/Photos/37.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/038.mp3',
        displayName: 'سورة ص | المنشاوي',
        cover: 'assests/Photos/38.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/039.mp3',
        displayName: 'سورة الزُّمَر | المنشاوي',
        cover: 'assests/Photos/39.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/040.mp3',
        displayName: 'سورة غَافِر | المنشاوي',
        cover: 'assests/Photos/40.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/041.mp3',
        displayName: 'سورة فُصِّلَتْ | المنشاوي',
        cover: 'assests/Photos/41.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/042.mp3',
        displayName: 'سورة الشُّورَى | المنشاوي',
        cover: 'assests/Photos/42.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/043.mp3',
        displayName: 'سورة الزُّخْرُف | المنشاوي',
        cover: 'assests/Photos/43.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/044.mp3',
        displayName: 'سورة الدخَان | المنشاوي',
        cover: 'assests/Photos/44.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/045.mp3',
        displayName: 'سورة الجَاثيَة | المنشاوي',
        cover: 'assests/Photos/45.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/046.mp3',
        displayName: 'سورة الأحْقاف | المنشاوي',
        cover: 'assests/Photos/46.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/047.mp3',
        displayName: 'سورة محَمَّد | المنشاوي',
        cover: 'assests/Photos/47.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/048.mp3',
        displayName: 'سورة الفَتْح | المنشاوي',
        cover: 'assests/Photos/48.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/049.mp3',
        displayName: 'سورة الحُجرَات | المنشاوي',
        cover: 'assests/Photos/49.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/050.mp3',
        displayName: 'سورة ق | المنشاوي',
        cover: 'assests/Photos/50.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/051.mp3',
        displayName: 'سورة الذَّاريَات | المنشاوي',
        cover: 'assests/Photos/51.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/052.mp3',
        displayName: 'سورة الطُّور | المنشاوي',
        cover: 'assests/Photos/52.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/053.mp3',
        displayName: 'سورة النَّجْم | المنشاوي',
        cover: 'assests/Photos/53.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/054.mp3',
        displayName: 'سورة القَمَر | المنشاوي',
        cover: 'assests/Photos/54.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/055.mp3',
        displayName: 'سورة الرَّحمن | المنشاوي',
        cover: 'assests/Photos/55.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/056.mp3',
        displayName: 'سورة الوَاقِعَة | المنشاوي',
        cover: 'assests/Photos/56.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/057.mp3',
        displayName: 'سورة الحَديد | المنشاوي',
        cover: 'assests/Photos/57.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/058.mp3',
        displayName: 'سورة المجَادلة | المنشاوي',
        cover: 'assests/Photos/58.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/059.mp3',
        displayName: 'سورة الحَشر | المنشاوي',
        cover: 'assests/Photos/59.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/060.mp3',
        displayName: 'سورة المُمتَحنَة | المنشاوي',
        cover: 'assests/Photos/60.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/061.mp3',
        displayName: 'سورة الصَّف | المنشاوي',
        cover: 'assests/Photos/61.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/062.mp3',
        displayName: 'سورة الجُمُعَة | المنشاوي',
        cover: 'assests/Photos/62.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/063.mp3',
        displayName: 'سورة المنَافِقون | المنشاوي',
        cover: 'assests/Photos/63.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/064.mp3',
        displayName: 'سورة التغَابُن | المنشاوي',
        cover: 'assests/Photos/64.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/065.mp3',
        displayName: 'سورة الطلَاق | المنشاوي',
        cover: 'assests/Photos/65.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/066.mp3',
        displayName: 'سورة التحْريم | المنشاوي',
        cover: 'assests/Photos/66.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/067.mp3',
        displayName: 'سورة المُلْك | المنشاوي',
        cover: 'assests/Photos/67.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/068.mp3',
        displayName: 'سورة القَلَم | المنشاوي',
        cover: 'assests/Photos/68.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/069.mp3',
        displayName: 'سورة الحَاقَّة | المنشاوي',
        cover: 'assests/Photos/69.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/070.mp3',
        displayName: 'سورة المعَارج | المنشاوي',
        cover: 'assests/Photos/70.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/071.mp3',
        displayName: 'سورة نُوح | المنشاوي',
        cover: 'assests/Photos/71.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/072.mp3',
        displayName: 'سورة الجِن | المنشاوي',
        cover: 'assests/Photos/72.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/073.mp3',
        displayName: 'سورة المُزَّمِّل | المنشاوي',
        cover: 'assests/Photos/73.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/074.mp3',
        displayName: 'سورة المُدَّثِّر | المنشاوي',
        cover: 'assests/Photos/74.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/075.mp3',
        displayName: 'سورة القِيَامَة | المنشاوي',
        cover: 'assests/Photos/75.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }, {
        path: 'assests/Quran/076.mp3',
        displayName: 'سورة الإنسَان | المنشاوي',
        cover: 'assests/Photos/76.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/077.mp3',
        displayName: 'سورة المُرسَلات | المنشاوي',
        cover: 'assests/Photos/77.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/078.mp3',
        displayName: 'سورة النَّبَأ | المنشاوي',
        cover: 'assests/Photos/78.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/079.mp3',
        displayName: 'سورة النّازعَات | المنشاوي',
        cover: 'assests/Photos/79.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/080.mp3',
        displayName: 'سورة عَبَس | المنشاوي',
        cover: 'assests/Photos/80.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/081.mp3',
        displayName: 'سورة التَّكوير | المنشاوي',
        cover: 'assests/Photos/81.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/082.mp3',
        displayName: 'سورة الانفِطار | المنشاوي',
        cover: 'assests/Photos/82.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/083.mp3',
        displayName: 'سورة المطفِّفِين | المنشاوي',
        cover: 'assests/Photos/83.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/084.mp3',
        displayName: 'سورة الانْشِقَاق | المنشاوي',
        cover: 'assests/Photos/84.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/085.mp3',
        displayName: 'سورة البرُوج | المنشاوي',
        cover: 'assests/Photos/85.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/086.mp3',
        displayName: 'سورة الطَّارِق | المنشاوي',
        cover: 'assests/Photos/86.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/087.mp3',
        displayName: 'سورة الأَعْلى | المنشاوي',
        cover: 'assests/Photos/87.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/088.mp3',
        displayName: 'سورة الغَاشِية | المنشاوي',
        cover: 'assests/Photos/88.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/089.mp3',
        displayName: 'سورة الفَجْر | المنشاوي',
        cover: 'assests/Photos/89.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/090.mp3',
        displayName: 'سورة البَلَد | المنشاوي',
        cover: 'assests/Photos/90.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/091.mp3',
        displayName: 'سورة الشَّمْس | المنشاوي',
        cover: 'assests/Photos/91.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/092.mp3',
        displayName: 'سورة الليْل | المنشاوي',
        cover: 'assests/Photos/92.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/093.mp3',
        displayName: 'سورة الضُّحَى | المنشاوي',
        cover: 'assests/Photos/93.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/094.mp3',
        displayName: 'سورة الشَّرْح | المنشاوي',
        cover: 'assests/Photos/94.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/095.mp3',
        displayName: 'سورة التِّين | المنشاوي',
        cover: 'assests/Photos/95.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/096.mp3',
        displayName: 'سورة العَلَق | المنشاوي',
        cover: 'assests/Photos/96.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/097.mp3',
        displayName: 'سورة القَدْر | المنشاوي',
        cover: 'assests/Photos/97.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/098.mp3',
        displayName: 'سورة البَينَة | المنشاوي',
        cover: 'assests/Photos/98.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/099.mp3',
        displayName: 'سورة الزلزَلة | المنشاوي',
        cover: 'assests/Photos/99.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/100.mp3',
        displayName: 'سورة العَادِيات | المنشاوي',
        cover: 'assests/Photos/100.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/101.mp3',
        displayName: 'سورة القَارِعة | المنشاوي',
        cover: 'assests/Photos/101.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/102.mp3',
        displayName: 'سورة التَّكَاثر | المنشاوي',
        cover: 'assests/Photos/102.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/103.mp3',
        displayName: 'سورة العَصْر | المنشاوي',
        cover: 'assests/Photos/103.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/104.mp3',
        displayName: 'سورة الهُمَزَة | المنشاوي',
        cover: 'assests/Photos/104.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/105.mp3',
        displayName: 'سورة الفِيل | المنشاوي',
        cover: 'assests/Photos/105.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/106.mp3',
        displayName: 'سورة قُرَيْش | المنشاوي',
        cover: 'assests/Photos/106.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/107.mp3',
        displayName: 'سورة المَاعُون | المنشاوي',
        cover: 'assests/Photos/107.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/108.mp3',
        displayName: 'سورة الكَوْثَر | المنشاوي',
        cover: 'assests/Photos/108.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/109.mp3',
        displayName: 'سورة الكَافِرُون | المنشاوي',
        cover: 'assests/Photos/109.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/110.mp3',
        displayName: 'سورة النَّصر | المنشاوي',
        cover: 'assests/Photos/110.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/111.mp3',
        displayName: 'سورة المَسَد | المنشاوي',
        cover: 'assests/Photos/111.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/112.mp3',
        displayName: 'سورة الإخْلَاص | المنشاوي',
        cover: 'assests/Photos/112.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/113.mp3',
        displayName: 'سورة الفَلَق | المنشاوي',
        cover: 'assests/Photos/113.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    },
    {
        path: 'assests/Quran/114.mp3',
        displayName: 'سورة النَّاس | المنشاوي',
        cover: 'assests/Photos/114.jpg',
        artist: 'الشيخ محمد صديق المنشاوي',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

function playSong(index) {
    musicIndex = index;
    loadMusic(songs[musicIndex]);
    playMusic();
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);

// Open side navigation
function openNav() {
    document.getElementById("sidenav").style.width = "250px"; // Adjust width as needed
    document.getElementById("openbtn").style.display = "none"; // Hide menu icon when sidenav is open
}

// Close side navigation
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("openbtn").style.display = "block"; // Show menu icon when sidenav is closed
}


