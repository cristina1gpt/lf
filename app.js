const recipes = [
  {
    title: "Ciorbă de perișoare",
    category: "Ciorbe și supe",
    time: "1 h 20 min",
    description: "O ciorbă acrișoară și aromată, cu perișoare fragede și leuștean proaspăt.",
    ingredients: ["500 g carne tocată", "1 ceapă și 1 morcov", "80 g orez", "2 linguri pastă de roșii", "Borș, leuștean, sare"],
    steps: ["Fierbe legumele tocate în 2 litri de apă.", "Amestecă orezul cu carnea, sare și piper; formează perișoare.", "Pune perișoarele în oală și fierbe 25 de minute.", "Adaugă pasta de roșii și borș după gust. Presară leuștean."]
  },
  {
    title: "Sarmale cu mămăliguță",
    category: "Fel principal",
    time: "2 h 30 min",
    description: "Sarmale domoale, fierte încet în sos de roșii, servite cu mămăligă caldă.",
    ingredients: ["1 varză murată", "500 g carne tocată", "100 g orez", "1 ceapă", "200 ml suc de roșii"],
    steps: ["Călește ceapa, apoi amestec-o cu orezul și carnea.", "Împachetează umplutura în frunze de varză.", "Așază sarmalele în oală cu varză tocată și suc de roșii.", "Fierbe la foc mic aproximativ 2 ore și servește cu mămăligă."]
  },
  {
    title: "Mămăligă cu brânză și smântână",
    category: "Fel principal",
    time: "25 min",
    description: "Un prânz simplu și sățios, cu mămăligă cremoasă și brânză sărată.",
    ingredients: ["250 g mălai", "1 l apă", "200 g brânză de burduf", "150 g smântână", "Sare"],
    steps: ["Pune apa cu sare la fiert.", "Toarnă mălaiul în ploaie și amestecă energic.", "Fierbe la foc mic 15–20 de minute, amestecând des.", "Servește fierbinte cu brânză și smântână."]
  },
  {
    title: "Tocăniță de pui",
    category: "Fel principal",
    time: "50 min",
    description: "Bucăți fragede de pui într-un sos bogat de ceapă, roșii și boia dulce.",
    ingredients: ["600 g pulpe de pui", "2 cepe", "300 g roșii tocate", "1 linguriță boia", "Pătrunjel, sare, piper"],
    steps: ["Rumenește puiul pe toate părțile și scoate-l deoparte.", "Călește ceapa; adaugă boiaua și roșiile.", "Pune puiul înapoi, acoperă și gătește 35 de minute.", "Potrivește de sare și presară pătrunjel."]
  },
  {
    title: "Fasole bătută cu ceapă",
    category: "De post",
    time: "1 h",
    description: "Fasole fină, usturoiată, cu ceapă rumenită și sos de roșii.",
    ingredients: ["500 g fasole fiartă", "3 căței de usturoi", "2 cepe", "150 ml suc de roșii", "Ulei, sare"],
    steps: ["Pasează fasolea caldă cu usturoiul și puțină zeamă.", "Călește ceapa în ulei până devine aurie.", "Adaugă sucul de roșii și fierbe sosul 5 minute.", "Pune ceapa peste fasole și servește cu pâine."]
  },
  {
    title: "Ardei umpluți",
    category: "Fel principal",
    time: "1 h 30 min",
    description: "Ardei dulci umpluți cu orez și carne, fierți încet în sos tomat.",
    ingredients: ["6 ardei", "400 g carne tocată", "100 g orez", "1 ceapă", "400 ml suc de roșii"],
    steps: ["Amestecă orezul cu carnea, ceapa tocată și condimentele.", "Umple ardeii curățați, fără să îndeși prea tare.", "Așază-i în oală și toarnă sucul de roșii și apă cât să-i acopere.", "Fierbe acoperit 60–70 de minute."]
  },
  {
    title: "Ciorbă de fasole",
    category: "Ciorbe și supe",
    time: "1 h 15 min",
    description: "Ciorbă hrănitoare de fasole, cu legume și cimbru parfumat.",
    ingredients: ["400 g fasole fiartă", "1 morcov și 1 ceapă", "1 ardei", "2 linguri pastă de roșii", "Cimbru, pătrunjel"],
    steps: ["Fierbe morcovul, ceapa și ardeiul tocate în 2 litri de apă.", "Adaugă fasolea și pasta de roșii.", "Fierbe împreună 25 de minute și potrivește de sare.", "Aromatizează cu cimbru și pătrunjel."]
  },
  {
    title: "Pârjoale moldovenești",
    category: "Fel principal",
    time: "45 min",
    description: "Pârjoale rumene și moi, bune alături de piure sau murături.",
    ingredients: ["500 g carne tocată", "1 cartof ras", "1 ceapă", "1 ou", "Mărar, pesmet, sare"],
    steps: ["Amestecă bine carnea cu cartoful, ceapa, oul și mărarul.", "Formează pârjoale ovale și trece-le prin pesmet.", "Prăjește-le la foc mediu până se rumenesc pe ambele părți.", "Lasă-le pe hârtie absorbantă și servește calde."]
  },
  {
    title: "Salată de vinete",
    category: "Aperitiv",
    time: "40 min",
    description: "Vinete coapte, tocate fin și amestecate cu ceapă și ulei.",
    ingredients: ["2 vinete mari", "1 ceapă mică", "3 linguri ulei", "Sare", "Roșii pentru servire"],
    steps: ["Coace vinetele până când coaja se înnegrește și miezul se înmoaie.", "Curăță-le după ce s-au răcit și lasă-le la scurs.", "Toacă miezul și încorporează treptat uleiul.", "Adaugă ceapa fin tocată, sare și servește cu roșii."]
  },
  {
    title: "Mâncare de mazăre cu pui",
    category: "Fel principal",
    time: "45 min",
    description: "Mazăre dulce și fragedă, gătită într-un sos ușor cu pui.",
    ingredients: ["500 g mazăre", "400 g pui", "1 ceapă", "200 ml suc de roșii", "Mărar, sare"],
    steps: ["Rumenește bucățile de pui, apoi adaugă ceapa.", "Pune mazărea și sucul de roșii în cratiță.", "Adaugă puțină apă și fierbe acoperit 25–30 de minute.", "Presară mărar înainte de servire."]
  },
  {
    title: "Ciorbă rădăuțeană",
    category: "Ciorbe și supe",
    time: "1 h 10 min",
    description: "Supă catifelată de pui, dreasă cu smântână și usturoi.",
    ingredients: ["500 g piept de pui", "1 morcov și 1 păstârnac", "200 g smântână", "2 gălbenușuri", "Usturoi, oțet"],
    steps: ["Fierbe puiul și rădăcinoasele în 2 litri de apă; strecoară supa.", "Taie puiul fâșii și pune-l înapoi în supă.", "Amestecă smântâna cu gălbenușurile și puțină supă caldă.", "Toarnă amestecul în oală; adaugă usturoi și oțet după gust."]
  },
  {
    title: "Cartofi țărănești",
    category: "Fel principal",
    time: "40 min",
    description: "Cartofi rumeni cu ceapă, boia și pătrunjel — garnitură sau fel principal.",
    ingredients: ["800 g cartofi", "2 cepe", "1 linguriță boia", "3 linguri ulei", "Pătrunjel, sare"],
    steps: ["Fierbe cartofii în coajă, apoi curăță-i și taie-i cuburi.", "Călește ceapa în ulei până devine moale.", "Adaugă boiaua și cartofii și rumenește-i ușor.", "Presară pătrunjel și servește imediat."]
  },
  {
    title: "Chiftele marinate",
    category: "Fel principal",
    time: "1 h",
    description: "Chiftele pufoase în sos de roșii ușor acrișor, ca la mesele de duminică.",
    ingredients: ["500 g carne tocată", "1 ou și 1 felie de pâine", "400 ml suc de roșii", "1 ceapă", "Foi de dafin, cimbru"],
    steps: ["Frământă carnea cu oul, pâinea înmuiată și condimentele.", "Modelează chiftele și rumenește-le într-o tigaie.", "Fierbe ceapa cu sucul de roșii, dafin și puțină apă.", "Adaugă chiftelele și lasă sosul să scadă 20 de minute."]
  },
  {
    title: "Dovlecei umpluți",
    category: "Fel principal",
    time: "1 h 10 min",
    description: "Dovlecei fragezi cu umplutură aromată de carne, orez și verdeață.",
    ingredients: ["3 dovlecei", "350 g carne tocată", "80 g orez", "1 ceapă", "300 ml suc de roșii"],
    steps: ["Taie dovleceii în jumătăți și scobește mijlocul.", "Amestecă miezul tocat cu carnea, orezul și ceapa.", "Umple dovleceii și pune-i într-un vas cu suc de roșii.", "Coace la 190°C aproximativ 45 de minute."]
  },
  {
    title: "Ciorbă de legume",
    category: "Ciorbe și supe",
    time: "45 min",
    description: "O ciorbă colorată, plină de legume de sezon și verdeață proaspătă.",
    ingredients: ["2 morcovi", "1 cartof și 1 dovlecel", "1 ceapă și 1 ardei", "200 ml suc de roșii", "Borș, leuștean"],
    steps: ["Taie legumele cuburi și pune-le la fiert în 2 litri de apă.", "După 20 de minute adaugă sucul de roșii.", "Acrește cu borș fiert separat, după gust.", "Oprește focul și adaugă leuștean."]
  },
  {
    title: "Varză călită",
    category: "De post",
    time: "55 min",
    description: "Varză dulce gătită încet cu roșii, mărar și puțin cimbru.",
    ingredients: ["1 varză mare", "1 ceapă", "300 g roșii tocate", "1 lingură ulei", "Mărar, cimbru"],
    steps: ["Toacă varza, presară sare și frământ-o ușor.", "Călește ceapa, apoi adaugă varza și roșiile.", "Gătește acoperit 35–40 de minute, amestecând din când în când.", "Asezonează cu cimbru și mărar."]
  },
  {
    title: "Pui la cuptor cu usturoi",
    category: "Fel principal",
    time: "1 h 15 min",
    description: "Pui rumenit cu usturoi și cimbru, alături de cartofi aurii.",
    ingredients: ["4 pulpe de pui", "700 g cartofi", "5 căței de usturoi", "2 linguri ulei", "Cimbru, sare, piper"],
    steps: ["Așază puiul și cartofii într-o tavă.", "Amestecă uleiul cu usturoi zdrobit, cimbru, sare și piper.", "Unge ingredientele și adaugă o jumătate de cană de apă.", "Coace la 200°C timp de 55–65 de minute."]
  },
  {
    title: "Mâncare de praz cu măsline",
    category: "De post",
    time: "40 min",
    description: "Praz dulce și măsline într-un sos tomat, un preparat oltenesc aromat.",
    ingredients: ["4 fire de praz", "150 g măsline", "300 ml suc de roșii", "1 lingură ulei", "Foi de dafin, piper"],
    steps: ["Taie prazul rondele și înmoaie-l în ulei cu puțină apă.", "Adaugă sucul de roșii și foaia de dafin.", "Fierbe acoperit 20 de minute, apoi pune măslinele.", "Mai gătește 10 minute și servește cu pâine."]
  },
  {
    title: "Papanași cu smântână și dulceață",
    category: "Desert",
    time: "40 min",
    description: "Papanași rumeni și pufoși, cu brânză dulce și dulceață de fructe.",
    ingredients: ["300 g brânză de vaci", "1 ou", "150 g făină", "2 linguri zahăr", "Smântână și dulceață"],
    steps: ["Amestecă brânza cu oul, zahărul și făina până obții un aluat moale.", "Formează papanași cu gaură și biluțe mici pentru capac.", "Prăjește-i în ulei la foc potrivit, până se rumenesc.", "Servește cu smântână și dulceață."]
  },
  {
    title: "Pilaf cu legume",
    category: "De post",
    time: "35 min",
    description: "Orez pufos cu legume și verdeață, potrivit pentru un prânz ușor.",
    ingredients: ["250 g orez", "1 morcov și 1 ceapă", "1 ardei", "700 ml supă de legume", "Pătrunjel, ulei"],
    steps: ["Călește ceapa, morcovul și ardeiul tocate.", "Adaugă orezul spălat și amestecă un minut.", "Toarnă supa fierbinte și fierbe acoperit la foc mic 18 minute.", "Lasă pilaful să se odihnească și adaugă pătrunjel."]
  },
  {
    title: "Ciorbă de cartofi cu afumătură",
    category: "Ciorbe și supe",
    time: "55 min",
    description: "Ciorbă rustică, cu cartofi, afumătură și tarhon aromat.",
    ingredients: ["150 g costiță afumată", "5 cartofi", "1 ceapă", "200 ml smântână", "Tarhon, oțet"],
    steps: ["Fierbe costița în 2 litri de apă pentru 20 de minute.", "Adaugă ceapa și cartofii cuburi; fierbe până se înmoaie.", "Drege cu smântână amestecată cu puțină zeamă.", "Asezonează cu tarhon și oțet."]
  },
  {
    title: "Mici la tigaie cu muștar",
    category: "Fel principal",
    time: "30 min",
    description: "Mici suculenți rumeniți bine, serviți cu muștar și pâine proaspătă.",
    ingredients: ["600 g amestec pentru mici", "1 lingură ulei", "Muștar", "Pâine proaspătă", "Murături, opțional"],
    steps: ["Scoate amestecul din frigider cu 15 minute înainte de gătire.", "Unge tigaia grill încinsă cu foarte puțin ulei.", "Gătește micii 10–12 minute, întorcându-i pe toate părțile.", "Servește fierbinți cu muștar și pâine."]
  },
  {
    title: "Ghiveci de legume",
    category: "De post",
    time: "1 h",
    description: "Un ghiveci colorat și parfumat, cu legume coapte în suc propriu.",
    ingredients: ["1 vânătă", "1 dovlecel", "2 ardei", "3 roșii", "1 ceapă, pătrunjel"],
    steps: ["Taie toate legumele în bucăți potrivite.", "Așază-le într-un vas cu ceapa, sare și două linguri de ulei.", "Acoperă și coace la 190°C timp de 40 de minute.", "Îndepărtează capacul, mai lasă 10 minute și presară pătrunjel."]
  },
  {
    title: "Ostropel de pui",
    category: "Fel principal",
    time: "50 min",
    description: "Pui fraged într-un sos tomat cu usturoi, perfect lângă mămăligă.",
    ingredients: ["600 g pui", "400 g roșii pasate", "5 căței de usturoi", "1 ceapă", "Pătrunjel, sare"],
    steps: ["Rumenește puiul și scoate-l pe o farfurie.", "Călește ceapa, apoi pune roșiile și jumătate din usturoi.", "Adaugă puiul și fierbe acoperit 30 de minute.", "Pune restul de usturoi și pătrunjel la final."]
  },
  {
    title: "Plăcintă cu brânză sărată",
    category: "Gustare",
    time: "50 min",
    description: "Foi fragede și umplutură generoasă de brânză, bune calde sau reci.",
    ingredients: ["1 pachet foi de plăcintă", "350 g brânză telemea", "2 ouă", "150 g iaurt", "2 linguri ulei"],
    steps: ["Fărâmițează brânza și amestec-o cu un ou.", "Așază jumătate din foi într-o tavă unsă, ungându-le ușor.", "Adaugă brânza și restul de foi.", "Toarnă deasupra iaurtul amestecat cu ou și coace la 180°C, 35 de minute."]
  },
  {
    title: "Mâncare de urzici cu mămăligă",
    category: "De post",
    time: "35 min",
    description: "Urzici fragede cu usturoi, servite în stil tradițional cu mămăligă.",
    ingredients: ["500 g urzici", "3 căței de usturoi", "1 lingură făină", "2 linguri ulei", "Mălai, sare"],
    steps: ["Spală urzicile cu mănuși și opărește-le 5 minute.", "Toacă-le și păstrează o cană din apa în care au fiert.", "Gătește-le cu ulei, usturoi și făina desfăcută în apa păstrată.", "Servește cu mămăligă caldă."]
  },
  {
    title: "Clătite cu brânză la cuptor",
    category: "Desert",
    time: "55 min",
    description: "Clătite umplute cu brânză dulce și stafide, rumenite ușor la cuptor.",
    ingredients: ["8 clătite", "300 g brânză de vaci", "1 ou", "2 linguri zahăr", "Stafide, smântână"],
    steps: ["Amestecă brânza cu oul, zahărul și stafidele.", "Umple clătitele și rulează-le.", "Așază-le într-un vas uns și unge-le cu puțină smântână.", "Coace la 180°C timp de 20 de minute."]
  },
  {
    title: "Salată de boeuf",
    category: "Aperitiv",
    time: "1 h 20 min",
    description: "Salată festivă cu legume, carne fragedă și maioneză făcută în casă.",
    ingredients: ["300 g carne de vită", "3 cartofi și 2 morcovi", "150 g mazăre", "3 castraveți murați", "Maioneză, muștar"],
    steps: ["Fierbe carnea și legumele separat până se înmoaie.", "Taie totul cubulețe mici și adaugă mazărea și castraveții.", "Amestecă maioneza cu puțin muștar și încorporeaz-o.", "Decorează și răcește înainte de servire."]
  },
  {
    title: "Varză à la Cluj",
    category: "Fel principal",
    time: "1 h 20 min",
    description: "Straturi de varză, carne și orez, coapte cu smântână deasupra.",
    ingredients: ["700 g varză murată", "400 g carne tocată", "100 g orez", "1 ceapă", "200 g smântână"],
    steps: ["Fierbe orezul pe jumătate și călește varza tocată.", "Rumenește carnea cu ceapa și condimentează.", "Pune în tavă straturi alternative de varză, orez și carne.", "Adaugă smântână și coace la 190°C timp de 35 de minute."]
  },
  {
    title: "Plăcintă cu mere",
    category: "Desert",
    time: "1 h",
    description: "Foi fragede umplute cu mere, scorțișoară și un strop de zahăr.",
    ingredients: ["1 pachet foi de plăcintă", "5 mere", "3 linguri zahăr", "1 linguriță scorțișoară", "Ulei, zahăr pudră"],
    steps: ["Rade merele și călește-le cu zahăr până scade zeama.", "Adaugă scorțișoara și lasă umplutura să se răcească.", "Pune umplutura între foile unse și rulează.", "Coace la 180°C timp de 30–35 de minute și pudrează."]
  },
  {
    title: "Mâncare de fasole verde",
    category: "De post",
    time: "40 min",
    description: "Fasole verde fragedă în sos de roșii, cu usturoi și mărar.",
    ingredients: ["600 g fasole verde", "1 ceapă", "300 ml suc de roșii", "2 căței de usturoi", "Mărar, ulei"],
    steps: ["Călește ceapa tocată în puțin ulei.", "Adaugă fasolea și o cană de apă; fierbe 20 de minute.", "Toarnă sucul de roșii și mai gătește 10 minute.", "Pune usturoiul zdrobit și mărarul înainte de servire."]
  }
];

