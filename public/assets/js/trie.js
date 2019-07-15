//Manual implementation:
const TrieNode = function(key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
}

TrieNode.prototype.getWord = function() {
  let output = [];
  let node = this;

  while (node !== null) {
    output.unshift(node.key);
    node = node.parent;
  }
  return output.join('');
};

//first Trie implementation
const Trie = function() {
  this.root = new TrieNode(null);
}

Trie.prototype.insert = function(word) {
  let node = this.root;
  for(let i=0; i<word.length; i++) {
    if(!node.children[word[i]]) {
      node.children[word[i]] = new TrieNode(word[i]);
      node.children[word[i]].parent = node;
    }
    node = node.children[word[i]];
    if (i == word.length - 1) {
      node.end = true;
    }
  }
};

Trie.prototype.contains = function(word) {
  let node = this.root;
  for(let i=0;i<word.length; i++) {
    if(node.children[word[i]]) {
      node = node.children[word[i]];
    } else {
      return false;
    }
  }
  return node.end;
};

Trie.prototype.find = function(prefix) {
  let node = this.root;
  let output = [];
  for(let i=0; i<prefix.length; i++) {
    if(node.children[prefix[i]]) {
      node = node.children[prefix[i]];
    } else {
      return output;
    }
  }
  findAllWords(node, output);
  return output;
};

const findAllWords = function(node, arr) {
  if(node.end) {
    arr.unshift(node.getWord());
  }
  for(let child in node.children) {
    findAllWords(node.children[child], arr);
  }
}

//==============================================

