const mongoose = require('mongoose');
const Skills = require('../Models/Skills.js');
const Experience = require('../Models/Experience.js');
const Education = require('../Models/Education.js');
const SkillsType = require('../Dictionnary/SkillsType');
const User = require("../Models/User");
const dependencies = {
    fs: require('fs'),
    config: require('../config.json')
};
const skills = mongoose.model('skills', Skills);
const experiences = mongoose.model('Experience',Experience);
const educations = mongoose.model('Education',Education);
module.exports = (content) => {
    User.findById(content.idUser)
        .then(user => {
            if (!user) {
                /*return res.status(401).json({
                    message: "undifined user"
                }); */
                console.log('undefined user');
            }
            for (const skil of content.skills) {
                let skill = new skills({
                    name: skil.title,
                    level: 1,
                    type: SkillsType(skil.title)
                });
                user.Resume.Skills.push(skill)
            }
            for (const experienc of content.positions){
                var date = experienc.date1.split('–');
                let exper = new experiences({
                    name: experienc.title,
                    description: experienc.description,
                    start_date: date[0],
                    end_date: date[1],
                    address: experienc.companyName
                });
                user.Resume.experiences.push(exper)
            }
            for (const educat of content.educations){
                console.log(educat.degree);
                let education = new educations({
                    ecole : educat.title,
                    degree: educat.degree,
                    date1: educat.date1,
                    date2: educat.date2
                });
                user.Resume.educations.push(education);
            }
            user.save()/*.then(result => {
                res.status(200).json({
                    fetchedUser
                });
            })*/

        }).catch(err => {
        console.log(err);
       /* return res.status(401).json({
            message: "Invalid authentication credentials!"
        });*/
    });



};
