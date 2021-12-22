const speakers = [];

speakers[0] = {
    picture: '../images/yochai.PNG',
    name: 'Yochai Benkler',
    job: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies common-based peer production, and published his seminal book The Wealth of Networks in 2006.',
};

speakers[1] = {
    picture: '../images/sohyeong.PNG',
    name: 'SohYeong Noh',
    job: 'Director of Art Centre Nabi and board member of CC Korea',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
};

speakers[2] = {
    picture: '../images/lila.PNG',
    name: 'Lila Tretikov',
    job: 'Executive Director of the Wikimedia Foundation',
    bio: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.'
}

speakers[3] = {
    picture: '../images/kilnam.PNG',
    name: 'Kilnam Chon',
    job: '',
    bio: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame'
}

speakers[4] = {
    picture: '../images/julia.PNG',
    name: 'Julia Leda',
    job: 'President of Young Pirates of Europe',
    bio: 'European integration, political democracy, and participation of youth through online as her major condem, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.'
}

speakers[5] = {
    picture: '../images/ryan.PNG',
    name: 'Ryan Merkley',
    job: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.'
}

const sectionSpeakers = document.createElement('section');
sectionSpeakers.setAttribute('id', 'speakers');
sectionSpeakers.innerHTML = '<h2>Featured Speakers</h2>';
document.body.append(sectionSpeakers);

speakers.forEach(speaker => {
    //CARD CONTAINER
    const speakerCard = document.createElement('div'); //Create card
    speakerCard.className = 'speaker-card';

    //LEFT SIDE
    const speakerLeft = document.createElement('div'); 
    speakerLeft.className = 'speaker-left';
    const speakerThumbnail = document.createElement('div'); //Append thumbnail to leftside
    speakerThumbnail.className = 'speaker-thumbnail';
    speakerLeft.appendChild(speakerThumbnail);
    const speakerImage = document.createElement('img'); //Append image to thumbnail
    speakerImage.setAttribute('src', speaker.picture);
    speakerThumbnail.appendChild(speakerImage);

    //RIGHT SIDE
    const speakerRight = document.createElement('div');
    speakerRight.className = 'speaker-right';
    const speakerName = document.createElement('h3'); //Append name
    speakerName.className = 'speaker-name';
    speakerName.innerText = speaker.name;
    const speakerJob = document.createElement('p'); //Append job
    speakerJob.className = 'speaker-job';
    speakerJob.innerText = speaker.job;
    const speakerBio = document.createElement('p'); //Append bio
    speakerBio.className = 'speaker-bio';
    speakerBio.innerText = speaker.bio;
    speakerRight.appendChild(speakerName);
    speakerRight.appendChild(speakerJob);
    speakerRight.appendChild(speakerBio);

    //Append card to speakers section and fill it with info
    sectionSpeakers.appendChild(speakerCard);
    speakerCard.appendChild(speakerLeft);
    speakerCard.appendChild(speakerRight);
});