let playerArr1 = ["Alex Abrines","Quincy Acy","Jaylen Adams","Jordan Adams","Steven Adams","Bam Adebayo","Deng Adel","Arron Afflalo","Alexis Ajinca","DeVaughn Akoon-Purcell","Cole Aldrich","LaMarcus Aldridge","Cliff Alexander","Bryce Alford","Rawle Alkins","Grayson Allen","Jarrett Allen","Kadeem Allen","Lavoy Allen","Tony Allen","Al-Farouq Aminu","Lou Amundson","Chris Andersen","Alan Anderson","C.J. Anderson","James Anderson","Justin Anderson","Kyle Anderson","Ryan Anderson","Braian Angola","Ike Anigbogu","Giannis Antetokounmpo","Kostas Antetokounmpo","Thanasis Antetokounmpo","Carmelo Anthony","Joel Anthony","OG Anunoby","Keith Appling","Ryan Arcidiacono","Trevor Ariza","Darrell Arthur","Jamel Artis","Omer Asik","Kenny Atkinson","D.J. Augustin","Jeff Ayres","DeAndre Ayton","Luke Babbitt","Dwayne Bacon","Marvin Bagley III","Cameron Bairstow","Ron Baker","Wade Baldwin IV","Lonzo Ball","Mohamed Bamba","Leandro Barbosa","J.J. Barea","Jaylen Barford","Andrea Bargnani","Harrison Barnes","Matt Barnes","Will Barton","Brandon Bass","Keita Bates-Diop","Nicolas Batum","Jerryd Bayless","Aron Baynes","Kent Bazemore","Bradley Beal","Malik Beasley","Michael Beasley","Marco Belinelli","Jordan Bell","DeAndre' Bembry","Dragan Bender","Anthony Bennett","Ben Bentil","Dairis Bertans","Davis Bertans","Patrick Beverley","Justi Bibbs","John-Blair Bickerstaff","Khem Birch","Jabari Bird","Bismack Biyombo","Nemanja Bjelica","Tarik Black","DeJuan Blair","Steve Blake","Antonio Blakeney","Eric Bledsoe","Jaron Blossomgame","Vander Blue","Trevon Bluiett","Bogdan Bogdanovic","Bojan Bogdanovic","Andrew Bogut","Jonah Bolden","Joel Bolomboy","Isaac Bonga","Matt Bonner","Devin Booker","Trevor Booker","Chris Bosh","Chris Boucher","Avery Bradley","Tony Bradley","Elton Brand","Corey Brewer","Mikal Bridges","Miles Bridges","Isaiah Briscoe","Ryan Broekhoff","Malcolm Brogdon","Aaron Brooks","Dillon Brooks","MarShon Brooks","Scott Brooks","Anthony Brown","Bobby Brown","Brett Brown","Bruce Brown","Jaylen Brown","Lorenzo Brown","Markel Brown","Sterling Brown","Troy Brown Jr.","Jalen Brunson","Nicolas Brussino","Kobe Bryant","Thomas Bryant","Michael Budenholzer","Chase Budinger","Reggie Bullock","Trey Burke","Alec Burks","Deonte Burton","Caron Butler","Jimmy Butler","Rasual Butler","Dwight Buycks","Bruno Caboclo","Jose Calderon","Kentavious Caldwell-Pope","Isaiah Canaan","Clint Capela","Rick Carlisle","DeMarre Carroll","Jevon Carter","Vince Carter","Wendell Carter Jr.","Michael Carter-Williams","Alex Caruso","Omri Casspi","Willie Cauley-Stein","Troy Caupain","Tyler Cavanaugh","Mario Chalmers","Tyson Chandler","Wilson Chandler","Joe Chealey","Chris Chiozza","Marquese Chriss","Rakeem Christmas","Semaj Christon","Gary Clark","Ian Clark","Coty Clarke","Jordan Clarkson","Gian Clavell","Antonius Cleveland","Steve Clifford","Jeff Coby","Norris Cole","John Collins","Zach Collins","Kyle Collinsworth","Darren Collison","Nick Collison","Bonzie Colson","Mike Conley","Pat Connaughton","Quinn Cook","Charles Cooke","Jack Cooley","Chris Copeland","Matt Costello","Bryce Cotton","DeMarcus Cousins","Isaiah Cousins","Robert Covington","Allen Crabbe","Torrey Craig","Drew Crawford","Jamal Crawford","Jordan Crawford","Markel Crawford","Mitch Creek","Jae Crowder","Dante Cunningham","Jared Cunningham","Seth Curry","Stephen Curry","Troy Daniels","Mike D'Antoni","Cristiano Da Silva Felicio","Anthony Davis","Devin Davis","Deyonta Davis","Ed Davis","Tyler Davis","Branden Dawson","Dewayne Dedmon","Bryce Dejean-Jones","Sam Dekker","Malcolm Delaney","Ángel Delgado","Matthew Dellavedova","Cody Demps","Luol Deng","DeMar DeRozan","Marcus Derrickson","Cheick Diallo","Hamidou Diallo","Boris Diaw","Gorgui Dieng","Spencer Dinwiddie","Donte DiVincenzo","Luka Doncic","Billy Donovan","Tyler Dorsey","Damyean Dotson","Toney Douglas","Milton Doyle","PJ Dozier","Goran Dragic","Larry Drew II","Andre Drummond","Jared Dudley","Duje Dukan","Tim Duncan","Mike Dunleavy","Kris Dunn","Kevin Durant","Trevon Duval","Cleanthony Early","Jarell Eddie","Vincent Edwards","Henry Ellenson","Wayne Ellington","Monta Ellis","Joel Embiid","Tyler Ennis","James Ennis III","Drew Eubanks","Jacob Evans","Jawun Evans","Jeremy Evans","Keenan Evans","Tyreke Evans","Dante Exum","Festus Ezeli","C.J. Fair","Kenneth Faried","Jordan Farmar","Derrick Favors","Kay Felder","Cristiano Felicio","Carrick Felix","Raymond Felton","Terrance Ferguson","Yogi Ferrell","Dorian Finney-Smith","David Fizdale","Bryn Forbes","Evan Fournier","De'Aaron Fox","Randy Foye","Michael Frazier","Tim Frazier","Melvin Frazier Jr.","Jimmer Fredette","Channing Frye","Markelle Fultz","Wenyen Gabriel","Abdul Gaddy","Danilo Gallinari","Langston Galloway","Patricio Garino","Kevin Garnett","Billy Garrett","Marc Gasol","Pau Gasol","Rudy Gay","Michael Gbinije","Alonzo Gee","Alvin Gentry","Paul George","Marcus Georges-Hunt","Jonathan Gibson","Taj Gibson","Harry Giles III","Shai Gilgeous-Alexander","Manu Ginobili","Rudy Gobert","Drew Gooden","Archie Goodwin","Brandon Goodwin","Aaron Gordon","Eric Gordon","Marcin Gortat","Andrew Goudelock","Devonte' Graham","Treveon Graham","Jerami Grant","Jerian Grant","Donte Grantham","Josh Gray","Danny Green","Draymond Green","Erick Green","Garlon Green","Gerald Green","JaMychal Green","Jeff Green","Blake Griffin","Jorge Gutierrez","Isaac Haas","PJ Hairston","Daniel Hamilton","Johnny Hamilton","Jordan Hamilton","Justin Hamilton","A.J. Hammons","Dusty Hannahs","Tyler Hansbrough","Tim Hardaway Jr.","James Harden","Maurice Harkless","Justin Harper","Montrezl Harrell","Devin Harris","Gary Harris","Joe Harris","Manny Harris","Tobias Harris","Aaron Harrison","Andrew Harrison","Shaquille Harrison","Josh Hart","Isaiah Hartenstein","Udonis Haslem","Spencer Hawes","Charles Hayes","Nigel Hayes","Gordon Hayward","Reggie Hearn","Gerald Henderson","Myke Henry","John Henson","Guillermo Hernangomez","Juancho Hernangomez","Mario Hezonja","Roy Hibbert","Isaiah Hicks","Stephan Hicks","JJ Hickson","Buddy Hield","Haywood Highsmith","Nene Hilario","George Hill","Jordan Hill","Solomon Hill","Darrun Hilliard","Kirk Hinrich","Fred Hoiberg","Aaron Holiday","Jrue Holiday","Justin Holiday","John Holland","Ryan Hollins","Rondae Hollis-Jefferson","Richaun Holmes","Rodney Hood","Scotty Hopson","Al Horford","Jeff Hornacek","Danuel House Jr.","Dwight Howard","Marcelo Huertas","Kevin Huerter","Josh Huestis","Isaac Humphries","Kris Humphries","Isaac Hunphries","RJ Hunter","Vince Hunter","Chandler Hutchison","Serge Ibaka","Andre Iguodala","Ersan Ilyasova","Joe Ingles","Damien Inglis","Andre Ingram","Brandon Ingram","Kyrie Irving","Jonathan Isaac","Wesley Iwundu","Jarrett Jack","Aaron Jackson","Demetrius Jackson","Frank Jackson","Josh Jackson","Justin Jackson","Pierre Jackson","Reggie Jackson","Jaren Jackson Jr.","LeBron James","Mike James","Al Jefferson","Amile Jefferson","Cory Jefferson","Richard Jefferson","John Jenkins","Brandon Jennings","Jonas Jerebko","Dave Joerger","Alize Johnson","Amir Johnson","BJ Johnson","Brice Johnson","Chris Johnson","Dakari Johnson","James Johnson","Jaylen Johnson","Joe Johnson","Nick Johnson","Omari Johnson","Orlando Johnson","Stanley Johnson","Tyler Johnson","Wesley Johnson","Darius Johnson-Odom","Nikola Jokic","Dahntay Jones","Damian Jones","Jalen Jones","James Jones","Jemerrio Jones","Perry Jones","Terrence Jones","Tyus Jones","Derrick Jones Jr.","DeAndre Jordan","Cory Joseph","Chris Kaman","Frank Kaminsky","Enes Kanter","Sergey Karasev","Sasha Kaun","Ryan Kelly","Luke Kennard","Steve Kerr","Jason Kidd","Michael Kidd-Gilchrist","Sean Kilpatrick","George King","Nick King","Maximilian Kleber","Brandon Knight","Kevin Knox","Furkan Korkmaz","Luke Kornet","Kyle Korver","Kosta Koufos","Rodions Kurucs","Kyle Kuzma","Mindaugas Kuzminskas","Skal Labissiere","Jeremy Lamb","Carl Landry","Nicolas Laprovittola","Shane Larkin","Joffrey Lauvergne","Zach LaVine","Ty Lawson","Jake Layman","T. J. Leaf","Courtney Lee","Damian Lee","David Lee","Walter Lemon Jr.","Alex Len","Kawhi Leonard","Meyers Leonard","Jon Leuer","Caris Levert","DeAndre Liggins","Damian Lillard","Jeremy Lin","Shaun Livingston","Zach Lofton","Shawn Long","Kevon Looney","Brook Lopez","Robin Lopez","Kevin Love","Kyle Lowry","Jordan Loyd","Kalin Lucas","John Lucas III","Timothé Luwawu-Cabarrot","Tyler Lydon","Jairus Lyles","Trey Lyles","Sheldon Mac","Scott Machado","Shelvin Mack","Daryl Macon","J.P. Macura","Josh Magette","Ian Mahinmi","Thon Maker","Michael Malone","Devyn Marble","Boban Marjanovic","Lauri Markkanen","Kendall Marshall","Jarell Martin","Kevin Martin","Frank Mason","Yante Maten","Mangok Mathiang","Wesley Matthews","O.J. Mayo","Luc Mbah a Moute","James Michael McAdoo","Tahjere McCall","Ray McCallum","Patrick McCaw","CJ McCollum","TJ McConnell","Brandon McCoy","Erik McCree","Chris McCullough","KJ McDaniels","Doug McDermott","Mitch McGary","JaVale McGee","Rodney McGruder","Trey McKinney-Jones","Alfonzo McKinnie","Jordan McLaughlin","Ben McLemore","Nate McMillan","Jordan McRae","Josh McRoberts","Jodie Meeks","Salah Mejri","De'Anthony Melton","Chimezie Metu","Jordan Mickey","Khris Middleton","CJ Miles","Andre Miller","Darius Miller","Malcolm Miller","Mike Miller","Patty Mills","Elijah Millsap","Paul Millsap","Shake Milton","Nikola Mirotic","Donovan Mitchell","Naz Mitrou-Long","Nazr Mohammed","Malik Monk","Greg Monroe","Luis Montero","Ben Moore","Doral Moore","E'Twaun Moore","Eric Moreland","Darius Morris","Jaylen Morris","Marcus Morris","Markieff Morris","Monte Morris","Anthony Morrow","Donatas Motiejunas","Johnathan Motley","Timofey Mozgov","Emmanuel Mudiay","Shabazz Muhammad","Xavier Munford","Dejounte Murray","Jamal Murray","Dzanan Musa","Mike Muscala","Sviatoslav Mykhailiuk","Abdel Nader","Larry Nance Jr.","Shabazz Napier","Le'Bryan Nash","Maurice Ndour","Gary Neal","Jameer Nelson","Maybyner Nene","Raul Neto","George Niang","Andrew Nicholson","Joakim Noah","Nerlens Noel","Lucas Nogueira","Steve Novak","Dirk Nowitzki","Frank Ntilikina","Kendrick Nunn","James Nunnally","Jusuf Nurkic","David Nwaba","J.J. O'Brien","Johnny O'Bryant III","Daniel Ochefu","Semi Ojeleye","Emeka Okafor","Jahlil Okafor","Elie Okobo","Josh Okogie","Victor Oladipo","Kelly Olynyk","Nuni Omot","Royce O'Neale","Arinze Onuaku","Chinanu Onuaku","Kyle O'Quinn","Cedi Osman","Yakuba Ouattara","Kelly Oubre Jr.","Zaza Pachulia","Marcus Paige","Georgios Papagiannis","Kostas Papanikolaou","Jabari Parker","Tony Parker","Chandler Parsons","Lamar Patterson","Patrick Patterson","Justin Patton","Branden Paul","Chris Paul","Adreian Payne","Cameron Payne","Elfrid Payton","Gary Payton II","Nikola Pekovic","Norvel Pelle","Kendrick Perkins","London Perrantes","Alec Peters","Tarik Phillip","Paul Pierce","Theo Pinson","Tibor Pleiss","Marshall Plumlee","Mason Plumlee","Miles Plumlee","Jakob Poeltl","Quincy Pondexter","Gregg Popovich","Michael Porter Jr.","Otto Porter Jr.","Bobby Portis","Kristaps Porzingis","Dwight Powell","Norman Powell","Alex Poythress","Phil Pressey","Billy Preston","Ronnie Price","Pablo Prigioni","Taurean Prince","Tayshaun Prince","Jacob Pullen","Rodney Purvis","Tim Quarterman","Ivan Rabb","Chasson Randle","Julius Randle","Zach Randolph","Xavier Rathan-Mayes","JJ Redick","Davon Reed","Willie Reed","Cameron Reynolds","Josh Richardson","Malachi Richardson","Austin Rivers","Doc Rivers","Andre Roberson","Jeff Roberson","Brian Roberts","Devin Robinson","Duncan Robinson","Jerome Robinson","Mitchell Robinson","Nate Robinson","Thomas Robinson","Glenn Robinson III","Sergio Rodriguez","Rajon Rondo","Derrick Rose","Terrence Ross","Terry Rozier","Ricky Rubio","Damjan Rudez","Brandon Rush","D'Angelo Russell","Domantas Sabonis","Robert Sacre","Brandon Sampson","JaKarr Sampson","Larry Sanders","Dario Saric","Tomas Satoransky","Dennis Schroder","Luis Scola","Mike Scott","Thabo Sefolosha","Wayne Selden","Kevin Seraphin","Ramon Sessions","Collin Sexton","Landry Shamet","Iman Shumpert","Pascal Siakam","Jordan Sibert","Xavier Silas","Ben Simmons","Jonathon Simmons","Kobi Simmons","Anfernee Simons","Henry Sims","Kyle Singler","Donald Sloan","Marcus Smart","Greg Smith","Ish Smith","Jason Smith","Josh Smith","J.R. Smith","Russ Smith","Zach Smith","Zhaire Smith","Dennis Smith Jr.","Tony Snell","Quin Snyder","Richard Solomon","Ray Spalding","Marreese Speights","Omari Spellman","Tiago Splitter","Erik Spoelstra","Jonathan Stark","Nik Stauskas","D.J. Stephens","Lance Stephenson","Alex Stepheson","Brad Stevens","Elijah Stewart","David Stockton","Jarnell Stokes","Diamond Stone","Julyan Stone","Terry Stotts","Amar'e Stoudemire","Rodney Stuckey","Jared Sullinger","Edmond Sumner","Caleb Swanigan","Jayson Tatum","Edy Tavares","Walter Tavares","Isaiah Taylor","Jeff Teague","Marquis Teague","Mirza Teletovic","Garrett Temple","Milos Teodosic","Jared Terrell","Emanuel Terry","Jason Terry","Daniel Theis","Tom Thibodeau","Isaiah Thomas","Khyri Thomas","Lance Thomas","Hollis Thompson","Jason Thompson","Klay Thompson","Tristan Thompson","Marcus Thornton","Sindarius Thornwell","Mike Tobey","Anthony Tolliver","Axel Toupane","Karl-Anthony Towns","Gary Trent Jr.","Jay Triano","Allonzo Trier","P.J. Tucker","Evan Turner","Myles Turner","Ekpe Udoh","Beno Udrih","Tyler Ulis","Jarrod Uthoff","Jonas Valanciunas","Denzel Valentine","Jarred Vanderbilt","Stan Van Gundy","Fred VanVleet","Anderson Varejao","Greivis Vasquez","Rashad Vaughn","Charlie Villanueva","Gabriel Vincent","Noah Vonleh","Nikola Vucevic","Sasha Vujacic","Dwyane Wade","Moritz Wagner","Dion Waiters","Kemba Walker","Lonnie Walker IV","John Wall","Tyrone Wallace","Luke Walton","Derrick Walton Jr.","Brad Wanamaker","Jameel Warney","TJ Warren","Julian Washburn","Yuta Watanabe","CJ Watson","Travis Wear","James Webb III","Briante Weber","Sonny Weems","Thomas Welsh","David West","Russell Westbrook","Derrick White","Okaro White","Isaiah Whitehead","Andrew White III","Hassan Whiteside","Shayne Whittington","Andrew Wiggins","CJ Wilcox","Jacob Wiley","Damien Wilkins","Isaiah Wilkins","Alan Williams","C.J. Williams","Deron Williams","Derrick Williams","Elliott Williams","Johnathan Williams","Kenrich Williams","Lou Williams","Marvin Williams","Mo Williams","Reggie Williams","Troy Williams","Robert Williams III","Matt Williams Jr.","Zion Williamson","D. J. Wilson","Jamil Wilson","Kyle Wiltjer","Justise Winslow","Jeff Withey","Nate Wolters","Christian Wood","Metta World Peace","Brandan Wright","Delon Wright","Dorell Wright","Tony Wroten","Guerschon Yabusele","James Young","Joe Young","Michael Young","Nick Young","Thaddeus Young","Trae Young","Cody Zeller","Tyler Zeller","Qi Zhou","Stephen Zimmerman","Paul Zipser","Ante Zizic","Ivica Zubac"];

