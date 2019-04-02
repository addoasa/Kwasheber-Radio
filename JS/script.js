$(document).ready(() => {
	class Station{
		constructor(stationName,artist,song,audio){
			this.stationName=stationName;
			this.artist=artist;
			this.song=song;
			this.audio=audio; 
		}
		getStationName(){
			return `${this.stationName}`; //-----------getStation is a method you have to create in order to return
	// ----------must return (i.e create methods) outside the constructor but inside the class.
		}
		getArtist(){
			return `${this.artist[iSngArt]}`;
		}	
		getSong(){
			return `${this.song[iSngArt]}`;
		}
		getSongs(){
			return this.song;
		}
		getAudio(){
			return `${this.audio[iSngArt]}`; 
		}
		
	}

		
	let station1 = new Station('G-Funk', 
	                    ['Nate Dogg', 'Warren G', 'Lady Of Rage', 'Twinz'],
	                    ['Where Are You Going?', 'Regulate', 'Afro Puffs', 'Round & Round'],
	                    ['Audio/G-funk/Nate Dogg - Where Are You Going.mp3',
	                    'Audio/G-funk/Warren G - Regulate.mp3',
	                    'Audio/G-funk/Lady Of Rage - Afro Puffs.mp3',
	                    'Audio/G-funk/The Twinz - Round and Round.mp3']); 
	                    
	let station2 = new Station('Hip-Hop',
						['Sampa the Great', 'Lupe Fiasco', 'Mac Miller', 'Edan'], 
						['Blessings', 'Adoration of the Magi', 'Ladders', 'Making Planets (ft. Mr. Lif)'],
						['Audio/hiphop/Sampa The Great - Blessings.mp3',
						'Audio/hiphop/Lupe Fiasco - Adoration of The Magi.mp3',
						'Audio/hiphop/Mac Miller - Ladders.mp3',
						'Audio/hiphop/Edan - Making Planets.mp3']); 
					
	let station3 = new Station('Indie Goldies',
	                    ['MOONFUZZ','Girls','Porches','Kasabian'],
	                    ['Stupid Cupid','Hellhole Ratrace','headsgiving','Club Foot'],
	                    ['Audio/indie goldies/MOONFUZZ - Stupid Cupid.mp3',
	                    'Audio/indie goldies/Girls - Hellhole Ratrace.mp3',
	                    'Audio/indie goldies/Porches - Headsgiving.mp3',
	                    'Audio/indie goldies/Kasabian - Club Foot.mp3']);
	
	
	let station4 = new Station('Trip-Hop',
	                    ['Jackie Mittoo',' Portishead','Massive Attack','Break Reform'],
	                    ['Ghetto Organ','Pedestal','Angel','Ghosts'],
	                    ['Audio/Triphop/Jackie Mittoo - Ghetto Organ.mp3',
	                    'Audio/Triphop/Portishead - Pedestal.mp3',
	                    'Audio/Triphop/Massive Attack - Angel.mp3',
	                    'Audio/Triphop/Break Reform - Ghosts.mp3']);
	
	let station5 = new Station('X-Perimental',
						['Captain Beefheart', 'Shabazz Palaces', 'Flying Lotus', 'Deathgrips'],
						['Frownland', 'Swerve... The Reeping of All That is Worthwile (Noir Not Withstanding)', 
						'Roberta Flack', 'Guillotine'],
						['Audio/X-perimental/Captain Beefheart - Frownland.mp3',
						'Audio/X-perimental/Shabazz Palaces - Swerve.mp3',
						'Audio/X-perimental/Flying Lotus - Roberta Flack.mp3',
						'Audio/X-perimental/Death Grips - Guillotine.mp3']);  
	
	
	let stationArr = [station1, station2, station3, station4, station5]; 

	const $display = $('#infoDisplay');
	const $stationName = $('#stationName');
	const $songTitle =$('#songTitle');
	const $songArtist =$('#songArtist');
	const $chgBtn = $('.chgBtn');
	const $pwrBtn = $('.pwrBtn');
	
	
    // ----------------- stations--------------------
   
   
   
   
   
  
	let i = 0; //used to iterate through stations
	let songArr = stationArr[i].getSongs(); 
	console.log(songArr); 
	let songArrLength = songArr.length; 
	console.log(songArrLength); 
	let iSngArt = 0;////this is the index that sets what song will play from the array 
	console.log(iSngArt); 
	let trk1 = new Audio(); // that part sets the song to an empty audio object until we hit the next button 
	
	 
	 
	$display.css('display', 'none');// Sets the info display to none on page load.	
	 
	$pwrBtn.on('click', () =>{   //shows the hidden display when pwrBtn is clicked
		$display.fadeToggle(400);
		
		//$stationName.html(stationArr[i].getStationName());
		$stationName.html(''); 
		$songTitle.html('POWER ON');//inserts 'POWER ON' when pwrBtn is clicked
		$songArtist.html('');
	
		if(!trk1.paused){
			trk1.pause();
		}
		
	});
	
	
	$chgBtn.on('click', () => {
		
		iSngArt = Math.floor(Math.random()*songArrLength);
		
		if($display.is(':visible')){
			//resets index to 0 (resets to first station) if current station is the last one when next button is hit 
			if(i > stationArr.length-1) {
				i = 0; 
			}
			$stationName.html(stationArr[i].getStationName());	
			
			if(stationArr[i].getStationName() == 'G-Funk'){
				trk1.pause(); 
				$songTitle.html(stationArr[i].getSong());
				$songArtist.html(stationArr[i].getArtist());
				trk1 = new Audio(stationArr[i].getAudio());
				trk1.play();
				
			
				//trk1.on('ended', () =>{ //gives error not a function 
				
				//plays next song but from wrong station
				// trk1.addEventListener('ended', () => {
				// 	iSngArt++; 
				// 	trk1 = new Audio(stationArr[i].getAudio());
				// 	trk1.pause();
				// 	trk1.load(); 
				// 	trk1.play(); 
				// });	
			}
			else if(stationArr[i].getStationName() == 'Hip-Hop'){
				trk1.pause(); 
				$songTitle.html(stationArr[i].getSong());
				$songArtist.html(stationArr[i].getArtist());
				trk1 = new Audio(stationArr[i].getAudio());
				trk1.play();
			}
			else if(stationArr[i].getStationName() == 'Indie Goldies'){
				trk1.pause(); 
				$songTitle.html(stationArr[i].getSong());
				$songArtist.html(stationArr[i].getArtist());
				trk1 = new Audio(stationArr[i].getAudio());
				trk1.play();
			}
			else if(stationArr[i].getStationName() == 'Trip-Hop'){
				trk1.pause(); 
				$songTitle.html(stationArr[i].getSong());
				$songArtist.html(stationArr[i].getArtist());
				trk1 = new Audio(stationArr[i].getAudio());
				trk1.play();
			}
			else{
				trk1.pause(); 
				$songTitle.html(stationArr[i].getSong());
				$songArtist.html(stationArr[i].getArtist());
				trk1 = new Audio(stationArr[i].getAudio());
				trk1.play();
			}
			i++;
		}
	});

});
