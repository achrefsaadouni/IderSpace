const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Resume = require("../Models/Resume");
const scrapping = require("../ScrappingLinkedIn/index");
const configFile = require("../config");
const config = {
  email: process.env.SCRAPEDIN_EMAIL || configFile.email,
  password: process.env.SCRAPEDIN_PASSWORD || configFile.password,
  relatedProfilesKeywords: configFile.relatedProfilesKeywords,
  maxConcurrentCrawlers: configFile.maxConcurrentCrawlers,
  hasToLog: configFile.hasToLog,
  rootProfiles: configFile.rootProfiles,
  isHeadless: true,
  idUser: ""
};

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role,
      github: req.body.github,
      linkedin: req.body.linkedin,
      class: req.body.class,
      password: hash
    });
    user
      .save()
      .then(result => {
        console.log("ok");
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
};

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id,
          username: fetchedUser.username
        },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        user: {
          email: fetchedUser.email,
          username: fetchedUser.username,
          firstname: fetchedUser.firstname,
          lastname: fetchedUser.lastname,
          role: fetchedUser.role,
          github: fetchedUser.github,
          linkedin: fetchedUser.linkedin,
          class: fetchedUser.class
        }
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
};

exports.addResume = (req, res, next) => {
  const resume = mongoose.model("resume", Resume);
  let fetchedUser;
  User.findById({ _id: req.body.id })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "undifined user"
        });
      }
      fetchedUser = user;
      return true;
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser.Resume = new resume({
        hobbies: req.body.hobbies,
        about: req.body.about,
        languages: req.body.languages
      });
      fetchedUser.save().then(result => {
        res.status(200).json({
          fetchedUser
        });
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
};

exports.addlinkedIn = (req, res, next) => {
  const url = req.body.url;
  let fetchedUser;
  User.findById({ _id: req.body.id })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "undifined user"
        });
      }
      fetchedUser = user;
      return true;
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser.linkedin = url;
      return fetchedUser;
    })
    .then(result => {
      fetchedUser.save().then(result => {
        config.rootProfiles.push(url);
        config.idUser = fetchedUser.id;
        scrapping(config);
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
};

exports.updateUser = (req, res, next) => {
  const user = new User({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  });
  User.updateOne({ _id: req.params.id }, user)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate user!"
      });
    });
};


async function makeData(array) {
    const data = [];
    // for(const user of array){ //x is a bad name by the way
    const attribute1 = await getSkillsOfUser(array.id);
    const attribute2 = await getExperiencesOfUser(array.id);
    data.push(attribute1, attribute2);
    // }
    return attribute1;
}

async function returnNameSkill(array){
    let chaine="";
    for (const t of array){
        chaine+=t.name+":"+t.level;
    }
    return chaine
}

function getAllConcernedUsers() {
    return new Promise(resolve => {
        User.find().then(async user => {
            return resolve(user[1]);
        });
    });
}


exports.checkData = async (req, res, next) => {
    const data = [];
    let response = await getAllConcernedUsers();
    const tt = await makeData(response);
    let people = {'user':response.firstname}
    for (var i=0 ; i<tt.length;i++){
        people = {
            ...people,[""+tt[i].name]:tt[i].level
        }
    }
    data.push(people);
    return res.status(200).json({
        data

    })
};


