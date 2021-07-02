//  Modal - JS
var titleModal = document.querySelector("#titleModal");
var bodyModal = document.querySelector("#bodyModal");
var externalLinksDiv = document.querySelector("#externalLinksDiv");
var externalLink = document.querySelector("#externalLink");
var gitHubLinksDiv = document.querySelector("#gitHubLinksDiv");
var githubRepo = document.querySelector("#githubRepo");
var githubPage = document.querySelector("#githubPage");
var bodyModalDescription = document.querySelector('#bodyModalDescription');
var imgModal = document.querySelector('#imgModal');

var modalFunction = function (event, project, isExternal) {
    event.preventDefault();
    externalLinksDiv.setAttribute('class', 'hidenElement');
    gitHubLinksDiv.setAttribute('class', 'hidenElement');
    switch (project) {
        case 1:
            titleModal.textContent = 'Property Analysis';
            externalLink.textContent = "PropAnalysis WebPage";
            externalLink.setAttribute('href',"https://www.mlkcompanies.com/RETracker/index.php");
            bodyModalDescription.textContent = 'This is a full system already installed on a server of a client. This system is built on PHP for the BackEnd and for the FrontEnd was used Bootstrap, Jquery, CSS3. Also is used Datatables,Google Maps , Zillow API, Google API, Melissa API, PHPEXCEL. The system helps to the agents to analyse a property with all the information needed to create an offer or to ignore the property. Right now have 3 markets DFW, HOU and ATL';
            externalLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/PropAnalysis.gif";
            imgModal.setAttribute('alt', 'Property Analysis');
            break;
        case 2:
            titleModal.textContent = 'BackEnd Ajax Project';
            externalLink.textContent = "BackEnd Ajax Project";
            externalLink.setAttribute('href',"http://rcconsultingmx.com/gitProjects/backend_ajax/");
            bodyModalDescription.textContent = 'This app can help you to show the list of properties depending on the city that is selected. Is developed on Jquery and PHP ';
            externalLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/backendAjax.gif";
            imgModal.setAttribute('alt', 'BackEnd Ajax Project');
            break;
        case 3:
            titleModal.textContent = 'Calculator';
            githubRepo.textContent = "Calculator Repo";
            githubPage.textContent = "Calculator Live";
            githubRepo.setAttribute('href', "https://github.com/izaack89/Calculadora");
            githubPage.setAttribute('href',"https://izaack89.github.io/Calculadora/ProyectoFinalGermanRamirez-Javascript/");
            bodyModalDescription.textContent = 'This Calculator can be very useful for people that dont have a local app ';
            gitHubLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/calculator.png";
            imgModal.setAttribute('alt', 'Calculator');
            break;
        case 4:
            titleModal.textContent = 'Sport Almanac';
            githubRepo.textContent = "Sport Almanac Repo";
            githubPage.textContent = "Sport Almanac Live";
            githubRepo.setAttribute('href',"https://github.com/adina-hc/sports-almanac");
            githubPage.setAttribute('href',"https://adina-hc.github.io/sports-almanac/");
            bodyModalDescription.textContent = 'This application will help you to get the information of the games depending of the League. Also if are videos available can show the videos of past games';
            gitHubLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/sportAlmanac.gif";
            imgModal.setAttribute('alt', 'Sport Almanac');
            break;
        case 5:
            titleModal.textContent = 'Code Base';
            githubRepo.textContent = "Code Base Repo";
            githubPage.textContent = "Code Base Live";
            githubRepo.setAttribute('href',"https://github.com/izaack89/code-base");
            githubPage.setAttribute('href',"https://izaack89.github.io/code-base/");
            bodyModalDescription.textContent = 'This Quiz is to help you to understand Javascript so take the quiz and you can find on what topics you should review or you can demostrate that you are a Master.';
            gitHubLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/codeBase.gif";
            imgModal.setAttribute('alt', 'Code Base');
            break;
        case 6:
            titleModal.textContent = 'Day Planner';
            githubRepo.textContent = "Day Planner Repo";
            githubPage.textContent = "Day Planner Live";
            githubRepo.setAttribute('href',"https://github.com/izaack89/day-planner");
            githubPage.setAttribute('href',"https://izaack89.github.io/day-planner/");
            bodyModalDescription.textContent = 'This Day Planner will help you to organize your daily activities and check with a friendly front-end that will let you know if the hour is on the past, the current hour and on the future';
            gitHubLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/dayPlanner.gif";
            imgModal.setAttribute('alt', 'Day Planner');
            break;
        case 7:
            titleModal.textContent = 'Weather Dashboard';
            githubRepo.textContent = "Weather Dashboard Repo";
            githubPage.textContent = "Weather Dashboard Live";
            githubRepo.setAttribute('href',"https://github.com/izaack89/weather-dashboard");
            githubPage.setAttribute('href', "https://izaack89.github.io/weather-dashboard/");
            bodyModalDescription.textContent = 'With this app you can know the weather of a City with 5 day forecast. This will help you to planify your activities according to the weather prediction.';
            gitHubLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/dashboardWeather.gif";
            imgModal.setAttribute('alt', 'Weather Dashboard');
            break;
        case 8:
            titleModal.textContent = 'School System';
            githubRepo.textContent = "School System Repo";
            githubPage.textContent = "School System Live";
            githubRepo.setAttribute('href',"https://github.com/izaack89/school-system");
            githubPage.setAttribute('href', "https://infinite-chamber-84516.herokuapp.com/");
            bodyModalDescription.textContent = 'This application was developed for students and teachers that need an app for their school and need to control their assignments, time and take overall control of their tasks.';
            gitHubLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/schoolSystem.gif";
            imgModal.setAttribute('alt', 'Weather Dashboard');
            break;
        case 9:
            titleModal.textContent = 'Tech Blog';
            githubRepo.textContent = "Tech Blog Repo";
            githubPage.textContent = "Tech Blog Live";
            githubRepo.setAttribute('href',"https://github.com/izaack89/tech-blog");
            githubPage.setAttribute('href', "https://floating-garden-59968.herokuapp.com/login");
            bodyModalDescription.textContent = 'This project will help to create a blog for tech. So you can invite your friends to signup and to share their knowledge about subject of tech';
            gitHubLinksDiv.setAttribute('class', '');
            imgModal.src = "assets/img/systemView.gif";
            imgModal.setAttribute('alt', 'Tech Blog');
            break;
    }
}