let teamArr1 = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Caveliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers"];

//instantiate

let playerTrie = new Trie;
let lastFirstTrie = new Trie;
const trieMaker = (array) => {
  array.forEach(item => {
    playerTrie.insert(item);
    lastFirstTrie.insert(item.split(' ').reverse().join(', '));
  });
};

let teamTrie = new Trie;
let lastFirstTeamTrie = new Trie;
const teamTrieMaker = (array) => {
  array.forEach(item => {
    teamTrie.insert(item);
    lastFirstTeamTrie.insert(item.split(' ').reverse().join(', '));
  });
};

trieMaker(playerArr1);
teamTrieMaker(teamArr1);

const convert = (array) => {
  let array2 = [];
  array.forEach(item => {
    array2.push(item.split(', ').reverse().join(' '));
  });
  return array2;
}

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

const trieSearchPlayer = function(str) {
  // console.log(convert(lastFirstTrie.find(str)));
  // console.log(playerTrie.find(str));
  let resultArr = [...new Set([...playerTrie.find(str), ...convert(lastFirstTrie.find(str))])];
  // console.log(resultArr);
  for (let i=0; i<resultArr.length; i++) {
      let newOption = `<option class="option" value="${resultArr[i]}">`;
      $('#playerDropdown').append(newOption);
  }
};