const dayCount = 90;
const startDate = new Date();
startDate.setHours(0, 0, 0, 0);
const endDate = addDays(startDate, dayCount - 1);
let selectedIndex = 0;

const datePicker = document.querySelector("#date-picker");
const previousButton = document.querySelector("#previous-day");
const nextButton = document.querySelector("#next-day");

function addDays(date, amount) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function toDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat("ro-RO", options).format(date);
}

function recipeForDay(index) {
  return recipes[index % recipes.length];
}

function renderRecipe() {
  const date = addDays(startDate, selectedIndex);
  const recipe = recipeForDay(selectedIndex);

  document.querySelector("#recipe-category").textContent = recipe.category;
  document.querySelector("#recipe-time").textContent = `◷ ${recipe.time}`;
  document.querySelector("#recipe-date").textContent = formatDate(date, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  document.querySelector("#recipe-title").textContent = recipe.title;
  document.querySelector("#recipe-description").textContent = recipe.description;
  renderList("#recipe-ingredients", recipe.ingredients);
  renderList("#recipe-steps", recipe.steps);

  datePicker.value = toDateValue(date);
  previousButton.disabled = selectedIndex === 0;
  nextButton.disabled = selectedIndex === dayCount - 1;
  document.querySelector("#day-count").textContent = `Ziua ${selectedIndex + 1} din ${dayCount}`;
  renderUpcoming();
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  list.replaceChildren(...items.map((item) => {
    const element = document.createElement("li");
    element.textContent = item;
    return element;
  }));
}

function renderUpcoming() {
  const list = document.querySelector("#upcoming-list");
  const days = [];

  for (let offset = 1; offset <= 5 && selectedIndex + offset < dayCount; offset += 1) {
    const index = selectedIndex + offset;
    const date = addDays(startDate, index);
    const recipe = recipeForDay(index);
    const button = document.createElement("button");
    button.className = "upcoming-day";
    button.type = "button";
    button.innerHTML = `<span class="mini-date">${formatDate(date, { weekday: "short", day: "numeric", month: "short" })}</span><strong></strong>`;
    button.querySelector("strong").textContent = recipe.title;
    button.addEventListener("click", () => {
      selectedIndex = index;
      renderRecipe();
    });
    days.push(button);
  }

  list.replaceChildren(...days);
}

datePicker.min = toDateValue(startDate);
datePicker.max = toDateValue(endDate);
datePicker.addEventListener("change", () => {
  if (!datePicker.value) return;
  const [year, month, day] = datePicker.value.split("-").map(Number);
  const chosenDate = new Date(year, month - 1, day);
  const index = Math.round((chosenDate - startDate) / 86400000);
  if (index >= 0 && index < dayCount) {
    selectedIndex = index;
    renderRecipe();
  }
});

previousButton.addEventListener("click", () => {
  if (selectedIndex > 0) {
    selectedIndex -= 1;
    renderRecipe();
  }
});

nextButton.addEventListener("click", () => {
  if (selectedIndex < dayCount - 1) {
    selectedIndex += 1;
    renderRecipe();
  }
});

renderRecipe();
