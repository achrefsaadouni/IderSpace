const dev = [
    "JEE", "JAVA","python","R","javascript","typescript","swift","objective-c",
    "ANGULAR",
    "ANGULARJS","React","Reactjs",
    "C++", "C#", "PHP", "SYMFONY", "SQL", "C", "mysql", "html", "html5", "jquery", "android", "mongodb", "css", "css3", "Maven", "XML", "json", "hibernate", "rest"
];

const microsoft = [
    "Microsoft Excel",
    "Microsoft Office",
    "Microsoft PowerPoint",
    "Microsoft Word",
    "ATS",

];

const personalSkills = [
    "Team Management", "Team Leadership", "Training", "Communication", "Sourcing", "Stakeholder Management", "Teamwork", "Time Management", "Talent Manafement",
    "Team Building", "Team Relations"
];


module.exports = function getTypes(name) {
    let stat = false;
    if (stat === false) {
        for (let i = 0; i < dev.length; i++) {
            if (name.length === 1) {
                if ((dev[i].toUpperCase()) === (name.toUpperCase())) {
                    stat = true;
                    return "development"
                }
            } else if (dev[i].length > 1) {
                if (((dev[i].toUpperCase()).indexOf(name.toUpperCase()) !== -1) || ((name.toUpperCase()).indexOf(dev[i].toUpperCase()) !== -1)) {
                    stat = true;
                    return "developpement"
                }
            } else {
                if (((dev[i].toUpperCase()).indexOf(name.toUpperCase()) !== -1)) {
                    stat = true;
                    return "developpement"
                }
            }

        }
    }
    if (stat === false) {
        for (let i = 0; i < microsoft.length; i++) {
            if (name.length === 1) {
                if ((microsoft[i].toUpperCase()) === (name.toUpperCase())) {
                    stat = true;
                    return "microsoft Skills"
                }
            } else if (((microsoft[i].toUpperCase()).indexOf(name.toUpperCase()) !== -1) || ((name.toUpperCase()).indexOf(microsoft[i].toUpperCase()) !== -1)) {
                stat = true;
                return "microsoft Skills"
            }
        }
    }
    if (stat === false) {
        for (let i = 0; i < personalSkills.length; i++) {
            if (name.length === 1) {
                if ((personalSkills[i].toUpperCase()) === (name.toUpperCase())) {
                    stat = true;
                    return "personal Skills"
                }
            } else if (((personalSkills[i].toUpperCase()).indexOf(name.toUpperCase()) !== -1) || ((name.toUpperCase()).indexOf(personalSkills[i].toUpperCase()) !== -1)) {
                stat = true;
                return "personal Skills"
            }
        }
    }
    if (stat === false) return "other"
}