const trieSearchTeam = function(str) {
  let resultArr = [...new Set([...teamTrie.find(str), ...convert(lastFirstTeamTrie.find(str))])];
  for (let i=0; i<resultArr.length; i++) {
      let newOption = `<option class="option" value="${resultArr[i]}">`;
      $('#teamDropdown').append(newOption);
  }
};


//function for checking search value
$(document).on('keyup','#playerSearch', () => {
  let prefix = $('#playerSearch').val().trim();
  prefix = toTitleCase(prefix);
  // console.log(prefix);
  if (prefix.length === 0) {
    $('#playerDropdown').empty();
    $('#playerDropdown').append(
    `<option class="option" value="Kevin Durant">
    <option class="option" value="Stephen Curry">
    <option class="option" value="James Harden">
    <option class="option" value="Chris Paul">
    <option class="option" value="Dwight Howard"></option>`);
  } if (prefix.length >= 2) {
    $('#playerDropdown').empty();
    trieSearchPlayer(prefix);
  };
});

$(document).on('keyup','#teamSearch', () => {
  let prefix = $('#teamSearch').val().trim();
  prefix = toTitleCase(prefix);
  // console.log(prefix);
  if (prefix.length === 0) {
    $('#teamDropdown').empty();
    $('#teamDropdown').append(
    `<option class="optionT" value="Chicago Bulls">
    <option class="optionT" value="Golden State Warriors">
    <option class="optionT" value="Houston Rockets">
    <option class="optionT" value="New York Knicks">
    <option class="optionT" value="Miami Heat"></option>`);
  } if (prefix.length >= 1) {
    $('#teamDropdown').empty();
    trieSearchTeam(prefix);
  };
});


