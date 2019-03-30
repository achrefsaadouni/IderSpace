const mongoose = require('mongoose');
const Skills = require('../Models/Skills.js');
const Experience = require('../Models/Experience.js');
const SkillsType = require('../Dictionnary/SkillsType');
const User = require("../models/user");
const dependencies = {
    fs: require('fs'),
    config: require('../config.json')
};
const skills = mongoose.model('skills', Skills);
const experiences = mongoose.model('Experience',Experience);

module.exports = (content) => {
    console.log(content.idUser);
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
            user.save()/*.then(result => {
                res.status(200).json({
                    fetchedUser
                });
            })*/

        }).catch(err => {
        console.log(err);
        return res.status(401).json({
            message: "Invalid authentication credentials!"
        });
    });
    /* for (const skil of content.skills){
       skill = new Skills({
         name : skil.title,
         level : skil.count,
         type: SkillsType(skil.title)
       })
       skill.save(function (err, u) {
         if (err){
           console.log(err)
         }else{
           console.log(u)
           console.log('kamel')
         }
       })
     } */

    console.log('kamelt saye')


};
