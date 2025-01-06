function skillsMember() {}
skillsMember.prototype = {
    constructor: skillsMember,
    getSkills: function() {
        return this.skills;
    },
    setSkills: function(skills) {
        this.skills = skills;
    },
    getSkill: function(skill) {
        return this.skills[skill];
    },
    setSkill: function(skill, value) {
        this.skills[skill] = value;
    }
};