const addInput= (name) => {
  let nameList = new Set()
  $("ul .addedName").each(function() { nameList.add(($(this).text()).slice(1))});
  if (!nameList.has(name) && nameList.size <=50) {
  $('.listAdd').append(`<li class="addedName"><span class="removeBtn btn btn-sm">x</span>${name}</li>`);
  }
};

const addInputTeam = (name) => {
  let nameList = new Set()
  $("ul .addedNameTeam").each(function() { nameList.add(($(this).text()).slice(1))});
  if (!nameList.has(name) && nameList.size <=50) {
  $('.listAdd').append(`<li class="addedNameTeam"><span class="removeBtn btn btn-sm">x</span>${name}</li>`);
  }
};

$(document).on('click', '.playerAddBtn', function(){
  let name = $('#playerSearch').val();
  if (lastFirstTrie.contains(name) || playerTrie.contains(name)) {
    addInput(name); 
    $('#playerSearch').val('');
    $('#playerDropdown').empty();
    $('#playerDropdown').append(
    `<option class="option" value="Kevin Durant">
    <option class="option" value="Stephen Curry">
    <option class="option" value="James Harden">
    <option class="option" value="Chris Paul">
    <option class="option" value="Dwight Howard"></option>`);
  } else return
});

$(document).on('click', '.teamAddBtn', function(){
  let name = $('#teamSearch').val();
  if (lastFirstTeamTrie.contains(name) || teamTrie.contains(name)) {
    addInputTeam(name);
    $('#teamSearch').val('');
    $('#teamDropdown').empty();
    $('#teamDropdown').append(
    `<option class="optionT" value="Chicago Bulls">
    <option class="optionT" value="Golden State Warriors">
    <option class="optionT" value="Houston Rockets">
    <option class="optionT" value="New York Knicks">
    <option class="optionT" value="Miami Heat"></option>`);
  } else return
});

$("#playerSearch").keyup(function(event) {
  if (event.keyCode === 13) {
      $(".playerAddBtn").click();
  }
});

$("#teamSearch").keyup(function(event) {
  if (event.keyCode === 13) {
      $(".teamAddBtn").click();
  }
});
